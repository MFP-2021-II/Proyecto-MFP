/**
 * Temas para el text input de tipo buscador.
 * English:
 * Themes for the text input of type search.
 * @type {{primary: string}}
 */
const theme = {
  primary:
    "border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal transition duration-500 ease-in-out hover:shadow-md",
};

/**
 * Componente atomico de una variante del input de tipo buscador.
 * English:
 * Atomic component of an input variant of type search.
 *
 * className - clase de la etiqueta
 * variant - tipo de tema
 * label - etiqueta del input
 * type - tipo de input
 * name - nombre del input
 * props - propiedades del input
 *
 * English:
 * className - class of the label
 * variant - theme type
 * label - label of the input
 * type - input type
 *  name - name of the input
 * props - input properties
 * @param {string} className Nombre de la clase
 * @param {string} variant Tipo de variante
 * @param {string} label Texto del label
 * @param {string} type Tipo de input
 * @param {string} name Nombre del input
 * @param {props} props Propiedades del componente
 * @returns {JSX} TextInputBrowser
 */
export default function TextInputBrowse({
  className = "",
  variant = "primary",
  label = "",
  type = "text",
  name,
  ...props
}) {
  return (
    /**
     * Componente de input de tipo texto para
     * busquedas de datos que tiene soporte para
     * manejo de react hook form.
     * English:
     * Component of text input for search data
     * that has support for react hook form.
     */
    <>
      <input
        id={name}
        className={`${theme[variant]} ${className}`}
        placeholder={label}
        type={type}
        {...props}
      />
    </>
    /**
     * Componente de input de tipo
     * texto para busquedas de datos
     * que tiene soporte para manejo
     * de react hook form.
     * English:
     * Component of text input for
     * search data that has support for
     * react hook form.
     */
  );
}
