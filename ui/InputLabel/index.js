/**
 * Componente atomico
 * de input tipo checkbox
 * English:
 * Atomic component of input type checkbox
 */
export default function InputLabel(props) {
  return (
    /**
     * Se retorna el elemento.
     * English:
     * Return the element.
     */
    <div className="font-bold text-[#b5b5b5] text-sm">{props.labeltag}</div>
  );
}
