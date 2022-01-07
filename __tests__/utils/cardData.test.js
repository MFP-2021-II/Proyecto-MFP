import { cardData } from "utils/cardData";
import PersonalInfo from "components/Icons/PersonalInfo";
import Security from "components/Icons/Security";
import Payment from "components/Icons/Payment";

test("Debe la data de la tarjeta de anuncios.", () => {
  const data = [{ ...PersonalInfo }, { ...Security }, { ...Payment }];
  expect(cardData).toEqual(data);
});
