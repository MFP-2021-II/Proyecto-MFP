/**
 * Importar librerias o componentes
 */
import Link from "next/link";

/**
 * Componente boton del landing page
 * English:
 * Landing page button component
 *
 * children es el contenido del boton
 * className es la clase del boton
 * toPath es la ruta a la que se dirige
 * type es el tipo de boton
 * variant es el estilo del boton
 *
 * English:
 * children is the button content
 * className is the button class
 * toPath is the path to which it is directed
 * type is the button type
 * variant is the button style
 * @param {children} children - Contenido del boton
 * @param {string} toPath - Ruta a la que se redirecciona
 * @param {string} className - Clase del boton
 * @param {string} type - Tipo de boton
 * @param {string} variant - Variante del boton
 * @returns {JSX} LandingButton
 */
export default function LandingButton({
  children,
  toPath,
  variant,
  className,
  type,
}) {
  /**
   * Estilos para el boton del landing page
   * English:
   * Landing page button styles
   * @type {{primary: string, secondary: string}}
   */
  const types = {
    primary: "text-gray-900",
    secondary: "bg-gray-900 text-gray-50",
  };

  return (
    /**Link que redirecciona a la ruta que se le pasa por toPath
     * dentro una etiqueta boton que contiene propiedades que indica el tipo,
     * estilos, variantes y tamaños.
     * English:
     * Link that redirects to the route that is passed by toPath
     * inside a button tag that contains properties that indicate the type,
     * styles, variants and sizes.
     **/
    <Link href={toPath}>
      <button
        type={type}
        className={`${types[variant]} font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-[101%] hover:shadow-lg ${className}`}
      >
        <a className="flex flex-row items-center justify-center">{children}</a>
      </button>
    </Link>
  );
}
