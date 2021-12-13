import { useState } from "react";

export default function BiStateButton(props) {
  const [enabled, setEnabled] = useState(false);

  const changeState = () => {
    setEnabled(!enabled);
    //props.onClick();
  };

  let element;

  if (!enabled) {
    element = (
      <span class="border-2 rounded-full border-gray-500 flex items-center cursor-pointer bg-gray-200 w-8 justify-start">
        <span class="rounded-full border border-gray-200 w-4 h-4 bg-gray-500"></span>
      </span>
    );
  } else {
    element = (
      <span class="border-2 rounded-full border-gray-500 flex items-center cursor-pointer bg-gray-200 w-8 justify-end">
        <span class="rounded-full border border-gray-200 w-4 h-4 bg-gray-500"></span>
      </span>
    );
  }

  return <div onClick={changeState}>{element}</div>;
}
