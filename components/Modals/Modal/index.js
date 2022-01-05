/**
 * Importar librerias o componentes
 * English:
 * Import libraries or components
 */
import Close from "components/Icons/Close";

/**
 * Compontente para mostrar una tarjeta de anuncio
 * en la vista de detalles de inmuebles.
 * English:
 * classname - Component to show a card announcement
 * setOpenModal - Función que se utiliza para abrir una modal
 * children - Contenido de la tarjeta
 * notificacion - Objeto que contiene la información del anuncio
 * English:
 * classname - Component to show a card announcement
 * setOpenModal - Function that is used to open a modal
 * children - Content of the card
 * notification - Object that contains the information of the announcement
 * @param {string} className Clase de la tarjeta
 * @param {string} setOpenModal Funcion para abrir modal
 * @param {string} children Contenido de la tarjeta
 * @param {string} notificacion Indica si es una notificacion
 * @returns {JSX} Modal
 */
export default function Modal({
  className,
  setOpenModal,
  children,
  notificacion,
}) {
  return (
    /**
     * Falta volver responsive, el
     * modal será compartido con
     * notificaciones
     * English:
     * The modal will be responsive,
     * it will be shared with notifications
     **/
    <div
      className={`${className} bg-white rounded-lg shadow-2xl flex flex-col justify-start w-[20rem] sm:w-[30rem] h-[30rem] px-7 py-6 sm:px-10 sm:py-8`}
    >
      <div className="flex flex-row w-full justify-between pb-3 border-b-2">
        <h1 className="text-xl sm:text-2xl font-semibold">
          {`${notificacion ? "Notificaciones" : "Lista de favoritos"}`}
        </h1>
        <div className="flex justify-center items-center p-1 w-8 h-8 cursor-pointer rounded-full transition duration-500 hover:bg-red-200 fill-current hover:text-red-600">
          <Close className="w-7 h-7" onClick={() => setOpenModal(false)} />
        </div>
        {/* Rederizar lista de favoritos */}
      </div>
      <div className="overflow-y-auto mt-4">{children}</div>
    </div>
  );
}
