import AdCard from "components/Card/AdCard";
import IconButton from "components/Buttons/IconButton";
import Search from "components/Icons/Search";
import Filter from "components/Icons/Filter";
import TextInputBrowse from "ui/TextInputBrowse";
import DateBox from "ui/DateBox";
import Select from "ui/Select";
import InputLabel from "ui/InputLabel";
import BiStateButton from "ui/BiStateButton";
import House from "components/Icons/House";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
/**
 * @param {object} user Usuario de la aplicación
 * @returns {JSX} Página de la aplicación
 */
export default function App({ user }) {
  /**
   * useState para establecer nuevos anuncios
   * @type {Array}
   * @param {Array} anuncios Anuncios
   */
  const [anuncios, setAnuncios] = useState([]);
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const router = useRouter();

  /**
   * useEffect para obtener los anuncios del API
   */
  useEffect(() => {
    if (user) {
      window
        .fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/anuncio`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setAnuncios(res.data.anuncios);
        });
    }
  }, [user]);

  const CardID = router.query;
  console.log(CardID);

  const toggleFiltros = () => {
    setMostrarFiltros(!filtroContainer);
  };

  let filtroContainer;

  if (mostrarFiltros) {
    filtroContainer = (
      <div className="w-11/12 mb-4 md:w-4/6 lg:w-5/6 xl:w-8/12">
        <span className="block mb-4 text-xl font-bold">Filtros</span>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 justify-items-center place-items-center gap-y-4">
          <DateBox labeltag="F. entrada" />
          <DateBox labeltag="F. salida" />
          <div>
            <InputLabel labeltag="Huéspedes" />
            <Select
              className="ml-2 rounded-md"
              options={[
                { label: "1 adulto", value: 1 },
                { label: "2 adultos", value: 2 },
                { label: "3 adultos", value: 3 },
              ]}
            />
          </div>
          <div>
            <InputLabel labeltag="Cuartos" />
            <Select
              className="ml-2 rounded-md"
              options={[
                { label: "1 cuarto", value: 1 },
                { label: "2 cuartos", value: 2 },
                { label: "3 cuartos", value: 3 },
              ]}
            />
          </div>
          <div>slider</div>
          <div className="bg-[#f5f7fb] border-[#d8d8d8] text-black rounded-md border-2 pl-3 pr-2 py-2">
            <div className="grid grid-cols-4 gap-1">
              <span className="col-span-3 truncate">Piscina</span>
              <BiStateButton />
              <span className="col-span-3 truncate">Estacionamiento</span>
              <BiStateButton />
              <span className="col-span-3 truncate">Jacuzzi</span>
              <BiStateButton />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    filtroContainer = "";
  }

  return (
    <main className="flex flex-col items-center justify-center h-almost-screen">
      <div className="flex justify-between w-11/12 mb-5 md:w-4/6 lg:w-5/6 xl:w-8/12">
        <div className="flex flex-row items-center">
          <i>
            <House className="text-red-700 fill-current" />
          </i>
          <span className="pl-2 text-xl font-bold text-left">Alojamientos</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="relative flex flex-row justify-end">
            <TextInputBrowse
              label="Buscar..."
              variant="primary"
              className="hidden md:block md:w-3/4 pl-9"
            />
            <Search className="hidden md:block absolute left-[28%] top-2 fill-current text-gray-500" />
          </div>
          <IconButton className="md:hidden">
            <Search className="text-gray-500 fill-current" />
          </IconButton>
          <IconButton onClick={toggleFiltros}>
            <Filter className="text-gray-500 fill-current" />
          </IconButton>
        </div>
      </div>

      {filtroContainer}

      <div className="overflow-y-scroll place-items-center md:grid-cols-2 w-11/12 md:w-4/6 lg:w-5/6 xl:w-8/12 lg:grid-cols-3 2xl:grid-cols-4 h-3/4 grid grid-cols-1 gap-10 p-10 items-center bg-[#F5F7FB] rounded-lg border-solid border">
        {anuncios.map((item) => {
          console.log(item.id);
          return (
            <Link href={`app/${item.id}`} key={item.id}>
              <a>
                <AdCard
                  image={item.imagen[0].imagen}
                  name={item.nombre}
                  location={item.alojamiento.direccion}
                  price={item.precio}
                  rating={
                    (
                      item.comentarios.reduce((a, b) => a + b.calificacion, 0) /
                      (item.comentarios.length || 1)
                    ).toFixed(1) || 0
                  }
                />
              </a>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
