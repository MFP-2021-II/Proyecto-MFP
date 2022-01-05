/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 */
import { useState } from "react";

export default function BiStateButton(props) {
  /**
   * Estado para guardar el estado del botón.
   * English:
   * State to save the button state.
   */
  const [enabled, setEnabled] = useState(false);
  /**
   * Función para cambiar el estado del botón.
   * English:
   * Function to change the button state.
   */
  const changeState = () => {
    setEnabled(!enabled);
  };

  let element;
  /**
   * Se crea el elemento dependiendo del estado del botón.
   * English:
   * Create the element depending on the button state.
   */
  if (!enabled) {
    element = (
      <span className="flex items-center justify-start w-8 bg-red-100 border-2 border-gray-500 rounded-full cursor-pointer">
        <span className="w-4 h-4 bg-gray-500 border border-gray-200 rounded-full"></span>
      </span>
    );
  } else {
    element = (
      <span className="flex items-center justify-end w-8 bg-green-100 border-2 border-gray-500 rounded-full cursor-pointer">
        <span className="w-4 h-4 bg-gray-500 border border-gray-200 rounded-full"></span>
      </span>
    );
  }
  /**
   * Se retorna el elemento.
   * English:
   * Return the element.
   */
  return <div onClick={changeState}>{element}</div>;
}
