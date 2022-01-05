/**
 * Importar componentes o librerias
 * English:
 * Import libraries or components
 */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "ui/Select";
import TextInput from "ui/TextInput";
import BorderlessInput from "ui/BorderlessInput";
import LandingButton from "components/Buttons/LandingButton";
import NavButton from "components/Buttons/NavButton";
import { useRouter } from "next/router";
import Add from "components/Icons/Add";
import FormPhoto from "components/Fields/FormPhoto";
import CheckBox from "ui/CheckBox";
import TextArea from "ui/TextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/**
 * Esquema de validación de los
 * datos del formulario
 * para el nombre del alojamiento
 * dirección, huspedes, habitaciones,
 * precio, descripción, etc.
 * English:
 * Schema of validation of the
 * form data for the name of the
 * accommodation, address, guests,
 * rooms, price, description, etc.
 */
const schema = yup
  .object({
    nombre: yup.string().required("Titulo requerido"),
    direccion: yup.string().required("Direccion requerida"),
    //falta validacion de imagen
    huespedes: yup
      .number("number")
      .positive()
      .required("Requerido")
      .typeError("La cantidad deber ser un numero"),
    habitaciones: yup
      .number("number")
      .positive()
      .required("Requerido")
      .typeError("La cantidad deber ser un numero"),
    baños: yup
      .number("number")
      .positive()
      .required("Requerido")
      .typeError("Debe ser un numero"),
    precio: yup
      .number("number")
      .positive()
      .required("Requerido")
      .typeError("Debe ser decimal"),
    descripcion: yup.string().min(25).max(255).required("Campo requerido"),
    id_tipo_alojamiento: yup
      .string()
      .notOneOf([""], "Seleccione un tipo de alojamiento")
      .required(),
  })
  .required();
/**
 * Componente de la sección de creación de anuncios
 * de un usuario logueado
 * English:
 * Component of the announcement creation section
 * of a logged user
 *
 * user - Objeto de usuario logueado
 * English:
 * user - Logged user object
 * @param {object} user Usuario de la aplicación
 * @returns {JSX} Página de creación de anuncios
 */
