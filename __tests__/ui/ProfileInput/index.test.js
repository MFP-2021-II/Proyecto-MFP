import { render } from "@testing-library/react";
import ProfileInput from "ui/ProfileInput";

test("Validate if the ProfileInput renders", () => {
  const mockHandler = jest.fn(() => null);
  //make mock for an error type object from yup
  const mockError = {
    type: "required",
    message: "El campo es requerido",
  };
  render(<ProfileInput register={mockHandler} errors={mockError} />);
});
