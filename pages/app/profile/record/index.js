import { useEffect } from "react";
import { screenSizes } from "utils/responsive";

export default function Record() {
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);

    const fetchPayments = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/reservas`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchPayments();
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto h-almost-screen">
      <div className={screenSizes}>
        <h1 className="pb-4 text-xl font-bold text-left">Historial de pagos</h1>
        <section>
          <span>no se me ocurre nada</span>
        </section>
      </div>
    </main>
  );
}
