/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 */
import { useEffect, useState } from "react";
import { screenSizes } from "utils/responsive";
import LandingButton from "components/Buttons/LandingButton";
import Payment from "components/Icons/Payment";
import TransactionItem from "ui/TransactionItem";

export default function Record() {
  /**
   * Estado para guardar los pagos hechos
   * por el usuario.
   * English:
   * State to save the payments made
   * by the user.
   */
  const [made, setMade] = useState([]);
  /**
   * Estado para guardar los pagos recibidos
   * por usuario.
   * English:
   * State to save the payments received
   * by the user.
   */
  const [received, setReceived] = useState([]);

  /**
   * useEffect para obtener las reservas
   * hechas por el usuario y las reservas
   * recibidas por el usuario.
   * English:
   * useEffect to get the reservations
   * made by the user and the reservations
   * received by the user.
   */
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);

    const fetchPaymentsMade = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/reservas/realizadas`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const json = await response.json();
        setMade(json.data.reservas);
        console.log(json, "HECHASSSSSSS");
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPaymentsReceived = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/reservas/recibidas`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const json = await response.json();
        setReceived(json.data);
        console.log(json, "RECIBIDASSSSS");
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchPaymentsMade();
      fetchPaymentsReceived();
    }
  }, []);

  return (
    /**
     * Seccion para mostrar los pagos hechos,
     * recibidos y los pagos pendientes.
     * Se muestran en tarjetaas que indican si
     * se realizó el pago o no
     * de acuerdo a su color.
     * English:
     * Section to show the payments made,
     * received and the payments pending.
     * They are shown in cards that indicate
     * if the payment was made or not
     * according to their color.
     */
    <main className="flex flex-col items-center justify-center overflow-y-auto h-almost-screen">
      <div className={screenSizes}>
        <div className="flex flex-row items-center pb-2 mb-5 border-b-2">
          <i>
            <Payment className="text-red-700 fill-current" />
          </i>
          <span className="pl-2 text-xl font-bold text-left">
            Historial de pagos
          </span>
        </div>
        <section className="overflow-y-scroll p-10 items-center bg-[#F5F7FB] rounded-lg border-solid border h-[28rem] lg:mx-40 xl:mx-48">
          {made &&
            made.map((paymentMade) => (
              <TransactionItem
                key={paymentMade.id}
                tipo="huesped"
                alojamiento={paymentMade.alojamiento.anuncio[0].nombre}
                anfitrion={paymentMade.usuario.nombre}
                importe={`S/ ${paymentMade.alojamiento.anuncio[0].precio}`}
                fechaPago={new Date(paymentMade.createdAt).toTimeString()}
                fLlegada={new Date(paymentMade.fecha_reserva).toDateString()}
                fSalida={new Date(paymentMade.fecha_fin).toDateString()}
                tarjeta={paymentMade.numero_tarjeta}
              />
            ))}
          {received &&
            received.map((paymentReceived) =>
              paymentReceived.reserva.map((reserva) => (
                <TransactionItem
                  key={reserva.id}
                  fechaPago={new Date(reserva.createdAt).toTimeString()}
                  alojamiento={paymentReceived.anuncio[0].nombre}
                  huesped={reserva.nombre_huesped}
                  importe={`S/ ${paymentReceived.anuncio[0].precio}`}
                  fLlegada={new Date(reserva.fecha_reserva).toDateString()}
                  fSalida={new Date(reserva.fecha_fin).toDateString()}
                />
              ))
            )}
        </section>
        <div className="flex justify-center mt-4">
          <LandingButton toPath="/app/profile" variant="quinary">
            Volver
          </LandingButton>
        </div>
      </div>
    </main>
    /**
     * Seccion para mostrar los pagos hechos,
     * recibidos y los pagos pendientes.
     * Se muestran en tarjetaas que indican si
     * se realizó el pago o no
     * de acuerdo a su color.
     * English:
     * Section to show the payments made,
     * received and the payments pending.
     * They are shown in cards that indicate
     * if the payment was made or not
     * according to their color.
     */
  );
}
