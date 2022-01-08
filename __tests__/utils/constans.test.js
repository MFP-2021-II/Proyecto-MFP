import { diccionarioCaracteristicas } from "utils/constants";

test("Debe contener los elementos del select", () => {
  //Make a test to check if the array contains the elements of the select
  expect(diccionarioCaracteristicas).toContain("Habitaciones");
});
