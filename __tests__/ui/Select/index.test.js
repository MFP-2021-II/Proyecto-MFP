import { render, waitFor } from "@testing-library/react";
import Select from "ui/Select";

test("Comprobar si el Select se renderiza adecuadamente el arreglo", () => {
  const tipoAlojamientos = ["Hola"];
  const component = render(
    <Select
      options={tipoAlojamientos.map((el) => ({
        value: el?.id,
        label: el?.descripcion,
      }))}
    />
  );
  waitFor(() => {
    expect(component.getByLabelText("Hola")).toBeInTheDocument();
  });
});
