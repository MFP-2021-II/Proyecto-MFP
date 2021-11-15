import Isotype from 'components/Icons/Isotype'
import LandingButton from 'components/Buttons/LandingButton'
import LandingIllustration from 'components/Icons/LandingIllustration'

export default function Home() {
  return (
    //Problemas con el espaciado en el landing
    //md al j-around 
    <main className="h-screen flex lg:justify-around justify-center bg-gradient-to-r from-yellow-100 to-red-200">
      <section className="flex flex-col justify-center items-center">
        <Isotype className="w-48 h-48"/>
        <h1 className="font-bold text-4xl md:text-5xl text-red-900 text-center mt-10">
          ¿Ya decidiste en 
          <br />dónde alojarte?
        </h1>
        <p className="font-medium text-xl md:text-2xl text-center mt-10">
          Viaja a cualquier lugar sin
          <br />preocuparte por el alojamiento 🏠
        </p>
        <LandingButton variant="secondary" className="mt-10" toPath="/register">
          ¡Reservar ahora!
        </LandingButton>
      </section>
      <div className="flex flex-col justify-center">
        <LandingIllustration className="w-auto hidden lg:inline-block"/>
      </div>
    </main>
  )
}
