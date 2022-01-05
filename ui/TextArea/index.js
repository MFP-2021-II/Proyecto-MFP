/**
 * Componente atomico de input tipo textarea
 * English:
 * Atomic component of input type textarea
 *
 * name - nombre del input
 * label - etiqueta del input
 * value - valor del input
 * errors - errores del input
 * register - funcion de registro
 * placeholder - placeholder del input
 *
 * English:
 * name - name of the input
 * label - label of the input
 * value - value of the input
 * errors - input errors
 * register - registration function
 * placeholder - placeholder of the input
 * @param {object} register Referencia al register
 * @returns {JSX} TextArea
 */
export default function TextArea({
  name,
  register,
  errors,
  label,
  placeholder,
}) {
  return (
    /**
     * Componente de input tipo textarea
     * que tiene soporte para manejo de
     * react hook form y errores.
     * English:
     * Input component type textarea
     * that supports react hook form and errors.
     */
    <>
      <label className="flex flex-col mb-2 font-medium text-gray-500">
        {label}
      </label>
      <textarea
        className={`w-full h-16 resize-none pt-2 border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none ${
          errors &&
          errors?.message &&
          "border-red-500 bg-red-100 focus:ring-red-400"
        }`}
        name={name}
        {...register(name)}
        placeholder={placeholder}
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
     * Componente de input tipo textarea
     * que tiene soporte para manejo
     * de react hook form y errores.
     * English:
     * Input component type textarea
     * that supports react hook form
     * and errors.
     */
  );
}
