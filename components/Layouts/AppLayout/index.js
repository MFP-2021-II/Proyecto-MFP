/**
 * Importar los compoenentes que
 * se van a utilizar y las librerias.
 * English:
 * Import the components that will
 * be used and the libraries.
 */
import Link from "next/link";
import Button from "components/Buttons/Button";
import User from "components/Icons/User";
import ArrowDown from "components/Icons/ArrowDown";
import Isotype from "components/Icons/Isotype";
import Dropdown from "components/Dropdowns/Dropdown";
import LinkedDropdownListItem from "ui/LinkedDropdownListItem";
import React, { useEffect, useState } from "react";
import Modal from "components/Modals/Modal";
import { useRouter } from "next/router";
import ModalItem from "ui/ModalItem";
/**
 * Componente que renderiza el
 * layout de la aplicación.
 * English:
 * Component that renders the
 * application layout.
 *
 * pageProps - Props de la página
 * Component - Componente que se renderiza
 * English:
 * pageProps - Page props
 * Component - Component that is rendered
 * @param {pageProps} pageProps Propiedades de la página
 * @param {Component} Componente Componente que se renderiza
 * @returns {JSX} AppLayout
 */
export default function AppLayout({ Component, pageProps }) {
  /**
   * useState para el estado del usuario
   * English:
   * useState for the user state
   * @type {Array}
   */
  const [user, setUser] = useState(null);

  /**
   * useState para los favoritos del usuario
   * English:
   * useState for the user favorites
   * @type {Array}
   */
  const [favorites, setFavorites] = useState([]);

  /**
   * useState para el estado del
   * boton para cambiar de vista
   * English:
   * useState for the button to change
   * view state
   * @type {Array}
   */

  const [click, setClick] = useState(false);
  /**
   * router para redireccionar a la pagina de login
   * English:
   * router to redirect to the login page
   * @type {Object}
   */
  const router = useRouter();
  /**
   * Deestructuración del router
   * para obtener la url actual
   * English:
   * Destructuring of the router
   * to get the current url
   * @type {string}
   */
  const { pathname } = router;
  /**
   * useState para el estado del dropdown
   * English:
   * useState for the dropdown state
   * @type {Array}
   */
  const [open, setOpen] = useState(false);
  /**
   * useState para el estado del
   * modal de favoritos
   * English:
   * useState for the favorites modal
   * state
   * @type {Array}
   */
  const [openModal, setOpenModal] = useState(false);
  /**
   * useState para el estado del
   * modal de notificaciones
   * English:
   * useState for the notifications modal
   * state
   * @type {Array}
   */
  const [openModalNotif, setOpenModalNotif] = useState(false);

  /**
   * useState para el estado de la
   * recarga de la página
   * English:
   * useState for the page reload
   * state
   * @type {Array}
   */
  const [reloadFavorites, setReloadFavorites] = useState(false);

  /**
   * useState para el estado de
   * la existencia de de los pagos hechos
   * English:
   * useState for the existence of the
   * payments made
   * @type {Array}
   */
  const [made, setMade] = useState([]);
  /**
   * useState para el estado de
   * la existencia de de los pagos recibidos
   * English:
   * useState for the existence of the
   * payments received
   * @type {Array}
   */
  const [received, setReceived] = useState([]);
  /**
   * Funcion para eliminar un
   * favorito del usuario
   * English:
   * Function to remove a favorite
   * from the user
   *
   * id - Id del favorito
   * English:
   * id - Favorite id
   * @param {string} id Id del favorito a eliminar
   * @param {*} idAnuncio
   */
  const handleDelete = async (idAnuncio) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOMY_URL}/favoritos/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
          body: JSON.stringify({
            id_anuncio: idAnuncio,
          }),
        }
      );
      const data = await response.json();
      setReloadFavorites(!reloadFavorites);
      console.log("data: ", data);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Permite que no se pueda acceder
   * al app desde la url sin estar logeado
   * English:
   * Allows you to not be able to access
   * the app from the url without being logged in
   */
  useEffect(() => {
    const userFunction = localStorage.getItem("user");
    if (userFunction) {
      setUser(JSON.parse(userFunction));
    } else {
      router.push("/login");
    }
  }, []);

  /**
   * UseEffect para obtener los favoritos del usuario
   * No contiene parametros.
   * English:
   * UseEffect to get the user favorites
   * without parameters.
   */
  useEffect(async () => {
    if (user) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/favoritos`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const json = await res.json();
        console.log("Favoritos: ", json);
        setFavorites(json.data);
      } catch (err) {
        console.log(err);
      }
    }
  }, [user, reloadFavorites]);

  /**
   * UseEffect para obtener los pagos hechos
   * No contiene parametros.
   * English:
   * UseEffect to get the payments made
   * without parameters.
   */
  useEffect(() => {
    const userNoti = JSON.parse(window.localStorage.getItem("user"));
    console.log(userNoti);

    const fetchPaymentsMade = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/reservas/realizadas`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userNoti.token}`,
            },
          }
        );
        const json = await response.json();
        setMade(json.data.reservas);
        console.log(json, "HECHASSSSSSS");
      } catch (error) {
        console.log(error);
      }
    };
    /**
     * UseEffect para obtener los pagos recibidos
     * No contiene parametros.
     * English:
     * UseEffect to get the payments received
     * without parameters.
     */
    const fetchPaymentsReceived = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/reservas/recibidas`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userNoti.token}`,
            },
          }
        );
        const json = await response.json();
        setReceived(json.data[0].reserva);
        console.log(json, "RECIBIDASSSSS");
      } catch (error) {
        console.log(error);
      }
    };

    if (userNoti) {
      fetchPaymentsMade();
      fetchPaymentsReceived();
    }
  }, []);

  return (
    /**
     * Componente de la pagina de inicio
     * que contiene el layout de la barra
     * de navegación y encapsula el contenido
     * de la página, la barra de navegación
     * de la aplicación contiene el isotipo,
     * el nombre de la pagina, una foto del
     * usuario predefinida, nombre del usuario,
     * la opción de ver perfil y
     * una vista desplegable.
     * English:
     * Home page component that contains
     * the layout of the navigation bar
     * and encapsulates the content of the
     * page, the navigation bar of the
     * application contains the logo, the
     * name of the page, a predefined photo
     * of the user, the name of the user,
     * the option to view profile and
     * a dropdown view.
     */
    <>
      <nav className="flex justify-center p-7 pr-7  w-full text-lg font-sans font-bold shadow-lg bg-[#FBEADC]">
        {/* Logotipo de la pagina */}
        <div className="flex justify-between w-full md:w-8/12">
          <Link href="/app">
            <a
              title="Regresar /app"
              className="flex flex-row items-center transition duration-500 ease-in-out cursor-pointer hover:scale-110"
            >
              <Isotype className="w-11 h-11" />
              <span className="hidden md:flex">Homy.</span>
            </a>
          </Link>
          {/* barra de buscar */}
          <div className="flex space-x-1 md:space-x-5">
            <div className="items-center hidden space-x-10 lg:flex">
              {pathname === "/app/announcement" ? (
                <Button
                  variant="quinary"
                  className="h-10 py-1 text-sm"
                  onClick={() => router.push("/app/")}
                >
                  Vista huésped
                </Button>
              ) : (
                <Button
                  variant="quaternary"
                  className="h-10 py-1 text-sm"
                  onClick={() => router.push("/app/announcement")}
                >
                  Vista anfitrión
                </Button>
              )}
            </div>
            {/* Sección de la foto y nombre del usuario */}
            <div className="flex flex-row items-center justify-center">
              <div>
                <User className="bg-[#FEAC4C] w-12 h-12 rounded-full border-solid border-[3px] border-red-700 mr-4" />
              </div>
              <div className="flex flex-col ">
                <span
                  title={`${user?.data?.nombre} ${
                    user?.data?.apellidos.split(" ")[0]
                  }`}
                  className="font-medium text-base truncate max-w-[90px]"
                >
                  {user?.data?.nombre}
                </span>
                {/* Sección de redirección al perfil del usuario */}
                <div className="flex flex-row">
                  <Link href="/app/profile">
                    <a className="text-base font-normal text-gray-500 cursor-pointer hover:underline">
                      Perfil
                    </a>
                  </Link>
                </div>
              </div>
              <i className="pl-2 cursor-pointer" onClick={() => setOpen(!open)}>
                <ArrowDown
                  className={`${
                    open
                      ? "transition duration-300"
                      : "transition duration-300 transform rotate-180"
                  }`}
                />
              </i>
              <Dropdown
                open={open}
                setOpen={setOpen}
                setOpenModal={setOpenModal}
                setOpenModalNotif={setOpenModalNotif}
                exists={received || made ? true : false}
                className="z-10"
              >
                <LinkedDropdownListItem
                  className={`lg:hidden ${click && "hidden"}`}
                  onClick={() => setClick(true)}
                  toPath={
                    pathname === "/app/announcement"
                      ? "/app/"
                      : "/app/announcement"
                  }
                >
                  Vista{" "}
                  {pathname === "/app/announcement" ? "huésped" : "anfitrión"}
                </LinkedDropdownListItem>
                {/* Los demas items del dropdown */}
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
      {/* Modal Favoritos */}
      <div
        className={`z-10 absolute top-[0rem] backdrop-filter backdrop-blur-md bg-opacity-40 bg-gray-500 h-full w-full flex justify-center items-center ${
          !openModal && "hidden"
        }`}
      >
        <Modal className="z-20" setOpenModal={setOpenModal}>
          {/* ModalItem para agregar nuevas listas de favorito */}
          {favorites.map((fav) => (
            <ModalItem
              key={fav.id}
              name={fav.nombre}
              onClick={() => handleDelete(fav.H_Usuarios_Anuncios.id_anuncio)}
            />
          ))}
        </Modal>
      </div>
      {/* Modal Notificaciones */}
      <div
        className={`z-10 absolute top-[0rem] backdrop-filter backdrop-blur-md bg-opacity-40 bg-gray-500 h-full w-full flex justify-center items-center ${
          !openModalNotif && "hidden"
        }`}
      >
        <Modal
          className="z-20"
          setOpenModal={setOpenModalNotif}
          notificacion={true}
        >
          {received &&
            received.map((PagoRecibida) => (
              <ModalItem
                key={PagoRecibida.id}
                name="Sistema"
                notificacion={true}
                mensaje="Pago realizado con éxito."
                fecha={new Date(PagoRecibida.createdAt).toDateString()}
              />
            ))}
          {made &&
            made.map((PagoHecho) => (
              <ModalItem
                key={PagoHecho.id}
                name="Sistema"
                notificacion={true}
                mensaje="Recibió un pago."
                fecha={new Date(PagoHecho.createdAt).toDateString()}
              />
            ))}
        </Modal>
      </div>
      <Component
        {...pageProps}
        setReloadFavorites={setReloadFavorites}
        reloadFavorites={reloadFavorites}
        user={user}
      />
    </>
    /**
     * Componente del inicio
     * que contiene el layout de la barra de
     * navegación y encapsula el contenido de
     * la página, la barra de navegación de
     * la aplicación contiene el isotipo, el
     * nombre de la pagina, una foto del usuario
     * predefinida, nombre del usuario, la opción
     * de ver perfil y una vista desplegable.
     *
     * Home page component
     * containing the layout of the bar
     * navigation and encapsulates content
     * of the page, the navigation bar
     * of the application contains the isotype,
     * the name of the page, a photo of the
     * predefined username, username,
     * the option to view profile and
     * a drop down view.
     */
  );
}
