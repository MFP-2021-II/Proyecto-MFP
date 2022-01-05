/**
 * Icono de una bañera, se usa en ver
 * detalles del anuncio, se usa para
 * indicar al usuario que dispone de la
 * facilidad que es llamada jaccuzi y
 * se muestra una bañera con un monigote
 * dentro.
 * English:
 * Bathroom icon, used in view
 * details of the ad, used to
 * indicate the user that he has a
 * jaccuzi facility and a bathtub
 * with a monigote inside.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Jaccuzi
 */
export default function Jaccuzi(props) {
  return (
    /**
     * Icono de una bañera, donde se le
     * pasa los props para poder modificarlo
     * por className desde el componente donde
     * se utiliza. (SVG convertido JSX)
     * English:
     * Bathroom icon, where you pass the
     * props to be able to modify it by
     * className from the component where
     * it is used. (SVG converted to JSX)
     */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0H24V24H0z"></path>
      <circle cx="7" cy="7" r="2"></circle>
      <path d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2z"></path>
    </svg>
  );
}
