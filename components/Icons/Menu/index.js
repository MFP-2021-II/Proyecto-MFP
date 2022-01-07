/**
 * Icono de menu, este icono proporcinar
 * una vista de elementos desplegables a los
 * usuarios que lo están viendo desde pantallas
 * de dispositivos móviles, esta opción
 * despliega una lista de opciones que pueden
 * ser accedidas desde el menú, Inicio, Nostros,
 * Contacto, Inicio de sesión, Registro, etc.
 * English:
 * Icon Menu, this icon provides a view of
 * elements that are displayed from screens
 * of mobile devices, this option displays a
 * list of options that can be accessed from
 * the menu, Home, About us, Contact, Login,
 * Registration, etc.
 * Francais:
 * Icon Menu, cet icone fournit une vue
 * d'éléments qui sont affichés depuis
 * les écrans de dispositifs mobiles, cette
 * option affiche une liste d'options qui
 * peuvent être accédées depuis le menu,
 * Accueil, A propos de nous, Contact,
 * Connexion, Inscription, etc.
 * Portuguese:
 * Menu de ícone, este ícone proporciona
 * uma vista de elementos desplegados aos
 * usuários que o estão vendo de telas
 * de dispositivos móveis, esta opção
 * exibe uma lista de opções que podem ser
 * acessadas a partir do menu, Início,
 * Sobre nós, Contato, Entrar, Registro,
 * etc.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Menu
 */
export default function Menu(props) {
  return (
    /**
     * Icono de menú, donde se le pasa los props
     * para poder modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Menu icon, where it passes the props
     * to be modified by className from the
     * component where it is used.
     * (SVG converted JSX)
     * Francais:
     * Icon Menu, où il passe les props
     * pour pouvoir les modifier par className
     * depuis le composant où il est utilisé.
     * (SVG converti JSX)
     * Português:
     * Ícone do menu, onde ele passa as props
     * para poder modificá-lo por className do
     * componente onde ele está sendo usado.
     * (SVG convertido JSX)
     */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="27"
      fill="none"
      viewBox="0 0 26 27"
      {...props}
    >
      <rect width="11.513" height="11.513" fill="#060606" rx="3"></rect>
      <rect
        width="11.513"
        height="11.513"
        x="13.741"
        y="14.855"
        fill="#060606"
        rx="3"
      ></rect>
      <rect
        width="11.513"
        height="11.513"
        y="14.855"
        fill="#060606"
        rx="3"
      ></rect>
      <rect
        width="11.513"
        height="11.513"
        x="13.741"
        fill="#060606"
        rx="3"
      ></rect>
    </svg>
  );
}
