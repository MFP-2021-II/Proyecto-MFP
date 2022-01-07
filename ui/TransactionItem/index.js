/**
 * Componente atomico para msotrar las
 * transacciones de un usuario realizadas y dadas.
 * Se tiene como prametro el tipo, fecha de pago,
 * alojamiento, anfitrion, huespedm
 * importe, fecha de llegada, fecha de salida,
 * el estado de la tarjeta.
 * English:
 * Atomic component to display the
 * transactions of a user made and given.
 * It has as parameter the type, payment date,
 * accommodation, host, guest, amount,
 * arrival date, departure date, card status.
 *
 * tipo - tipo de transaccion
 * fechaPago - fecha de pago
 * alojamiento - alojamiento
 * anfitrion - anfitrion
 * huesped - huesped
 * importe - importe
 * fechaLlegada - fecha de llegada
 * fechaSalida - fecha de salida
 * estadoTarjeta - estado de la tarjeta
 *
 * English:
 * type - transaction type
 * paymentDate - payment date
 * accommodation - accommodation
 * host - host
 * guest - guest
 * amount - amount
 * arrivalDate - arrival date
 * departureDate - departure date
 * cardStatus - card status
 * Francais:
 * type - type de transaction
 * paymentDate - date de paiement
 * accommodation - alojamiento
 * host - anfitrion
 * guest - huesped
 * amount - montant
 * arrivalDate - date d'arrivee
 * departureDate - date de depart
 * cardStatus - etat de la carte
 * Portugues:
 * tipo - tipo de transacao
 * dataPagamento - data de pagamento
 * alojamento - alojamento
 * anfitriao - anfitriao
 * hospede - hospede
 * valor - valor
 * dataEntrada - data de entrada
 * dataSaida - data de saida
 * statusCartao - status do cartao
 */
export default function TransactionItem({
  tipo,
  fechaPago,
  alojamiento,
  anfitrion,
  huesped,
  importe,
  fLlegada,
  fSalida,
  tarjeta,
}) {
  return (
    /**
     * Componente para mostrar las transacciones
     * de un usuario realizadas y recibidas.
     * Se tiene como parametro el tipo, fecha de pago,
     * alojamiento, anfitrion, huespedm
     * importe, fecha de llegada, fecha de salida,
     * el estado de la tarjeta.
     * English:
     * Component to display the transactions
     * of a user made and given.
     * It has as parameter the type, payment date,
     * accommodation, host, guest, amount,
     * arrival date, departure date, card status.
     * Francais:
     * Composant pour afficher les transactions
     * de un usuario realizadas et reçues.
     * Il a comme parametre le type, la date de paiement,
     * l'alojamiento, l'anfitrion, l'hôte, le hôte,
     * le montant, la date d'arrivée, la date de départ,
     * le statut de la carte.
     */
    <div
      className={`w-full ${
        tipo === "huesped" ? "bg-red-50" : "bg-green-50"
      } flex flex-col justify-between mb-3 p-3 border rounded-lg`}
    >
      {tipo === "huesped" ? (
        <>
          <h1 className="text-center font-semibold mb-3 text-red-800">
            Pago Realizado
          </h1>
          <span>{`Fecha de pago: ${fechaPago}`}</span>
          <span>{`Nombre del alojamiento: ${alojamiento}`}</span>
          <span>{`Nombre del anfitrión: ${anfitrion}`}</span>
          <span>{`Importe: ${importe}`}</span>
          <span>{`Fecha de llegada: ${fLlegada}`}</span>
          <span>{`Fecha de salida: ${fSalida}`}</span>
          <span>{`Tarjeta: ${tarjeta}`}</span>
        </>
      ) : (
        <>
          <h1 className="text-center font-semibold mb-3 text-green-800">
            Pago Recibido
          </h1>
          <span>{`Fecha de pago: ${fechaPago}`}</span>
          <span>{`Nombre del alojamiento: ${alojamiento}`}</span>
          <span>{`Nombre del huésped: ${huesped}`}</span>
          <span>{`Importe: ${importe}`}</span>
          <span>{`Fecha de llegada: ${fLlegada}`}</span>
          <span>{`Fecha de salida: ${fSalida}`}</span>
        </>
      )}
    </div>
    /**
     * Componente para mostrar las
     * transacciones de un usuario realizadas
     * y recibidas. Se tiene como parametro el tipo,
     * fecha de pago, alojamiento, anfitrion, huesped
     * importe, fecha de llegada, fecha de salida,
     * el estado de la tarjeta.
     * English:
     * Component to display the transactions
     * of a user made and given.
     * It has as parameter the type, payment
     * date, accommodation, host, guest, amount,
     * arrival date, departure date, card status.
     * Francais:
     * Composant pour afficher les transactions
     * de un usuario realizadas et reçues.
     * Il a comme parametre le type, la date de paiement,
     * l'alojamiento, l'anfitrion, l'hôte, le hôte,
     * le montant, la date d'arrivée, la date de départ,
     * le statut de la carte.
     * Portugues:
     * Componente para mostrar as transações
     * de um usuario realizadas e recebidas.
     * Tem como parametro o tipo, a data de pagamento,
     * o alojamento, o anfitriao, o hóspede, o valor,
     * a data de entrada, a data de saída, o status da cartão.
     */
  );
}
