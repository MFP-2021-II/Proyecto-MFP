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
test("Validar redireccionamiento de boton de bienvenida", () => {
  const note = {
    content: "/register",
    important: true,
  };
  const component = render(<LandingButton toPath="/register" note={note} />);
  waitFor(() =>
    expect(component.container.querySelector("a")).toHaveAttribute(
      "href",
      "/register"
    )
  );
});

/**
 * Test para validad si el texto del landing button es correcto
 */
describe("LandingButton", () => {
  it("Comprobar children adecuado dentro del landing button", () => {
    render(<LandingButton toPath="/register" />);
    waitFor(() =>
      expect(screen.queryByText(/¡Reservar ahora!/i)).toBeInTheDocument()
    );
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
