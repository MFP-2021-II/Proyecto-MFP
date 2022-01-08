import { render } from "@testing-library/react";
import UserContextProvider from "context/UserContext";

describe("Validate if the UserContext renders", () => {
  it("If user exist", () => {
    render(
      <UserContextProvider>
        <div>Test</div>
      </UserContextProvider>
    );
  });

  it("If user doesn't exist", () => {
    render(<div>Test</div>);
  });
});
