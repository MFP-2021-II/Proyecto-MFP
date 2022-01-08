import { ProfileCardData } from "utils/cardData";
import PersonalInfo from "components/Icons/PersonalInfo";

test("Debe la data de la tarjeta de anuncios.", () => {
  //Make a test to check if the array contains the objects of the cards
  expect(ProfileCardData).toContainEqual({
    id: 1,
    toPath: "/app/profile/personal-info",
    children: <PersonalInfo className="fill-current text-[#56993E] w-8 h-8" />,
    titulo: "Datos personales",
    descripcion:
      "Brinda tus datos personales e indícanos cómo podemos ponernos en contacto contigo.",
  });
});