export default function CreateAnnouncement({ user }) {
  /**
   * Use router para redireccionar a la página de anuncios
   * English:
   * Use router to redirect to the announcement page
   * @type {Router}
   */
  const router = useRouter();
  /**
   * Hook para manejar el formulario
   * English:
   * Hook for handling the form
   * @type {object}
   * @param {object} register Funciones para manejar el formulario
   * @param {object} handleSubmit Funcion para enviar el formulario
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  /**
   * useState para manejar el estado
   * de las imagenes de los anuncios
   * English:
   * useState for handling the state of
   * the images of the announcements
   * @type {array}
   */
  const [fileImage, setFileImage] = useState(null);
  /**
   * useState para manejar el estado los alojamientos
   * English:
   * useState for handling the state of the accommodations
   * @type {array}
   */
  const [tipoAlojamientos, setTipoAlojamientos] = useState([]);
  /**
   * Manejo de imagenes de los anuncios
   * @param {object} e
   * @param {*} field
   * @param {*} setFile
   */
  const handleFileChange = (e, field, setFile) => {
    const _file = e.target.files[0];
    setFile(_file);
    register(field).onChange(e);
  };

  /**
   * Función para manejar el formulario
   * donde se tienen los parametros del formulario
   * formData es el objeto con los datos del formulario
   * field es el campo del formulario
   * object es el objeto con los datos del formulario
   * English:
   * Function to handle the form
   * where the parameters of the form are
   * formData is the object with the form data
   * field is the field of the form
   * object is the object with the form data
   */
  const populateFormDataArray = (formData, field, object) => {
    Object.keys(object).forEach((key) => {
      formData.append(`${field}[${key}]`, object[key]);
    });
  };

  /**
   * Función asincrona para convertir la imagen a base64
   * English:
   * Asynchronous function to convert the image to base64
   * @param {object} data Dato de URL de la imagen
   */
  const onSubmit = async (data) => {
    const formData = {
      alojamiento: {
        direccion: data.direccion,
        id_tipo_alojamiento: +data.id_tipo_alojamiento,
      },
      anuncio: {
        descripcion: data.descripcion,
        precio: data.precio,
        nombre: data.nombre,
      },
      caracteristicas: [
        {
          descripcion: "Huespedes",
          cantidad: data.huespedes,
        },
        {
          descripcion: "Habitaciones",
          cantidad: data.habitaciones,
        },
        {
          descripcion: "Baños",
          cantidad: data.baños,
        },
        {
          descripcion: "Piscina",
          cantidad: +data.piscina,
        },
        {
          descripcion: "Estacionamiento",
          cantidad: +data.estacionamiento,
        },
        {
          descripcion: "Jaccuzi",
          cantidad: +data.jaccuzi,
        },
      ],
      imagen: data.file[0],
    };

    console.log(formData, "onSubmit");

    // transfrom to a nested FormData object
    const formDataObject = new FormData();

    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en alojamiento
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in accommodation
     */
    populateFormDataArray(formDataObject, "alojamiento", formData.alojamiento);
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en anuncio
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in announcement
     */
    populateFormDataArray(formDataObject, "anuncio", formData.anuncio);
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en caracteristicas de alojamiento
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in accommodation characteristics field
     */
    formDataObject.append(`caracteristicas[0][descripcion]`, "Huespedes");
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en cantidad de alojamiento
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in accommodation quantity field
     */
    formDataObject.append(
      `caracteristicas[0][cantidad]`,
      formData.caracteristicas[0].cantidad
    );
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en caracteristicas de habitaciones
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in room characteristics field
     */
    formDataObject.append(`caracteristicas[1][descripcion]`, "Habitaciones");
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en caracteristicas con sus cantidades
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in room characteristics field
     */
    formDataObject.append(
      `caracteristicas[1][cantidad]`,
      formData.caracteristicas[1].cantidad
    );
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en caracteristicas con su descripcion
     * en baños
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in bathroom characteristics field
     */
    formDataObject.append(`caracteristicas[2][descripcion]`, "Baños");
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en caracteristicas con su cantidad
     * en baños
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in bathroom characteristics field
     */
    formDataObject.append(
      `caracteristicas[2][cantidad]`,
      formData.caracteristicas[2].cantidad
    );
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en caracteristicas con su cantidad
     * en piscina
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in pool characteristics field
     */
    formDataObject.append(`caracteristicas[3][descripcion]`, "Piscina");
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en caracteristicas con su cantidad.
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in pool characteristics field
     */
    formDataObject.append(
      `caracteristicas[3][cantidad]`,
      formData.caracteristicas[3].cantidad
    );
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en caracteristicas con su cantidad
     * en estacionamiento
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in parking characteristics field
     */
    formDataObject.append(`caracteristicas[4][descripcion]`, "Estacionamiento");
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en caracteristicas con su cantidad
     * en estacionamiento
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in parking characteristics field
     */
    formDataObject.append(
      `caracteristicas[4][cantidad]`,
      formData.caracteristicas[4].cantidad
    );
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en caracteristicas con su cantidad
     * en jaccuzi
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in jaccuzi characteristics field
     */
    formDataObject.append(`caracteristicas[5][descripcion]`, "Jaccuzi");
    formDataObject.append(
      `caracteristicas[5][cantidad]`,
      formData.caracteristicas[5].cantidad
    );
    /**
     * Se llama a la función populateFormDataArray
     * para llenar el objeto formDataObject con los datos
     * del formulario en imagen
     * English:
     * Call the populateFormDataArray function
     * to fill the formDataObject with the form data
     * in image field
     */
    formDataObject.append("imagen", formData.imagen);

    // iterate formDataObject
    for (const [key, value] of formDataObject.entries()) {
      console.log(`${key} = ${value}`);
    }
    /**
     * Se usa un fetch para enviar los datos del alojamiento
     * al servidor.
     * English:
     * Use a fetch to send the accommodation data to the server
     */
    window
      .fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/alojamiento`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: formDataObject,
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.ok) {
          router.push("/app/announcement");
        }
      })
      .catch((err) => console.log(err));
  };
  /**
   * useEffect para obtener los alojamientos
   * del usuario
   * English:
   * useEffect to get the user's accommodations
   */
  useEffect(() => {
    if (user)
      window
        .fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/tipo_alojamiento`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setTipoAlojamientos(res.data.tipos_alojamiento);
        });
  }, [user]);

  return (
    /**
     * Contenido de la página para crear un alojamiento
     * el cual contiene campos para llenar los datos
     * del alojamiento. Nombre, descripción, tipo,
     * caracteristicas, imagen. También se encuentra
     * un botón para enviar los datos del alojamiento
     * al servidor y un botón para regresar a la página.
     * English:
     * Content of the page to create an accommodation
     * which contains fields to fill the accommodation data.
     * Name, description, type, characteristics, image.
     * Also there is a button to send the accommodation data
     * to the server and a button to go back to the page.
     */
    <main className="flex flex-col items-center justify-center h-almost-screen">
      <div className="flex flex-row items-center w-11/12 pb-2 mb-5 border-b-2 md:w-4/6 lg:w-5/6 xl:w-8/12">
        <i>
          <Add className="text-red-700 fill-current" />
        </i>
        <span className="pl-2 text-xl font-bold text-left">Crear Anuncio</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-8/12 h-[85%] sm:h-[80%] lg:h-[75%] px-[2%]"
      >
        <div className="flex flex-col justify-center">
          <BorderlessInput
            label="Agrega un título"
            name="nombre"
            register={register}
            errors={errors.nombre}
          />
          <BorderlessInput
            label="Agrega una localización"
            name="direccion"
            variant="secondary"
            className="mt-2"
            register={register}
            errors={errors.direccion}
          />
        </div>
        {/* Empieza grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 h-[70%] lg:h-[55%] overflow-y-auto">
          <div className="flex flex-col items-center justify-center w-full">
            <FormPhoto
              type="file"
              name="file"
              register={register}
              onChange={(e) => handleFileChange(e, "file", setFileImage)}
              fileImage={fileImage}
              errors={errors.file}
            />
          </div>
          <div className="flex flex-col px-[10%] justify-center">
            <TextInput
              label="Nro de huéspedes"
              name="huespedes"
              register={register}
              errors={errors.huespedes}
            />
            <TextInput
              label="Nro de habitaciones"
              name="habitaciones"
              register={register}
              errors={errors.habitaciones}
            />
            <div className="flex flex-row justify-between">
              <div className="flex flex-col max-w-[51%]">
                <TextInput
                  label="Nro de baños"
                  name="baños"
                  register={register}
                  errors={errors.baños}
                />
              </div>
              <div className="flex flex-col max-w-[44%]">
                <TextInput
                  label="Precio (S/.)"
                  name="precio"
                  register={register}
                  errors={errors.precio}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col col-auto sm:col-span-2 lg:col-span-1 px-[10%] justify-center">
            <CheckBox register={register} />
            <Select
              label="Tipo de alojamiento"
              variant="primary"
              options={tipoAlojamientos.map((el) => ({
                value: el?.id,
                label: el?.descripcion,
              }))}
              disabled={false}
              errors={errors.id_tipo_alojamiento}
              {...register("id_tipo_alojamiento")}
            />
            <div className="w-full h-24 mt-2">
              <TextArea
                name="descripcion"
                label="Descripción"
                placeholder="Agrega una descripción"
                register={register}
                errors={errors.descripcion}
              />
            </div>
          </div>
        </section>
        {/* Botones para enviar o regresar */}
        <div className="flex flex-row justify-center mt-5 space-x-6 lg:w-full">
          <NavButton type="submit" variant="quinary" className="w-30 lg:w-40">
            Crear
          </NavButton>
          <LandingButton toPath="/app/announcement" className="w-30 lg:w-40">
            Volver
          </LandingButton>
        </div>
      </form>
    </main>
    /**
     * Contenido de la página para crear
     * un alojamiento el cual contiene
     * campos para llenar los datos del
     * alojamiento. Nombre, descripción, tipo,
     * caracteristicas, imagen. También se
     * encuentra un botón para enviar los datos
     * del alojamiento al servidor y un botón
     * para regresar a la página.
     * English:
     * Content of the page to create an
     * accommodation which contains fields to
     * fill the accommodation data. Name,
     * description, type, characteristics,
     * image. Also there is a button to send
     * the accommodation data to the server
     * and a button to go back to the page.
     */
  );
}
