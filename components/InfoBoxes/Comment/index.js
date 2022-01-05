/**
 * Importar librerias o componentes
 * English:
 * Import libraries or components
 */
import UserVariant from "components/Icons/UserVariant";
/**
 * Componente de cajas de
 * comentarios en la vista
 * de ver detalles de inmubles
 * es un textarea donde se puede
 * colocar un comentario sobre
 * el inmueble.
 * English:
 * Component comment boxes in the
 * view of property details is a
 * textarea where you can place a
 * comment about the property.
 *
 * usuario - usuario que esta en la sessión
 * comentario - comentario del usuario
 * fecha - fecha en la que se coloca el comentario
 * English:
 * user - user that is in the session
 * comment - comment of the user
 * date - date in which the comment is placed
 * @param {props} usuario - Usuario que esta en la sesión
 * @param {props} comentario - Comentario que se esta enviando
 * @param {props} fecha - Fecha en la que se esta enviando el comentario
 * @returns {JSX} Comment
 */
export default function Comment({ usuario, fecha, comentario }) {
  return (
    /**
     * Caja de comentarios, donde se le pasa los props
     * para poder modificarlo por className desde el
     * componente donde se utiliza.
     * English:
     * Comment box, where it passes the props
     * to be modified by className from the
     * component where it is used.
     **/
    <div className="flex flex-row w-full justify-between mb-8">
      {/* Foto, nombre, fecha */}
      <div className="flex flex-row items-center w-[50%] lg:w-[30%]">
        <UserVariant className="rounded-full w-10 h-10 border-2 border-green-700" />
        <div className="flex flex-col pl-3 justify-center">
          <h1 className="font-medium">{usuario}</h1>
          <span className="font-medium text-xs text-gray-500">{fecha}</span>
        </div>
      </div>
      {/* Comentario */}
      <p className="w-[40%] lg:w-[68%]">{comentario}</p>
    </div>
    /**
     * Caja de comentarios, donde se le pasa los props
     * para poder modificarlo por className desde el
     * componente donde se utiliza.
     * English:
     * Comment box, where you pass the props
     * to be able to modify it by className from the
     * component where it is used.
     **/
  );
}
