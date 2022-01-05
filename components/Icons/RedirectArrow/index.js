/**
 * Icono de flecha para redireccionar,
 * es usada en conjunto con el landingButton
 * donde se hace referencia al redireccionamiento
 * al momento de dar click en el boton
 * de registrarse en el landing page.
 * English:
 * Icon arrow to redirect, used in
 * conjunction with the landingButton
 * where it is referenced to the redirection
 * at the moment of clicking the button
 * of register in the landing page.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} RedirectArrow
 */
export default function RedirectArrow(props) {
  return (
    /**
     * Icono de redireccionamiento en
     * la página principal de la aplicación,
     * donde se le pasa los props para poder
     * modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Icon redirect in the main page
     * of the application, where it passes
     * the props to be modified by className
     * from the component where it is used.
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
      <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
    </svg>
  );
}
