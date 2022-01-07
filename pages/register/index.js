/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 * Francais:
 * Importer des librairies ou des composants.
 */
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

/**
 * Esquema de validación de los
 * datos del formulario
 * nombre, apellidos, correo,
 * contraseña y confirmar contraseñam telefono.
 * English:
 * Schema of the form validation
 * name, last name, email,
 * password and confirm password.
 * Francais:
 * Schema de validation du formulaire
 * nom, prenom, email,
 * mot de passe et confirmer mot de passe.
 */
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
    // Se cambió [0-9] por \d
    .matches(/^\d{9}$/, "El teléfono debe tener 9 digitos"),
  confirmarContraseña: yup
    .string()
    .oneOf([yup.ref("contraseña"), null], "Las contraseñas no coinciden")
    .required("La confirmación de la contraseña es requerida"),
});

/**
 * Componente de la página de registro de usuarios
 * English:
 * User registration page component
 * Francais:
 * Composant de la page d'enregistrement
 * d'utilisateurs
 * @returns {JSX} Registro de usuarios
 */
export default function Register() {
  /**
   * Use router para redireccionar a la página de inicio de sesión
   * English:
   * Use router to redirect to the login page
   * Francais:
   * Utiliser le router pour rediriger vers
   * la page de connexion
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
   * Hooks de formulario de registro de usuarios
   * English:
   * User registration form hooks
   * Francais:
   * Hooks de formulaire d'enregistrement
   * d'utilisateurs
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
   * yup resolver
   * para validar los datos del formulario
   * y obtener los errores.
   * English:
   * yup resolver to validate
   * the form data and get the errors.
   * Francais:
   * yup resolver pour valider
   * les données du formulaire et
   * obtenir les erreurs.
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  /**
   * Función para enviar los datos del formulario
   * English:
   * Function to send the form data
   * Francais:
   * Fonction pour envoyer les données
   * du formulaire
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
   * Advert de la página de registro de usuarios
   * English:
   * User registration page advert
   * Francais:
   * Annonce de la page d'enregistrement
   * d'utilisateurs
   */
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
    /**
     * Componente de la página de registro de usuarios
     * donde se tienen los datos del formulario
     * nombre , apellidos, correo,
     * contraseña, confirmar contraseña,
     * boton de registro y boton de cancelar.
     * English:
     * User registration page component
     * where the form data is
     * name, last name, email,
     * password, confirm password,
     * register button and cancel button.
     * Francais:
     * Composant de la page d'enregistrement
     * d'utilisateurs où les données du
     * formulaire sont
     * nom, nom de famille, courriel,
     * mot de passe, confirmer le mot
     * de passe, bouton d'enregistrement et
     * bouton d'annulation.
     * Portuguese:
     * Componente da página de registro de usuarios
     * onde os dados do formulário são
     * nome, sobrenome, email,
     * senha, confirmar senha,
     * botão de registro e botão de cancelar.
     * Italian:
     * Componente della pagina di registrazione
     * degli utenti dove i dati del
     * modulo sono
     * nome, cognome, email,
     * password, conferma password,
     * pulsante di registrazione e
     * pulsante di annullamento.
     */
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
    /**
     * Componente de la página de
     * registro de usuarios donde se
     * tienen los datos del formulario nombre
     * apellidos, correo, contraseña,
     * confirmar contraseña,
     * boton de registro y boton de cancelar.
     * English:
     * User registration page
     * componentwhere the form
     * data is name, last name,
     * email, password, confirm password,
     * register button and cancel button.
     * Francais:
     * Composant de la page d'enregistrement
     * d'utilisateurs où les données du
     * formulaire sont
     * nom, nom de famille, courriel,
     * mot de passe, confirmer le mot
     * de passe, bouton d'enregistrement et
     * bouton d'annulation.
     * Deutsch:
     * Benutzerregistrierungsseite
     * Komponente, in der die Formulardaten
     * sind:
     * Name, Nachname, E-Mail, Passwort,
     * Passwort bestätigen, Registrierungs-
     * Taste und Abbrechen-Taste.
     * Italiano:
     * Componente della pagina di registrazione
     * degli utenti in cui i dati del
     * Portuguese:
     * Componente da página de registro de usuarios
     * onde os dados do formulário são
     * nome, sobrenome, email,
     * senha, confirmar senha,
     * botão de registro e botão de cancelar.
     * Italian:
     * Componente della pagina di registrazione
     * degli utenti dove i dati del
     * modulo sono
     * nome, cognome, email,
     * password, conferma password,
     * pulsante di registrazione e
     * pulsante di annullamento.
     */
  );
}
