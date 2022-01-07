/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 * Francais:
 * Importer des librairies ou des composants.
 */
import LandingCard from "components/Card/LandingCard";

/**
 * Componente de la página de acerca de nosotros
 * en donde se muestra una imagen de fondo
 * y una tarjeta con información de la empresa
 * con la misión y visión de la misma.
 * English:
 * Component about us page where
 * it shows a background image and
 * a card with information about the
 * company with the mission and vision.
 * Francais:
 * Composant de la page a propos de nous
 * où il affiche une image de fond et
 * une carte avec des informations
 * sur la société avec la mission et
 * la vision.
 * Portugues:
 * Componente da página sobre nós
 * onde ele mostra uma imagem de
 * fundo e uma carta com informações
 * sobre a empresa com a missão e
 * visão.
 * @returns {JSX} Acerca de nosotros
 */
export default function aboutUs() {
  /**
   * Componente de usado como
   * página de Acerca de nosotros
   * en el sistema de Homy.
   * English:
   * Component used as About us page
   * in the system Homy.
   * Francais:
   * Composant utilisé comme page
   * a propos de nous dans
   * le système Homy.
   * Portugues:
   * Componente usado como página
   * sobre nós no sistema Homy.
   * Italiano:
   * Componente usado como página
   * sobre nós no sistema Homy.
   */
  return (
    <main>
      <div>
        <img
          src="/aboutusbg-compressed.jpg"
          alt="ilustración"
          className="w-full hidden lg:inline-block"
        />
      </div>

      <div className="flex flex-col justify-center align-middle text-center max-w-[27%] mx-auto py-16">
        <h3 className="text-[#C36C7D] font-bold text-2xl pb-2">
          ¿Por qué elegir Homy?
        </h3>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
          viverra ligula. Donec sit amet nunc nec velit vestibulum blandit. Sed
          gravida tincidunt est ac vestibulum. Pellentesque vitae diam magna.
        </p>
      </div>
      <div className="flex flex-row justify-center w-screen  max-h-[35%] flex-wrap md:space-x-16">
        <LandingCard titulo="Misión">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
          viverra ligula. Donec sit amet nunc nec velit vestibulum blandit. Sed
          gravida tincidunt est ac vestibulum. Pellentesque vitae diam magna.
        </LandingCard>
        <LandingCard titulo="Visión">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
          viverra ligula. Donec sit amet nunc nec velit vestibulum blandit. Sed
          gravida tincidunt est ac vestibulum. Pellentesque vitae diam magna.
        </LandingCard>
      </div>
    </main>
    /**
     * Componente de usado
     * como página de Acerca
     * de nosotros en el sistema
     * de Homy.
     * English:
     * Component used as About
     * us page
     * in the system Homy.
     * Francais:
     * Composant utilisé comme
     * page a propos de
     * nous dans
     * le système Homy.
     * Portugues:
     * Componente usado como página
     * sobre nós no sistema Homy.
     * Italiano:
     * Componente usado como página
     * sobre nós no sistema Homy.
     */
  );
}
