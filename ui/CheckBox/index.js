/**
 * Componente atomico de input tipo checkbox
 * @param {object} register Referencia al register
 * @returns {JSX} CheckBox
 */
export default function CheckBox({ register }) {
  return (
    <>
      <span className="font-medium text-gray-500 pb-1">Facilidades</span>
      <div className="flex flex-row flex-wrap justify-between mb-6">
        <label id="piscina" className="pr-2">
          Piscina
          <input
            type="checkbox"
            name="piscina"
            className="ml-2"
            {...register("piscina")}
          />
        </label>
        <label id="Estacionamiento" className="pr-2">
          Estacinamiento
          <input
            type="checkbox"
            name="Estacionamiento"
            className="ml-2"
            {...register("estacionamiento")}
          />
        </label>
        <label id="Jaccuzi">
          Jaccuzi
          <input
            type="checkbox"
            name="Jaccuzi"
            className="ml-2"
            {...register("jaccuzi")}
          />
        </label>
      </div>
    </>
  );
}
