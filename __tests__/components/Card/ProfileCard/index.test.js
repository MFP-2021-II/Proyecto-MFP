import { render } from "@testing-library/react";
import ProfileCard from "components/Card/ProfileCard";

test("Valida si el componente ProfileCard se renderiza correctamente", async () => {
  render(<ProfileCard toPath="/app" />);
});
