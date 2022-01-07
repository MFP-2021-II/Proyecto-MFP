/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 * Francais:
 * Importer des librairies ou des composants.
 */
import { screenSizes } from "utils/responsive";
import ProfileInput from "ui/ProfileInput";
import NavButton from "components/Buttons/NavButton";
import LandingButton from "components/Buttons/LandingButton";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Personal from "components/Icons/PersonalInfo";
import * as yup from "yup";
import Select from "ui/Select";

/**
 * Esquema de validación de los
 * datos del formulario
 * se tiene el nombre, apellido
 * genero, fecha de nacimiento,
 * correo, dni.
 * English:
 * Schema of the form validation
 * has the name, last name,
 * gender, birthday,
 * email, dni.
 * Francais:
 * Schéma de validation du
 * Données de formulaire
 * vous avez le nom, prénom
 * sexe, date de naissance,
 * e-mail, pièce d'identité.
 */
const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  apellidos: yup.string().required("Los apellidos son requeridos"),
  sexo: yup.string().required("El sexo es requerido"),
  fecha_nacimiento: yup
    .string()
    .required("La fecha de nacimiento es requerida"),
  correo: yup.string().email().required("El correo es requerido"),
  DNI: yup
    .string()
    .max(8, "El DNI debe tener 8 caracteres")
    .required("El DNI es requerido"),
});

