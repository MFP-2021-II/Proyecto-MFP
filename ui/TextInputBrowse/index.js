const theme = {
  primary: "border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal transition duration-500 ease-in-out hover:shadow-md"
}

export default function TextInputBrowse ({
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