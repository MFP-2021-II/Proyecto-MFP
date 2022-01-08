import { render } from "@testing-library/react";
import TextArea from "ui/TextArea";

test("Validate if the TextArea renders", () => {
  const mockHandler = jest.fn(() => null);
  //Make a mock for an error type object from yup
  const mockError = {
    type: "required",
    message: "El campo es requerido",
  };
  render(<TextArea register={mockHandler} errors={mockError} />);
});
