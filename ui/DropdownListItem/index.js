/**
 * Componente atomico de un item
 * de una lista desplegable.
 * English:
 * Atomic component of a dropdown list item.
 *
 * children - contenido del item
 * className - clase del item
 * onClick - funcion de click
 * English:
 * children - content of the item
 * className - class of the item
 * onClick - click function
 * @param {children} children - Contenido del componente.
 * @param {onClick} onClick - Función a ejecutar al hacer click sobre el componente.
 * @param {className} className - Nombre de la clase a aplicar.
 * @returns {JSX} DropdownListItem
 */
export default function DropdownListItem({ children, className, onClick }) {
  return (
    /**
     * Componente de un item de una
     * lista desplegable.
     * English:
     * Dropdown list item component.
     */
    <button
      type="button"
      className={`block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200 border-solid border-b ${className}`}
      href="#"
      onClick={onClick}
    >
      {children}
    </button>
    /**
     * Componente de un item de una lista
     * desplegable.
     * English:
     * Dropdown list item component.
     */
  );
}
