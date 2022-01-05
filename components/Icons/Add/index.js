/**
 * Icono de Agregar, se utiliza en la vista de
 * crear anuncios, en la sección de mis anuncios
 * del usuario.
 * English:
 * Add icon, used in the view of creating ads,
 * in the user's ads section.
 *
 * props son las propiedades del icono
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Add
 */
export default function Add(props) {
  return (
    /**
     * Icono de Agregar donde se le pasa los
     * props para poder modificarlo por className
     * desde el componente donde se utiliza.
     * (SVG convertida a JSX)
     * English:
     * Add icon, where you pass the props
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
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
    </svg>
  );
}
