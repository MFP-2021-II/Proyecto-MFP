import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "ui/Select";
import TextInput from "ui/TextInput";
import BorderlessInput from "ui/BorderlessInput";
import { useRouter } from "next/router";

export default function CreateAnnouncement({ user }) {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);
  const [fileImage, setFileImage] = useState(null);
  const [tipoAlojamientos, setTipoAlojamientos] = useState([]);

  const handleFileChange = (e, field, setFile) => {
    const _file = e.target.files[0];
    setFile(_file);
    register(field).onChange(e);
  };

  const toBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

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
        <span className="text-xl font-bold text-left">Crear Anuncio</span>
        {/* icono */}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-8/12"
      >
        {/* <input
          className="w-full p-2 text-2xl font-bold border-0 focus:outline-none"
          type="text"
          placeholder="Agrega un titulo"
          name="nombre"
          {...register("nombre")}
        /> */}
        {/* <input
          className="w-full p-2 border-0 text-md focus:outline-none"
          type="text"
          placeholder="Agrega la localización"
          name="direccion"
          {...register("direccion")}
        /> */}
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
        <div className="flex flex-row">
          <section className="relative flex items-center justify-between">
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
            <div className="">
              {fileImage && (
                <span className="text-sm text-gray-300">
                  {`${fileImage.name} (${Math.round(
                    fileImage.size / 1024
                  )} KB)`}
                </span>
              )}
            </div>
          </section>
          <div className="flex flex-row border-l-2">
            <div className="flex flex-col pl-4">
              <Select
                label="Tipo de alojamiento"
                options={tipoAlojamientos.map((el) => ({
                  value: el?.id,
                  label: el?.descripcion,
                }))}
                disabled={false}
                {...register("id_tipo_alojamiento")}
              />
              <TextInput
                label="Nro de huéspedes"
                name="huespedes"
                register={register}
              />
              <TextInput
                label="Nro de habitaciones"
                name="habitaciones"
                register={register}
              />
            </div>
            <section className="p-4">
              <div>
                <div className="flex flex-col">
                  <span>Facilidades</span>
                  <span>
                    Piscina
                    <input
                      type="checkbox"
                      name="piscina"
                      {...register("piscina")}
                    />
                  </span>
                  <span>
                    Estacinamiento
                    <input
                      type="checkbox"
                      name="estacionamiento"
                      {...register("estacionamiento")}
                    />
                  </span>
                  <span>
                    Jaccuzi
                    <input
                      type="checkbox"
                      name="jaccuzi"
                      {...register("jaccuzi")}
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <TextInput
                  label="Nro de baños"
                  name="baños"
                  register={register}
                />
                <TextInput
                  label="Precio (S/.)"
                  name="precio"
                  register={register}
                />
              </div>
            </section>
          </div>
        </div>
        <label className="flex flex-col font-semibold">
          Descripcion
          <textarea
            className="w-full h-24 p-2 border-2 text-md focus:outline-none "
            {...register("descripcion")}
          ></textarea>
        </label>
        <button
          className="w-full p-2 text-2xl font-bold text-white bg-green-600 border-0 focus:outline-none"
          type="submit"
        >
          Crear
        </button>
      </form>
      {/* <span className="text-xs text-red-500">
        {errors?.file && errors?.file?.message}
      </span> */}
    </main>
  );
}
