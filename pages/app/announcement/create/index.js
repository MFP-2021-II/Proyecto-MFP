import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "ui/Select";
import TextInput from "ui/TextInput";

export default function CreateAnnouncement({ user }) {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);
  const [fileImage, setFileImage] = useState(null);
  const [tipoAlojamientos, setTipoAlojamientos] = useState([]);

  const handleFileChange = (e, field, setFile) => {
    const _file = e.target.files[0];
    setFile(_file);
    register(field).onChange(e);
  };

  const onSubmit = (data) => {
    const dataAlojamiento = {
      direccion: data.direccion,
      id_tipo_alojamiento: data.id_tipo_alojamiento,
    };

    const dataCaracteristicas = [
      {
        descripcion: "Baños",
        cantidad: data["baños"],
        id_alojamiento: data.id_alojamiento,
      },
      {
        descripcion: "Habitaciones",
        cantidad: data.habitaciones,
        id_alojamiento: data.id_alojamiento,
      },
      {
        descripcion: "Huespedes",
        cantidad: data.huespedes,
        id_alojamiento: data.id_alojamiento,
      },
    ];

    const dataAnuncios = {
      descripcion: data.descripcion,
      precio: data.precio,
      nombre: data.nombre,
      id_alojamiento: data.id_alojamiento,
    };

    handleCreateAlojamiento(dataAlojamiento)
      .then((res) => {
        const id_alojamiento = res.data.id_alojamiento;
        handleCreateCaracteristicas(dataCaracteristicas, id_alojamiento)
          .then((res) => {
            handleCreateAnuncio(dataAnuncios, id_alojamiento).catch((err) => {
              console.log(err);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const dataImagenes = {
  //   imagen: data.imagen,
  //   id_anuncio: data.id_anuncio,
  // }

  const handleCreateAlojamiento = (data) => {
    return fetch("http://localhost:3000/api/alojamiento", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const handleCreateCaracetiristica = (data) => {
    return fetch("http://localhost:3000/api/caracteristicas", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const handleCreateAnuncio = (data) => {
    return fetch("http://localhost:3000/api/anuncio", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const handleCreateImagen = (data) => {
    return fetch("http://localhost:3000/api/imagenes_anuncio", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
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
    <main className="pt-10 mx-20">
      <h1 className="mb-4 text-2xl font-bold text-center">Crear Anuncio</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full p-2 text-2xl font-bold border-0 focus:outline-none"
          type="text"
          placeholder="Agrega un titulo"
          name="nombre"
          {...register("nombre")}
        />
        <input
          className="w-full p-2 border-0 text-md focus:outline-none"
          type="text"
          placeholder="Agrega la localización"
          name="direccion"
          {...register("direccion")}
        />
        <label className="flex flex-col font-semibold">
          Foto de portada:
          <div className="relative">
            <input
              className="absolute top-0 right-0 w-64 px-4 py-3 my-2 text-black border border-gray-400 rounded-full opacity-0 cursor-pointer"
              type="file"
              name="file"
              {...register("file")}
              onChange={(e) => handleFileChange(e, "file", setFileImage)}
            />
          </div>
          <span className="w-64 px-4 py-4 my-2 text-center bg-black border border-green-500 rounded-full text-gray-50">
            Subir imagen
          </span>
          {fileImage && (
            <span className="text-sm text-gray-300">
              {`${fileImage.name} (${Math.round(fileImage.size / 1024)} KB)`}
            </span>
          )}
        </label>
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
        <TextInput label="Nro de baños" name="baños" register={register} />
        <TextInput label="Precio (S/.)" name="precio" register={register} />
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
