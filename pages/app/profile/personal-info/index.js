import { screenSizes } from "utils/responsive";
import ProfileInput from "ui/ProfileInput";
import NavButton from "components/Buttons/NavButton";
import LandingButton from "components/Buttons/LandingButton";

export default function PersonalInfo() {
  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto h-almost-screen">
      <div className={screenSizes}>
        <h1 className="text-xl font-bold text-left pb-4">
          Información personal
        </h1>
        <form className="flex flex-col">
          <ProfileInput
            register={() => null}
            variant="primary"
            label="Nombre legal"
            placeholder="X"
            type="text"
            name="nombre"
          />
          <ProfileInput
            register={() => null}
            variant="primary"
            label="Sexo"
            placeholder="X"
            type="text"
            name="nombre"
          />
          <ProfileInput
            register={() => null}
            variant="primary"
            label="Fecha de nacimiento"
            placeholder="X"
            type="text"
            name="nombre"
          />
          <ProfileInput
            register={() => null}
            variant="primary"
            label="Correo electrónico"
            placeholder="X"
            type="text"
            name="nombre"
          />
          <ProfileInput
            register={() => null}
            variant="primary"
            label="Número de teléfono"
            placeholder="X"
            type="text"
            name="nombre"
          />
          <ProfileInput
            register={() => null}
            variant="primary"
            label="Documento de identidad"
            placeholder="X"
            type="text"
            name="nombre"
          />
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
