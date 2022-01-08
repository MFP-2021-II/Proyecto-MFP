import { render } from "@testing-library/react";
import Dropdown from "components/Dropdowns/Dropdown";

test("Valida si el componente Dropdown se renderiza correctamente", async () => {
  const mockProps = jest.fn("String");
  render(
    <Dropdown
      children="children"
      open={true}
      className={mockProps}
      setOpen={true}
      setOpenModal
      setOpenModalNotif
      exists={true}
    />
  );
});
