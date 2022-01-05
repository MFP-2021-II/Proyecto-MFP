import { render } from "@testing-library/react";
import AdCard from "components/Card/AdCard";

test("Valida si el componente AdCard se renderiza correctamente", async () => {
  const mock = jest.fn("String");
  render(
    <AdCard
      id={mock}
      image={mock}
      name={mock}
      location={mock}
      price={mock}
      rating={mock}
      edit={true}
      setReload
      reload={false}
    />
  );
});
