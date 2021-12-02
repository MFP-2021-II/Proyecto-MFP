import Link from "next/link";

/**
 * Componente atomico de un item de una lista desplegable con enlace.
 * @param {children} children - Contenido del componente.
 * @param {string} toPath - Ruta a la que se redirige el componente.
 * @param {className} className - Nombre de la clase a aplicar.
 * @returns {JSX} LinkedDropdownListItem
 */
export default function LinkedDropdownListItem({
  children,
  className,
  toPath,
}) {
  return (
    <Link href={toPath}>
      <a
        className={`block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200 border-solid border-b ${className}`}
      >
        {children}
      </a>
    </Link>
  );
}
