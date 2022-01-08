import { render } from "@testing-library/react";
import TextInput from "ui/TextInput";

describe("Validate if the TextInput renders", () => {
  const mockHandler = jest.fn(() => null);
  const mockError = {
    type: "required",
    message: "El campo es requerido",
  };
  it("If error exist", () => {
    render(<TextInput register={mockHandler} errors={mockError} />);
  });

  it("If error doesn't exists", () => {
    render(<TextInput register={mockHandler} />);
  });
});
