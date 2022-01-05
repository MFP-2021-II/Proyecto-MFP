/**
 * Objeto con los temas del campo
 * de texto de los formulario del
 * perfil de usuario.
 * English:
 * Object with the themes of the
 * text field of the user profile
 * form.
 */
const theme = {
  primary:
    "w-full border-b-2 pl-3 text-base border-0 py-1 outline-none font-medium transition bg-gray-50 duration-500 hover:bg-gray-100",
  inactive:
    "border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal",
};
/**
 * Componente que para un text input
 * de un formulario de perfil de usuario.
 * que tiene className, label, type,
 * register, name, errors, disabled,
 * y props.
 * English:
 * Component that for a text input
 * of a user profile form.
 * It has className, label, type,
 * register, name, errors, disabled,
 * and props.
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
 *
 * English:
 * className - class of the label
 * variant - theme type
 * label - label of the input
 * type - type of input
 * register - registration function
 * name - name of the input
 * errors - input errors
 * disabled - input state
 * props - input properties
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
  return (
    /**
     * Componente de input sin bordes
     * que tiene soporte para manejo de
     * react hook form y errores.
     * English:
     * Component that for a text input
     * of a user profile form.
     */
    <>
      <label className="text-black font-semibold" htmlFor={name}>
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
     * Componente de input sin bordes
     * que tiene soporte para manejo de
     * react hook form y errores.
     * English:
     * Component that for a text input
     * of a user profile form.
     */
  );
}
