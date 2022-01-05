/**
 * Icono de Bloqueado, se usa en el
 * perfil del usuario, se usa para
 * indicar al usuario que se encuentra
 * en una zona donde puede modificar
 * sus credenciales de acceso a la plataforma.
 * English:
 * Icon Lock, used in the user profile,
 * used to indicate to the user that he is
 * in a zone where he can modify his
 * credentials of access to the platform.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Lock
 */
export default function Lock(props) {
  return (
    /**
     * Icono de bloqueo, donde se le pasa
     * los props para poder modificarlo
     * por className desde el componente
     * donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Lock icon, where it passes the props
     * to be modified by className from the
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
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
    </svg>
  );
}
