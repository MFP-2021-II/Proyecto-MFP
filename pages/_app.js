import 'tailwindcss/tailwind.css'
import 'styles/global.css'
import LandingLayout from 'components/Layouts/LandingLayout'
import AuthLayout from 'components/Layouts/AuthLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'

const AUTH_PAGES = {
  '/register': 'Registro',
  '/login': 'Iniciar Sesion'
}

const LANDING_PAGES = {
  '/': 'Inicio',
  '/about-us': 'Nosotros',
  '/contact': 'Contacto'
}

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  console.log(pathname)

  return(
    <>
      <Head>
        <title>
          Homy -{' '}
          {LANDING_PAGES[pathname] ||
            AUTH_PAGES[pathname]}
          </title>
        <meta 
          name="description" 
          content="Homy, aplicacion de reservas de alojamientos."
        />
        <link rel="icon" href="/favicon-homy.ico" />
      </Head>
      {
        LANDING_PAGES[pathname] && (
          <>
            <LandingLayout/>
            <Component {...pageProps} />
          </>
      )}
      {
        AUTH_PAGES[pathname] && (
          <>
            <AuthLayout type={AUTH_PAGES[pathname]}>
              <Component {...pageProps} />
            </AuthLayout> 
          </>
      )} 
    </>
  )
}

export default MyApp
