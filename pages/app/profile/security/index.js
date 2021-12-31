import TextInput from "ui/TextInput";
import NavButton from "components/Buttons/NavButton";
import LandingButton from "components/Buttons/LandingButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import router from "next/router";
import Lock from "components/Icons/Lock";

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
    const userLocal = JSON.parse(window.localStorage.getItem("user"));
    setUser(userLocal);
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

  const screenSize = "w-11/12 md:w-6/12 lg:w-3/6 xl:w-5/12 2xl:w-4/12";

  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto h-auto mt-32 xl:mt-[10%]">
      <div className={screenSize}>
        <div className="flex flex-row items-center pb-2 mb-5 border-b-2">
          <i>
            <Lock className="text-red-700 fill-current rounded-full" />
          </i>
          <span className="pl-2 text-xl font-bold text-left">
            Cambiar contraseña
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-0 sm:px-24 md:px-16"
        >
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
