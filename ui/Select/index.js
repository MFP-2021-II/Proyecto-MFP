import React from "react";

const theme = {
  primary:
    "w-full border-b-2 mb-4 pl-3 text-base font-bold border-0 py-1 outline-none font-medium transition duration-500 hover:bg-gray-100",
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
          className="pb-2 font-medium text-gray-500"
          variant={variant}
          htmlFor={label}
        >
          {label}
        </label>
        <select
          className={`${theme[variant]}`}
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
        {/* <p className="text-sm font-semibold text-red-500">
          {errors && errors?.message}
        </p> */}
      </>
    );
  }
);

Select.displayName = "Select";

export default Select;
