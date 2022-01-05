/**
 * Icono de esconder la opcion filtrar,
 * este sirve para indicar al usuario
 * que existe una opción para filtrar
 * los anuncios del tablero y que esta
 * puede ser escondida.
 * English:
 * Hide filter icon, this is used to indicate
 * to the user that there is an option to
 * filter the ads of the board and that this
 * option can be hidden.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} FilterOff
 */
export default function FilterOff(props) {
  return (
    /**
     * Icono de apagar filtrado, silueta
     * de un embudo tachado, donde se le
     * pasa los props para poder modificarlo
     * por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Filter off icon, silhouette of a
     * pipe crossed out, where you pass
     * the props to be able to modify it
     * by className from the component
     * where it is used.
     * (SVG converted to JSX)
     */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0H24V24H0z"></path>
      <path d="M19.79 5.61A.998.998 0 0019 4H6.83l7.97 7.97 4.99-6.36zM2.81 2.81L1.39 4.22 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41L2.81 2.81z"></path>
    </svg>
  );
}
