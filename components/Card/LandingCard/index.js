/**
 * Componente landing card para la sección de nosotros
 * English:
 * Landing card component for the about section
 *
 * titulo es el titulo de la sección
 * children es el contenido de la sección
 *
 * English:
 * About section title
 * About section content
 * @param {string} titulo - Titulo de la landing card
 * @param {string} children - Contenido de la landing card
 * @returns {JSX} Landing card
 */
export default function LandingCard({ titulo, children }) {
  return (
    /** Tarjeta para la sección de Nosotros,
     * constituido por un titulo y un parrafo.
     * English:
     * Card for the about section, composed by
     * a title and a paragraph.
     **/
    <div className="bg-[#EFC4AE] mb-2 text-center p-3 rounded-lg max-w-sm md:max-w-md">
      <h3 className="text-[#C36C7D] font-bold text-lg pb-2">{titulo}</h3>
      <p className="text-base">{children}</p>
    </div>
  );
}
