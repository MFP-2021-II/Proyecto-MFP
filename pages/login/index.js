import Logo from "components/Icons/Logo";
import FormField from "components/Fields/FormField";
import NavButton from "components/Buttons/NavButton";
import LandingButton from "components/Buttons/LandingButton";
import Sample from "components/InfoBoxes/Sample";
import Button from "components/Buttons/Button";
import TextInput from "ui/TextInput";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window
      .fetch("http://localhost:3001/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Invalid email or password!") {
          throw new Error(data.message);
        }
        console.log(data);
        window.localStorage.setItem("user", JSON.stringify(data));
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
        className="flex flex-col justify-center w-6/12 px-48 bg-white pb-14 absolute lg:relative"
      >
        <div className="flex flex-row justify-center pr-4 mb-7">
          <Logo className="w-56 h-32" />
        </div>
        <span className="mb-10 text-2xl font-semibold">Inicia sesión</span>
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
        <a
          href="/"
          className="my-8 font-semibold text-green-600 underline cursor-pointer"
        >
          ¿Olvidaste tu contraseña?
        </a>
        <Button type="submit" variant="quinary">
          Iniciar sesión
        </Button>

        <div className="my-8 font-semibold">
          <span className="text-gray-500">¿Aun no tienes una cuenta?{` `}</span>
          <a
            href="/register"
            className="font-semibold text-green-600 underline cursor-pointer"
          >
            Regístrate
          </a>
        </div>
      </form>
      <Sample></Sample>
    </>
  );
}
