/**
 * Componente de la página de contacto
 * @returns {JSX} Contacto
 */
export default function Contact() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 p-8 gap-8">
      <section className="col-span-1 md:col-span-2">
        <h1 className="font-bold text-3xl">Contáctanos</h1>
        <hr />
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          quasi quas ab corporis aliquam optio, nesciunt autem. Laborum alias
          aliquid veniam. Reiciendis sapiente unde in, eveniet blanditiis quam
          odit sequi.
        </p>
        <p className="my-6">
          <strong>Email: </strong>raillykrry@gmail.com
        </p>
        <p className="my-6">
          <strong>Teléfono: </strong>+51 987-654-321
        </p>
        <p className="my-6">
          <strong>Dirección: </strong>av. Universitaria, la av. Venezuela, la
          av. Germán Amézaga y la av. Óscar R. Benavides
        </p>
      </section>
      <section className="col-span-1 hidden md:block">
        <article className="bg-[#EFC4AE] text-[#C46C7C] text-center text-2xl p-8 my-6">
          LLámanos al <strong>987-654-321</strong>
        </article>
        <div className="bg-green-200 shadow-md my-6 text-center p-32">
          Content here
        </div>
      </section>
    </main>
  );
}
