import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoderFav from "components/Icons/BorderFav";
import Fav from "components/Icons/Fav";
import Star from "components/Icons/Star";
import Map from "components/Icons/Map";
import Button from "components/Buttons/Button";
import TextArea from "ui/TextArea";
import Comment from "components/InfoBoxes/Comment";
import UserVariant from "@/components/Icons/UserVariant";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { screenSizes } from "utils/responsive";

const schema = yup.object().shape({
  contenido: yup.string().required("Este campo es requerido"),
  calificacion: yup.number().required("Este campo es requerido"),
});

// aimport PaymentModal from "components/Modals/Payment";
// aimport Backdrop from "@/components/Modals/Backdrop";

export default function IDCard({ user, setReloadFavorites, reloadFavorites }) {
  const router = useRouter();
  const { cardID } = router.query;
  const [isFavorite, setIsFavorite] = useState(false);
  // const [calification, setCalification] = useState(0);
  const [dato, setDato] = useState(null);
  const [reloadPublications, setReloadPublications] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const [mostrarPago, setMostrarPago] = ,,useState(false);

  const calification = watch("calificacion");

  useEffect(async () => {
    if (user && cardID) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/favoritos/${cardID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const { data } = await res.json();
        console.log(data);
        if (data) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [user, cardID, reloadFavorites]);

  const handleToggleFavorite = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/favoritos`, {
        method: `${isFavorite ? "DELETE" : "POST"}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          id_anuncio: cardID,
        }),
      });
      const dataRes = await res.json();
      console.log(dataRes);
      setIsFavorite(!isFavorite);
      setReloadFavorites(!reloadFavorites);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    register("calificacion");
    if (cardID) {
      window
        .fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/alojamiento/${cardID}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => res.json())
        .then(({ data }) => {
          console.log(data.alojamientos);
          setDato(data.alojamientos);
        });
    }
  }, [cardID, reloadPublications]);

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOMY_URL}/comentarios`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            id_anuncio: cardID,
            contenido: data.contenido,
            calificacion: calification,
          }),
        }
      );
      const dataRes = await res.json();
      console.log(dataRes);
      setReloadPublications(!reloadPublications);
    } catch (error) {
      console.log(error);
    }
  };

  const rating = [1, 2, 3, 4, 5];

  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto h-almost-screen">
      {/* {mostrarPago &&aa modalPago}*/}

      <div className={`flex justify-between mb-3 ${screenSizes}`}>
        <div className="flex flex-col">
          {dato && (
            <>
              <h1 className="text-2xl font-medium lg:text-3xl">
                {dato?.anuncio[0]?.nombre}
              </h1>
              <div className="flex flex-row">
                <div className="flex flex-row items-center">
                  <Star className="w-5 h-5 text-red-700 fill-current" />
                  <span className="pl-2">4.11</span>
                </div>
                <div className="flex flex-row items-center pl-4">
                  <Map className="w-5 h-5 text-red-700 fill-current" />
                  <span className="pl-2">{dato?.direccion}</span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-row items-center">
          <span className="hidden pr-2 font-semibold md:flex">
            {!isFavorite ? "Agregar a favoritos" : "Eliminar de favoritos"}
          </span>
          {isFavorite ? (
            // si es favorito}
            <Fav
              className="text-red-700 cursor-pointer fill-current hover:text-red-400"
              onClick={handleToggleFavorite}
            />
          ) : (
            // si no es favorito
            <BoderFav
              className="cursor-pointer fill-current hover:text-red-700"
              onClick={handleToggleFavorite}
            />
          )}
        </div>
      </div>
      <div className={`border-2 mb-2 rounded-lg ${screenSizes}`}>
        {dato?.anuncio[0]?.imagen?.map((img) => (
          <img
            key={img.id}
            src={img.imagen}
            className="w-96 h-[12rem] sm:h-[15rem] rounded-lg"
            alt="imagen de referencia"
          />
        ))}
      </div>
      {dato && (
        <h2 className={`font-semibold text-lg ${screenSizes}`}>
          {`Tipo alojamiento ${dato?.tipo_alojamiento?.descripcion}`}
        </h2>
      )}
      <section className={`grid grid-cols-3 sm:grid-cols-4 ${screenSizes}`}>
        {/* Seccion nombre y descripcion */}
        <div className="items-center col-span-3 mr-0 sm:mr-5">
          <div className="flex flex-row justify-between py-2 border-b-2">
            <span className="pt-1 text-sm">
              {dato &&
                dato?.caracteristica.map((car) => {
                  if (
                    car.descripcion !== "Piscina" &&
                    car.descripcion !== "Estacionamiento" &&
                    car.descripcion !== "Jaccuzi"
                  ) {
                    return (
                      <span key={car.id} className="text-gray-600">
                        {`${car?.cantidad} ${car?.descripcion}`}
                        {` `}
                        {` · `}
                      </span>
                    );
                  }
                })}
            </span>
            <div className="flex flex-row">
              <UserVariant className="border-2 border-green-700 rounded-full w-7 h-7" />
              {dato && (
                <span className="flex flex-row ml-2 font-semibold">
                  {dato?.usuario?.nombre}
                  <span className="hidden ml-1 font-semibold lg:flex">
                    {dato?.usuario?.apellidos}
                  </span>
                </span>
              )}
            </div>
          </div>
          {dato && (
            <p className="w-full pt-2 min-h-[6rem]">
              {dato?.anuncio[0]?.descripcion}
            </p>
          )}
          <div className="flex flex-row items-center justify-center w-full py-6">
            <Button
              onClick={() =>
                router.push({
                  pathname: `/app/[cardID]/reservar`,
                  query: { cardID: cardID },
                })
              }
              variant="quinary"
              className="w-32 h-10 font-semibold"
              register={null}
            >
              Pagar
            </Button>
            <div className="flex flex-col ml-6 min-h-[2rem]">
              {dato && (
                <span className="text-base font-semibold">
                  S/ {dato?.anuncio[0]?.precio} / noche
                </span>
              )}
              <div className="flex flex-row items-center justify-center">
                <Star className="w-4 h-4 text-red-700 fill-current" />
                <span className="pr-1 text-sm">
                  {dato &&
                    (
                      dato?.anuncio[0]?.comentarios?.reduce(
                        (total, comentario) => total + comentario.calificacion,
                        0
                      ) / (dato?.anuncio[0]?.comentarios?.length || 1)
                    ).toFixed(1)}
                </span>
                <span className="text-sm text-gray-500">
                  ({dato && dato?.anuncio[0]?.comentarios?.length} reseñas)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Seccion de facilidades */}
        <div className="flex justify-center col-span-3 sm:col-span-1">
          <div className="flex flex-row justify-between w-full p-4 bg-gray-100 rounded-lg sm:flex-col">
            <span className="font-semibold h-[15%]">El lugar ofrece:</span>
            <ul className="flex flex-col justify-around h-[85%] font-semibold items-center">
              {dato &&
                dato?.caracteristica.map((car) => {
                  if (
                    car.descripcion !== "Huespedes" &&
                    car.descripcion !== "Habitaciones" &&
                    car.descripcion !== "Baños" &&
                    car?.cantidad !== 0
                  ) {
                    return (
                      <li key={car.id} className="text-blue-800">
                        {`· `} {car?.descripcion}
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
        </div>
      </section>
      {/* Area de comentarios */}
      <section className={`flex flex-col mt-5 ${screenSizes}`}>
        <div className="flex flex-row justify-between pb-2 font-semibold border-b-2">
          <h3>Comentarios y valoraciones</h3>
          <div className="flex flex-row items-center">
            <Star className="w-5 h-5 text-red-700 fill-current" />
            <span className="pl-2">
              {dato &&
                (
                  dato?.anuncio[0]?.comentarios?.reduce(
                    (total, comentario) => total + comentario.calificacion,
                    0
                  ) / (dato?.anuncio[0]?.comentarios?.length || 1)
                ).toFixed(1)}
            </span>
          </div>
        </div>
        {/* Form para enviar comentario y valoracion */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row justify-between mt-4"
        >
          <div className="w-[75%]">
            <TextArea
              label="Enviar comentario"
              name="contenido"
              placeholder="Escribe aquí tu comentario..."
              register={register}
              errors={errors.contenido}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-[25%]">
            <div className="flex flex-row pb-2 space-x-2">
              {rating.map((num, index) => (
                <Star
                  key={num}
                  className={`w-5 h-5 fill-current cursor-pointer ${
                    index + 1 <= calification ? "text-red-700" : "text-gray-500"
                  }`}
                  onClick={() => {
                    // setCalification(index + 1)a;
                    setValue("calificacion", index + 1);
                  }}
                />
              ))}
            </div>
            <div className="mb-2">
              <Button
                type="submit"
                variant="quaternary"
                className="h-10 font-semibold w-44"
              >
                Enviar
              </Button>
            </div>
          </div>
        </form>
        <div className="mt-3">
          {dato &&
            dato?.anuncio[0]?.comentarios.map((comentario) => (
              <Comment
                key={comentario.id}
                usuario={`${comentario?.usuario?.nombre} ${comentario?.usuario?.apellidos}`}
                fecha={new Date(comentario?.createdAt).toLocaleDateString()}
                comentario={comentario?.contenido}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
