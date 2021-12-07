import AdCard from "components/Card/AdCard";
import Ballot from "components/Icons/Ballot";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * @param {object} user Usuario de la aplicación
 * @returns {JSX} Página de anuncios del usuario
 */
export default function Announcement({ user }) {
  /**
   * Use router para redireccionar a la página de creación de anuncios
   * @type {Router}
   */
  const router = useRouter();
  /**
   * Use state para manejar el estado de los anuncios
   * @type {Array}
   * @default []
   */
  const [anuncios, setAnuncios] = useState([]);
  const [reload, setReload] = useState(false);

  /**
   * Use effect para obtener los anuncios del usuario
   * @param {object} user Usuario de la aplicación
   * @returns {void}
   */
  useEffect(() => {
    if (user) {
      window
        .fetch("http://localhost:3001/api/anuncio", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setAnuncios(res.data.anuncios);
        })
        .catch((err) => console.log(err));
    }
  }, [user, reload]);

  return (
    <main className="flex flex-col items-center justify-center h-almost-screen ">
      <div className="flex justify-between w-11/12 mb-5 md:w-4/6 lg:w-5/6 xl:w-8/12">
        <div className="flex flex-row items-center">
          <i>
            <Ballot className="text-red-700 fill-current" />
          </i>
          <span className="pl-2 text-xl font-bold text-left">Mis anuncios</span>
        </div>
        <div>
          <button
            onClick={() => {
              router.push("/app/announcement/create");
            }}
            className="px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700"
          >
            Crear anuncio
          </button>
        </div>
      </div>
      <div className="overflow-y-scroll place-items-center md:grid-cols-2 w-11/12 md:w-4/6 lg:w-5/6 xl:w-8/12 lg:grid-cols-3 2xl:grid-cols-4 h-3/4 grid grid-cols-1 gap-10 p-10 items-center bg-[#F5F7FB] rounded-lg border-solid border">
        {anuncios
          .filter((anuncio) => {
            console.log(anuncio.alojamiento.id_usuario);
            return anuncio.alojamiento.id_usuario === user.data.id;
          })
          .map((anuncio) => (
            <AdCard
              user={user}
              key={anuncio.id}
              edit={true}
              id={anuncio.id}
              image={anuncio.imagen[0].imagen}
              name={anuncio.nombre}
              location={anuncio.alojamiento.direccion}
              price={anuncio.precio}
              rating="4.1"
              setReload={setReload}
              reload={reload}
            />
          ))}
      </div>
    </main>
  );
}
