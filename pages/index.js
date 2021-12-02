/**
 * @file index.js archivo principal
 * @author Carlos Tarmeño Noriega
 */

import Isotype from "components/Icons/Isotype";
import LandingButton from "components/Buttons/LandingButton";

/**
 * Componente del Landing page
 * @returns {JSX} LandingPage
 */
export default function Home() {
  return (
    <main className="h-almost-screen flex justify-center lg:justify-around bg-gradient-to-r from-yellow-100 to-red-200">
      <section className="flex flex-col justify-center items-center pb-20">
        <Isotype className="w-48 h-48" />
        <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-red-900 text-center mt-10">
          ¿Ya decidiste en
          <br />
          dónde alojarte?
        </h1>
        <p className="font-medium text-lg lg:text-xl xl:text-2xl text-center mt-10">
          Viaja a cualquier lugar sin
          <br />
          preocuparte por el alojamiento 🏠
        </p>
        <LandingButton variant="secondary" className="mt-10" toPath="/register">
          ¡Reservar ahora!
        </LandingButton>
      </section>
      <div className="flex flex-col justify-center">
        <img
          src="/Landing-image.png"
          alt="ilustración"
          className="w-full hidden lg:inline-block"
        />
      </div>
    </main>
  );
}
