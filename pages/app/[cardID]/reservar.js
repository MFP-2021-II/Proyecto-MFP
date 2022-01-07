/**
 * Importaciones de librerias o componentes
 * English:
 * Import libraries or components.
 * Francais:
 * Importation de librairies ou composants.
 */
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

/**
 * Esquema de validación de los
 * datos del formulario
 * English:
 * Schema of the form validation
 * Francais:
 * Schema de validation du formulaire
 */
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

/**
 * Componente Reservar es una
 * seccion de la pagina
 * que muestra el formulario de
 * reserva de una habitacion,
 * con los datos de la tarjeta de
 * credito y la fecha de caducidad,
 * fechad e llegada y fecha de salida,
 * ademas de un boton para reservar la
 * habitacion.
 * English:
 * Reservar component is a section
 * of the page that shows the
 * form of reservation of a room,
 * with the data of the credit card
 * and the expiration date, arrival
 * date and departure date, as well
 * as a button to reserve the room.
 * Francais:
 * Composant Reservar est une
 * section de la page
 * qui affiche le formulaire
 * de reservation d'une
 * chambre, avec les données
 * de la carte de crédit
 * et la date d'expiration,
 * date d'arrivée et date
 * de départ, ainsi que un
 * bouton pour réserver la
 * chambre.
 */
export default function Reservar() {
  /**
   * Router para redireccionar
   * a otra pagina
   * English:
   * Router to redirect to another page
   * Francais:
   * Router pour rediriger vers une autre page
   */
  const router = useRouter();
  /**
   * Deesctructurar el query para
   * obtener la ruta del id de
   * la taarjeta de alojamiento.
   * English:
   * Destructuring the query to get
   * the route of the accommodation
   * card id.
   * Francais:
   * Désctructuration de la requête
   * pour obtenir la route de la
   * carte d'allocation d'hébergement.
   */
  const { cardID } = router.query;
  /**
   * Estado para guardar los datos
   * de los alojamientos.
   * English:
   * State to save the accommodation
   * data.
   * Francais:
   * Etat pour sauvegarder les données
   * des hébergements.
   */
  const [alojamientoId, setAlojamientoId] = useState(null);
  /**
   * Uso de yup resolver para
   * validar los datos del formulario
   * y obtener los errores.
   * English:
   * Use of yup resolver to validate
   * the form data and get the errors.
   * Francais:
   * Utilisation de yup resolver pour
   * valider les données du formulaire
   * et obtenir les erreurs.
   */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /**
   * Para obtener los datos
   * de la fecha de reserva.
   * English:
   * To get the data of the reservation
   * date.
   * Francais:
   * Pour obtenir les données
   * de la date de réservation.
   */
  const fechaReserva = watch("fecha_reserva");
  const fechaFin = watch("fecha_fin");
  /**
   * Para obtener los datos
   * de la fecha de fin.
   * English:
   * To get the data of the end date.
   * Francais:
   * Pour obtenir les données
   * de la date de fin.
   */
  const fechaCaducidad = watch("fecha_caducidad");
  /**
   * Estado para establecer un error.
   * English:
   * State to set an error.
   * Francais:
   * Etat pour définir un erreur.
   */
  const [error, setError] = useState(null);
  /**
   * useEffect para obtener los datos
   * ,fechas de reserva y fin.
   * English:
   * useEffect to get the data,
   * reservation dates and end dates.
   * Francais:
   * useEffect pour obtenir les données,
   * dates de réservation et dates de fin.
   */
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

  /**
   * useEffect para obtener la fecha actual
   * y establecer la fecha de caducidad.
   * English:
   * useEffect to get the current date
   * and set the expiration date.
   * Francais:
   * useEffect pour obtenir la date actuelle
   * et définir la date d'expiration.
   */
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
  /**
   * usEffect para obtener el id del alojamiento
   * y establecerlo en el estado.
   * y redireccionar al usuario a la página de
   * historial.
   * English:
   * useEffect to get the accommodation id
   * and set it in the state.
   * and redirect the user to the history page.
   * Francais:
   * useEffect pour obtenir l'id de l'hébergement
   * et le définir dans l'état.
   */
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

  /**
   * Funcion para enviar los datos
   * del formulario.
   * en caso de que no haya errores
   * se redirecciona al usuario
   * a la página de historial.
   * English:
   * Function to send the form data.
   * in case there are no errors
   * the user is redirected to the
   * history page.
   * Francais:
   * Fonction pour envoyer les données
   * du formulaire.
   */
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
    /**
     * Se establece el layout de reserva de alojamiento
     * con el formulario de reserva.
     * Se establece el estilo de los elementos del formulario.
     * Se establece el estilo del botón de reservar.
     * Se establece el estilo del botón de cancelar.
     * Se establece el estilo del botón de volver.
     * Se establece el estilo del botón de historial.
     * Se utiliza los componentes de para el formulario.
     * Se utiliza el componente de error.
     * English:
     * Set the accommodation reservation layout
     * with the reservation form.
     * Set the style of the form elements.
     * Set the style of the reserve button.
     * Set the style of the cancel button.
     * Set the style of the back button.
     * Set the style of the history button.
     * Use the form components.
     * Use the error component.
     * Francais:
     * Définir le layout de réservation d'hébergement
     * avec le formulaire de réservation.
     * Définir le style des éléments du formulaire.
     * Définir le style du bouton de réservation.
     * Définir le style du bouton de annulation.
     * Définir le style du bouton de retour.
     * Définir le style du bouton de l'historique.
     * Utiliser les composants du formulaire.
     * Utiliser le composant d'erreur.
     */
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
    /**
     * Se establece el layout de reserva de alojamiento
     * con el formulario de reserva.
     * Se establece el estilo de los
     * elementos del formulario.
     * Se establece el estilo del botón
     * de reservar. Se establece el estilo
     * del botón de cancelar. Se establece
     * el estilo del botón de volver. Se establece
     * el estilo del botón de historial. Se utiliza
     * los componentes de para el formulario.
     * Se utiliza el componente de error.
     * English:
     * Set the accommodation reservation layout
     * with the reservation form. Set the
     * style of the form elements. Set the
     * style of the reserve button. Set the
     * style of the cancel button. Set the
     * style of the back button. Set the
     * style of the history button.
     * Use the form components.
     * Use the error component.
     * Francais:
     * Définir le layout de réservation
     * d'hébergement avec le formulaire
     * de réservation. Définir le style des
     * éléments du formulaire. Définir le
     * style du bouton de réservation.
     * Définir le style du bouton de annulation.
     * Définir le style du bouton de retour.
     * Définir le style du bouton de l'historique.
     * Utiliser les composants du formulaire.
     * Utiliser le composant d'erreur.
     */
  );
}
