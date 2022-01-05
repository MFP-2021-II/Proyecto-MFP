import { render } from "@testing-library/react";
import Comment from "components/InfoBoxes/Comment";

test("Valida si el componente Comment se renderiza correctamente", async () => {
  const setComment = jest.fn("string");
  render(
    <Comment usuario={setComment} fecha={setComment} comentario={setComment} />
  );
});
