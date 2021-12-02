import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "ui/Select";
import TextInput from "ui/TextInput";
import BorderlessInput from "ui/BorderlessInput";
import LandingButton from "components/Buttons/LandingButton";
import NavButton from "components/Buttons/NavButton";
import { useRouter } from "next/router";

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
  const { register, handleSubmit } = useForm();
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
      <div className="w-11/12 pb-2 mb-5 border-b-2 md:w-4/6 lg:w-5/6 xl:w-8/12">
        {/* icono */}
        <span className="text-xl font-bold text-left">Crear Anuncio</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-8/12 h-[70%] px-[2%]"
      >
        <div className="flex flex-col space-y-1">
          <BorderlessInput
            label="Agrega un título"
            name="nombre"
            register={register}
          />
          <BorderlessInput
            label="Agrega una localización"
            name="direccion"
            variant="secondary"
            register={register}
          />
        </div>
        <section className="flex flex-row mt-5 h-[45%]">
          <div className="relative flex flex-col items-center justify-center w-[28%]">
            <div className="flex flex-col justify-end">
              <TextInput
                label="Subir imágenes"
                name="name"
                disabled={true}
                variant="inactive"
                register={register}
              />
              <div className=" w-17 h-10 relative px-4 bottom-[0.5%]  my-2 text-center bg-black rounded-lg text-gray-50 ">
                <input
                  className="absolute opacity-0 bg-red-900 w-17 px-4 text-black border cursor-pointer flex flex-wrap text-[0.6rem]"
                  type="file"
                  name="file"
                  {...register("file")}
                  onChange={(e) => handleFileChange(e, "file", setFileImage)}
                />
                <span className="flex items-center justify-center h-10 px-4 cursor-pointer w-17 text-md">
                  Subir
                </span>
              </div>
            </div>
            <div>
              {fileImage && (
                <span className="text-sm text-gray-400 bg-gray-200 p-2 rounded-lg">
                  {`${fileImage.name} (${Math.round(
                    fileImage.size / 1024
                  )} KB)`}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row border-l-2 w-[72%] justify-around">
            <div className="flex flex-col justify-between w-[28%]">
              <div>
                <Select
                  label="Tipo de alojamiento"
                  options={tipoAlojamientos.map((el) => ({
                    value: el?.id,
                    label: el?.descripcion,
                  }))}
                  disabled={false}
                  {...register("id_tipo_alojamiento")}
                />
              </div>
              <div className="flex flex-col pb-2">
                <TextInput
                  label="Nro de huéspedes"
                  name="huespedes"
                  className="mb-2"
                  register={register}
                />
                <TextInput
                  label="Nro de habitaciones"
                  name="habitaciones"
                  register={register}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between w-56">
              <div>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-500 pb-2">
                    Facilidades
                  </span>
                  <div className="flex flex-row flex-wrap justify-between">
                    <label id="piscina" className="pr-2">
                      Piscina
                      <input
                        type="checkbox"
                        name="piscina"
                        className="ml-2"
                        {...register("piscina")}
                      />
                    </label>
                    <label id="Estacionamiento" className="pr-2">
                      Estacinamiento
                      <input
                        type="checkbox"
                        name="Estacionamiento"
                        className="ml-2"
                        {...register("estacionamiento")}
                      />
                    </label>
                    <label id="Jaccuzi">
                      Jaccuzi
                      <input
                        type="checkbox"
                        name="Jaccuzi"
                        className="ml-2"
                        {...register("jaccuzi")}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pb-2">
                <TextInput
                  label="Nro de baños"
                  name="baños"
                  className="mb-2"
                  register={register}
                />
                <TextInput
                  label="Precio (S/.)"
                  name="precio"
                  register={register}
                />
              </div>
            </div>
          </div>
        </section>
        <label className="flex flex-col font-medium mb-2 text-gray-500">
          Descripcion
          <textarea
            className="w-full h-24 pt-2 border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none"
            {...register("descripcion")}
          ></textarea>
        </label>
        <div className="flex flex-row justify-center w-full space-x-3 mt-5">
          <NavButton type="submit" variant="quinary" className="w-40">
            Crear
          </NavButton>
          <LandingButton toPath="/app/announcement" className="w-40">
            Volver
          </LandingButton>
        </div>
      </form>
      {/* <span className="text-xs text-red-500">
        {errors?.file && errors?.file?.message}
      </span> */}
    </main>
  );
}
