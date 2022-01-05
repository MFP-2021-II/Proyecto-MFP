/**
 * Icono de eliminar, se usa en la sección
 * de mis anuncios para editar un anuncio
 * del tablero, el cual publicó un usuario.
 * English:
 * Delete icon, used in the user's ads
 * section to edit an ad from the board,
 * which a user published.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Edit
 */
export default function Edit(props) {
  return (
    /**
     * Icono de editar, con forma de lapiz,
     * donde se le pasa los props para poder
     * modificarlo por className desde el
     * componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Edit icon, with a pencil shape,
     * where you pass the props to be able
     * to modify it by className from the
     * component where it is used.
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
      <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path>
    </svg>
  );
}
