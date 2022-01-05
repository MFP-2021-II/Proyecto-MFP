/**
 * Icono de prohibido, se usa en
 * ver detalles del anuncio, se
 * usa para indicar al usuario
 * que no se cuenta con una
 * facilidad en el alojamiento.
 * English:
 * Prohibited icon, used in
 * view details of the ad, used
 * to indicate the user that he
 * does not have a facility in
 * the accommodation.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Empty
 */
export default function Empty(props) {
  return (
    /**
     * Icono de prohibición, donde se
     * le pasa los props para poder
     * modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Prohibited icon, where you pass the
     * props to be able to modify it by
     * className from the component where
     * it is used.
     */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0112 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0112 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
    </svg>
  );
}
