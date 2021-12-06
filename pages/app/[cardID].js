import { useRouter } from "next/router";

export default function cardID() {
  const router = useRouter();
  console.log(router);
  return (
    <main className="flex flex-col justify-center items-center h-almost-screen">
      <h1>Titulo</h1>
      <h3>calificacion</h3>
      <h3>Direccion</h3>
      <img src="" alt="imagen de referencia" />
      <h3>Tipo departamento</h3>
      <span>nHusped nHabitacion nBanio</span>
      <span>dueño</span>
      <p>Descripcion</p>
      <button>Reservar</button>
      <div>
        <span>Precio</span>
        <span>Carlificacion Comentarios</span>
      </div>
      <div>Facilidades</div>
    </main>
  );
}
