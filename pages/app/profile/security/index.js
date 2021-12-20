import { screenSizes } from "utils/responsive";
import TextInput from "ui/TextInput";
import NavButton from "components/Buttons/NavButton";
import LandingButton from "components/Buttons/LandingButton";

export default function Security() {
  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto h-almost-screen">
      <div className={screenSizes}>
        <h1 className="text-xl font-bold text-left pb-6">
          Cambia tu contraseña
        </h1>
        <form className="flex flex-col px-16">
          <TextInput
            label="Contraseña actual"
            register={() => null}
          ></TextInput>
          <TextInput label="Nueva contraseña" register={() => null}></TextInput>
          <TextInput
            label="Repetir contraseña"
            register={() => null}
          ></TextInput>
          <div className="flex flex-row justify-center mt-5 space-x-6 lg:w-full">
            <NavButton type="submit" variant="quinary" className="w-30 lg:w-40">
              Cambiar
            </NavButton>
            <LandingButton toPath="/app/profile" className="w-30 lg:w-40">
              Volver
            </LandingButton>
          </div>
        </form>
      </div>
    </main>
  );
}
