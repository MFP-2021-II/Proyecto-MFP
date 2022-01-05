/**
 * Icono de usuario por defecto,
 * se muestra como foto de usuario
 * por defecto en la aplicación.
 * English:
 * Icon user by default,
 * is shown as a default user photo
 * in the application.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} User
 */
export default function User(props) {
  return (
    /**
     * Icono de foto de usuario, donde se le
     * pasa los props para poder modificarlo
     * por className desde el componente
     * donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Icon user photo, where it passes the
     * props to be modified by className from
     * the component where it is used.
     * (SVG converted JSX)
     */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 595.28 545.83"
      {...props}
    >
      <path fill="#feac4c" d="M0 0h595.28v545.83H0z" data-name="Capa 1" />
      <path
        d="M466.56 449.54q0 5.61-.39 11.13a252.17 252.17 0 01-337.08-.31q-.37-5.37-.37-10.82c0-89.93 75.63-162.84 168.92-162.84s168.92 72.91 168.92 162.84z"
        fill="#808ced"
        data-name="Capa 4"
      />
      <circle
        cx={297.64}
        cy={210.77}
        r={104.14}
        fill="#fed59c"
        data-name="Capa 3"
      />
    </svg>
  );
}
