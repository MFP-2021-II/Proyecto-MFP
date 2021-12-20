import { screenSizes } from "utils/responsive";
import ProfileInput from "ui/ProfileInput";
import NavButton from "components/Buttons/NavButton";
import LandingButton from "components/Buttons/LandingButton";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
    const user = JSON.parse(window.localStorage.getItem("user"));
    setUser(user);
    setValue("nombre", user.data.nombre);
    setValue("apellidos", user.data.apellidos);
    if (user.data.sexo !== null) {
      if (user.data.sexo) {
        setValue("sexo", "Masculino");
      } else {
        setValue("sexo", "Femenino");
      }
    }
    if (user.data.fecha_nacimiento) {
      setValue(
        "fecha_nacimiento",
        new Date(user.data.fecha_nacimiento).toISOString().substring(0, 10)
      );
    }
    setValue("correo", user.data.correo);
    setValue("DNI", user.data.DNI);
    console.log(user.data);
  }, []);

  const onSubmit = async (formData) => {
    console.log(formData);
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto h-almost-screen">
      <div className={screenSizes}>
        <h1 className="pb-4 text-xl font-bold text-left">
          Información personal
        </h1>
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
            variant="primary"
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
            placeholder="X"
            type="text"
            name="DNI"
          />
          <div className="flex flex-row justify-center mt-5 space-x-6 lg:w-full">
            <NavButton type="submit" variant="quinary" className="w-30 lg:w-40">
              Cambiar
            </NavButton>
            <LandingButton toPath="/app/profile" className="w-30 lg:w-40">
              Volver
            </LandingButton>
          </div>
        </form>
      </div>
    </main>
  );
}
