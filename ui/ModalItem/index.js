/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 * Francais:
 * Importer des librairies ou des composants.
 */
import House from "components/Icons/House";
import Delete from "components/Icons/Delete";
import Robot from "components/Icons/Robot";

/**
 * Componente atomico que
 * muestra una elemento del componente
 * modal, ya sea de notificaciones
 * o de favoritos.
 * English:
 * Atomic component that shows
 * an element of the modal,
 * either of notifications or
 * favorites.
 * Francais:
 * Composant atomique qui affiche
 * un element du modal, soit de
 * notifications ou de favoris.
 *
 * name - nombre del input
 * onClick - evento de click
 * notificacion - estado de la notificacion
 * mensaje - mensaje de la notificacion
 * fecha - fecha de la notificacion
 * English:
 * name - name of the input
 * onClick - click event
 * notificacion - notification state
 * mensaje - notification message
 * fecha - notification date
 * Francais:
 * name - nom de l'entrée
 * onClick - evenement de clic
 * notificacion - etat de la notification
 * mensaje - message de la notification
 * fecha - date de la notification
 */
export default function ModalItem({
  name,
  onClick,
  notificacion,
  mensaje,
  fecha,
}) {
  return (
    /**
     * Se retorna un item para el modal
     * de notificaciones.
     * English:
     * Return an item for the modal
     * of notifications.
     * Francais:
     * Retourner un item pour le modal
     * de notifications.
     * Portugues:
     * Retornar um item para o modal
     * de notificações.
     */
    <div className="w-full items-center bg-[#FCF8F8] hover:bg-gray-100 flex flex-row justify-between mb-3 p-3 border rounded-lg">
      {notificacion ? (
        <div className="flex flex-row items-center">
          <Robot className="w-10 h-10 fill-current text-gray-700" />
          <div className="ml-4 font-medium text-sm sm:text-base w-full">
            <h1>Sistema</h1>
            <p className="font-normal">{mensaje}</p>
            <span className="font-light text-blue-700">{fecha}</span>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-row items-center">
            <House className="w-10 h-10 fill-current text-gray-700" />
            <span className="ml-4 font-medium text-sm sm:text-base truncate w-36 sm:w-64">
              {name}
            </span>
          </div>
          <button onClick={onClick}>
            <Delete className="w-8 h-8 fill-current text-gray-700 hover:text-red-700 cursor-pointer" />
          </button>
        </>
      )}
    </div>
    /**
     * Se retorna un item para el modal
     * de notificaciones.
     * English:
     * Return an item for the modal
     * of notifications.
     * Frqancais:
     * Retourner un item pour le modal
     * de notifications.
     */
  );
}
