import { fireEvent, render } from "@testing-library/react";
import Register from "pages/register";

describe("Test if the Register renders", () => {
  it("If the Register renders", () => {
    render(<Register />);
  });
  it("Text if the button form send the data", () => {
    const { getByText } = render(<Register />);
    const button = getByText("Registrarse");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
  it("Text if the button cancelar is in the document", () => {
    const { getByText } = render(<Register />);
    const button = getByText("Cancelar");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
