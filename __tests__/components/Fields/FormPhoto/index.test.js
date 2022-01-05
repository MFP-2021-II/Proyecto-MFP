import { render } from "@testing-library/react";
import FormPhoto from "components/Fields/FormPhoto";

test("Valida si el componente FormFhoto se renderiza correctamente", async () => {
  const setRegister = jest.fn(() => null);
  render(<FormPhoto register={setRegister} />);
});
