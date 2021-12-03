import Logo from "components/Icons/Logo";
import Sample from "components/InfoBoxes/Sample";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "components/Buttons/Button";
import TextInput from "ui/TextInput";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import VisibilityOn from "components/Icons/VisibilityOn";
import VisibilityOff from "components/Icons/VisibilityOff";

const schema = yup
  .object({
    nombre: yup.string().required("Nombre requerido"),
    apellido: yup.string().required("Apellido requerido"),
    correo: yup.string().email().required("El correo es requerido"),
    contraseña: yup.string().min(8).required("La contraseña es requerida"),
  })
  .required();
/**
 * Componente de la página de registro de usuarios
 * @returns {JSX} Registro de usuarios
 */
export default function Register() {
  /**
   * Use router para redireccionar a la página de inicio de sesión
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
   * Hooks de formulario de registro de usuarios
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
   * Función para enviar los datos del formulario
   * @param {Object} data - Datos del formulario
   * @returns {void}
   * @description Función para enviar los datos del formulario y redireccionar a la página de inicio de sesión
   */
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
        <span className="mb-4 sm:mb-8 lg:mb-10 text-lg md:text-2xl font-semibold">
          Crear una cuenta
        </span>
        <div className="flex flex-row flex-wrap justify-between">
          <div className="flex flex-col max-w-[45%]">
            <TextInput
              label="Nombre"
              name="nombre"
              variant="primary"
              register={register}
              errors={errors.nombre}
            />
          </div>
          <div className="flex flex-col max-w-[45%]">
            <TextInput
              label="Apellidos"
              name="apellidos"
              variant="primary"
              register={register}
              errors={errors.apellido}
            />
          </div>
        </div>
        <TextInput
          label="Correo electrónico"
          type="email"
          name="correo"
          variant="primary"
          register={register}
          errors={errors.correo}
        />
        <div className="flex flex-col justify-center relative">
          <TextInput
            label="Contraseña"
            type={!visible ? "password" : "text"}
            name="contraseña"
            variant="primary"
            register={register}
            errors={errors.contraseña}
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
        <div className="text-sm md:text-base mb-2 sm:mb-5 lg:mb-8 font-semibold">
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
      </form>
      <Sample></Sample>
    </>
  );
}
