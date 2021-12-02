/**
 * Temas para el text input de tipo buscador.
 * @type {{primary: string}}
 */
const theme = {
  primary:
    "border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal transition duration-500 ease-in-out hover:shadow-md",
};

/**
 * Componente atomico de una variante del input de tipo buscador.
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
    <>
      <input
        id={name}
        className={`${theme[variant]} ${className}`}
        placeholder={label}
        type={type}
        {...props}
      />
    </>
  );
}
