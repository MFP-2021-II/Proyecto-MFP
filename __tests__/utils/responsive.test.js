import { screenSizes } from "utils/responsive";

test("Debe contener los breakpoints de las pantallas", () => {
  expect(screenSizes).toBeDefined();
});
