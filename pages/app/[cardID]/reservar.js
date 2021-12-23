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
  numero_tarjeta: yup
    .string()
    .matches(/^[0-9]{16}$/, "El número de tarjeta debe contener 16 dígitos"),
  cvv: yup
    .string()
    .matches(/^[0-9]{3}$/, "El código CVV debe contener 3 dígitos"),
});

export default function Reservar() {
  const router = useRouter();
  const { cardID } = router.query;
  const [alojamientoId, setAlojamientoId] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fechaReserva = watch("fecha_reserva");
  const fechaFin = watch("fecha_fin");
  const fechaCaducidad = watch("fecha_caducidad");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (fechaReserva && fechaFin) {
      const fechaReservaDate = new Date(fechaReserva);
      const fechaFinDate = new Date(fechaFin);
      if (fechaReservaDate > fechaFinDate) {
        setError("La fecha de reserva debe ser anterior a la fecha de fin");
      } else {
        setError(false);
      }
    }
  }, [fechaReserva, fechaFin]);

  useEffect(() => {
    if (fechaCaducidad && fechaReserva) {
      const fechaCaducidadDate = new Date(fechaCaducidad);
      const fechaReservaDate = new Date(fechaReserva);
      const currentDate = new Date();
      if (fechaCaducidadDate < fechaReservaDate) {
        setError(
          "La fecha de caducidad debe ser posterior a la fecha de reserva"
        );
      } else if (fechaCaducidadDate < currentDate) {
        setError("La fecha de caducidad debe ser posterior a la fecha actual");
      } else {
        setError(false);
      }
    }
  }, [fechaCaducidad, fechaReserva]);

  useEffect(() => {
    const fetchOneAnnouncement = async () => {
      if (cardID) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_HOMY_URL}/anuncio/${cardID}`,
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
    if (!error) {
      console.log(data);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/reservas`,
          {
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
          }
        );
        const json = await res.json();
        console.log(json);
        if (json.ok) {
          router.push("/app/profile/record");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(errors);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Reservar</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full"
      >
        <h1 className="text-xl font-bold text-center">Datos de la reserva</h1>
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
        <h1 className="text-xl font-bold text-center">Datos de la tarjeta</h1>
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
        {error && <p className="text-center text-red-500">{error}</p>}
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Pagar
        </button>
      </form>
    </div>
  );
}
