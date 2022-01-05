/**
 * Icono de información personal,
 * se usa en el perfil de usuario,
 * se usa para indicar al usuario
 * que se encuentra en la vista donde
 * puede modificar sus datos personales,
 * entre ellos su nombre, apellidos,
 * numero de telefono, sexo, dni, correo, etc.
 * English:
 * Icon Personal Info, used in the user profile,
 * used to indicate to the user that he is
 * in the view where he can modify his personal
 * data, among them his name, last name,
 * phone number, gender, dni, email, etc.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} PersonalInfo
 */
export default function PersonalInfo(props) {
  return (
    /**
     * Icono de información personal,
     * donde se le pasa los props para
     * poder modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Personal Info icon, where it passes the
     * props to be modified by className from
     * the component where it is used.
     */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </svg>
  );
}
