import AppLayout from "components/Layouts/AppLayout";
import { render } from "@testing-library/react";

test("Valida si el componente AppLayout se renderiza correctamente", async () => {
  const location = { pathname: "/dashboard/" };

  jest.mock("next/router", () => ({
    useRouter() {
      return {
        route: "/",
        pathname: "",
        query: "",
        asPath: "",
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn(),
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null),
      };
    },
  }));

  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null),
  }));

  const comp = jest.fn(<div />);
  const pages = jest.fn("a");
  render(
    <AppLayout Component={comp} pageProps={pages} useRouter={useRouter} />
  );
});
