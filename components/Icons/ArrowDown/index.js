/**
 * Icono de flecha arriba, usado como
 * botón de despliegue del dropdown en
 * la aplicación en general.
 * English:
 * Arrow up icon, used as
 * button to expand the dropdown in
 * the application in general.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} ArrowDown
 */
export default function ArrowDown(props) {
  return (
    /**
     * Icono de Flecha arriba donde se le pasa
     * los props para poder modificarlo por
     * className desde el componente donde se utiliza.
     * (SVG convertida a JSX)
     * English:
     * Arrow up icon, where you pass the props
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
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
    </svg>
  );
}
