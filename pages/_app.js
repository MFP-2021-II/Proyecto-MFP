import "tailwindcss/tailwind.css";
import "styles/global.css";
import LandingLayout from "components/Layouts/LandingLayout";
import AuthLayout from "components/Layouts/AuthLayout";
import AppLayout from "components/Layouts/AppLayout";
import Head from "next/head";
import { useRouter } from "next/router";

/**
 * Rutas de autentificacion
 * @type {{'/register': string, '/login': string}}
 */
const AUTH_PAGES = {
  "/register": "Registro",
  "/login": "Iniciar Sesion",
};

/**
 * Rutas del Landing Page
 * @type {{'/': string, '/about-us': string, '/contact': string}}
 */
const LANDING_PAGES = {
  "/": "Inicio",
  "/about-us": "Nosotros",
  "/contact": "Contacto",
};

/**
 * Rutas de la aplicacion
 * @type {{'/app': string, 'app/announcement': string, '/app/announcement/create': string, '/app/announcement/edit': string}}
 */
const APP_PAGES = {
  "/app": "App",
  "/app/announcement": "Mis anuncios",
  "/app/announcement/create": "Crear anuncios",
  "/app/announcement/edit": "Editar anuncio",
  "/app/[cardID]": "Ver detalles",
};

/**
 * @param {Component} Component Componente a renderizar
 * @param {Object} pageProps Propiedades de la pagina
 * @returns {JSX} Renderizado de la pagina
 */

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <>
      <Head>
        <title>
          Homy -{" "}
          {LANDING_PAGES[pathname] ||
            AUTH_PAGES[pathname] ||
            APP_PAGES[pathname]}
        </title>
        <meta
          name="description"
          content="Homy, aplicacion de reservas de alojamientos."
        />
        <link rel="icon" href="/favicon-homy.ico" />
      </Head>
      {LANDING_PAGES[pathname] && (
        <>
          <LandingLayout>
            <Component {...pageProps} />
          </LandingLayout>
        </>
      )}
      {AUTH_PAGES[pathname] && (
        <>
          <AuthLayout type={AUTH_PAGES[pathname]}>
            <Component {...pageProps} />
          </AuthLayout>
        </>
      )}
      {APP_PAGES[pathname] && (
        <AppLayout Component={Component} pageProps={pageProps} />
      )}
    </>
  );
}

export default MyApp;
