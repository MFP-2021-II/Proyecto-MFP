import { screenSizes } from "utils/responsive";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "ui/TextInput";
import Button from "components/Buttons/Button";
import LandingButton from "components/Buttons/LandingButton";
import Payment from "components/Icons/Payment";
import * as yup from "yup";

const schema = yup.object().shape({
  fecha_reserva: yup.string().required("La fecha de reserva es requerida"),
  fecha_fin: yup.string().required("La fecha de fin es requerida"),
  fecha_caducidad: yup.string().required("La fecha de caducidad es requerida"),
  numero_tarjeta: yup
    .string()
    // Cambio [0-9] por \d
    .matches(/^\d{16}$/, "El número de tarjeta debe contener 16 dígitos"),
  cvv: yup
    .string()
    // Cambio [0-9] por \d
    .matches(/^\d{3}$/, "El código CVV debe contener 3 dígitos"),
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
        } catch (errorCatcher) {
          console.log(errorCatcher);
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
      } catch (errorCatcher) {
        console.log(errorCatcher);
      }
    }
  };

  console.log(errors);

  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto h-auto xl:h-almost-screen mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-0">
      <div className={screenSizes}>
        <div className="flex flex-row items-center pb-2 mb-5 border-b-2">
          <i>
            <Payment className="text-red-700 fill-current" />
          </i>
          <span className="pl-2 text-xl font-bold text-left">
            Confirmar pago
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full grid grid-cols-5 gap-4 lg:gap-8"
        >
          <div className="flex flex-col col-span-5 lg:col-span-2">
            <h1 className="text-md lg:text-xl font-bold pb-3">
              Datos de la reserva
            </h1>
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
          </div>
          <div className="flex flex-col col-span-5 lg:col-span-3">
            <h1 className="text-md lg:text-xl font-bold pb-3">
              Datos personales
            </h1>
            {/* grid Tarjeta y caducidad */}
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-0 sm:gap-4">
              <div className="flex flex-col col-span-4 sm:col-span-2">
                <TextInput
                  name="numero_tarjeta"
                  label="Número de tarjeta"
                  register={register}
                  errors={errors.numero_tarjeta}
                />
              </div>
              <div className="flex flex-col col-span-4 sm:col-span-2 lg:col-span-1">
                <TextInput
                  name="fecha_caducidad"
                  label="F. caducidad"
                  register={register}
                  errors={errors.fecha_caducidad}
                  type="date"
                />
              </div>
            </div>
            {/* grid Cod seguridad y cod.postal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4">
              <div className="flex flex-col">
                <TextInput
                  name="cvv"
                  label="Código de seguridad"
                  register={register}
                  errors={errors.cvv}
                />
              </div>
              <div className="flex flex-col col-span-1">
                <TextInput
                  name="codpos"
                  label="Código postal"
                  register={() => null}
                  // opcional
                  errors={errors.cvv}
                />
              </div>
            </div>
            {/* Agregar en la bd */}
            {/* Direccion */}
            <div className="flex flex-col">
              <TextInput
                name="direccion"
                label="Dirección de facturación"
                register={() => null}
                errors={errors.cvv}
              />
            </div>
          </div>
          {/* Botones */}
          <div className="col-span-5">
            <div className="flex flex-row justify-center space-x-4 mb-2">
              <Button variant="quinary" type="submit" className="w-36">
                Pagar
              </Button>
              <LandingButton
                toPath={`/app/${cardID}`}
                variant="quaternary"
                className="w-36"
              >
                Volver
              </LandingButton>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
