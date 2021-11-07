import Logo from 'components/Icons/Logo'
import LandingButton from 'components/Buttons/LandingButton'

export default function LandingLayout () {
  return(
    <>
      <nav className="font-sans font-bold w-auto">
        <ul className="flex justify-between w-auto p-7">
          <a>
            <Logo />
          </a>
          <div className="flex flex-wrap space-x-20 items-center justify-end">
            <li>
              Home
            </li>
            <li>
              Nosotros
            </li>
            <li>
              Contacto
            </li>
            <LandingButton className="text-gray-900 ">
              Inicia Sesión
            </LandingButton>
            <LandingButton className="bg-gray-900 text-gray-50">
              Regístrate
            </LandingButton>
          </div>
        </ul>
      </nav>
    </>
  )
}