import Link from "next/link";
import Button from "components/Buttons/Button";
import User from "components/Icons/User";
import ArrowDown from "components/Icons/ArrowDown";
import Isotype from "components/Icons/Isotype";
import Dropdown from "@/components/Dropdowns/Dropdown";
import DropdownListItem from "ui/DropdownListItem";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

  return (
    <>
      <nav className="flex justify-center p-7 pr-10 w-full text-lg font-sans font-bold shadow-lg bg-[#FBEADC]">
        <div className="flex justify-between w-full md:w-8/12">
          <a className="flex flex-row items-center transition duration-500 ease-in-out cursor-pointer hover:scale-110">
            <Isotype className="w-11 h-11" />
            <span className="hidden md:flex">Homy.</span>
          </a>
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
                  {user?.data?.nombre} {user?.data?.apellidos.split(" ")[0]}
                </span>
                <div className="flex flex-row">
                  <Link href="#">
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
              <Dropdown open={open} className="z-10">
                <DropdownListItem
                  className={`lg:hidden ${click ? "hidden" : ""}`}
                  onClick={() => setClick(true)}
                >
                  Vista anfitrión
                </DropdownListItem>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
      <Component {...pageProps} user={user} />
    </>
  );
}
