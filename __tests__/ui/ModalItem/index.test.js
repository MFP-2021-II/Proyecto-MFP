import { render } from "@testing-library/react";
import ModalItem from "ui/ModalItem";

describe("Validate if the ModalItem renders", () => {
  const mockNotification = true;
  it("If notification exist", () => {
    render(<ModalItem notificacion={mockNotification} />);
  });

  it("If notification doesn't exist", () => {
    render(<ModalItem />);
  });

  it("If notification is false", () => {
    render(<ModalItem notificacion={false} />);
  });
});
