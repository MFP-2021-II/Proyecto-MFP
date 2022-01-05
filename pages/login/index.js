/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 * Francais:
 * Importer des librairies ou des composants.
 */
import Logo from "components/Icons/Logo";
import Sample from "components/InfoBoxes/Sample";
import Button from "components/Buttons/Button";
import TextInput from "ui/TextInput";
import Link from "next/link";
import VisibilityOn from "components/Icons/VisibilityOn";
import VisibilityOff from "components/Icons/VisibilityOff";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "utils/react-simple-captcha";

import { loginSchema } from "schemas/login";

/**
 * Componente de la página de incio de sesión
 * English:
 * Login page component
 * Francais:
 * Composant de la page de connexion
 * @returns {JSX} Login
 */
export default function Login() {
  /**
   * Use router para redireccionar a
   * la página de la aplicación
   * English:
   * Use router to redirect to the
   * application page
   * Francais:
   * Utiliser le router pour rediriger
   * vers la page de l'application
   * @type {Router}
   */
  const router = useRouter();
  /**
   * Estado de la contraseña
   * English:
   * Password state
   * Francais:
   * Etat de la mot de passe
   * @type {boolean}
   * @default false
   * @description Estado de la contraseña
   */
  const [visible, setVisible] = useState(false);
  /**
   * Hooks de formulario de inicio de sesión
   * English:
   * Login form hooks
   * Francais:
   * Hooks de formulaire de connexion
   * @type {Object}
   * @property {Object} register - Función para registrar los datos del formulario
   * @property {Object} handleSubmit - Función para enviar los datos del formulario
   */

  /**
   * Estado de error
   * English:
   * Error state
   * Francais:
   * Etat d'erreur
   * @type {string}
   * @default null
   * @description Mensaje de error
   **/
  const [error, setError] = useState(null);

  /**
   * yup resolver para validar
   * los datos del formulario
   * y obtener los errores.
   * English:
   * yup resolver to validate
   * the form data and get the errors.
   * Francais:
   * yup resolver pour valider
   * les données du formulaire
   * et obtenir les erreurs.
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  /**
   * useEffect para enviar los datos del formulario
   * al servidor.
   * English:
   * useEffect to send the form data to the server.
   * Francais:
   * useEffect pour envoyer les données du formulaire
   * au serveur.
   * @param {Object} data - Datos del formulario
   * @returns {void}
   * @description Función para enviar los datos del formulario y redireccionar a la página de la aplicación
   */
  const onSubmit = (data) => {
    if (validateCaptcha(data.captcha)) {
      console.log(data);
      window
        .fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/usuarios/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            correo: data.correo,
            contraseña: data.contraseña,
          }),
        })
        .then((res) => res.json())
        .then((parsedData) => {
          console.log(parsedData);
          if (parsedData.error) {
            setError(parsedData.message);
          } else {
            window.localStorage.setItem("user", JSON.stringify(parsedData));
            router.push("/app");
          }
        })
        .catch((err) => console.error(err));
    } else {
      setError("Captcha incorrecto");
    }
  };
  /**
   * useEffect para proteger rutas
   * English:
   * useEffect to protect routes
   * Francais:
   * useEffect pour proteger les routes
   * @returns {void}
   * @description Función para evitar que el usuario entre por ruta "/app" sin estar registrados.
   */
  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      router.push("/app");
    }
  }, []);

  /**
   * useEffect para cargar el captcha
   * English:
   * useEffect to load the captcha
   * Francais:
   * useEffect pour charger le captcha
   */
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  console.log(error, "aea");

  return (
    /**
     * Formulario de inicio de
     * sesion con los campos de correo y contraseña
     * el botón de inicio de sesión y el botón de registro
     * la seccion del captcha y el botón de olvido de contraseña
     * English:
     * Login form with email and password fields
     * login button, register button, captcha section and
     * forgot password button
     * Francais:
     * Formulaire de connexion avec
     * les champs de courriel et mot de passe
     * le bouton de connexion et le bouton de
     * inscription la section du captcha et le
     * bouton de mot de passe oublié
     */
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center px-10 lg:px-20 xl:px-28 2xl:px-48 bg-white pb-5 xl:pb-6 w-10/12 sm:max-w-lg lg:w-8/12 rounded-xl lg:rounded-none xl:min-w-[38%] m-auto lg:m-0"
      >
        <div className="flex flex-row justify-center pr-4 mb-2 transition duration-500 ease-in-out cursor-pointer lg:mb-10 hover:scale-110">
          <Link href="/">
            <a>
              <Logo className="w-39 h-28 sm:w-56 sm:h-32" />
            </a>
          </Link>
        </div>
        <span className="mb-4 text-lg font-semibold sm:mb-8 lg:mb-10 md:text-2xl ">
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
          className="mb-2 text-sm font-semibold text-green-600 underline cursor-pointer md:text-base sm:mb-5 lg:mb-8"
        >
          ¿Olvidaste tu contraseña?
        </a>
        <div className="flex justify-center border rounded-lg">
          <LoadCanvasTemplate />
        </div>
        <TextInput
          label="Captcha"
          name="captcha"
          variant="primary"
          errors={errors.captcha}
          register={register}
        />
        {/* Captcha button */}
        <Button type="submit" variant="quinary">
          Iniciar sesión
        </Button>
        <div className="my-2 text-sm font-semibold md:text-base lg:my-8 sm:my-5">
          <span className="text-gray-500">¿Aun no tienes una cuenta?{` `}</span>
          <a
            href="/register"
            className="font-semibold text-green-600 underline cursor-pointer"
          >
            Regístrate
          </a>
        </div>
        {error && (
          <span className="px-4 py-2 text-sm font-semibold text-center text-white bg-red-600 md:text-base">
            {error}
          </span>
        )}
      </form>
      <Sample />
    </>
    /**
     * Formulario de inicio de
     * sesion con los campos de correo
     * y contraseña el botón de inicio de
     * sesión y el botón de registro la seccion
     * del captcha y el botón de olvido de contraseña
     * English:
     * Login form with email and password fields
     * login button, register button, captcha section
     * and forgot password button
     * Francais:
     * Formulaire de connexion avec
     * les champs de courriel et mot de passe
     * le bouton de connexion et le bouton de
     * inscription la section du captcha et le
     * bouton de mot de passe oublié
     *
     * Deutsch:
     * Login-Formular mit E-Mail- und Passwortfeldern
     * Login-Button, Registrierungs-Button, Captcha-Sektion
     * und Passwort-Vergessen-Button
     * Italien:
     * Form di accesso con campi di posta elettronica e password
     * pulsante di accesso e pulsante di registrazione la sezione
     * del captcha e il pulsante di dimenticare la password
     */
  );
}
