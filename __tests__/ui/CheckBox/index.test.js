import { render } from "@testing-library/react";
import CheckBox from "ui/CheckBox";

test("Validate if the CheckBox renders", () => {
  const mockHandler = jest.fn(() => null);
  render(<CheckBox register={mockHandler} />);
});
