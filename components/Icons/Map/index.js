/**
 * Icono de flecha mapa, indica
 * al usuario que se encuentra en
 * la sessión de ver detalles,
 * que puede ubicar la dirección del
 * inmueble por medio de este icono.
 * English:
 * Icon Map Arrow, indicates to the
 * user that he is in the session of
 * view details, that can locate the
 * address of the property through
 * this icon.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Map
 */
export default function Map(props) {
  return (
    /**
     * Icono de mapa, donde se le pasa
     * los props para poder modificarlo
     * por className desde el componente
     * donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Map icon, where it passes the props
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
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"></path>
    </svg>
  );
}
