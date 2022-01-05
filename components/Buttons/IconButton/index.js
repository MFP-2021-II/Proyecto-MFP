/**
 * Componente boton con icono
 * English:
 * Button with icon
 *
 * Children es el contenido del boton
 * className es la clase del boton
 * onClick es la funcion que se ejecuta al hacer click
 *
 * English:
 * Children is the button content
 * className is the button class
 * onClick is the function that is executed when you click
 * @param {string} children - Contenido del boton
 * @param {string} className - Clase del boton
 * @param {string} onClick - Funcion que se ejecuta al hacer click
 * @returns {JSX} IconButton
 */
export default function IconButton({ children, className, onClick }) {
  /**
   * Estilos del boton con icono
   * English:
   * Button with icon styles
   * @type {{primary:string}}
   */
  const primary =
    "ml-2 h-11 w-10 bg-gray-50 rounded-lg border-solid border border-gray-400 border-opacity-60 transition duration-500 ease-in-out hover:shadow-md flex items-center justify-center";

  return (
    /**
     * Etiqueta boton con un icono que pasa por children que contiene
     * propiedades da estilos, variantes y tamaños
     * English:
     * Button with an icon that passes through children that contain
     * properties that styles, variants and sizes
     */
    <button onClick={onClick} className={`${primary} ${className}`}>
      <a>{children}</a>
    </button>
  );
}
