import 'tailwindcss/tailwind.css'
import LandingLayout from 'components/Layouts/LandingLayout'
import 'styles/global.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Homy</title>
        <meta 
          name="description" 
          content="Homy, aplicacion de reservas de alojamientos."
        />
        <link rel="icon" href="/favicon-homy.ico" />
      </Head>
      <LandingLayout/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
