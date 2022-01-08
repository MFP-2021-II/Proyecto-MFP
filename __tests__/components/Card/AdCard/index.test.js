import { render } from "@testing-library/react";
import AdCard from "components/Card/AdCard";

test("Valida si el componente AdCard se renderiza correctamente", async () => {
  render(
    <AdCard id="1" image="assets/images/image.jpg" setReload reload={false} />
  );
});
