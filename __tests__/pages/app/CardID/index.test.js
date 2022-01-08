import { render } from "@testing-library/react";
import CardID from "pages/app/[CardID]";

describe("Validate if the CardID renders", () => {
  it("If user exist", () => {
    render(
      <CardID>
        <div>Test</div>
      </CardID>
    );
  });

  it("If user doesn't exist", () => {
    render(<div>Test</div>);
  });

  it("If user is false", () => {
    render(<CardID user={jest.fn()} />);
  });
});
