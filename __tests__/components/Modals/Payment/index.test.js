import PaymentModal from "components/Modals/Payment";
import { render } from "@testing-library/react";

test("Validate if the Modal renders", () => {
  render(<PaymentModal />);
});
