import { render, screen } from "@testing-library/react";
import Login from "pages/login";

describe("Validate if the Login renders", () => {
  it("If the Login renders", () => {
    render(<Login />);
  });
  it("Text if the button form send the data", () => {
    const { getByText } = render(<Login />);
    const button = getByText("Iniciar sesión");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});

// atest("Validate if useRouter() is defined", () => {
//   aconst mockHandler = jest.fn(() => ({
//     __esModule: true,
//     useRouter: jest.fn(),
//   }));
// });

// test("Test onSubmit() with real data", async () => {
//   const data = {
//     correo: "raillyhugo@gmail.com",
//     contraseña: "Contra123",
//   };

//   act(() => {
//     render(<Login />);
//     screen.getByLabelText("Correo electrónico").value = data.correo;
//     screen.getByLabelText("Contraseña").value = data.contraseña;
//     screen.getByText("Iniciar sesión").click();
//     expect(screen.getByText("Iniciar sesión")).toBeInTheDocument();
//   });
// });
