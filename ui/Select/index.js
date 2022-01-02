import React from "react";

const theme = {
  primary:
    "border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal transition duration-500 ease-in-out hover:shadow-md",
  secondary:
    "border-solid border-b-2 text-base font-medium bg-gray-50 transition duration-500 hover:bg-gray-100 pl-3 py-1 outline-none font-medium text-black mb-2 sm:mb-5",
  inactive:
    "border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal",
};

/**
 * Define los estilos de select.
 * @type {{styles: string}}
 */
const styles = {
  disabled: "disabled:bg-gray-200 text-gray-500",
};
/**
 * Componente atomico de input de tipo select.
 * @param {string} className Clases adicionales para el componente.
 * @param {object} option Propiedades del componente.
 * @param {string} label Texto del label
 * @param {string} value Valor del input
 * @param {string} name Nombre del input
 * @param {object} errors Errores del input
 * @param {string} variant Tipo de estilo del input
 * @param {boolean} disabled Determina si el input esta deshabilitado
 * @param {onChange} onChange Funcion para cambiar el valor del input
 * @param {onBlur} onBlur Funcion para cambiar el valor del input
 * @returns {JSX} Select
 */
const Select = React.forwardRef(
  (
    {
      className = "",
      options,
      label,
      value,
      name,
      errors,
      variant,
      disabled,
      onChange,
      onBlur,
    },
    ref
  ) => {
    return (
      <>
        <label
          className={`font-medium ${
            variant === "secondary" ? "text-black pb-0" : "text-gray-500 pb-2"
          }`}
          variant={variant}
          htmlFor={label}
        >
          {label}
        </label>
        <select
          className={`${theme[variant]}
            ${
              errors &&
              errors?.message &&
              "border-red-500 bg-red-100 focus:ring-red-400"
            } ${className}`}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          name={name}
          value={value || undefined}
        >
          <option hidden value="">
            Seleccione una opción
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p className="text-sm font-semibold text-red-500">
          {errors && errors?.message}
        </p>
      </>
    );
  }
);

Select.displayName = "Select";

export default Select;
