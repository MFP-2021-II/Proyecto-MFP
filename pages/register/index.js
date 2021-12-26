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

const schema = yup.object({
  nombre: yup.string().required("Nombre requerido"),
  apellidos: yup.string().required("Apellido requerido"),
  correo: yup.string().email().required("El correo es requerido"),
  contraseña: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es requerida"),
  telefono: yup
    .string()
    .matches(/^[0-9]{9}$/, "El teléfono debe tener 9 digitos"),
  confirmarContraseña: yup
    .string()
    .oneOf([yup.ref("contraseña"), null], "Las contraseñas no coinciden")
    .required("La confirmación de la contraseña es requerida"),
});

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

  /**
   * Estado de error
   * @type {string}
   * @default null
   * @description Mensaje de error
   **/

  const [error, setError] = useState(null);

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
    console.log(data);
    window
      .fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/usuarios/registro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: data.nombre,
          apellidos: data.apellidos,
          correo: data.correo,
          contraseña: data.contraseña,
          telefono: data.telefono,
        }),
      })
      .then((res) => res.json())
      .then((parsedData) => {
        if (parsedData.error) {
          setError(parsedData.message || parsedData.error);
        } else {
          router.push("/login");
        }
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

  const handleCancel = () => {
    // advert that the user will be lost if they cancel
    if (
      window.confirm(
        "¿Estás seguro de que quieres cancelar? Se perderán todos los datos."
      )
    ) {
      router.push("/login");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center px-10 lg:px-20 xl:px-28 2xl:px-40 bg-white pb-5 xl:pb-6 w-10/12 sm:max-w-lg lg:w-8/12 rounded-xl lg:rounded-none xl:min-w-[38%] m-auto lg:m-0"
      >
        <div className="flex flex-row justify-center pr-4 mb-2 transition duration-500 ease-in-out cursor-pointer lg:mb-10 hover:scale-110">
          <Link href="/" passHref>
            <a>
              <Logo className="w-39 h-28 sm:w-56 sm:h-32" />
            </a>
          </Link>
        </div>
        <span className="mb-2 text-lg font-semibold sm:mb-4 lg:mb-6 md:text-2xl">
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
              errors={errors.apellidos}
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
        <TextInput
          label="Número de teléfono"
          name="telefono"
          variant="primary"
          register={register}
          errors={errors.telefono}
        />
        <div className="relative flex flex-col justify-center">
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
          <TextInput
            label="Repetir contraseña"
            type={!visible ? "password" : "text"}
            name="confirmarContraseña"
            variant="primary"
            register={register}
            errors={errors.confirmarContraseña}
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
        <div className="mb-2 text-sm font-semibold md:text-base sm:mb-5 lg:mb-8">
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
        {/* Button cancelar */}
        <Button
          type="button"
          variant="cancel"
          className="mt-4"
          onClick={handleCancel}
        >
          Cancelar
        </Button>
        {error && (
          <span className="px-4 py-2 text-sm font-semibold text-center text-white bg-red-600 md:text-base">
            {error}
          </span>
        )}
      </form>
      <Sample></Sample>
    </>
  );
}
