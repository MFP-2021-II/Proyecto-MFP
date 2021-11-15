import Logo from "components/Icons/Logo";
import Sample from "components/InfoBoxes/Sample";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "components/Buttons/Button";
import TextInput from "ui/TextInput";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    window
      .fetch("http://localhost:3001/api/usuarios/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then(() => {
        router.push("/login");
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
          <div className="flex flex-col">
            <TextInput
              label="Nombre"
              name="nombre"
              variant="primary"
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <TextInput
              label="Apellidos"
              name="apellidos"
              variant="primary"
              register={register}
            />
          </div>
        </div>
        <TextInput
          label="Correo electrónico"
          type="email"
          name="correo"
          variant="primary"
          className="mb-5"
          register={register}
        />
        <TextInput
          label="Contraseña"
          type="password"
          name="contraseña"
          variant="primary"
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
        <Button type="submit" variant="quinary">
          Registrarse
        </Button>
        {/* <NavButton variant="secondary" type="submit" toPath="/register">
          Registrarse
        </NavButton> */}
      </form>
      <Sample></Sample>
    </>
  );
}
