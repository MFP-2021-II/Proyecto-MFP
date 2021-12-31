import { screenSizes } from "utils/responsive";
import ProfileInput from "ui/ProfileInput";
import NavButton from "components/Buttons/NavButton";
import LandingButton from "components/Buttons/LandingButton";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Personal from "components/Icons/PersonalInfo";
import * as yup from "yup";
import Select from "ui/Select";

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  apellidos: yup.string().required("Los apellidos son requeridos"),
  sexo: yup.string().required("El sexo es requerido"),
  fecha_nacimiento: yup
    .string()
    .required("La fecha de nacimiento es requerida"),
  correo: yup.string().email().required("El correo es requerido"),
  DNI: yup
    .string()
    .max(8, "El DNI debe tener 8 caracteres")
    .required("El DNI es requerido"),
});

export default function PersonalInfo() {
  const [user, setUser] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const userLocal = JSON.parse(window.localStorage.getItem("user"));
    setUser(userLocal);
    setValue("nombre", userLocal.data.nombre);
    setValue("apellidos", userLocal.data.apellidos);
    if (userLocal.data.sexo !== null) {
      if (userLocal.data.sexo) {
        setValue("sexo", "Masculino");
      } else {
        setValue("sexo", "Femenino");
      }
    }
    if (userLocal.data.fecha_nacimiento) {
      setValue(
        "fecha_nacimiento",
        new Date(userLocal.data.fecha_nacimiento).toISOString().substring(0, 10)
      );
    }
    setValue("correo", userLocal.data.correo);
    setValue("DNI", userLocal.data.DNI);
    console.log(userLocal.data);
  }, []);

  const onSubmit = async (formData) => {
    console.log(formData);
    if (window.confirm("¿Estás seguro de que quieres actualizar tus datos?")) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/usuarios/${user.data.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              sexo: formData.sexo === "Masculino" ? true : false,
            }),
          }
        );
        const { data } = await res.json();
        const newUser = {
          ...user,
          data: {
            ...data.usuario,
          },
        };
        console.log(newUser);
        window.localStorage.setItem("user", JSON.stringify(newUser));
        setTimeout(() => {
          window.alert("Datos actualizados correctamente");
        }, 500);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto h-auto xl:h-almost-screen mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-0">
      <div className={screenSizes}>
        <div className="flex flex-row items-center pb-2 mb-5 border-b-2">
          <i>
            <Personal className="text-red-700 fill-current rounded-full" />
          </i>
          <span className="pl-2 text-xl font-bold text-left">
            Información personal
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <ProfileInput
            register={register}
            errors={errors.nombre}
            variant="primary"
            label="Nombre"
            placeholder="X"
            type="text"
            name="nombre"
          />
          <ProfileInput
            register={register}
            errors={errors.apellidos}
            variant="primary"
            label="Apellidos"
            placeholder="X"
            type="text"
            name="apellidos"
          />
          <Select
            variant="secondary"
            label="Sexo"
            name="sexo"
            erros={errors.sexo}
            options={[
              { value: "Masculino", label: "Masculino" },
              { value: "Femenino", label: "Femenino" },
            ]}
            {...register("sexo")}
          />
          <ProfileInput
            register={register}
            errrors={errors.fecha_nacimiento}
            variant="primary"
            label="Fecha de nacimiento"
            placeholder="X"
            type="date"
            name="fecha_nacimiento"
          />
          <ProfileInput
            register={register}
            errors={errors.correo}
            variant="primary"
            label="Correo electrónico"
            placeholder="X"
            type="text"
            name="correo"
          />
          <ProfileInput
            register={register}
            errors={errors.DNI}
            variant="primary"
            label="Documento de identidad"
            placeholder="DNI"
            type="text"
            name="DNI"
          />
          <div className="flex flex-row justify-center mt-5 space-x-6 lg:w-full">
            <NavButton type="submit" variant="quinary" className="w-30 lg:w-40">
              Guardar
            </NavButton>
            <LandingButton toPath="/app/profile" className="w-30 lg:w-40">
              Cancelar
            </LandingButton>
          </div>
        </form>
      </div>
    </main>
  );
}
