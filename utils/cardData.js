import PersonalInfo from "components/Icons/PersonalInfo";
import Security from "components/Icons/Security";
import Payment from "components/Icons/Payment";

export const ProfileCardData = [
  {
    toPath: "/app/profile/personal-info",
    children: <PersonalInfo className="fill-current text-[#56993E] w-8 h-8" />,
    titulo: "Datos personales",
    descripcion:
      "Brinda tus datos personales e indícanos cómo podemos ponernos en contacto contigo.",
  },
  {
    toPath: "/app/profile/security",
    children: <Security className="fill-current text-[#56993E] w-7 h-7" />,
    titulo: "Seguridad de la cuenta",
    descripcion: "Actualice su contraseña y brinde una protección a su cuenta.",
  },
  {
    toPath: "/app/profile/record",
    children: <Payment className="fill-current text-[#56993E] w-8 h-8" />,
    titulo: "Ver historial de pagos",
    descripcion:
      "Proporciona una vista de las fechas de pago y nombre de alojamientos.",
  },
];
