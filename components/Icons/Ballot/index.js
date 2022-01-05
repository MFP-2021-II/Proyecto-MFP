/**
 * Icono de Alojamiento, silueta de usuario
 * durmiendo en una cama.
 *
 * English:
 * Accommodation icon, silhouette of a user
 * sleeping in a bed.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Ballot
 */
export default function Ballot(props) {
  return (
    /**
     * Icono de cama de usuario donde se
     * le pasa los props para poder
     * modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertida a JSX)
     * English:
     * Bed icon, where you pass the props
     * to be able to modify it by className from
     * the component where it is used.
     * (SVG converted to JSX)
     */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM11 6H6v5h5V6zm-1 4H7V7h3v3zm1 3H6v5h5v-5zm-1 4H7v-3h3v3z"></path>
    </svg>
  );
}
