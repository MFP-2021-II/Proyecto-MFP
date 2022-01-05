/**
 * Sección de importaciones
 * English:
 * Imports section
 */
import Link from "next/link";
/**
 * Componente profile card para la sección de perfil
 * English:
 * Profile card component for the profile section
 *
 * titulo es el titulo de la sección
 * children es el contenido de la sección
 * description es la descripción de la sección
 * toPath es la ruta a la que se redirecciona
 *
 * English:
 * titulo is the title of the section
 * children is the content of the section
 * description is the description of the section
 * toPath is the path to which it is redirected
 * @param {string} titulo - Titulo de la landing card
 * @param {string} children - Contenido de la landing card
 * @param {String} descripcion - Descripción de la landing card
 * @returns {JSX} Landing card
 */
export default function ProfileCard({ children, titulo, descripcion, toPath }) {
  return (
    /**
     * Tarjeta para la sección de perfil,
     * constituido por un titulo, descripción
     * y un children.
     * English:
     * Card for the profile section, composed by
     * a title, description and a children.
     **/
    <Link href={toPath}>
      <a className="h-48 w-full">
        <div className="w-full h-full bg-white rounded-md border-solid border-2 p-4 transition duration-500 ease-in-out shadow-lg cursor-pointer hover:bg-gray-100">
          <div className="flex flex-row justify-center mb-4 h-12 items-center">
            {children}
            <span className="font-semibold pl-2 text-center">{titulo}</span>
          </div>
          <p className="text-sm justify-center text-gray-500">{descripcion}</p>
        </div>
      </a>
    </Link>
  );
}
