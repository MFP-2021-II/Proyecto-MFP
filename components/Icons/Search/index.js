/**
 * Icono de buscar, se usa en
 * en la vista de ver alojamientos,
 * donde se usa este icono para
 * indicar que es una sección donde
 * se aplica la busqueda o filtrado
 * por nombre de la tarjeta del anuncio.
 * English:
 * Icon Search, used in the view
 * of accommodation, where it is used
 * this icon to indicate that it is a
 * section where the search or filter
 * by name of the card of the advertisement.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Search
 */
export default function Search(props) {
  return (
    /**
     * Icono de buscar, donde se
     * le pasa los props para poder
     * modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Search icon, where it passes the
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
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
    </svg>
  );
}
