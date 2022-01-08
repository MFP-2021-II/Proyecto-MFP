import { fireEvent, render } from "@testing-library/react";
import BiStateButton from "ui/BiStateButton";

describe("Validate if the BiState Button renders", () => {
  it("If the button is active", () => {
    const { container } = render(<BiStateButton />);
    const bistate = container.querySelector("div");
    fireEvent.click(bistate);
    const anotherbistate = container.querySelector("div");
    //expect anotherbistate to have text "".
    expect(anotherbistate.textContent).toBe("");
  });
});
