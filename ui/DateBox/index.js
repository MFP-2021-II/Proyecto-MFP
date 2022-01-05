/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 */
import InputLabel from "ui/InputLabel";

export default function DateBox(props) {
  return (
    /**
     * Se retorna el elemento.
     * English:
     * Return the element.
     */
    <div>
      <InputLabel labeltag={props.labeltag} />
      <div className="ml-2 bg-[#f5f7fb] border-[#d8d8d8] text-center font-bold text-black px-2 py-1 rounded-md border-2 flex w-36">
        <input type="date" className="bg-[#f5f7fb]" />
      </div>
    </div>
    /**
     * Se retorna el elemento.
     * English:
     * Return the element.
     */
  );
}
