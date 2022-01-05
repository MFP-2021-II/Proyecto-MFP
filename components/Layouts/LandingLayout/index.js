/**
 * Sección donde se importa los componentes y librerias.
 * English:
 * Section where the components and libraries are imported.
 */
import Logo from "components/Icons/Logo";
import LandingButton from "components/Buttons/LandingButton";
import RedirectArrow from "components/Icons/RedirectArrow";
import Menu from "components/Icons/Menu";
import Link from "next/link";
import LandingDropdown from "components/Dropdowns/LandingDropdown";
import { useRouter } from "next/router";
import { useState } from "react";

/**
 * Componente del layout de la landing page
 * English:
 * Landing page layout component
 *
 * children - Contenido del layout
 * English:
 * children - Content of the layout
 * @param {children} children Contenido del layout
 * @returns {JSX} LandingLayout
 */
export default function LandingLayout({ children }) {
  /**
   * Router para obtener la url actual
   * English:
   * Router to get the current url
   * @type {object}
   */
  const router = useRouter();
  /**
   * useState para el estado del dropdown
   * English:
   * useState for the dropdown state
   * @type {Array}
   */
  const [open, setOpen] = useState(false);
  /**
   * Funcion para verificar si
   * la url actual es la landing page
   * English:
   * Function to verify if the current
   * url is the landing page
   * @param {string} path Ruta actual
   * @returns {string}
   */
  const current_page = (path) => (router.pathname === path ? "active" : "");
  /**
   * Estilos de layout de la landing page
   * English:
   * Layout styles of the landing page
   * @type {{home_color:string, rem_color:string}}
   */
  const type = {
    home_color: "transition duration-500 bg-gray-100",
    rem_color: "transition duration-500 bg-[#FBEADC]",
  };

  return (
    /**
     * Es un componente que se utiliza
     * como barra de navegación en las rutas
     * fuera de una sesión activa de un
     * usuario del sistema, esta constituye
     * texto que redirecciona a la sección
     * de inicio de sesión o registro, nosotros
     * y contacto.
     * English:
     * It is a component that is used
     * as a navigation bar in the routes
     * outside of an active session of a
     * system user, this constitutes text
     * that redirects to the section of
     * login or registration, we and contact.
     */
    <>
      <nav
        className={`flex justify-between p-7 pr-10 w-full text-lg font-sans font-bold shadow-lg  ${
          current_page("/") === "active"
            ? type["home_color"]
            : type["rem_color"]
        }`}
      >
        <a className="flex items-center transition duration-500 ease-in-out hover:scale-110 cursor-pointer">
          <Logo />
        </a>
        <div className="flex flex-row justify-center pr-4">
          <ul className="flex items-center lg:pr-20 pr-0">
            <div className="flex-wrap space-x-10 lg:space-x-12 xl:space-x-28 items-center justify-end hidden md:flex">
              <li>
                <Link href="/">
                  <a className="hover:text-red-800 cursor-pointer">Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <a className="hover:text-red-800 cursor-pointer">Nosotros</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-red-800 cursor-pointer">Contacto</a>
                </Link>
              </li>
            </div>
          </ul>
          <div className="space-x-10 hidden lg:flex">
            <LandingButton variant="primary" toPath="/login">
              Inicia Sesión
            </LandingButton>
            <LandingButton variant="secondary" toPath="/register">
              Regístrate
              <RedirectArrow className="fill-current text-gray-50 w-5 h-5 ml-1" />
            </LandingButton>
          </div>
        </div>
        <a
          className={`flex items-center pr-4 md:hidden cursor-pointer ${
            open
              ? "transition duration-300"
              : "transition duration-300 transform rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </a>
        <LandingDropdown open={open} setOpen={setOpen} />
      </nav>
      {children}
    </>
    /**
     * Es un componente que se utiliza como
     * barra de navegación en las rutas fuera
     * de una sesión activa de un usuario
     * del sistema, esta constituye texto
     * que redirecciona a la sección de
     * inicio de sesión o registro, nosotros
     * y contacto.
     * English:
     * It is a component that is used as
     * a navigation bar in the routes outside
     * of an active session of a system
     * user, this constitutes text that
     * redirects to the section of login
     *  or registration, we and contact.
     */
  );
}
