import { render } from "@testing-library/react";
import TextArea from "ui/TextArea";

test("Validate if the TextArea renders", () => {
  const mockHandler = jest.fn(() => null);
  render(<TextArea register={mockHandler} />);
});
