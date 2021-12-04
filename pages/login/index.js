import Logo from "components/Icons/Logo";
import Sample from "components/InfoBoxes/Sample";
import Button from "components/Buttons/Button";
import TextInput from "ui/TextInput";
import Link from "next/link";
import VisibilityOn from "components/Icons/VisibilityOn";
import VisibilityOff from "components/Icons/VisibilityOff";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const schema = yup
  .object({
    correo: yup.string().email().required(),
    contraseña: yup.string().min(8).required(),
  })
  .required();
/**
 * Componente de la página de incio de sesión
 * @returns {JSX} Login
 */
export default function Login() {
  /**
   * Use router para redireccionar a la página de la aplicación
   * @type {Router}
   */
  const router = useRouter();
  /**
   * Estado de la contraseña
   * @type {boolean}
   * @default false
   * @description Estado de la contraseña
   */
  const [visible, setVisible] = useState(false);
  /**
   * Hooks de formulario de inicio de sesión
   * @type {Object}
   * @property {Object} register - Función para registrar los datos del formulario
   * @property {Object} handleSubmit - Función para enviar los datos del formulario
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  /**
   * useEffect para enviar los datos del formulario
   * @param {Object} data - Datos del formulario
   * @returns {void}
   * @description Función para enviar los datos del formulario y redireccionar a la página de la aplicación
   */
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
      .then((parsedData) => {
        if (parsedData.message === "Invalid email or password!") {
          throw new Error(parsedData.message);
        }
        console.log(parsedData);
        window.localStorage.setItem("user", JSON.stringify(parsedData));
        router.push("/app");
      })
      .catch((err) => console.error(err));
  };
  /**
   * useEffect para proteger rutas
   * @returns {void}
   * @description Función para evitar que el usuario entre por ruta "/app" sin estar registrados.
   */
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
        <span className="mb-4 font-semibold sm:mb-8 lg:mb-10 text-lg md:text-2xl ">
          Inicia sesión
        </span>
        <TextInput
          label="Correo electrónico"
          type="text"
          name="correo"
          variant="primary"
          errors={errors.correo}
          register={register}
        />
        <div className="relative flex flex-col justify-center">
          <TextInput
            label="Contraseña"
            type={!visible ? "password" : "text"}
            name="contraseña"
            variant="primary"
            errors={errors.contraseña}
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
          className="text-sm md:text-base mb-2 sm:mb-5 lg:mb-8 font-semibold text-green-600 underline cursor-pointer"
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
      <Sample />
    </>
  );
}
