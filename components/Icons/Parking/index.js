/**
 * Icono de parking, se usa en
 * ver detalles del anuncio,
 * se usa para indicar al usuario
 * que no se cuenta con una facilidad
 * en el parqueo en ese alojamiento.
 * English:
 * Icon Parking, used in view details
 * of the advertisement, used to indicate
 * to the user that he does not have a
 * facility in the parking in that accommodation.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Parking
 */
export default function Parking(props) {
  return (
    /**
     * Icono de parqueo, donde se
     * le pasa los props para poder
     * modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Parking icon, where it passes the
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
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"></path>
    </svg>
  );
}
