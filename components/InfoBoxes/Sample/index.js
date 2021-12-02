/**
 * Componente de ejemplo en la pagina de registro e inicio de sesion
 * @returns {JSX} Sample
 */
export default function Sample() {
  return (
    <div className="flex-col justify-center w-full hidden lg:flex">
      <section>
        <div className="flex justify-center">
          <div className="bg-gray-50 shadow-xl p-10 max-w-[448px] max-h-[39.5rem] rounded-lg hidden lg:flex items-center">
            <img
              src="https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="prev"
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex-col text-center bg-gray-900 bg-opacity-20 rounded-lg p-6 text-gray-50 hidden xl:flex max-w-2xl mt-8">
            <span className="font-bold mb-3">Nombre del módulo</span>
            <p className="font-normal mb-2">
              Descripcion: Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ea minima fuga recusandae dolor ipsum veniam nesciunt sint.
            </p>
            <i>"un icono"</i>
          </div>
        </div>
      </section>
    </div>
  );
}
