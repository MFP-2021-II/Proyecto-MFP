import * as yup from "yup";

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
});
