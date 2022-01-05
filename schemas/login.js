/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 */
import * as yup from "yup";

/**
 * Esquema de validación de los
 * datos del formulario se tiene el correo,
 * contraseña y captcha.
 * English:
 * Schema of the form validation
 * has the email, password and captcha.
 */
export const loginSchema = yup.object({
  correo: yup
    .string()
    .email()
    .required("El correo es requerido")
    .typeError("El correo no es válido"),
  contraseña: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es requerida"),

  captcha: yup.string().required("El captcha es requerido"),
});
/**
 * Esquema de validación de los
 * datos del formulario se tiene el correo,
 * contraseña y captcha.
 * English:
 * Schema of the form validation
 * has the email, password and captcha.
 */
