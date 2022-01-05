/**
 * Define los estilos de input.
 * English:
 * Define the input styles.
 * @type {{primary: string,inactive:string}}
 */
const theme = {
  primary:
    "border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal transition duration-500 ease-in-out hover:shadow-md",
  inactive:
    "border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal",
};

/**
 * Componente atomico de una variante
 * del input.
 * English:
 * Atomic component of an input variant.
 *
 * className - clase de la etiqueta
 * variant - tipo de tema
 * label - etiqueta del input
 * type - tipo de input
 * register - funcion de registro
 * name - nombre del input
 * errors - errores del input
 * disabled - estado del input
 * props - propiedades del input
 * English:
 * className - class of the label
 * variant - theme type
 * label - label of the input
 * type - input type
 * register - register function
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
 * @returns {JSX} TextInput
 */
export default function TextInput({
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
  console.log(errors);
  return (
    /**
     * Componente de input de tipo texto.
     * que tiene soporte para manejo de
     * react hook form y errores.
     * English:
     * Input of type text.
     * that supports react hook form and errors.
     */
    <>
      <label className="pb-2 font-medium text-gray-500" htmlFor={name}>
        {label}
      </label>
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
      <p
        className={`mb-2 sm:mb-5 text-sm font-semibold text-red-500 ${
          errors && errors?.message && "mt-0 sm:mt-0"
        }`}
      >
        {errors && errors?.message}
      </p>
    </>
    /**
     * Componente de input de tipo
     * texto. que tiene soporte para
     * manejo de react hook form
     * y errores.
     * English:
     * Input of type text.
     * that supports react hook
     * form and errors.
     */
  );
}
