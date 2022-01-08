import { render } from "@testing-library/react";
import Record from "pages/app/profile/record";

describe("Validate if the Record renders", () => {
  it("render Record", () => {
    render(<Record />);
  });
});
