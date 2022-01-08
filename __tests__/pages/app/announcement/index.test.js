import { render } from "@testing-library/react";
import Announcement from "pages/app/announcement";

describe("Validate if the Announcement renders", () => {
  it("If user exist", () => {
    render(
      <Announcement>
        <div>Test</div>
      </Announcement>
    );
  });

  it("If user doesn't exist", () => {
    render(<div>Test</div>);
  });
});
