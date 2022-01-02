import AdCard from "components/Card/AdCard";
import IconButton from "components/Buttons/IconButton";
import Search from "components/Icons/Search";
import Filter from "components/Icons/Filter";
import FilterOff from "components/Icons/FilterOff";
import TextInputBrowse from "ui/TextInputBrowse";
import DateBox from "ui/DateBox";
import Select from "ui/Select";
import InputLabel from "ui/InputLabel";
import BiStateButton from "ui/BiStateButton";
import House from "components/Icons/House";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import TextInput from "ui/TextInput";
import Button from "components/Buttons/Button";
import "rc-slider/assets/index.css";
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
  const [mostrarBuscar, setMostrarBuscar] = useState(false);
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

  const toggleBuscar = () => {
    setMostrarBuscar(!mostrarBuscar);
  };

  let filtroContainer;

  // Filter
  const [searchValue, setSearchValue] = useState("");
  let searchedCards = [];

  if (!searchValue.length >= 1) {
    searchedCards = [...anuncios];
  } else {
    searchedCards = anuncios.filter((anuncio) => {
      const anuncioTitle = anuncio.nombre.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return anuncioTitle.includes(searchText);
    });
  }

  const onsearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  if (mostrarFiltros) {
    filtroContainer = (
      <div className="w-11/12 mb-4 md:w-4/6 lg:w-5/6 xl:w-8/12">
        <span className="block mb-4 text-xl font-bold">Filtros</span>
        <div className="overflow-x-scroll w-full bg-[#f5f7fb] border-[#ecebeb] rounded-lg border 2xl:flex 2xl:justify-center">
          <div className="w-[64rem] grid items-center grid-cols-5 justify-items-center place-items-center 2xl:gap-[6%]">
            <div className="flex flex-col min-w-[160px]">
              <TextInput
                variant="primary"
                className="w-40 px-1 py-1 text-sm"
                label="F. entrada"
                type="date"
                register={() => null}
              />
              <TextInput
                variant="primary"
                className="w-40 px-1 py-1 text-sm"
                label="F. salida"
                type="date"
                register={() => null}
              />
            </div>
            {/* <DateBox labeltag="F. entrada" />
          <DateBox labeltag="F. salida" /> */}
            <div className="flex flex-col min-w-[160px]">
              <Select
                label="Huéspedes"
                variant="primary"
                className="w-40 px-1 py-1 text-sm mb-2 sm:mb-5"
                options={[
                  { label: "1 adulto", value: 1 },
                  { label: "2 adultos", value: 2 },
                  { label: "3 adultos", value: 3 },
                  { label: "4 adulto", value: 4 },
                  { label: "5 adultos", value: 5 },
                  { label: "6 adultos", value: 6 },
                ]}
              />
              <Select
                label="Cuartos"
                className="w-40 px-1 py-1 text-sm mb-2 sm:mb-5"
                variant="primary"
                options={[
                  { label: "1 cuarto", value: 1 },
                  { label: "2 cuartos", value: 2 },
                  { label: "3 cuartos", value: 3 },
                  { label: "4 cuarto", value: 4 },
                  { label: "5 cuartos", value: 5 },
                  { label: "6 cuartos", value: 6 },
                ]}
              />
            </div>
            <div className="min-w-[160px] w-full flex flex-col justify-center h-auto items-center">
              <div className="flex flex-col py-2 ">
                <div className="flex flex-col">
                  <TextInput
                    variant="primary"
                    className="w-40 px-1 py-1 text-sm"
                    label="Precio desde"
                    type="text"
                    register={() => null}
                  />
                </div>
                <div className="flex flex-col">
                  <TextInput
                    variant="primary"
                    className="w-40 px-1 py-1 text-sm"
                    label="Hasta"
                    type="text"
                    register={() => null}
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[160px] bg-[#F9FAFB] border-solid border border-gray-400 border-opacity-60 text-black rounded-md pl-3 pr-2 py-2">
              <div className="grid grid-cols-4 gap-1">
                <span className="col-span-3 truncate">Piscina</span>
                <BiStateButton />
                <span className="col-span-3 truncate">Estacionamiento</span>
                <BiStateButton />
                <span className="col-span-3 truncate">Jacuzzi</span>
                <BiStateButton />
              </div>
            </div>
            <div className="min-w-[160px] flex flex-col justify-center space-y-3">
              <Button
                variant="quinary"
                className="w-32 px-3 py-1 xl:px-5 xl:py-1"
              >
                Aplicar
              </Button>
              <Button
                variant="quaternary"
                className="w-32 px-3 py-1 xl:px-5 xl:py-1"
              >
                Restablecer
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    filtroContainer = "";
  }

  return (
    <main className="flex flex-col items-center justify-center h-auto mt-10">
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
              value={searchValue}
              onChange={onsearchValueChange}
              label="Buscar..."
              variant="primary"
              className="hidden md:block md:w-3/4 pl-9"
            />
            <Search className="hidden md:block absolute left-[28%] top-2 fill-current text-gray-500" />
          </div>
          <IconButton className="md:hidden" onClick={toggleBuscar}>
            <Search className="text-gray-500 fill-current" />
          </IconButton>
          <IconButton onClick={toggleFiltros}>
            {!mostrarFiltros ? (
              <Filter className="text-gray-500 fill-current" />
            ) : (
              <FilterOff className="text-gray-500 fill-current" />
            )}
          </IconButton>
        </div>
      </div>
      {filtroContainer}
      {mostrarBuscar && (
        <div className="w-11/12 mb-2 justify-center items-center">
          <div className="sm:hidden relative flex flex-row w-3/4 ">
            <TextInputBrowse
              label="Buscar..."
              variant="primary"
              className="w-3/4 pl-9"
            />
            <Search className="absolute left-[2px] top-2 fill-current text-gray-500" />
          </div>
        </div>
      )}

      <div className="h-[36rem] mb-6 overflow-y-scroll place-items-center md:grid-cols-2 w-11/12 md:w-4/6 lg:w-5/6 xl:w-8/12 lg:grid-cols-3 2xl:grid-cols-4 grid grid-cols-1 gap-10 p-10 items-center bg-[#F5F7FB] rounded-lg border-solid border">
        {searchedCards.map((item) => {
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
