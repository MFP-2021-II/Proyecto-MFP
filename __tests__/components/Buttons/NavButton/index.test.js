import { render, fireEvent } from "@testing-library/react";
import NavButton from "components/Buttons/NavButton";

test("Validar si el NavButton es responde a las pulsaciones", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <NavButton onClick={handleClick}>Test</NavButton>
  );
  const button = getByText("Test");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
