import { useState } from "react";

export default function BiStateButton(props) {
  const [enabled, setEnabled] = useState(false);

  const changeState = () => {
    setEnabled(!enabled);
  };

  let element;

  if (!enabled) {
    element = (
      <span className="flex items-center justify-start w-8 bg-gray-200 border-2 border-gray-500 rounded-full cursor-pointer">
        <span className="w-4 h-4 bg-gray-500 border border-gray-200 rounded-full"></span>
      </span>
    );
  } else {
    element = (
      <span className="flex items-center justify-end w-8 bg-gray-200 border-2 border-gray-500 rounded-full cursor-pointer">
        <span className="w-4 h-4 bg-gray-500 border border-gray-200 rounded-full"></span>
      </span>
    );
  }

  return <div onClick={changeState}>{element}</div>;
}
