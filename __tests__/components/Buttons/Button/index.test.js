import { render, fireEvent } from "@testing-library/react";
import Button from "components/Buttons/Button";

test("Validar si el componente Button se pulsó una vez", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Hola</Button>);
  const button = getByText("Hola");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Validar la propiedad disable del boton", () => {
  const mockHandler = jest.fn(() => true);
  const { getByText } = render(
    <Button disable={mockHandler().valueOf().toString()}>Prueba</Button>
  );
  const button = getByText("Prueba");
  fireEvent.click(button);
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
