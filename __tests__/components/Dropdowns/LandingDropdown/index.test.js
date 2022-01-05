import { render } from "@testing-library/react";
import LandingDropdown from "components/Dropdowns/LandingDropdown";

test("Valida si el componente LandingDropdown se renderiza correctamente", async () => {
  render(<LandingDropdown />);
});
