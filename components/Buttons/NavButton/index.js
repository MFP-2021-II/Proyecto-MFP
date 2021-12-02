/**
 * Componente boton de navegacion
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
