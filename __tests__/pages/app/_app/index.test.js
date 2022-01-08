import { render } from "@testing-library/react";
import App from "pages/_app";

describe("Validate if the App renders", () => {
  it("If user exist", () => {
    render(
      <App>
        <div>Test</div>
      </App>
    );
  });

  it("If user doesn't exist", () => {
    render(<div>Test</div>);
  });
});
