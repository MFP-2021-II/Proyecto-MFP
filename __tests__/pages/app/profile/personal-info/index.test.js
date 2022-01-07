import { render } from "@testing-library/react";
import PersonalInfo from "pages/app/profile/personal-info";

test("Valida si el componente PersonalInfo se renderiza correctamente", async () => {
  render(<PersonalInfo />);
});
