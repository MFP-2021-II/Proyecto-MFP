import { render } from "@testing-library/react";
import Create from "pages/app/announcement/create";

describe("Validate if the Create renders", () => {
  it("If user exist", () => {
    render(
      <Create>
        <div>Test</div>
      </Create>
    );
  });

  it("If user doesn't exist", () => {
    render(<div>Test</div>);
  });
});
