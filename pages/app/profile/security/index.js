/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 */
import TextInput from "ui/TextInput";
import NavButton from "components/Buttons/NavButton";
import LandingButton from "components/Buttons/LandingButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import router from "next/router";
import Lock from "components/Icons/Lock";

/**
 * Esquema de validación de los
 * datos del formulario
 * contraseña y neuva contraseña.
 * English:
 * Schema of the form validation
 * password and new password.
 */
const schema = yup.object().shape({
  nueva_contraseña: yup.string().required("La contraseña es requerida"),
  confirmar_contraseña: yup
    .string()
    .oneOf([yup.ref("nueva_contraseña")], "Las contraseñas no coinciden")
    .required("La confirmación de la contraseña es requerida"),
});

/**
 * Función para cambiar la contraseña del usuario.
 * English:
 * Function to change the user's password.
 */
export default function Security() {
  /**
   * Yup resovler para validar los datos del formulario
   * y obtener los errores.
   * English:
   * Yup resolver to validate the form data and
   * get the errors.
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /**
   * Estado para guardar los datos
   * del usuario.
   * English:
   * State to save the user's data.
   */
  const [user, setUser] = useState(null);

  /**
   * Se obtiene el usuario de la sesión
   * y se establece los cambios de datos
   * que se realizan en el formulario.
   * English:
   * Get the user from the session
   * and set the changes of data
   * that are made in the form.
   */
  useEffect(() => {
    const userLocal = JSON.parse(window.localStorage.getItem("user"));
    setUser(userLocal);
  }, []);

  /**
   * Función para cambiar la contraseña del usuario.
   * al momento de enviar el formulario.
   * English:
   * Function to change the user's password.
   * when the form is submitted.
   */
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

  /**
   * Se establece el estilo del formulario las
   * vistas de la página para cada punto de
   * quiebre en los diferentes tipos
   * de dispositivos.
   * English:
   * Set the form style for the views of the
   * page for each breakpoint of different
   * devices.
   */
  const screenSize = "w-11/12 md:w-6/12 lg:w-3/6 xl:w-5/12 2xl:w-4/12";

  return (
    /**
     * Contenido de la sección de
     * seguridad en la vista de perfil del
     * usuario, donde se puede cambiar la
     * contrasñea. Se tine un fomulario para
     * cambiar la contraseña del usuario.
     * Se muestra un botón para regresar
     * a la vista de perfil. Se muestra un
     * botón para cambiar la contraseña.
     * English:
     * Content of the security section
     * in the profile view of the user,
     * where you can change the password.
     * There is a form to change the user's
     * password. A button to return to the
     * profile view. A button to change the
     * password.
     */
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
    /**
     * Contenido de la sección de
     * seguridad en la vista de perfil del
     * usuario, donde se puede cambiar la
     * contrasñea. Se tine un fomulario para
     * cambiar la contraseña del usuario.
     * Se muestra un botón para regresar
     * a la vista de perfil. Se muestra un
     * botón para cambiar la contraseña.
     * English:
     * Content of the security section
     * in the profile view of the user,
     * where you can change the password.
     * There is a form to change the user's
     * password. A button to return to the
     * profile view. A button to change the
     * password.
     */
  );
}
