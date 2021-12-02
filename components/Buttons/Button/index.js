/**
 * Temas para los botones por defecto de la aplicación
 * @type {{primary: string, cancel: string, copy: string, terciary: string, quaternary: string, quinary: string, white: string, light: string, outline: string}}
 */
const theme = {
  primary: "text-white bg-blue-500 hover:bg-blue-700",
  cancel: "text-white bg-red-500 hover:bg-red-700",
  copy: "text-white bg-purple-500 hover:bg-purple-700",
  terciary: "text-white bg-green-500 hover:bg-green-700",
  quaternary:
    "text-gray-900 font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-[101%] hover:shadow-lg",
  quinary:
    "bg-gray-900 text-gray-50 font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-[101%] hover:shadow-lg",
  white: "text-gray-700 bg-white hover:bg-gray-200 border-2 border-gray-200",
  light: "text-gray-700 bg-blue-100 hover:bg-blue-200 border-2 border-blue-200",
  outline:
    "text-blue-500 bg-transparent hover:bg-blue-100 border border-blue-500 hover:bg-blue-100",
};

/**
 * Estilo para el estado de los botones
 * @type {{primary: string, cancel: string, copy: string, terciary: string}}
 */
const disabledStyle = {
  primary: "disabled:bg-blue-200 pointer-events-none",
  cancel: "disabled:bg-red-200 pointer-events-none",
  copy: "disabled:bg-green-500 pointer-events-none",
  terciary: "disabled:bg-green-200 pointer-events-none",
};
/**
 * Tamaños para los botones
 * @type {{small: string, medium: string, large: string}}
 */
const sizes = {
  small: "px-2 py-2",
  medium: "px-4 py-2",
  large: "px-6 py-2",
};

/**
 * Componente boton por defecto de la aplicación
 * @param {string} className Clase de estilo
 * @param {string} variant Tipo de botón
 * @param {string} size Tamaño del botón
 * @param {boolean} disabled Estado del botón
 * @param {props} props Propiedades del componente
 * @returns {JSX} Button
 */
export default function Button({
  className = "",
  variant,
  size = "medium",
  children,
  disabled = false,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`w-full font-bold flex justify-center items-center
      ${className} ${sizes[size]}
      ${theme[variant]}
      ${disabled && disabledStyle[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
