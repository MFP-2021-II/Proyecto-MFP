import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoderFav from "components/Icons/BorderFav";
import Fav from "components/Icons/Fav";
import Star from "components/Icons/Star";
import Map from "components/Icons/Map";
import Button from "components/Buttons/Button";
import User from "components/Icons/User";

export default function IDCard({ user }) {
  const router = useRouter();
  const { cardID } = router.query;
  const [isFavorite, setIsFavorite] = useState(false);
  const [anuncio, setAnuncio] = useState([]);

  useEffect(async () => {
    if (user && cardID) {
      try {
        const res = await fetch(
          `http://localhost:3001/api/favoritos/${cardID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (res.data) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [user, cardID]);

  const handleToggleFavorite = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/favoritos", {
        method: `${isFavorite ? "DELETE" : "POST"}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          id_anuncio: cardID,
        }),
      });
      const data = await res.json();
      console.log(data);
      setIsFavorite(!isFavorite);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (cardID) {
      window
        .fetch(`http://localhost:3001/api/anuncio/${cardID}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => res.json())
        .then(({ data }) => {
          console.log(data);
          setAnuncio(data.anuncios[0]);
        });
    }
  }, [cardID]);

  const screenSizes = "w-11/12 md:w-4/6 lg:w-5/6 xl:w-7/12";

  return (
    <main className="flex flex-col items-center justify-center h-almost-screen overflow-y-auto">
      <div className={`flex justify-between mb-3 ${screenSizes}`}>
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-3xl font-medium">
            {anuncio?.nombre}
          </h1>
          <div className="flex flex-row">
            <div className="flex flex-row items-center">
              <Star className="w-5 h-5 fill-current text-red-700" />
              <span className="pl-2">4.11</span>
            </div>
            <div className="flex flex-row pl-4 items-center">
              <Map className="w-5 h-5 fill-current text-red-700" />
              <span className="pl-2">{anuncio?.alojamiento?.direccion}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <span className="pr-2 font-semibold hidden md:flex">
            {!isFavorite ? "Agregar a favoritos" : "Eliminar de favoritos"}
          </span>
          {isFavorite ? (
            // si es favorito}
            <Fav
              className="fill-current text-red-700 hover:text-red-400 cursor-pointer"
              onClick={handleToggleFavorite}
            />
          ) : (
            // si no es favorito
            <BoderFav
              className="fill-current hover:text-red-700 cursor-pointer"
              onClick={handleToggleFavorite}
            />
          )}
        </div>
      </div>
      <div className={`border-2 mb-2 rounded-lg ${screenSizes}`}>
        <img
          // src={`data:image/jpeg;base64,${anuncio?.imagen[0]?.imagen}`}
          className="w-96 h-[12rem] sm:h-[15rem] rounded-lg"
          alt="imagen de referencia"
        />
      </div>
      <h2 className={`font-semibold text-lg ${screenSizes}`}>
        Tipo alojamiento "{anuncio?.alojamiento?.id_tipo_alojamiento}"
      </h2>
      <section className={`grid grid-cols-3 sm:grid-cols-4 ${screenSizes}`}>
        {/* Seccion nombre y descripcion */}
        <div className="col-span-3 mr-0 sm:mr-5 items-center">
          <div className="flex flex-row justify-between py-2 border-b-2">
            <span className="text-sm pt-1">
              1 huesped · 1 habitacion · 1 baño
            </span>
            <div className="flex flex-row">
              <User className="rounded-full w-7 h-7 border-2 border-red-700 bg-[#FEAC4C]" />
              <span className="ml-2 font-semibold align-middle">
                Anunciante
              </span>
            </div>
          </div>
          <p className="w-full pt-2 min-h-[6rem]">{anuncio?.descripcion}</p>
          <div className="flex flex-row w-full justify-center items-center  py-6">
            <Button
              variant="quinary"
              className="w-32 h-10 font-semibold"
              register={null}
            >
              Reservar
            </Button>
            <div className="flex flex-col ml-6 min-h-[2rem]">
              <span className="text-base font-semibold">
                S/ {anuncio?.precio} / noche
              </span>
              <div className="flex flex-row justify-center items-center">
                <Star className="w-4 h-4 fill-current text-red-700" />
                <span className="text-sm pr-1">4.11</span>
                <span className="text-sm text-gray-500">(20 reseñas)</span>
              </div>
            </div>
          </div>
        </div>
        {/* Seccion de facilidades */}
        <div className="flex justify-center col-span-3 sm:col-span-1">
          <div className="bg-gray-100 flex flex-row sm:flex-col justify-between rounded-lg p-4 w-full">
            <span className="font-semibold h-[15%]">El lugar ofrece:</span>
            <ul className="flex flex-col justify-around h-[85%] font-semibold items-center">
              <li>Facilidades</li>
              <li>Facilidades</li>
              <li>Facilidades</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
