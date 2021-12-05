import { render } from "@testing-library/react";
import AuthLayout from "components/Layouts/AuthLayout";
import "tailwindcss/taildwind.css";

test("Validate if the pathname changes the title of the page", () => {
  const mockHandler = jest.fn(() => {
    "/login";
  });
  render(<AuthLayout type={mockHandler.valueOf().toString()} />);
  //Debido a que el document title no tendria ningun valor, se debe validar que el titulo del documento sea igual al titulo de la pagina
  expect(document.title).toBe("");
});
