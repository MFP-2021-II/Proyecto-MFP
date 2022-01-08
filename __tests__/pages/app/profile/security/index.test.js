import { render } from "@testing-library/react";
import Security from "pages/app/profile/security";

describe("Validate if the Security renders", () => {
  it("render Security", () => {
    render(<Security />);
  });
});
