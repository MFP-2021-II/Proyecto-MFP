import { render } from "@testing-library/react";
import Reservar from "pages/app/[cardID]/reservar";

describe("Validate if the Reservar renders", () => {
  it("reservar", () => {
    render(<Reservar />);
  });
});
