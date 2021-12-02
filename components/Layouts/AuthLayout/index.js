/**
 * Componente de layout para autentificacion
 * @param {children} children - Contenido del layout
 * @param {string} type - Tipo de layout
 * @returns {JSX} AuthLayout
 */
export default function AuthLayout({ children, type }) {
  /**
   * Fondo de gradiente para el layout de autentificacion
   * @type {{Registro: string}}
   */
  const types = {
    Registro: "bg-gradient-to-r from-red-400 to-red-300",
    "Iniciar Sesion": "bg-gradient-to-r from-green-600 to-yellow-100",
  };
  return (
    <div
      className={`${types[type]} h-screen flex flex-row lg:justify-between justify-center`}
    >
      {children}
    </div>
  );
}
