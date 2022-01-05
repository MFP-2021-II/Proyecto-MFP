/**
 * Compontente para msotrar el fondo
 * desenfocado de la aplicación al abrir
 * una modal en nitificaciones o favoritos.
 * English:
 * Component to show the unfocused background
 * of the application when opening a modal
 * in notifications or favorites.
 * @returns {JSX} BackDrop
 */
export default function Backdrop() {
  /**
   * Contenedor con estilos que
   * se utiliza para el fondo.
   * English:
   * Container with styles that
   * are used for the background.
   */
  return (
    <div className="fixed z-1 top-0 left-0 w-screen h-screen bg-[#000000b8]"></div>
  );
}
