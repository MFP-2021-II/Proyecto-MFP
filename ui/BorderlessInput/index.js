const theme = {
  primary:
    "w-full bg-gray-100 text-2xl font-bold border-0 rounded-lg py-1 outline-none font-medium transition duration-500 hover:shadow-lg",
  secondary:
    "w-full bg-gray-100 text-md font-bold border-0 rounded-lg py-1 outline-none font-normal transition duration-500 hover:bg-gray-900 hover:shadow-lg",
};

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
    <>
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
