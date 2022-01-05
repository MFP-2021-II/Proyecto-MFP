/**
 * Icono de estrella vacía, indica
 * que el usuario aún no ha dejado
 * su calificación seleccionado las
 * estrellas como medio de puntaje
 * del alojamiento en el cual se encuentra.
 * English:
 * Icon Star Empty, indicates that the
 * user has not yet left his rating selected
 * stars as a score of the accommodation
 * in which he is.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Star
 */
export default function Star(props) {
  return (
    /**
     * Icono de estrella vacia, donde se
     * le pasa los props para poder
     * modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Star Empty icon, where it passes the
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
      <g fill="none">
        <path d="M0 0h24v24H0V0z"></path>
        <path d="M0 0h24v24H0V0z"></path>
      </g>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
    </svg>
  );
}
