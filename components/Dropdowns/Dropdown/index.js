/**
 * Importar librerias o componentes
 * English:
 * Import libraries or components
 */
import { useRouter } from "next/router";
import { useEffect } from "react";
/**
 * Componente de lista desplegable
 * English:
 * Dropdown list component
 *
 * children es el contenido del listado
 * className es la clase del listado
 * open es el estado del listado
 * setOpen es la funcion para cambiar el estado del listado
 *
 * English:
 * children is the content of the list
 * className is the class of the list
 * open is the state of the list
 * setOpen is the function to change the state of the list
 * @param {children} children - Contenido del componente
 * @param {className} className - Clase del componente
 * @param {boolean} open - Estado de la lista desplegable
 * @param {Function} setOpen - Función para actualizar el estado de la lista desplegable
 * @returns {JSX} Dropdown
 */
export default function Dropdown({
  children,
  open,
  className,
  setOpen,
  setOpenModal,
  setOpenModalNotif,
  exists,
}) {
  /**
   * Router redireccionar a la pagina de inicio de sesion
   * English:
   * Router redirect to the login page
   * @returns {void}
   */
  const router = useRouter();
  /**
   * Estilo para los items de la lista desplegable
   * English:
   * Style for the items of the dropdown list
   * @type {{not_style: string, def_style: string, end_style: string}}
   */
  const styles = {
    not_style:
      "flex flex-row items-center px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200 border-solid border-b cursor-pointer",
    def_style:
      "block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200 border-solid border-b cursor-pointer",
    end_style:
      "block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 transition ease-in duration-200 group hover:bg-red-200 hover:text-red-600",
  };
  /**
   * Funcion para cerrar la lista desplegable
   * English:
   * Function to close the dropdown list
   */
  const handleClickOutside = (e) => {
    if (open) {
      if (!e.target.closest(".dropdown")) {
        setOpen(false);
      }
    }
  };

  /**
   * UseEffect para agregar el evento click a
   * la pagina para cerrar el dropdown
   * English:
   * UseEffect to add the click event to the
   * page to close the dropdown
   */
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [open]);

  return (
    /**
     * Componente dropdown donde por defecto se muestra
     * una las notificaciones, lista de favoritos y
     * cerrrar sesion también se puede agregar una
     * lista de items el cual tiene por nombre DRopdownItem
     * en la carpeta ui, las notificaciones presentan un
     * comportamiento difirente en el caso de que haya o
     * no una notificación dentro, mostrando un punto
     * intermitente de color violeta, Aparte se tiene
     * los cambios en los estados para abrir el moddal
     * de notificaciones y el modal de favoritos,
     * finalmente se remueve el usuario del localstore
     * al momento de pulsar cerrar sesión y se redirecciona
     * a la ruta "/login".
     * English:
     * Dropdown component where by default it shows
     * the notifications, favorites and logout also
     * can add a list of items with the name DropdownItem
     * in the ui folder, the notifications present a
     * different behavior in the case of having or not
     * a notification, showing an intermittent point
     * of violet color, Besides, there are changes in
     * the states to open the modal notifications and
     * the modal favorites, finally remove the user
     * from the localstore when you click logout and
     * redirect to the route "/login".
     **/
    <div
      id="dropdown"
      className={`fixed right-0 md:right-[16.5vmax] top-[98px] w-full mt-2 rounded-md shadow-lg md:w-48 ${
        !open && "hidden"
      } ${className}`}
    >
      <div className="flex flex-col items-center px-2 py-2 bg-white rounded-md shadow">
        {children}
        <button
          className={styles["not_style"]}
          onClick={() => setOpenModalNotif(true)}
        >
          Notificaciones
          {exists && (
            <span className="flex flex-row w-3 h-3">
              <span className="relative inline-flex w-3 h-3 bg-purple-500 rounded-full left-2">
                <span className="w-3 h-3 right-[0.05rem] animate-ping absolute inline-flex rounded-full bg-purple-400 opacity-75"></span>
              </span>
            </span>
          )}
        </button>
        <button
          className={styles["def_style"]}
          onClick={() => setOpenModal(true)}
        >
          Lista de favoritos
        </button>
        <button
          className={styles["end_style"]}
          onClick={() => {
            window.localStorage.removeItem("user");
            router.push("/login");
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
