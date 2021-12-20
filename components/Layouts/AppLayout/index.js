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
 * Componente que renderiza el layout de la aplicación
 * @param {pageProps} pageProps Propiedades de la página
 * @param {Component} Componente Componente que se renderiza
 * @returns {JSX} AppLayout
 */
export default function AppLayout({ Component, pageProps }) {
  /**
   * useState para el estado del usuario
   * @type {Array}
   */
  const [user, setUser] = useState(null);

  /**
   * useState para los favoritos del usuario
   * @type {Array}
   */
  const [favorites, setFavorites] = useState([]);

  /**
   * useState para el estado del boton para cambiar de vista
   * @type {Array}
   */

  const [click, setClick] = useState(false);
  /**
   * router para redireccionar a la pagina de login
   * @type {Object}
   */
  const router = useRouter();
  /**
   * Deestructuración del router para obtener la url actual
   * @type {string}
   */
  const { pathname } = router;
  /**
   * useState para el estado del dropdown
   * @type {Array}
   */
  const [open, setOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  console.log("Modal: ", openModal);

  const [reloadFavorites, setReloadFavorites] = useState(false);

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
   * Permite que no se pueda acceder al app desde la url sin estar logeado
   */
  useEffect(() => {
    const userFunction = localStorage.getItem("user");
    if (userFunction) {
      setUser(JSON.parse(userFunction));
    } else {
      router.push("/login");
    }
  }, []);

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

  return (
    <>
      <nav className="flex justify-center p-7 pr-7  w-full text-lg font-sans font-bold shadow-lg bg-[#FBEADC]">
        <div className="flex justify-between w-full md:w-8/12">
          <Link href="/app">
            <a className="flex flex-row items-center transition duration-500 ease-in-out cursor-pointer hover:scale-110">
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
      <Component
        {...pageProps}
        setReloadFavorites={setReloadFavorites}
        reloadFavorites={reloadFavorites}
        user={user}
      />
    </>
  );
}