export default function PersonalInfo() {
  /**
   * Estado para guardar los datos
   * del usuario.
   * English:
   * State to save the user's data.
   * Francais:
   * Etat pour enregistrer les données
   */
  const [user, setUser] = useState(null);
  /**
   * Uso de yup resolver para
   * validar los datos del formulario
   * y obtener los errores.
   * English:
   * Use yup resolver to
   * validate the form data and
   * get the errors.
   * Francais:
   * Utiliser yup resolver pour
   * valider les données du formulaire
   * et obtenir les erreurs.
   */
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /**
   * Se obtiene el usuario de la sesión
   * y se establece los cambios de datos
   * que se realizan en el formulario.
   * English:
   * Get the user from the session
   * and set the changes of data
   * that are made in the form.
   * Francais:
   * Etre obtenu l'utilisateur de la session
   * et les changements de données
   * qui sont effectués dans le formulaire.
   */
  useEffect(() => {
    const userLocal = JSON.parse(window.localStorage.getItem("user"));
    setUser(userLocal);
    setValue("nombre", userLocal.data.nombre);
    setValue("apellidos", userLocal.data.apellidos);
    if (userLocal.data.sexo !== null) {
      if (userLocal.data.sexo) {
        setValue("sexo", "Masculino");
      } else {
        setValue("sexo", "Femenino");
      }
    }
    if (userLocal.data.fecha_nacimiento) {
      setValue(
        "fecha_nacimiento",
        new Date(userLocal.data.fecha_nacimiento).toISOString().substring(0, 10)
      );
    }
    setValue("correo", userLocal.data.correo);
    setValue("DNI", userLocal.data.DNI);
    console.log(userLocal.data);
  }, []);

  /**
   * Función para actualizar los datos
   * del usuario al presionar el botón
   * de actualizar.
   * English:
   * Function to update the user's data
   * when the update button is pressed.
   * Francais:
   * Fonction pour mettre à jour les données
   * de l'utilisateur lorsque le bouton
   * de mise à jour est pressé.
   */
  const onSubmit = async (formData) => {
    console.log(formData);
    if (window.confirm("¿Estás seguro de que quieres actualizar tus datos?")) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/usuarios/${user.data.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              sexo: formData.sexo === "Masculino" ? true : false,
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
        setTimeout(() => {
          window.alert("Datos actualizados correctamente");
        }, 500);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    /**
     * Contenido de la página, donde
     * se tiene los campos para
     * actualizar los datos del usuario, el nombre
     * apellidos, sexo, fecha de nacimiento,
     * correo y DNI.
     * Se tiene un botón para actualizar los datos
     * y un botón para volver a la página de inicio.
     * Se tiene un icono para mostrar los datos
     * del usuario.
     * English:
     * Content of the page, where
     * there are the fields to update
     * the user's data, the name,
     * last name, gender, birtday,
     * It has a icon to show the data
     * from the user.
     * Francais:
     * Contenu de la page, où
     * vous avez les champs pour
     * mettre à jour les données de l'utilisateur, le nom
     * nom, sexe, date de naissance,
     * courrier et pièce d'identité.
     * Il y a un bouton pour mettre à jour les données
     * et un bouton pour revenir à la page d'accueil.
     * Il y a une icône pour afficher les données
     * de l'utilisateur.
     * Português:
     * Conteúdo da página, onde
     * tem os campos para
     * atualizar os dados do usuário,
     * o nome, sobrenome, sexo,
     * data de nascimento, correio e
     * documento de identidade.
     * Tem um botão para atualizar os dados
     * e um botão para voltar para a página
     * de início.
     */
    <main className="flex flex-col items-center justify-center overflow-y-auto h-auto xl:h-almost-screen mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-0">
      <div className={screenSizes}>
        <div className="flex flex-row items-center pb-2 mb-5 border-b-2">
          <i>
            <Personal className="text-red-700 fill-current rounded-full" />
          </i>
          <span className="pl-2 text-xl font-bold text-left">
            Información personal
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <ProfileInput
            register={register}
            errors={errors.nombre}
            variant="primary"
            label="Nombre"
            placeholder="Nombre"
            type="text"
            name="nombre"
          />
          <ProfileInput
            register={register}
            errors={errors.apellidos}
            variant="primary"
            label="Apellidos"
            placeholder="Apellidos"
            type="text"
            name="apellidos"
          />
          <Select
            variant="secondary"
            label="Sexo"
            name="sexo"
            erros={errors.sexo}
            options={[
              { value: "Masculino", label: "Masculino" },
              { value: "Femenino", label: "Femenino" },
            ]}
            {...register("sexo")}
          />
          <ProfileInput
            register={register}
            errrors={errors.fecha_nacimiento}
            variant="primary"
            label="Fecha de nacimiento"
            type="date"
            name="fecha_nacimiento"
          />
          <ProfileInput
            register={register}
            errors={errors.correo}
            variant="primary"
            label="Correo electrónico"
            placeholder="Correo electrónico"
            type="text"
            name="correo"
          />
          <ProfileInput
            register={register}
            errors={errors.DNI}
            variant="primary"
            label="Documento de identidad"
            placeholder="DNI"
            type="text"
            name="DNI"
          />
          <div className="flex flex-row justify-center mt-5 space-x-6 lg:w-full">
            <NavButton type="submit" variant="quinary" className="w-30 lg:w-40">
              Guardar
            </NavButton>
            <LandingButton toPath="/app/profile" className="w-30 lg:w-40">
              Cancelar
            </LandingButton>
          </div>
        </form>
      </div>
    </main>
    /**
     * Contenido de la página, donde
     * se tiene los campos para
     * actualizar los datos del usuario,
     * el nombre apellidos, sexo,
     * fecha de nacimiento, correo y DNI.
     * Se tiene un botón para actualizar
     * los datos y un botón para volver a
     * la página de inicio.
     * Se tiene un icono para mostrar los datos
     * del usuario.
     * English:
     * Content of the page, where
     * there are the fields to update
     * the user's data, the name,
     * last name, gender, birtday,
     * It has a icon to show the data
     * from the user.
     * Francais:
     * Contenu de la page, où
     * vous avez les champs pour
     * mettre à jour les données de l'utilisateur, le nom
     * nom, sexe, date de naissance,
     * courrier et pièce d'identité.
     * Il y a un bouton pour mettre à jour les données
     * et un bouton pour revenir à la page d'accueil.
     * Il y a une icône pour afficher les données
     * de l'utilisateur.
     * Português:
     * Conteúdo da página, onde
     * tem os campos para
     * atualizar os dados do usuário,
     * o nome, sobrenome, sexo,
     * data de nascimento, correio e
     * documento de identidade.
     * Tem um botão para atualizar os dados
     * e um botão para voltar para a página
     * de início.
     */
  );
}
