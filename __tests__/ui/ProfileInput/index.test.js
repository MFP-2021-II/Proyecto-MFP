import { render } from "@testing-library/react";
import ProfileInput from "ui/ProfileInput";

test("Validate if the ProfileInput renders", () => {
  const mockHandler = jest.fn(() => null);
  render(<ProfileInput register={mockHandler} />);
});
