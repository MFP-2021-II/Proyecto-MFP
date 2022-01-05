/**
 * Icono de favoritos, se usa en ver
 * detalles del anuncio, se usa para
 * indicar al usuario que tiene un
 * anuncio favorito y desea guadarlo.
 * English:
 * Favorites icon, used in view
 * details of the ad, used to
 * indicate the user that he has a
 * favorite ad and wants to save it.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Fav
 */
export default function Fav(props) {
  return (
    /**
     * Icono de favorito, silueta de corazon,
     * donde se le pasa los props para poder
     * modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Favorite icon, heart silhouette,
     * where you pass the props to be able
     * to modify it by className from
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
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    </svg>
  );
}
