/**
 * Componente de layout para autentificacion
 * English:
 * Layout for authentication
 * children - Hijos del componente
 * type - Tipo de usuario
 * English:
 * children - Children of the component
 * type - Type of user
 * @param {children} children - Contenido del layout
 * @param {string} type - Tipo de layout
 * @returns {JSX} AuthLayout
 */
export default function AuthLayout({ children, type }) {
  /**
   * Fondo de gradiente para el layout de autentificacion
   * English:
   * Gradient background for the authentication layout
   * @type {{Registro: string}}
   */
  const types = {
    Registro: "bg-gradient-to-r from-red-400 to-red-300",
    "Iniciar Sesion": "bg-gradient-to-r from-green-600 to-yellow-100",
  };
  return (
    /**
     * Es un componente que se utiliza
     * como pagina para la sección de
     * inciar sesión o registro, es un
     * gradiente que cambia de color
     * de acuerdo a la ruta de la pagina.
     * English:
     * It is a component that is used
     * as a page for the section of
     * login or registration, it is a
     * gradient that changes color
     * according to the route of the page.
     */
    <div
      className={`${types[type]} h-screen flex flex-row lg:justify-between justify-center`}
    >
      {children}
    </div>
  );
}
