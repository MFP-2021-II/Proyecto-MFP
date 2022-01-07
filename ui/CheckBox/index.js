/**
 * Componente atomico de input tipo checkbox
 * English:
 * Atomic component of input type checkbox
 *
 * register - funcion de registro
 * English:
 * register - registration function
 * Francais:
 * register - fonction de register
 * @param {object} register Referencia al register
 * @returns {JSX} CheckBox
 */
export default function CheckBox({ register }) {
  return (
    /**
     * Componente de input tipo checkbox
     * que tiene soporte para manejo de
     * react hook form y errores.
     * English:
     * Input component type checkbox
     * that supports react hook form and errors.
     * Francais:
     * Input component type checkbox
     * qui supporte react hook form et erreurs.
     * Português:
     * Componente de input tipo checkbox
     * que suporta o react hook form e erros.
     */
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
    /**
     * Componente de input tipo checkbox
     * que tiene soporte para manejo de
     * react hook form y errores.
     * English:
     * Input component type checkbox
     * that supports react hook form and errors.
     * Francais:
     * Input component type checkbox
     * qui supporte react hook form et erreurs.
     * Português:
     * Componente de input tipo checkbox
     * que suporta o react hook form e erros.
     * Italiano:
     * Componente di input di tipo checkbox
     * che supporta il react hook form e gli errori.
     * Deutsch:
     * Eingabekomponente von Typ Checkbox
     * die React Hook Form und Fehler unterstützt.
     */
  );
}
