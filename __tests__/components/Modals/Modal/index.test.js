import { render, fireEvent } from "@testing-library/react";
import Modal from "components/Modals/Modal";

describe("Validate if the Modal renders", () => {
  const mockNotification = true;
  it("If notification exist", () => {
    render(<Modal notificacion={mockNotification} />);
  });

  it("If notification doesn't exist", () => {
    render(<Modal />);
  });

  it("If notification is false", () => {
    render(<Modal notificacion={false} />);
  });
  it("Validate if the button clicks", () => {
    const { container } = render(<Modal />);
    const button = container.querySelector("svg");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
