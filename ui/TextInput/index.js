const theme = {
  primary: "border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal transition duration-500 ease-in-out hover:shadow-md"
}

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
    <>
      <label className="font-medium text-gray-500 pb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        disabled={disabled}
        className={`${theme[variant]}
            ${
              errors &&
              errors?.message &&
              "border-red-500 focus:ring-red-400 focus:border-transparent"
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
  );
}
