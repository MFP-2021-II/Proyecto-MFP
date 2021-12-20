import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "ui/TextInput";
import * as yup from "yup";

const schema = yup.object().shape({
  fecha_reserva: yup.string().required("La fecha de reserva es requerida"),
  fecha_fin: yup.string().required("La fecha de fin es requerida"),
  fecha_caducidad: yup.string().required("La fecha de caducidad es requerida"),
  numero_tarjeta: yup.string().required("El número de tarjeta es requerido"),
  cvv: yup.string().required("El código de seguridad es requerido"),
});

export default function Reservar() {
  const router = useRouter();
  const { cardID } = router.query;
  const [alojamientoId, setAlojamientoId] = useState(null);
  const {
    register,
    handleSubmit,
    formState: errors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchOneAnnouncement = async () => {
      if (cardID) {
        try {
          const res = await fetch(
            `http://localhost:3001/api/anuncio/${cardID}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${
                  JSON.parse(localStorage.getItem("user")).token
                }`,
              },
            }
          );
          const json = await res.json();
          if (json.message === "El anuncio se ha obtenido exitosamente") {
            setAlojamientoId(json.data.anuncios[0].id_alojamiento);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    if (cardID) {
      fetchOneAnnouncement();
    }
  }, [cardID]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await fetch("http://localhost:3001/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
        body: JSON.stringify({
          ...data,
          id_alojamiento: alojamientoId,
        }),
      });
      const json = await res.json();
      console.log(json);
      if (json.ok) {
        router.push("/app/profile/record");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(alojamientoId);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Reservar</h1>
      <span className="text-center">CardID: {cardID}</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="fecha_reserva"
          label="Fecha de reserva"
          register={register}
          errors={errors.fecha_reserva}
          type="date"
        />
        <TextInput
          name="fecha_fin"
          label="Fecha de fin"
          register={register}
          errors={errors.fecha_fin}
          type="date"
        />
        <TextInput
          name="fecha_caducidad"
          label="Fecha de caducidad"
          register={register}
          errors={errors.fecha_caducidad}
          type="date"
        />
        <TextInput
          name="numero_tarjeta"
          label="Número de tarjeta"
          register={register}
          errors={errors.numero_tarjeta}
        />

        <TextInput
          name="cvv"
          label="Código de seguridad"
          register={register}
          errors={errors.cvv}
        />
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Reservar
        </button>
      </form>
    </div>
  );
}
