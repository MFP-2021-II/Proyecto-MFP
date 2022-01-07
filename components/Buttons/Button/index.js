/**
 * Temas para los botones por
 * defecto de la aplicación
 * English:
 * Theme for the default buttons
 * of the application
 *
 * Tipos de variables:
 * primary - Color primario
 * secondary - Color secundario
 * copy - Color de texto
 * terciary - Color de fondo y borde
 * quaternary - Color de borde y fondo
 * quinary - Color de borde y fondo
 * white - Color de fondo
 * light - Color de fondo
 * outline - Sin borde
 *
 * English:
 * Types of variables:
 * primary - Primary color
 * secondary - Secondary color
 * copy - Text color
 * terciary - Background and border color
 * quaternary - Border and background color
 * quinary - Border and background color
 * white - Background color
 * light - Background color
 * outline - No border
 *
 * Francais:
 * Types de variables:
 * primary - Couleur primaire
 * secondary - Couleur secondaire
 * copy - Couleur de texte
 * terciary - Couleur de fond et bordure
 * quaternary - Couleur de bordure et fond
 * quinary - Couleur de bordure et fond
 * white - Couleur de fond
 * light - Couleur de fond
 * outline - Sans bordure
 *
 * Português:
 * Types de variables:
 * primary - Cor primária
 * secondary - Cor secundária
 * copy - Cor do texto
 * terciary - Cor de fundo e borda
 * quaternary - Cor de borda e fundo
 * quinary - Cor de borda e fundo
 * white - Cor de fundo
 * light - Cor de fundo
 * outline - Sem borda
 * @type {{primary: string, cancel: string, copy: string, terciary: string, quaternary: string, quinary: string, white: string, light: string, outline: string}}
 */
const theme = {
  primary: "text-white bg-blue-500 hover:bg-blue-700",
  cancel: "text-white bg-red-500 hover:bg-red-700 rounded-md",
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
 * English:
 * Style for the button state
 * Francais:
 * Style for the button state
 * Português:
 * Style for the button state
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
 * English:
 * Sizes for the buttons
 * Francais:
 * Sizes for the buttons
 * Português:
 * Sizes for the buttons
 * @type {{small: string, medium: string, large: string}}
 */
const sizes = {
  small: "px-2 py-2",
  medium: "px-4 py-2",
  large: "px-6 py-2",
};

/**
 * Componente boton por defecto de la aplicación
 * English:
 * Default button component of the application
 * Francais:
 * Default button component of the application
 * Português:
 * Default button component of the application
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
    /**
     * Etiqueta boton que contiene propiedades
     * que deshabilita el botón, estilos, variantes y tamaños
     * English:
     * Button tag that contains properties that
     * disable the button, styles, variants and sizes
     * Francais:
     * Étiquette de bouton contenant des propriétés
     * qui désactive le bouton, les styles, variantes
     * et tailles
     * Português:
     * Button do tag que contém propriedades que
     * desabilita o botão, estilos, variantes e tamanhos
     */
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
    /**Etiqueta boton que contiene propiedades
     * que deshabilita el botón, estilos,
     * variantes y tamaños
     * English:
     * Button tag that contains properties
     * that disable the button, styles,
     * variants and sizes
     * Francais:
     * Étiquette de bouton contenant des propriétés
     * qui désactive le bouton, les styles,
     * variantes et tailles
     * Português:
     * Button do tag que contém propriedades que
     * desabilita o botão, estilos,
     * variantes e tamanhos
     */
  );
}
