import { render } from "@testing-library/react";
import LandingCard from "components/Card/LandingCard";

test("Valida si el componente LandingCard se renderiza correctamente", async () => {
  render(<LandingCard toPath="/app" />);
});
