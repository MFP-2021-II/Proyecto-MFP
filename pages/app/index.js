/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 * Francais:
 * Importer des librairies ou des composants.
 */
import AdCard from "components/Card/AdCard";
import IconButton from "components/Buttons/IconButton";
import Search from "components/Icons/Search";
import Filter from "components/Icons/Filter";
import FilterOff from "components/Icons/FilterOff";
import TextInputBrowse from "ui/TextInputBrowse";
import Select from "ui/Select";
import BiStateButton from "ui/BiStateButton";
import House from "components/Icons/House";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import TextInput from "ui/TextInput";
import Button from "components/Buttons/Button";
import "rc-slider/assets/index.css";
/**
 * Componente de la sección de anuncios
 * English:
 * Ad section component
 *
 * user - Usuario de la aplicación
 * English:
 * user - User of the application
 * @param {object} user Usuario de la aplicación
 * @returns {JSX} Página de la aplicación
 */
export default function App({ user }) {
  /**
   * useState para establecer nuevos anuncios
   * English:
   * useState to set new announcements
   * Francais:
   * Utiliser useState pour definir des nouveaux annonces
   * @type {Array}
   * @param {Array} anuncios Anuncios
   */
  const [anuncios, setAnuncios] = useState([]);
  /**
   * Estado para mostrar o no el filtro
   * de la vista de alojamientos.
   * English:
   * State to show or not the filter
   * of the view of accommodations.
   * Francais:
   * Etat pour montrer ou non le filtre
   * de la vue des logements.
   */
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  /**
   * UseState para mostrar la busqueda por texto
   * en la vista de alojamientos.
   * English:
   * UseState to show the search by text
   * in the view of accommodations.
   * Francais:
   * Utiliser useState pour montrer la recherche par texte
   * dans la vue des logements.
   */
  const [mostrarBuscar, setMostrarBuscar] = useState(false);
  /**
   * Uso de router para redireccionar
   * a la página de creación de anuncios
   * English:
   * Use router to redirect to the
   * announcement creation page
   * Francais:
   * Utiliser le router pour rediriger
   * vers la page de création d'annonces
   */
  const router = useRouter();

  /**
   * useEffect para obtener los anuncios del API
   * English:
   * Use effect to get the announcements from the API
   * Francais:
   * Utiliser useEffect pour obtenir les annonces de l'API
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

  /**
   * Constante para extrar
   * la ruta actual del usuario
   * como string
   * English:
   * Constant to extract
   * the current user's route
   * as string
   * Francais:
   * Constante pour extraire
   * la route actuelle de l'utilisateur
   * en tant que chaîne de caractères
   */
  const CardID = router.query;
  console.log(CardID);

  /**
   * Función para mostrar o no
   * el filtro de la vista de alojamientos
   * English:
   * Function to show or not
   * the filter of the view of accommodations
   * Francais:
   * Fonction pour montrer ou non
   * le filtre de la vue des logements
   */
  const toggleFiltros = () => {
    setMostrarFiltros(!filtroContainer);
  };

  /**
   * Función para mostrar o no
   * el buscador de la vista de alojamientos
   * English:
   * Function to show or not
   * the searcher of the view of accommodations
   * Francais:
   * Fonction pour montrer ou non
   * le rechercheur de la vue des logements
   */
  const toggleBuscar = () => {
    setMostrarBuscar(!mostrarBuscar);
  };

  let filtroContainer;

  /**
   * Estado para mostrar o no
   * el filtro de la vista de alojamientos
   * English:
   * State to show or not
   * the filter of the view of accommodations
   * Francais:
   * Etat pour montrer ou non
   * le filtre de la vue des logements
   */
  const [searchValue, setSearchValue] = useState("");
  let searchedCards = [];

  /**
   * Lógica para biuscar en tiempo real los anuncios
   * en la vista de alojamientos.
   * English:
   * Logic for bi-searching the announcements
   * in the view of accommodations.
   * Francais:
   * Logique pour bi-rechercher les annonces
   * dans la vue des logements.
   */
  if (!searchValue.length >= 1) {
    searchedCards = [...anuncios];
  } else {
    searchedCards = anuncios.filter((anuncio) => {
      const anuncioTitle = anuncio.nombre.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return anuncioTitle.includes(searchText);
    });
  }
  /**
   * Evento de cambio de texto en el buscador
   * de la vista de alojamientos.
   * English:
   * Event of change of text in the searcher
   * of the view of accommodations.
   * Francais:
   * Evenement de changement de
   * texte dans le rechercheur
   * de la vue des logements.
   */
  const onsearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  /**
   * Mostrar filtros de la vista de alojamientos
   * cuando el estado de mostrarFiltros es true.
   * En los filtros se tiene la fecha de entraada
   * y la fecha de salida.
   * Un select para la cantidad de huespedes, habitaciones
   * campos para ingresar el rango de precios
   * y 3 switch para indicar la presencia de
   * facilidades en el alojamiento.
   * English:
   * Show filters of the view of accommodations
   * when the state of showFiltros is true.
   * In the filters there is the date of arrival
   * and the date of departure.
   * A select for the number of guests, rooms
   * fields for entering the price range
   * and 3 switches for indicating the presence
   * of facilities in the accommodation.
   * Francais:
   * Afficher les filtres de la vue des logements
   * lorsque l'état de montrerFiltres est vrai.
   * Dans les filtres, il y a la date d'arrivée
   * et la date de départ.
   * Un select pour le nombre d'invités, de chambres
   * des champs pour entrer le prix de la plage
   * et 3 interrupteurs pour indiquer la présence
   * des facilités dans le logement.
   * Português:
   * Mostrar os filtros da vista de alojamentos
   * quando o estado de mostrarFiltros é verdadeiro.
   * Nos filtros há a data de entrada
   * e a data de saída.
   * Um select para o número de convidados, de quartos
   * campos para inserir o intervalo de preços
   * e 3 interruptores para indicar a presença
   * de facilidades no alojamento.
   */
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
  /**
   * Mostrar filtros de la vista de
   * alojamientos cuando el estado de
   * mostrarFiltros es true. En los filtros
   * se tiene la fecha de entraada
   * y la fecha de salida. Un select para
   * la cantidad de huespedes, habitaciones campos
   * para ingresar el rango de precios
   * y 3 switch para indicar la presencia de
   * facilidades en el alojamiento.
   * English:
   * Show filters of the view of accommodations
   * when the state of showFiltros is true. In
   * the filters there is the date of arrival
   * and the date of departure. A select for
   * the number of guests, rooms fields for
   * entering the price range and 3 switches
   * for indicating the presence
   * of facilities in the accommodation.
   * Francais:
   * Afficher les filtres de la vue des logements
   * lorsque l'état de montrerFiltres est vrai.
   * Dans les filtres, il y a la date d'arrivée
   * et la date de départ.
   * Un select pour le nombre d'invités, de chambres
   * des champs pour entrer le prix de la plage
   * et 3 interrupteurs pour indiquer la présence
   * des facilités dans le logement.
   * Português:
   * Mostrar os filtros da vista de alojamentos
   * quando o estado de mostrarFiltros é verdadeiro.
   * Nos filtros há a data de entrada
   * e a data de saída.
   * Um select para o número de convidados, de quartos
   * campos para inserir o intervalo de preços
   * e 3 interruptores para indicar a presença
   * de facilidades no alojamento.
   */

  return (
    /**
     * contenido de la pagina donde se muestran los alojamientos
     * se muestran los alojamientos en una lista de tarjetas
     * con una imagen y una descripcion de cada uno.
     * Se puede filtrar por la cantidad de huespedes, habitaciones
     * la fecha de entrada y la fecha de salida, y por el precio.
     * Se puede filtrar por la presencia de facilidades en el alojamiento.
     * Se puede filtrar por la ubicacion del alojamiento.
     * Se puede filtrar por la categoria del alojamiento.
     * English:
     * Content of the page where the accommodations are displayed
     * are displayed in a list of cards with an image and a description
     * of each one.
     * You can filter by the number of guests, rooms
     * the date of arrival and the date of departure, and by the price.
     * You can filter by the presence of facilities in the accommodation.
     * Francais:
     * Contenu de la page où les logements sont affichés
     * sont affichés dans une liste de cartes avec une image et une description
     * de chaque un.
     * Vous pouvez filtrer par le nombre de convives, de chambres
     * la date d'arrivée et la date de départ, et par le prix.
     * Vous pouvez filtrer par la présence de facilités dans le logement.
     * Português:
     * Conteúdo da página onde os alojamentos são exibidos
     * são exibidos em uma lista de cartões com uma imagem e uma descrição
     * de cada um.
     */
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
    /**
     * contenido de la pagina donde se muestran los
     * alojamientos se muestran los alojamientos en una
     * lista de tarjetas con una imagen y una descripcion
     * de cada uno. Se puede filtrar por la cantidad de
     * huespedes, habitaciones la fecha de entrada y la
     * fecha de salida, y por el precio. Se puede filtrar
     * por la presencia de facilidades en el alojamiento.
     * Se puede filtrar por la ubicacion del alojamiento.
     * Se puede filtrar por la categoria del alojamiento.
     * English:
     * Content of the page where the accommodations are
     * displayed are displayed in a list of cards with
     * an image and a description of each one.
     * You can filter by the number of guests, rooms
     * the date of arrival and the date of departure, and
     * by the price. You can filter by the presence of
     * facilities in the accommodation.
     * Francais:
     * Contenu de la page où les logements sont affichés
     * sont affichés dans une liste de cartes avec une
     * image et une description de chaque un.
     * Vous pouvez filtrer par le nombre de convives, de
     * chambres la date d'arrivée et la date de départ,
     * et par le prix. Vous pouvez filtrer par la présence
     * de facilités dans le logement.
     * Português:
     * Conteúdo da página onde os alojamentos são exibidos
     * são exibidos em uma lista de cartões com uma imagem
     * e uma descrição de cada um.
     * Você pode filtrar por o número de convidados, de
     * quartos a data de entrada e de saída, e por o preço.
     * Você pode filtrar por a presença de facilitades no
     * alojamento.
     */
  );
}
