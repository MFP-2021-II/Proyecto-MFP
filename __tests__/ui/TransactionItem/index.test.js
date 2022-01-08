import { render } from "@testing-library/react";
import TransactionItem from "ui/TransactionItem";

describe("Modulo atomico de transacciones", () => {
  const mockTipoH = "huesped";
  const mockTipoP = "";
  it("Si el tipo es huesped", () => {
    render(<TransactionItem tipo={mockTipoH} />);
  });

  it("Si el tipo es propietario", () => {
    render(<TransactionItem tipo={mockTipoP} />);
  });
});
