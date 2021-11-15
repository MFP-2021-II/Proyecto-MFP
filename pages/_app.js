import "tailwindcss/tailwind.css";
import "styles/global.css";
import LandingLayout from "components/Layouts/LandingLayout";
import AuthLayout from "components/Layouts/AuthLayout";
import AppLayout from "components/Layouts/AppLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AUTH_PAGES = {
  "/register": "Registro",
  "/login": "Iniciar Sesion",
};

const LANDING_PAGES = {
  "/": "Inicio",
  "/about-us": "Nosotros",
  "/contact": "Contacto",
};

const APP_PAGES = {
  "/app": "App",
  "/app/announcement": "Mis anuncios",
  "/app/announcement/create": "Crear anuncios",
  "/app/announcement/edit": "Editar anuncio",
};

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
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
          <LandingLayout />
          <Component {...pageProps} />
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
        <>
          <AppLayout Component={Component} pageProps={pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;
