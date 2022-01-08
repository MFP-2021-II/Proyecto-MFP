import { render } from "@testing-library/react";
import Comment from "components/InfoBoxes/Comment";

test("Valida si el componente Comment se renderiza correctamente", async () => {
  render(<Comment />);
});
