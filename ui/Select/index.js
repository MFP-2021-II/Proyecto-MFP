import React from "react";

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
          className="font-medium text-gray-500 pb-2"
          variant={variant}
          htmlFor={label}
        >
          {label}
        </label>
        <select
          className={`w-full px-2 py-1 text-gray-700 border-2 bg-white shadow-sm border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${
            disabled && styles.disabled
          } ${
            errors &&
            errors?.message &&
            "border-red-300 focus:ring-red-400 focus:border-transparent"
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
        {/* <p className="text-sm font-semibold text-red-500">
          {errors && errors?.message}
        </p> */}
      </>
    );
  }
);

Select.displayName = "Select";

export default Select;
