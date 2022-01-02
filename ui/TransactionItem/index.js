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
  );
}
