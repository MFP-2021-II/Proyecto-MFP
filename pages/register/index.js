import Logo from "components/Icons/Logo";
import FormField from "components/Fields/FormField";
import NavButton from "components/Buttons/NavButton";
import Sample from "components/InfoBoxes/Sample";
import VisibilityOn from "components/Icons/VisibilityOn";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "components/Buttons/Button";
import TextInput from "ui/TextInput";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    window
      .fetch("http://localhost:3001/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((data) => {
        window.localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/app");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      router.push("/app");
    }
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center w-6/12 px-48 bg-white pb-14"
      >
        <div className="flex flex-row justify-center pr-4 mb-7">
          <Logo className="w-56 h-32" />
        </div>
        <span className="mb-10 text-2xl font-semibold">Crear una cuenta</span>
        <div className="flex flex-row flex-wrap justify-between mb-5">
          <TextInput label="Nombre" name="firstName" register={register} />
          <TextInput label="Apellido" name="lastName" register={register} />
        </div>
        <TextInput
          label="Correo electrónico"
          type="email"
          name="email"
          register={register}
        />
        <TextInput
          label="Contraseña"
          type="password"
          name="password"
          register={register}
        />
        <div className="my-8 font-semibold">
          <span className="text-gray-500">¿Ya tienes una cuenta?{` `}</span>
          <a
            href="/login"
            className="font-semibold text-pink-500 underline cursor-pointer"
          >
            Inicia sesión
          </a>
        </div>
        <Button type="submit">Registrarse</Button>
        {/* <NavButton variant="secondary" type="submit" toPath="/register">
          Registrarse
        </NavButton> */}
      </form>
      <Sample></Sample>
    </>
  );
}
