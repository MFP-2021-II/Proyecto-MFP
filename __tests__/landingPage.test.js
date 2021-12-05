/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import Isotype from "components/Icons/Isotype";
import LandingButton from "components/Buttons/LandingButton";
import LandingDropdown from "components/Dropdowns/LandingDropdown";

/**
 * Test para validar si el componente LandingButton redirecciona a la página de resgistro
 */
// test("Comprobar el boton de bienvenida del landing page redirecciona a /register", () => {
//   const note = {
//     content: "¡Reservar ahora!",
//     important: true,
//   };
//   render(<LandingButton toPath="/register" note={note} />);
// });
describe("LandingButton", () => {
  it("Comprobar texto del landing button", () => {
    render(<LandingButton toPath="/register" />);
    waitFor(() =>
      expect(screen.queryByText(/¡Reservar ahora!/i)).toBeInTheDocument()
    );
    console.log(screen.queryByText(/¡Reservar ahora!/i));
  });
});

/**
 * Test para validar si el componente Isotype se renderiza correctamente
 */
test("Comprobar el isotipo del landing page", () => {
  const note = {
    important: true,
  };
  render(<Isotype note={note} />);
});

/**
 * Test para validar si el dropdown de la vista movil se renderiza correctamente
 */
test("Comprobar el dropdown del landing page", () => {
  const note = {
    content: "Dropdown del landing page",
    important: true,
  };
  render(<LandingDropdown note={note} />);
});
