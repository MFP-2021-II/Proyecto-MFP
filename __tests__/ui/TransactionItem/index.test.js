import { render } from "@testing-library/react";
import TransactionItem from "ui/TransactionItem";

test("Valida si el componente TransactionItem se renderiza correctamente", async () => {
  render(<TransactionItem />);
});
