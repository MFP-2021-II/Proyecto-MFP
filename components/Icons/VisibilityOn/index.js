/**
 * Icono de activar visibilidad de campo,
 * se utiliza en la campos de contraseña
 * en la vista de registro e inicio
 * de sesión del usuario.
 * English:
 * Icon active Visibility Field,
 * used in the password fields
 * in the registration and login
 * user view.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} VisibilityOn
 */
export default function VisibilityOn(props) {
  return (
    /**
     * Icono de activar visibilidad
     * de un campo, donde se le pasa
     * los props para poder
     * modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Icon active visibility field,
     * where it passes the props to be
     * modified by className from the
     * component where it is used.
     * (SVG converted JSX)
     */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"></path>
    </svg>
  );
}
