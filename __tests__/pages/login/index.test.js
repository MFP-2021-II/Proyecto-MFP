import { render, screen } from "@testing-library/react";
import Login from "pages/login";
import { act } from "react-dom/test-utils";

test("Validate if the pathname changes the title of the page", () => {
  const mockHandler = jest.fn(() => {
    "/login";
  });
  const { getByText } = render(
    <Login type={mockHandler.valueOf().toString()} />
  );
  expect(getByText("Inicia sesión")).toBeInTheDocument();
});

test("Validate if useRouter() is defined", () => {
  const mockHandler = jest.fn(() => ({
    __esModule: true,
    useRouter: jest.fn(),
  }));
});

test("Test onSubmit() with real data", async () => {
  const data = {
    correo: "raillyhugo@gmail.com",
    contraseña: "Contra123",
  };

  act(() => {
    render(<Login />);
    screen.getByLabelText("Correo electrónico").value = data.correo;
    screen.getByLabelText("Contraseña").value = data.contraseña;
    screen.getByText("Iniciar sesión").click();
    expect(screen.getByText("Iniciar sesión")).toBeInTheDocument();
  });
});
