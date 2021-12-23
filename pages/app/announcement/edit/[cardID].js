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
import { diccionarioCaracteristicas } from "utils/constants";

const schema = yup.object({
  nombre: yup.string(),
  direccion: yup.string(),
  huespedes: yup
    .number("number")
    .positive()
    .typeError("La cantidad deber ser un numero"),
  habitaciones: yup
    .number("number")
    .positive()
    .typeError("La cantidad deber ser un numero"),
  baños: yup.number("number").positive().typeError("Debe ser un numero"),
  precio: yup.number("number").positive().typeError("Debe ser decimal"),
  descripcion: yup.string().min(25).max(255),
});
/**
 * @returns {JSX} Página de edición de anuncios
 */
export default function Edit({ user }) {
  /**
   * Use router para redireccionar a la página de anuncios
   * @type {Router}
   */
  const router = useRouter();
  const { cardID } = router.query;
  /**
   * Hook para manejar el formulario
   * @type {object}
   * @param {object} register Funciones para manejar el formulario
   * @param {object} handleSubmit Funcion para enviar el formulario
   */
  //extract dirtyFields
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  /**
   * useState para manejar el estado de las imagenes de los anuncios
   * @type {array}
   */
  const [fileImage, setFileImage] = useState(null);
  const [features, setFeatures] = useState(null);
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
  const populateFormDataArray = (formData, field, object) => {
    Object.keys(object).forEach((key) => {
      formData.append(`${field}[${key}]`, object[key]);
    });
  };

  useEffect(() => {
    if (user)
      window
        .fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/tipo_alojamiento`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setTipoAlojamientos(res.data.tipos_alojamiento);
        });
  }, [user]);

  /**
   * useEffect para obtener los datos del anuncio
   * @param {object} cardID ID del anuncio
   * @param {object} user Token del usuario
   */
  useEffect(async () => {
    if (user && cardID) {
      const res = await window.fetch(
        `${process.env.NEXT_PUBLIC_HOMY_URL}/alojamiento/${cardID}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const { data } = await res.json();
      const alojamientos = data.alojamientos;
      setFeatures(alojamientos.caracteristica);
      setFileImage(alojamientos.anuncio[0].imagen[0].imagen);
      setValue("nombre", alojamientos.anuncio[0].nombre);
      setValue("direccion", alojamientos.direccion);
      setFileImage(alojamientos.anuncio[0].imagen[0].imagen);
      setValue("descripcion", alojamientos.anuncio[0].descripcion);
      setValue("precio", alojamientos.anuncio[0].precio);
      setValue("huespedes", alojamientos.caracteristica[0].cantidad);

      diccionarioCaracteristicas.forEach((caracteristica) => {
        const currentCaracteristica = alojamientos.caracteristica.find(
          (car) => caracteristica === car.descripcion
        );

        if (currentCaracteristica) {
          setValue(
            caracteristica.toLowerCase(),
            currentCaracteristica.cantidad
          );
        }
      });

      setValue("id_tipo_alojamiento", alojamientos.tipo_alojamiento.id);
    }
  }, [user, cardID]);
  /**
   * Función asincrona para convertir la imagen a base64
   * @param {object} data Dato de URL de la imagen
   */
  const onSubmit = async (data) => {
    const formData = {
      alojamiento: {
        direccion: data?.direccion,
        id_tipo_alojamiento: +data?.id_tipo_alojamiento,
      },
      anuncio: {
        descripcion: data?.descripcion,
        precio: data?.precio,
        nombre: data?.nombre,
        id_anuncio: cardID,
      },
      caracteristicas: [
        {
          descripcion: "Huespedes",
          cantidad: data?.huespedes,
        },
        {
          descripcion: "Habitaciones",
          cantidad: data?.habitaciones,
        },
        {
          descripcion: "Baños",
          cantidad: data?.baños,
        },
        {
          descripcion: "Piscina",
          cantidad: +data?.piscina,
        },
        {
          descripcion: "Estacionamiento",
          cantidad: +data?.estacionamiento,
        },
        {
          descripcion: "Jaccuzi",
          cantidad: +data?.jaccuzi,
        },
      ],
      imagen: data?.file?.[0] || fileImage,
    };
    const formDataObject = new FormData();

    populateFormDataArray(formDataObject, "alojamiento", formData.alojamiento);
    populateFormDataArray(formDataObject, "anuncio", formData.anuncio);
    formData.caracteristicas.forEach((caracteristica, index) => {
      formDataObject.append(
        `caracteristicas[${index}][cantidad]`,
        caracteristica?.cantidad
      );
      formDataObject.append(
        `caracteristicas[${index}][descripcion]`,
        caracteristica?.descripcion
      );
      formDataObject.append(
        `caracteristicas[${index}][id_caracteristica]`,
        features.find((feature) => {
          return feature.descripcion === caracteristica?.descripcion;
        })?.id
      );
    });
    formDataObject.append("imagen", formData.imagen);

    window
      .fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/alojamiento/${cardID}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: formDataObject,
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

  return (
    <main className="flex flex-col items-center justify-center h-almost-screen">
      <div className="flex flex-row items-center w-11/12 pb-2 mb-5 border-b-2 md:w-4/6 lg:w-5/6 xl:w-8/12">
        <i>
          <Add className="text-red-700 fill-current" />
        </i>
        <span className="pl-2 text-xl font-bold text-left">Editar Anuncio</span>
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
            <div className="w-full h-24 mt-2">
              <TextArea
                name="descripcion"
                register={register}
                errors={errors.descripcion}
                placeholder="Agrega una descripción"
                label="Descripción"
              />
            </div>
          </div>
        </section>
        <div className="flex flex-row justify-center mt-5 space-x-6 lg:w-full">
          <NavButton type="submit" variant="quinary" className="w-30 lg:w-40">
            Guardar
          </NavButton>
          <LandingButton toPath="/app/announcement" className="w-30 lg:w-40">
            Volver
          </LandingButton>
        </div>
      </form>
    </main>
  );
}
