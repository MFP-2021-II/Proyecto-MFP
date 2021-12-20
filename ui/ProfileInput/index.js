const theme = {
  primary:
    "w-full border-b-2 pl-3 text-base font-bold border-0 py-1 outline-none font-medium transition duration-500 hover:bg-gray-100",
  inactive:
    "border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal",
};

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
  );
}
