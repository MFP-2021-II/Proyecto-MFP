import Link from "next/link";
import LandingButton from "components/Buttons/LandingButton";

/**
 * Componente de lista desplegable para el landing page
 * @param {boolean} open - Estado de la lista desplegable
 *  * @param {string} className - Clase del componente
 *  * @param {Function} setOpen - Función para cambiar el estado de la lista desplegable
 * @returns {JSX} LandingDropdown
 */
export default function LandingDropdown({ open, className, setOpen }) {
  /**
   * Estilo para los items de la lista desplegable del landing page
   * @type {string}
   */
  const ListItemStyle =
    "hover:text-red-800 cursor-pointer hover:border-b-2 uppercase tracking-wide";

  return (
    <div
      className={`bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-lg fixed right-0 top-[95px] w-full mt-2 rounded-md shadow-lg md:hidden h-almost-screen ${
        !open && "hidden"
      } ${className}`}
    >
      <div className="flex flex-col items-center py-7 h-full justify-around">
        <Link href="/">
          <a className={ListItemStyle} onClick={() => setOpen(!open)}>
            Inicio
          </a>
        </Link>
        <Link href="/about-us">
          <a className={ListItemStyle} onClick={() => setOpen(!open)}>
            Nosotros
          </a>
        </Link>
        <Link href="/contact">
          <a className={ListItemStyle} onClick={() => setOpen(!open)}>
            Contacto
          </a>
        </Link>
        <div className="flex flex-row space-x-3 lg:flex">
          <LandingButton
            variant="primary"
            className="w-[47%] text-sm"
            toPath="/login"
          >
            Login
          </LandingButton>
          <LandingButton
            variant="secondary"
            className="w-[45%] text-sm"
            toPath="/register"
          >
            Regístrate
          </LandingButton>
        </div>
      </div>
    </div>
  );
}
