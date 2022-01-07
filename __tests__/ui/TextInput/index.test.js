import { render } from "@testing-library/react";
import TextInput from "ui/TextInput";

test("Validate if the TextInput renders", () => {
  const mockHandler = jest.fn(() => null);
  render(<TextInput register={mockHandler} />);
});
