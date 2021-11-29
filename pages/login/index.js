import Logo from "components/Icons/Logo";
import Sample from "components/InfoBoxes/Sample";
import Button from "components/Buttons/Button";
import TextInput from "ui/TextInput";
import Link from "next/link";
import VisibilityOn from "components/Icons/VisibilityOn";
import VisibilityOff from "components/Icons/VisibilityOff";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
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
      .then((data_parsed) => {
        if (data_parsed.message === "Invalid email or password!") {
          throw new Error(data_parsed.message);
        }
        console.log(data_parsed);
        window.localStorage.setItem("user", JSON.stringify(data_parsed));
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
        className="flex flex-col justify-center px-10 lg:px-20 xl:px-28 2xl:px-48 bg-white pb-5 xl:pb-14 mt-16 mb-16 sm:mt-32 sm:mb-32 w-10/12 sm:max-w-lg lg:w-8/12 rounded-xl lg:rounded-none lg:m-0 xl:min-w-[38%]"
      >
        <div className="flex flex-row justify-center pr-4 mb-2 lg:mb-10 transition duration-500 ease-in-out hover:scale-110 cursor-pointer">
          <Link href="/" passHref>
            <Logo className="w-39 h-28 sm:w-56 sm:h-32" />
          </Link>
        </div>
        <span className="mb-4 sm:mb-8 lg:mb-10 text-lg md:text-2xl font-semibold">
          Inicia sesión
        </span>
        <TextInput
          label="Correo electrónico"
          type="email"
          name="correo"
          variant="primary"
          className="mb-2 sm:mb-5"
          register={register}
        />
        <div className="flex flex-col justify-center relative">
          <TextInput
            label="Contraseña"
            type={!visible ? "password" : "text"}
            name="contraseña"
            variant="primary"
            register={register}
          />
          {!visible ? (
            <VisibilityOn
              className={`absolute right-[4%] top-10 fill-current text-gray-500 cursor-pointer`}
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <VisibilityOff
              className={`absolute right-[4%] top-10 fill-current text-gray-500 cursor-pointer`}
              onClick={() => setVisible(!visible)}
            />
          )}
        </div>
        <a
          href="/"
          className="text-sm md:text-base my-2 sm:my-5 lg:my-8 font-semibold text-green-600 underline cursor-pointer"
        >
          ¿Olvidaste tu contraseña?
        </a>
        <Button type="submit" variant="quinary">
          Iniciar sesión
        </Button>
        <div className="font-semibold text-sm md:text-base my-2 lg:my-8 sm:my-5">
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
