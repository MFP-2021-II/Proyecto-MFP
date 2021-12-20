import { screenSizes } from "utils/responsive";
import TextInput from "ui/TextInput";
import NavButton from "components/Buttons/NavButton";
import LandingButton from "components/Buttons/LandingButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import router from "next/router";

const schema = yup.object().shape({
  nueva_contraseña: yup.string().required("La contraseña es requerida"),
  confirmar_contraseña: yup
    .string()
    .oneOf([yup.ref("nueva_contraseña")], "Las contraseñas no coinciden")
    .required("La confirmación de la contraseña es requerida"),
});

export default function Security() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    setUser(user);
  }, []);

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const res = await fetch(
        `http://localhost:3001/api/usuarios/${user.data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contraseña: formData.nueva_contraseña,
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
      router.push("/app/profile/personal-info");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto h-almost-screen">
      <div className={screenSizes}>
        <h1 className="pb-6 text-xl font-bold text-left">
          Cambia tu contraseña
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-16">
          <TextInput
            label="Nueva contraseña"
            type="password"
            name="nueva_contraseña"
            register={register}
            errors={errors.nueva_contraseña}
          />
          <TextInput
            label="Repetir contraseña"
            type="password"
            name="confirmar_contraseña"
            register={register}
            errors={errors.confirmar_contraseña}
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
