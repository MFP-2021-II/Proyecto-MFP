import { render } from "@testing-library/react";
import Edit from "pages/app/announcement/edit/[cardID]";

describe("Validate if the Edit renders", () => {
  it("If user exist", () => {
    render(
      <Edit>
        <div>Test</div>
      </Edit>
    );
  });
  it("If user doesn't exist", () => {
    render(<div>Test</div>);
  });
});
