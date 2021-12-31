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
export default function LandingPage() {
  return (
    <main className="flex justify-center h-almost-screen lg:justify-around bg-gradient-to-r from-yellow-100 to-red-200">
      <section className="flex flex-col items-center justify-center pb-20">
        <Isotype className="w-48 h-48" />
        <h1 className="mt-10 text-3xl font-bold text-center text-red-900 lg:text-4xl xl:text-5xl">
          ¿Ya decidiste en
          <br />
          dónde alojarte?
        </h1>
        <p className="mt-10 text-lg font-medium text-center lg:text-xl xl:text-2xl">
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
          src="/Landing-image-com.png"
          alt="ilustración"
          className="hidden w-full lg:inline-block"
        />
      </div>
    </main>
  );
}
