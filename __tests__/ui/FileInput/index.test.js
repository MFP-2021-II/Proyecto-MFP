import { fireEvent, render } from "@testing-library/react";
import FileInput from "ui/FileInput";

describe("Validate if the FileInput renders", () => {
  const setFileImage = jest.fn();
  //make mock for setFileImage function
  const SetStateMock = jest.fn();
  //create a useStateMock
  const useStateMock = (useState) => [useState, SetStateMock];

  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  const { getByText } = render(<FileInput />);

  const button = getByText("Subir imagen");

  fireEvent.click(button);

  it("Validate if the FileInput renders", () =>
    //not been called
    expect(SetStateMock).not.toHaveBeenCalled());

  it("If the file is empty", () => {
    render(
      <FileInput
        onChange={(e) => handleFileChange(e, "file", setFileImage)}
        onBlur={setFileImage}
      />
    );
  });
});
