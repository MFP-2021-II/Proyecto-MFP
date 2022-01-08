import { render } from "@testing-library/react";
import BorderlessInput from "ui/BorderlessInput";

describe("Validate if the BorderlessInput renders", () => {
  const mockHandler = jest.fn(() => null);
  //make mock for an error type object from yup
  const mockError = {
    type: "required",
    message: "El campo es requerido",
  };
  it("If error exist", () => {
    render(<BorderlessInput register={mockHandler} errors={mockError} />);
  });
  it(" If error doesn't exists", () => {
    render(<BorderlessInput register={mockHandler} />);
  });
});
