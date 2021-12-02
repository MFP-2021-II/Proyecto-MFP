import Link from "next/link";

/**
 * Componente boton del landing page
 * @param {children} children - Contenido del boton
 * @param {string} toPath - Ruta a la que se redirecciona
 * @param {string} className - Clase del boton
 * @param {string} type - Tipo de boton
 * @param {string} variant - Variante del boton
 * @returns {JSX} LandingButton
 */
export default function LandingButton({
  children,
  toPath,
  variant,
  className,
  type,
}) {
  /**
   * Estilos para el boton del landing page
   * @type {{primary: string, secondary: string}}
   */
  const types = {
    primary: "text-gray-900",
    secondary: "bg-gray-900 text-gray-50",
  };

  return (
    <Link href={toPath}>
      <button
        type={type}
        className={`${types[variant]} font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-[101%] hover:shadow-lg ${className}`}
      >
        <a className="flex flex-row items-center justify-center">{children}</a>
      </button>
    </Link>
  );
}
