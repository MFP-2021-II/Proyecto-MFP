/**
 * Componente boton con icono
 * @param {string} children - Contenido del boton
 * @param {string} className - Clase del boton
 * @param {string} onClick - Funcion que se ejecuta al hacer click
 * @returns {JSX} IconButton
 */
export default function IconButton({ children, className, onClick }) {
  /**
   * Estilos del boton con icono
   * @type {{primary:string}}
   */
  const primary =
    "ml-2 h-11 w-10 bg-gray-50 rounded-lg border-solid border border-gray-400 border-opacity-60 transition duration-500 ease-in-out hover:shadow-md flex items-center justify-center";

  return (
    <button onClick={onClick} className={`${primary} ${className}`}>
      <a>{children}</a>
    </button>
  );
}
