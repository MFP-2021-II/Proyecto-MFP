import { render } from "@testing-library/react";
import Sample from "components/InfoBoxes/Sample";

test("Valida si el componente Sample se renderiza correctamente", async () => {
  render(<Sample />);
});
