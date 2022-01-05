/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 */
import PersonalInfo from "components/Icons/PersonalInfo";
import Security from "components/Icons/Security";
import Payment from "components/Icons/Payment";

/**
 * Un array de objetos que contiene
 * los datos de las tarjetas de la
 * página de perfil de usuario.
 * English:
 * An array of objects that contains
 * the data of the user profile page
 * cards.
 */
export const ProfileCardData = [
  {
    id: 1,
    toPath: "/app/profile/personal-info",
    children: <PersonalInfo className="fill-current text-[#56993E] w-8 h-8" />,
    titulo: "Datos personales",
    descripcion:
      "Brinda tus datos personales e indícanos cómo podemos ponernos en contacto contigo.",
  },
  {
    id: 2,
    toPath: "/app/profile/security",
    children: <Security className="fill-current text-[#56993E] w-7 h-7" />,
    titulo: "Seguridad de la cuenta",
    descripcion: "Actualice su contraseña y brinde una protección a su cuenta.",
  },
  {
    id: 3,
    toPath: "/app/profile/record",
    children: <Payment className="fill-current text-[#56993E] w-8 h-8" />,
    titulo: "Ver historial de pagos",
    descripcion:
      "Proporciona una vista de las fechas de pago y nombre de alojamientos.",
  },
];
/**
 * Un array de objetos que contiene
 * los datos de las tarjetas de la
 * página de perfil de usuario.
 * English:
 * An array of objects that contains
 * the data of the user profile page
 * cards.
 */
