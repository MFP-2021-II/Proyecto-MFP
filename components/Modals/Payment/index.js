/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 */
import DateBox from "ui/DateBox";
import InputLabel from "ui/InputLabel";

export default function PaymentModal() {
  return (
    /**
     * Componente de modal de pago,
     * donde se puede seleccionar
     * una fecha para pagar el inmueble,
     * establecer los datos financieros,
     * datos personales del usuario.
     * English:
     * Component payment modal,
     * where you can select a date
     * to pay the property,
     * set the financial data,
     * personal data of the user.
     */
    <div className="mt-64 bg-white p-4 rounded-md z-10 fixed">
      <h1 className="font-bold text-2xl">Confirmar pago</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-x-2 divide-[#d8d8d8]">
        <div>
          <h2 className="text-lg">Datos financieros</h2>
          <div>
            <InputLabel labeltag="Número de tarjeta" />
          </div>
          <div className="grid-cols-2 gap-2">
            <div>
              <InputLabel labeltag="Fecha de caducidad" />
              <DateBox />
            </div>
            <div>
              <InputLabel labeltag="CVV" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg">Datos personales</h2>
          <div>
            <InputLabel labeltag="Dirección de facturación" />
          </div>
          <div>
            <InputLabel labeltag="Código postal" />
          </div>
        </div>
      </div>
    </div>
    /**
     * Componente de modal de pago, donde
     * se puede seleccionar una
     * fecha para pagar el inmueble,
     * establecer los datos financieros,
     * datos personales del usuario.
     * English:
     * Component payment modal, where
     * you can select a date
     * to pay the property, set
     * the financial data,
     * personal data of the user.
     */
  );
}
