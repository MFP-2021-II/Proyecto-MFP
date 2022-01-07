import AppLayout from "components/Layouts/AppLayout";
import { render } from "@testing-library/react";
import * as nextRouter from "next/router";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const comp = jest.fn(<div />);
const pages = jest.fn("a");

describe("Valida si el componente Applayout se renderiza correctamente", () => {
  it("Debe renderizar el componente AppLayout", () => {
    useRouter.mockImplementation(() => ({
      route: "/app",
      pathname: "/app",
      query: "",
      asPath: "",
    }));
    const { container } = render(
      <AppLayout Component={comp} pageProps={pages} />
    );
    expect(container).toMatchSnapshot();
  });
});

// test("Valida si el componente AppLayout se renderiza correctamente", async () => {
//   nextRouter.useRouter = jest.fn();
//   nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));

//   useRouter.mockImplementation(() => ({
//     route: "/",
//     pathname: "",
//     query: "",
//     asPath: "",
//     push: jest.fn(),
//     events: {
//       on: jest.fn(),
//       off: jest.fn(),
//     },
//     beforePopState: jest.fn(() => null),
//     prefetch: jest.fn(() => null),
//   }));

//   render(
//     <AppLayout Component={comp} pageProps={pages} useRouter={useRouter} />
//   );
// });
