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
  const [data, setData] = useState(null);

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
        .fetch(`http://localhost:3001/api/alojamiento/${cardID}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => res.json())
        .then(({ data }) => {
          console.log(data.alojamientos);
          setData(data.alojamientos);
        });
    }
  }, [cardID]);

  const screenSizes = "w-11/12 md:w-4/6 lg:w-5/6 xl:w-7/12";

  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto h-almost-screen">
      <div className={`flex justify-between mb-3 ${screenSizes}`}>
        <div className="flex flex-col">
          {data && (
            <>
              <h1 className="text-2xl font-medium lg:text-3xl">
                {data?.anuncio[0]?.nombre}
              </h1>
              <div className="flex flex-row">
                <div className="flex flex-row items-center">
                  <Star className="w-5 h-5 text-red-700 fill-current" />
                  <span className="pl-2">4.11</span>
                </div>
                <div className="flex flex-row items-center pl-4">
                  <Map className="w-5 h-5 text-red-700 fill-current" />
                  <span className="pl-2">{data?.direccion}</span>
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
        {data?.anuncio[0]?.imagen?.map((img) => (
          <img
            key={img.id}
            src={`data:image/jpeg;base64,${img.imagen}`}
            className="w-96 h-[12rem] sm:h-[15rem] rounded-lg"
            alt="imagen de referencia"
          />
        ))}
      </div>
      {data && (
        <h2 className={`font-semibold text-lg ${screenSizes}`}>
          {`Tipo alojamiento ${data?.tipo_alojamiento?.descripcion}`}
        </h2>
      )}
      <section className={`grid grid-cols-3 sm:grid-cols-4 ${screenSizes}`}>
        {/* Seccion nombre y descripcion */}
        <div className="items-center col-span-3 mr-0 sm:mr-5">
          <div className="flex flex-row justify-between py-2 border-b-2">
            <span className="pt-1 text-sm">
              {data &&
                data?.caracteristica.map((car) => {
                  if (
                    car.descripcion !== "Piscina" &&
                    car.descripcion !== "Estacionamiento" &&
                    car.descripcion !== "Jaccuzi"
                  ) {
                    return (
                      <span key={car.id} className="text-red-700">
                        {" "}
                        {`· ${car?.cantidad} ${car?.descripcion}`}
                      </span>
                    );
                  }
                })}
            </span>
            <div className="flex flex-row">
              <User className="rounded-full w-7 h-7 border-2 border-red-700 bg-[#FEAC4C]" />
              {data && (
                <span className="ml-2 font-semibold align-middle">
                  {data?.usuario?.nombre} {data?.usuario?.apellidos}
                </span>
              )}
            </div>
          </div>
          {data && (
            <p className="w-full pt-2 min-h-[6rem]">
              {data?.anuncio[0]?.descripcion}
            </p>
          )}
          <div className="flex flex-row items-center justify-center w-full py-6">
            <Button
              variant="quinary"
              className="w-32 h-10 font-semibold"
              register={null}
            >
              Reservar
            </Button>
            <div className="flex flex-col ml-6 min-h-[2rem]">
              {data && (
                <span className="text-base font-semibold">
                  S/ {data?.anuncio[0]?.precio} / noche
                </span>
              )}
              <div className="flex flex-row items-center justify-center">
                <Star className="w-4 h-4 text-red-700 fill-current" />
                <span className="pr-1 text-sm">4.11</span>
                <span className="text-sm text-gray-500">(20 reseñas)</span>
              </div>
            </div>
          </div>
        </div>
        {/* Seccion de facilidades */}
        <div className="flex justify-center col-span-3 sm:col-span-1">
          <div className="flex flex-row justify-between w-full p-4 bg-gray-100 rounded-lg sm:flex-col">
            <span className="font-semibold h-[15%]">El lugar ofrece:</span>
            <ul className="flex flex-col justify-around h-[85%] font-semibold items-center">
              {data &&
                data?.caracteristica.map((car) => {
                  if (
                    car.descripcion !== "Huespedes" &&
                    car.descripcion !== "Habitaciones" &&
                    car.descripcion !== "Baños"
                  ) {
                    return (
                      <li key={car.id} className="text-blue-800">
                        {car?.descripcion}
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
