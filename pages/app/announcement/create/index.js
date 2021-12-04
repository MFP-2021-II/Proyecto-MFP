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

const FILE_SIZE = 60000;
const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/jpg"];

const schema = yup
  .object({
    nombre: yup.string().required("Titulo requerido"),
    direccion: yup.string().required("Direccion requerida"),
    //yup validate an image file minor than 60KB and of type jpeg, jpg, png
    file: yup
      .mixed()
      .required("A file is required")
      .test(
        "fileSize",
        "File Size is too large",
        (value) => value.size <= FILE_SIZE
      )
      .test("fileType", "Unsupported File Format", (value) =>
        SUPPORTED_FORMATS.includes(value.type)
      ),
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
    descripcion: yup.string().min(25).required("Campo requerido"),
  })
  .required();
/**
 * @param {object} user Usuario de la aplicación
 * @returns {JSX} Página de creación de anuncios
 */
export default function CreateAnnouncement({ user }) {
  /**
   * Use router para redireccionar a la página de anuncios
   * @type {Router}
   */
  const router = useRouter();
  /**
   * Hook para manejar el formulario
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
   * useState para manejar el estado de las imagenes de los anuncios
   * @type {array}
   */
  const [fileImage, setFileImage] = useState(null);
  /**
   * useState para manejar el estado los alojamientos
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
   * Función asincrona para renderizar la imagen seleccionada como URL
   * @param {object} file Imagen seleccionada
   */
  const toBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  /**
   * Función asincrona para convertir la imagen a base64
   * @param {object} data Dato de URL de la imagen
   */
  const onSubmit = async (data) => {
    const fileBase64 = await toBase64(data.file[0]);
    const newFileBase64 = fileBase64.split("data:image/jpeg;base64,")[1];
    console.log(newFileBase64);

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
      imagen: newFileBase64,
    };

    console.log(formData);

    window
      .fetch("http://localhost:3001/api/alojamiento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formData),
      })
      .then((res) => res.json())
      .then((res) => {
        router.push("/app/announcement");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  /**
   * useEffect para obtener los alojamientos
   */
  useEffect(() => {
    if (user)
      window
        .fetch("http://localhost:3001/api/tipo_alojamiento", {
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
    <main className="flex flex-col items-center justify-center h-almost-screen">
      <div className="w-11/12 flex flex-row items-center pb-2 mb-5 border-b-2 md:w-4/6 lg:w-5/6 xl:w-8/12">
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
              options={tipoAlojamientos.map((el) => ({
                value: el?.id,
                label: el?.descripcion,
              }))}
              disabled={false}
              {...register("id_tipo_alojamiento")}
            />
            <div className="mt-2 w-full h-24">
              <TextArea
                name="descripcion"
                register={register}
                errors={errors.descripcion}
              />
            </div>
          </div>
        </section>
        <div className="flex flex-row justify-center lg:w-full space-x-6 mt-5">
          <LandingButton toPath="/app/announcement" className="w-30 lg:w-40">
            Volver
          </LandingButton>
          <NavButton type="submit" variant="quinary" className="w-30 lg:w-40">
            Crear
          </NavButton>
        </div>
      </form>
    </main>
  );
}
