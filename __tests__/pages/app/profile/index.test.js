import { render } from "@testing-library/react";
import Profile from "pages/app/profile";

test("Valida si el componente Profile se renderiza correctamente", async () => {
  render(<Profile />);
});
