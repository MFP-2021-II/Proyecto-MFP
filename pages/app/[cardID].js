import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function cardID({ user }) {
  const router = useRouter();
  const { cardID } = router.query;
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);

  useEffect(async () => {
    if (user) {
      try {
        const res = await fetch(
          `http://localhost:3001/api/favoritos/${cardID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (res.data) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  const handleToggleFavorite = async () => {
    setDisabled(true);
    try {
      const res = await fetch("http://localhost:3001/api/favoritos", {
        method: `${isFavorite ? "DELETE" : "POST"}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          id_anuncio: cardID,
        }),
      });
      const data = await res.json();
      console.log(data);
      setIsFavorite(!isFavorite);
      setDisabled(false);
    } catch (err) {
      console.log(err);
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (cardID) {
      window
        .fetch(`http://localhost:3001/api/anuncio/${cardID}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          console.log(data);
        });
    }
  }, [cardID]);

  return (
    <main className="flex flex-col items-center justify-center h-almost-screen">
      <h1 className="text-4xl font-bold">{cardID}</h1>
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
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:bg-blue-300"
        type="button"
        disabled={disabled}
        onClick={handleToggleFavorite}
      >
        Favoritos
      </button>
    </main>
  );
}
