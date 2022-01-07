import { render } from "@testing-library/react";
import BorderlessInput from "ui/BorderlessInput";

test("Validate if the BorderlessInput renders", () => {
  const mockHandler = jest.fn(() => null);
  render(<BorderlessInput register={mockHandler} />);
});
