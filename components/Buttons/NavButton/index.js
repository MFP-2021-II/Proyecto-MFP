/**
 * Componente boton de navegacion
 * English:
 * Navigation button component
 *
 * children es el contenido del boton
 * className es la clase del boton
 * onClick es la funcion que se ejecuta al hacer click
 * variant es el estilo del boton
 * props es el resto de propiedades del boton
 *
 * English:
 * children is the button content
 * className is the button class
 * onClick is the function that is executed when you click
 * variant is the button style
 * props is the rest of the button properties
 * @param {children} children - Contenido del boton
 * @param {onClick} onClick - Funcion que se ejecuta al hacer click
 * @param {className} className - Clase del boton
 * @param {variant} variant - Estilo del boton
 * @param {props} props - Propiedades del boton
 * @returns {JSX} NavButton
 */
export default function NavButton({
  children,
  variant,
  className,
  onClick,
  ...props
}) {
  /**
   * Estilos del componente tipo boton de navegacion
   * English:
   * Navigation button component styles
   * @type {{primary: string, secondary: string, quaternary: string,quinary: string}}
   */
  const types = {
    primary: "text-gray-900",
    secondary: "bg-gray-900 text-gray-50",
    quaternary:
      "text-gray-900 font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-[101%] hover:shadow-lg",
    quinary:
      "bg-gray-900 text-gray-50 font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-[101%] hover:shadow-lg",
  };

  return (
    /**
     * Boton que contiene propiedades que indica el tipo, estilos,
     * variantes, tamaños y onClick.
     * English:
     * Button that contains properties that indicate the type, styles,
     * variants, sizes and onClick.
     **/
    <button
      {...props}
      onClick={onClick}
      className={`${types[variant]} font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg ${className}`}
    >
      <span className="flex flex-row items-center justify-center">
        {children}
      </span>
    </button>
  );
}
