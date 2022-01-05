/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 */
import "tailwindcss/tailwind.css";
import "styles/global.css";
import LandingLayout from "components/Layouts/LandingLayout";
import AuthLayout from "components/Layouts/AuthLayout";
import AppLayout from "components/Layouts/AppLayout";
import Head from "next/head";
import { useRouter } from "next/router";

/**
 * Rutas de autentificacion
 * English:
 * Authentication routes
 *
 * /register - Registro
 * /login - Inicio de sesión
 * English:
 * /register - Register
 * /login - Login
 * @type {{'/register': string, '/login': string}}
 */
const AUTH_PAGES = {
  "/register": "Registro",
  "/login": "Iniciar Sesion",
};

/**
 * Rutas del Landing Page
 * English:
 * Landing page routes
 *
 * / - Inicio
 * /about - Sobre Nosotros
 * /contact - Contacto
 * English:
 * / - Home
 * /about - About
 * /contact - Contact
 * @type {{'/': string, '/about-us': string, '/contact': string}}
 */
const LANDING_PAGES = {
  "/": "Inicio",
  "/about-us": "Nosotros",
  "/contact": "Contacto",
};

/**
 * Rutas de la aplicacion
 * English:
 * Application routes
 *
 * /app - App
 * /app/profile - Perfil
 * /app/announcements - Anuncios
 * /app/announcements/create - Nuevo anuncio
 * /app/announcements/edit - Editar anuncio
 * /app/profile/personal-info - Datos personales
 * /app/profile/security - Cambiar contraseña
 * /app/profile/record - Historial de reservas
 * English:
 * /app - App
 * /app/profile - Profile
 * /app/announcements - Announcements
 * /app/announcements/create - New announcement
 * /app/announcements/edit - Edit announcement
 * /app/profile/personal-info - Personal data
 * /app/profile/security - Change password
 * /app/profile/record - Reservation history
 * @type {{'/app': string, 'app/announcement': string, '/app/announcement/create': string, '/app/announcement/edit': string}}
 */
const APP_PAGES = {
  "/app": "App",
  "/app/announcement": "Mis anuncios",
  "/app/announcement/create": "Crear anuncios",
  "/app/announcement/edit": "Editar anuncio",
  "/app/profile": "Mi perfil",
  "/app/profile/personal-info": "Información personal",
  "/app/profile/security": "Seguridad de la cuenta",
  "/app/profile/record": "historial de pagos",
};

/**
 * Componente principal de la aplicacion
 * English:
 * Main component of the application
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
            APP_PAGES[pathname] ||
            (pathname.includes("edit") ? "Editar anuncio" : "App")}
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
      {pathname.includes("app") && (
        <AppLayout Component={Component} pageProps={pageProps} />
      )}
    </>
  );
}

export default MyApp;
