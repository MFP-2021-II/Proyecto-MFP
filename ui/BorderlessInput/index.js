/**
 * Tipos de temas para el input
 * English:
 * Input theme types
 * @type {{primary:string, secondary:string}}
 */
const theme = {
  primary:
    "w-full border-b-2 pl-3 text-2xl font-bold border-0 rounded-lg py-1 outline-none font-medium transition duration-500 hover:bg-gray-100",
  secondary:
    "w-full border-b-2 pl-3 text-md font-bold border-0 rounded-lg py-1 outline-none font-normal transition duration-500 hover:bg-gray-100",
};

/**
 * Componente atomico de input
 * English:
 * Atomic component of input
 *
 * classname - clase de la etiqueta
 * variant - tipo de tema
 * label - etiqueta del input
 * type - tipo de input
 * register - funcion de registro
 * name - nombre del input
 * errors - errores del input
 * disabled - estado del input
 * props - propiedades del input
 * English:
 * classname - class of the label
 * variant - theme type
 * label - label of the input
 * type - type of input
 * register - registration function
 * name - name of the input
 * errors - input errors
 * disabled - input state
 * props - input properties
 * @param {string} className Nombre de la clase
 * @param {string} variant Tipo de variante
 * @param {string} label Texto del label
 * @param {string} type Tipo de input
 * @param {object} register Referencia al register
 * @param {string} name Nombre del input
 * @param {object} errors Errores del input
 * @param {boolean} disabled Determina si el input esta deshabilitado
 * @param {props} props Propiedades del componente
 * @returns {JSX} BorderlessInput
 */
export default function BorderlessInput({
  className = "",
  variant = "primary",
  label = "",
  type = "text",
  register,
  name,
  errors = {},
  disabled = false,
  ...props
}) {
  return (
    /**
     * Componente de input sin bordes
     * que tiene soporte para manejo de
     * react hook form y errores.
     * English:
     * Input component without borders
     * that supports react hook form and errors.
     */
    <>
      <input
        id={name}
        disabled={disabled}
        className={`${theme[variant]}
            ${
              errors &&
              errors?.message &&
              "border-red-500 bg-red-100 focus:ring-red-400"
            } ${className}`}
        placeholder={label}
        type={type}
        {...props}
        {...register(name)}
      />
      <p className="mt-1 text-sm font-semibold text-red-500">
        {errors && errors?.message}
      </p>
    </>
    /**
     * Componente de input sin bordes
     * que tiene soporte para manejo de
     * react hook form y errores.
     * English:
     * Input component without borders
     * that supports react hook form and errors.
     */
  );
}
