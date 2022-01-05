/**
 * Icono de de cerrar, se utiliza en los
 * modals de la aplicación y también en
 * la sección de mis anuncios.
 * English:
 * Close icon, used in the modals of the
 * application and also in the user's ads section.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Close
 */
export default function Close(props) {
  /**
   * Icono de cerrar donde se le pasa los
   * props para poder modificarlo por
   * className desde el componente donde
   * se utiliza. (SVG convertido JSX)
   * English:
   * Close icon, where you pass the props
   * to be able to modify it by className from
   * the component where it is used. (SVG converted to JSX)
   */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
    </svg>
  );
}
