import LandingLayout from "components/Layouts/LandingLayout";
import { render } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Validate if the LandingLayout renders", () => {
  it("If the LandingLayout renders", () => {
    render(<LandingLayout />);
  });
  it("Validate if the button is pressed", () => {
    const { container } = render(<LandingLayout />);
    const button = container.querySelectorAll("a")[2];
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
  it("Should render correctly on route: /", async () => {
    useRouter.mockImplementationOnce(() => ({
      basePath: "/",
      pathname: "/",
      route: "/",
      query: {},
      asPath: "/",
      push: jest.fn(() => Promise.resolve(true)),
      replace: jest.fn(() => Promise.resolve(true)),
      reload: jest.fn(() => Promise.resolve(true)),
      prefetch: jest.fn(() => Promise.resolve()),
      back: jest.fn(() => Promise.resolve(true)),
      beforePopState: jest.fn(() => Promise.resolve(true)),
      isFallback: false,
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    }));

    render(<LandingLayout children={<div />} />);
  });
});
