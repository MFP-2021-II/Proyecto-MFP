/**
 * Icono de seguridad, es un
 * icono para indicar en el perfil
 * si la tarjeta de configuración
 * es la adecuada apra realizar
 * cambios en la seguridad de la
 * cuenta del usuario en el
 * sistema de Homy.
 * English:
 * Icon Security, is an icon to
 * indicate in the profile if the
 * card configuration is appropriate
 * to make changes in the security
 * of the user account in the
 * system Homy.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Security
 */
export default function Security(props) {
  return (
    /**
     * Icono de seguridad, donde se
     * le pasa los props para poder
     * modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Security icon, where it passes the
     * props to be modified by className from
     * the component where it is used.
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
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
    </svg>
  );
}
