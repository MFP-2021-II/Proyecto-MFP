import Logo from 'components/Icons/Logo'
import LandingButton from 'components/Buttons/LandingButton'
import RedirectArrow from 'components/Icons/RedirectArrow'

export default function LandingLayout () {
  //se modificó el classname add: abolute w-full para solucionar lo del espaciado 
  //bg-gray-900 text-gray-50
  return(
    <>
      <nav className="absolute w-full text-lg font-sans font-bold bg-gray-100">
        <ul className="flex justify-between p-7">
          <a className="transition duration-500 ease-in-out hover:scale-110 cursor-pointer">
            <Logo />
          </a>
          <div className="flex flex-wrap space-x-20 items-center justify-end">
            <li className="hover:text-red-800 cursor-pointer">
              Inicio
            </li>
            <li className="hover:text-red-800 cursor-pointer">
              Nosotros
            </li>
            <li className="hover:text-red-800 cursor-pointer">
              Contacto
            </li>
            <LandingButton type="primary" toPath="/login">
              Inicia Sesión
            </LandingButton>
            <LandingButton type="secondary" toPath="/register">
              Regístrate
              <RedirectArrow className="fill-current text-gray-50 w-5 h-5 ml-1"/>
            </LandingButton>
          </div>
        </ul>
      </nav>
    </>
  )
}