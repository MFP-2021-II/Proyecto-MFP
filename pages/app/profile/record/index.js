import { screenSizes } from "utils/responsive";

export default function Record() {
  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto h-almost-screen">
      <div className={screenSizes}>
        <h1 className="text-xl font-bold text-left pb-4">Historial de pagos</h1>
        <section>
          <span>no se me ocurre nada</span>
        </section>
      </div>
    </main>
  );
}
