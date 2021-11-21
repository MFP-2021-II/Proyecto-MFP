import Logo from 'components/Icons/Logo'
import LandingButton from 'components/Buttons/LandingButton'
import RedirectArrow from 'components/Icons/RedirectArrow'
import Menu from 'components/Icons/Menu'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LandingLayout ({ children }) {
  //se modificó el classname add: abolute w-full para solucionar lo del espaciado 
  //bg-gray-900 text-gray-50
  const router = useRouter();
  const current_page = (path) => router.pathname === path ? "active" : "";
  const type = {
    home_color: "transition duration-500 bg-gray-100",
    rem_color: "transition duration-500 bg-[#FBEADC]"
  }

  return(
    <>
      <nav className={`flex justify-between p-7 pr-10 w-full text-lg font-sans font-bold shadow-lg  ${current_page("/")==="active" ? type["home_color"] : type["rem_color"] }`}>
        <a className="flex items-center transition duration-500 ease-in-out hover:scale-110 cursor-pointer">
          <Logo />
        </a>
        <div className="flex flex-row justify-center pr-4">
          <ul className="flex items-center lg:pr-20 pr-0">
            <div className="flex-wrap space-x-10 lg:space-x-12 xl:space-x-28 items-center justify-end hidden md:flex">
              <li>
              <Link href="/">
                <a className="hover:text-red-800 cursor-pointer">
                  Inicio
                </a>
              </Link>
              </li>
              <li>
              <Link href="/about-us">
                  <a className="hover:text-red-800 cursor-pointer">
                    Nosotros
                  </a>
                </Link>
              </li>
              <li>
              <Link href="/contact">
                  <a className="hover:text-red-800 cursor-pointer">
                    Contacto
                  </a>
                </Link>
              </li>
            </div>
          </ul>
          <div className="space-x-10 hidden lg:flex">
            <LandingButton variant="primary" toPath="/login">
              Inicia Sesión
            </LandingButton>
            <LandingButton variant="secondary" toPath="/register">
              Regístrate
              <RedirectArrow className="fill-current text-gray-50 w-5 h-5 ml-1"/>
            </LandingButton>
          </div>
        </div>
        <a href="#" className="flex items-center pr-4 md:hidden">
          <Menu />
        </a>
      </nav>
      {children}
    </>
  )
}