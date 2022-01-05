/**
 * Icono de eliminar, se usa en la
 * sección de mis anuncios para
 * eliminar un anuncio del tablero,
 * el cual publicó un usuario.
 * English:
 * Delete icon, used in the user's ads
 * section to delete an ad from the board,
 * which a user published.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Delete
 */
export default function Delete(props) {
  /**
   * Icono de eliminar, con forma de bote
   * de basura, donde se le pasa los props
   * para poder modificarlo por className
   * desde el componente donde se utiliza.
   * (SVG convertido JSX)
   * English:
   * Delete icon, with a trash can shape,
   * where you pass the props to be able
   * to modify it by className from the
   * component where it is used.
   * (SVG converted to JSX)
   */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
    </svg>
  );
}
