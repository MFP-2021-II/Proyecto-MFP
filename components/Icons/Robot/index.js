/**
 * Icono de un robot, se usa para hacer
 * una metafora del sistema, en el
 * modal de notificaciones, donde el
 * sistema envia los mensajes si el
 * usuario realizó un pago o
 * recibió un pago.
 * English:
 * Icon Robot, used to make a
 * metafora of the system, in the
 * modal of notifications, where the
 * system sends the messages if the
 * user made a payment or received a
 * payment.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Robot
 */
export default function Robot(props) {
  return (
    /**
     * Icono de robot, donde se
     * le pasa los props para poder
     * modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Robot icon, where it passes the
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
      <path fill="none" d="M0 0H24V24H0z"></path>
      <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13z"></path>
    </svg>
  );
}
