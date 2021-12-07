/**
 * Componente atomico de input tipo textarea
 * @param {object} register Referencia al register
 * @returns {JSX} TextArea
 */
export default function TextArea({ name, register, errors }) {
  return (
    <>
      <label className="flex flex-col mb-2 font-medium text-gray-500">
        Descripcion
      </label>
      <textarea
        className={`w-full h-16 resize-none pt-2 border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none ${
          errors &&
          errors?.message &&
          "border-red-500 bg-red-100 focus:ring-red-400"
        }`}
        name={name}
        {...register(name)}
        placeholder="Escribe una descripción..."
      />
      <p
        className={`mb-2 sm:mb-5 text-sm font-semibold text-red-500 ${
          errors && errors?.message && "mt-0 sm:mt-0"
        }`}
      >
        {errors && errors?.message}
      </p>
    </>
  );
}
