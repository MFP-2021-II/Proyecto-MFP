/**
 * Importar librerias o componentes.
 * English:
 * Import libraries or components.
 * Francais:
 * Importer des librairies ou des composants.
 */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoderFav from "components/Icons/BorderFav";
import Fav from "components/Icons/Fav";
import Star from "components/Icons/Star";
import Map from "components/Icons/Map";
import Button from "components/Buttons/Button";
import TextArea from "ui/TextArea";
import Comment from "components/InfoBoxes/Comment";
import UserVariant from "components/Icons/UserVariant";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { screenSizes } from "utils/responsive";
import Pool from "components/Icons/Pool";
import Jaccuzi from "components/Icons/Jaccuzi";
import Parking from "components/Icons/Parking";
import Empty from "components/Icons/Empty";

/**
 * Esquema para validar el formulario
 * de tipo objeto de react-hook-form.
 * English:
 * Schema to validate the form of
 * react-hook-form type object.
 * Francais:
 * Schema et valider le formulaire de
 * type objet de react-hook-form.
 */
const schema = yup.object().shape({
  contenido: yup.string().required("Este campo es requerido"),
  calificacion: yup.number().required("Este campo es requerido"),
});
/**
 * Componente IDCard que renderiza
 * la pagina de una tarjeta seleccionada,
 * con sus respectivos datos.
 * English:
 * IDCard component that renders
 * the selected card page, with its
 * respective data.
 *
 * user - Usuario que esta logueado
 * setReloadFavorites - Funcion para
 * actualizar el estado de favoritos
 * reloadFavorites - Estado de favoritos
 * English:
 * User that is logged in
 * setReloadFavorites - Function to
 * update the favorites state
 * reloadFavorites - Favorites state
 *
 * Francais:
 * Utilisateur connecte
 * setReloadFavorites - Fonction pour
 * mettre a jour l'etat des favoris
 * reloadFavorites - Etat des favoris
 */
export default function IDCard({ user, setReloadFavorites, reloadFavorites }) {
  /**
   * Router para obtener la url actual
   * Tipo objeto
   * English:
   * Router to get the current url
   * Type object
   * Francais:
   * Router pour obtenir
   * l'url actuelle
   * Type objet
   */
  const router = useRouter();
  /**
   * Deesctructurar el query para
   * obtener la ruta del id de
   * la taarjeta de alojamiento.
   * English:
   * Destructuring the query to
   * get the route of the id of
   * the accommodation card.
   * Francais:
   * Deconstruction de la requete
   * pour obtenir la route de l'id
   * de la carte d'alojamient.
   */
  const { cardID } = router.query;
  /**
   * useState para establecer el
   * alojamiento favorito para
   * el usuario.
   * English:
   * useState to set the accommodation
   * favorite for the user.
   * Francais:
   * useState pour mettre a jour
   * l'etat des favoris
   */
  const [isFavorite, setIsFavorite] = useState(false);
  /**
   * useState para establecer la data.
   * English:
   * useState to set the data.
   * Francais:
   * useState pour mettre a jour
   * les donnees.
   */
  const [dato, setDato] = useState(null);
  /**
   * useState para cargar las
   * publicaciones del usuario.
   * English:
   * useState to load the user's
   * publications.
   * Francais:
   * useState pour charger les
   * publications de l'utilisateur.
   */
  const [reloadPublications, setReloadPublications] = useState(false);
  /**
   * Utilización del yup resolver
   * para validar el formulario y
   * obtener los errores de los campos.
   * English:
   * Utilization of the yup resolver
   * to validate the form and get
   * the errors of the fields.
   * Francais:
   * Utilisation de yup resolver
   * pour valider le formulaire et
   * obtenir les erreurs des champs.
   */
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /**
   * constante para obtener la
   * calificación del usuario.
   * English:
   * constant to get the user's
   * rating.
   * Francais:
   * constante pour obtenir la
   * note de l'utilisateur.
   */
  const calification = watch("calificacion");

  /**
   * UseEffect para obtener los favoritos
   * del usuario.
   * English:
   * UseEffect to get the user's favorites.
   * Francais:
   * UseEffect pour obtenir les favoris
   * de l'utilisateur.
   */
  useEffect(async () => {
    if (user && cardID) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/favoritos/${cardID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const { data } = await res.json();
        console.log(data);
        if (data) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [user, cardID, reloadFavorites]);

  /**
   * UseEffect para hacer un handle
   * de los favoritos, actualizarlos
   * y cargarlos.
   * Eliminar y establecer.
   * English:
   * UseEffect to make a handle of
   * the favorites, update them and
   * load them.
   * Remove and set.
   * Francais:
   * UseEffect pour faire un handle
   * des favoris, les mettre a jour
   * et les charger.
   */
  const handleToggleFavorite = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/favoritos`, {
        method: `${isFavorite ? "DELETE" : "POST"}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          id_anuncio: cardID,
        }),
      });
      const dataRes = await res.json();
      console.log(dataRes);
      setIsFavorite(!isFavorite);
      setReloadFavorites(!reloadFavorites);
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * UseEffect para obtener la calificación
   * del usuario por alojamiento.
   * English:
   * UseEffect to get the user's rating
   * by accommodation.
   * Francais:
   * UseEffect pour obtenir la note
   * de l'utilisateur par alojamient.
   */
  useEffect(() => {
    register("calificacion");
    if (cardID) {
      window
        .fetch(`${process.env.NEXT_PUBLIC_HOMY_URL}/alojamiento/${cardID}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => res.json())
        .then(({ data }) => {
          console.log(data.alojamientos);
          setDato(data.alojamientos);
        });
    }
  }, [cardID, reloadPublications]);

  /**
   * Función para enviar los comentarios
   * publicados por el usuario.
   * English:
   * Function to send the comments posted
   * by the user.
   * Francais:
   * Fonction pour envoyer
   * les commentaires
   * postes par l'utilisateur.
   */
  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOMY_URL}/comentarios`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            id_anuncio: cardID,
            contenido: data.contenido,
            calificacion: calification,
          }),
        }
      );
      const dataRes = await res.json();
      console.log(dataRes);
      setReloadPublications(!reloadPublications);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Rating del alojamiento.
   * English:
   * Rating of the accommodation.
   * Francais:
   * Note de l'alojamient.
   */
  const rating = [1, 2, 3, 4, 5];

  /**
   * Render de las facilidades
   * del alojamiento.
   * English:
   * Render of the facilities of
   * the accommodation.
   * Francais:
   * Render des facilités de
   * l'alojamient.
   */
  const IconosFacilidades = {
    Piscina: <Pool className="w-8 h-8 my-2 mx-2 sm:mx-0" />,
    Jacuzzi: <Jaccuzi className="w-8 h-8 my-2 mx-2 sm:mx-0" />,
    Estacionamientos: <Parking className="w-8 h-8 my-2 mx-2 sm:mx-0" />,
  };

  /**
   * Logica de soleecionar estrellas
   * para la calificacion por puntos.
   * English:
   * Logic to select stars for the
   * rating by points.
   * Francais:
   * Logique pour selectionner des
   * etoiles pour la note par
   * points.
   */
  const calificacion = (
    dato?.anuncio[0]?.comentarios?.reduce(
      (total, comentario) => total + comentario.calificacion,
      0
    ) / (dato?.anuncio[0]?.comentarios?.length || 1)
  ).toFixed(1);

  return (
    /**
     * Se carga el contenido principal
     * de la vista de un alojamiento
     * por su id, con sus respectivas
     * publicaciones y comentarios.
     * Se muestra el nombre del alojamiento,
     * su descripción, la calificación, la
     * imagen, la ubicación, las facilidades,
     * el precio, el número de estrellas,
     * el número de comentarios, el número de
     * favoritos, el número de visitas, el
     * número de reservas, el número de
     * personas que han reservado, el número
     * de personas que han visitado, el número
     * de personas que han hecho una reserva,
     * el número de personas que han hecho
     * una visita, el número de personas que
     * han hecho una reserva y el número
     * de personas que han hecho una visita.
     * English:
     * The main content of the view of
     * an accommodation by its id, with
     * its respective publications and
     * comments.
     * It shows the name of the accommodation,
     * its description, the rating, the image,
     * the location, the facilities, the price,
     * the number of stars, the number of
     * comments, the number of favorites,
     * the number of visits, the number of
     * reservations, the number of people
     * who have reserved, the number of people
     * who have visited, the number of people
     * who have made a reservation, the number
     * of people who have made a visit, the
     * number of people who have made a
     * reservation and the number of people
     * who have made a visit.
     *
     * * Francais:
     * Le contenu principal de la vue d'un
     * logement par son id, avec ses
     * publications et commentaires. Il
     * affiche le nom du logement,
     * sa description, la note, l'image, la
     * localisation, les facilités, le
     * prix, le nombre d'étoiles, le
     * nombre de commentaires, le nombre
     * de favoris, le nombre de visites,
     * le nombre de réservations, le nombre
     * de personnes qui ont réservé, le nombre
     * de personnes qui ont visité, le nombre
     * de personnes qui ont fait une réservation,
     * le nombre de personnes qui ont fait une
     * visite, le nombre de personnes qui ont
     * fait une réservation et le nombre de
     * personnes qui ont fait une visite.
     */
    <main className="flex flex-col items-center justify-center overflow-y-auto h-auto mt-10">
      {/* {mostrarPago &&aa modalPago}*/}

      <div className={`flex justify-between mb-3 ${screenSizes}`}>
        <div className="flex flex-col">
          {dato && (
            <>
              <h1 className="text-2xl font-medium lg:text-3xl">
                {dato?.anuncio[0]?.nombre}
              </h1>
              <div className="flex flex-row">
                <div className="flex flex-row items-center">
                  <Star className="w-5 h-5 text-red-700 fill-current" />
                  <span className="pl-2">{dato && calificacion}</span>
                </div>
                <div className="flex flex-row items-center pl-4">
                  <Map className="w-5 h-5 text-red-700 fill-current" />
                  <span className="pl-2">{dato?.direccion}</span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-row items-center">
          <span className="hidden pr-2 font-semibold md:flex">
            {!isFavorite ? "Agregar a favoritos" : "Eliminar de favoritos"}
          </span>
          {isFavorite ? (
            // si es favorito}
            <Fav
              className="text-red-700 cursor-pointer fill-current hover:text-red-400"
              onClick={handleToggleFavorite}
            />
          ) : (
            // si no es favorito
            <BoderFav
              className="cursor-pointer fill-current hover:text-red-700"
              onClick={handleToggleFavorite}
            />
          )}
        </div>
      </div>
      <div className={`border-2 mb-2 rounded-lg ${screenSizes}`}>
        {dato?.anuncio[0]?.imagen?.map((img) => (
          <img
            key={img.id}
            src={img.imagen}
            className="w-96 h-[12rem] sm:h-[15rem] rounded-lg"
            alt="imagen de referencia"
          />
        ))}
      </div>
      {dato && (
        <h2 className={`font-semibold text-lg ${screenSizes}`}>
          {`Tipo alojamiento ${dato?.tipo_alojamiento?.descripcion}`}
        </h2>
      )}
      <section className={`grid grid-cols-3 sm:grid-cols-4 ${screenSizes}`}>
        {/* Seccion nombre y descripcion */}
        <div className="items-center col-span-3 mr-0 sm:mr-5">
          <div className="flex flex-row justify-between py-2 border-b-2">
            <span className="pt-1 text-sm">
              {dato &&
                dato?.caracteristica.map((car) => {
                  if (
                    car.descripcion !== "Piscina" &&
                    car.descripcion !== "Estacionamiento" &&
                    car.descripcion !== "Estacionamientos" &&
                    car.descripcion !== "Jacuzzi" &&
                    car.descripcion !== "Jaccuzi"
                  ) {
                    return (
                      <span key={car.id} className="text-gray-600">
                        {`${car?.cantidad} ${car?.descripcion}`}
                        {` `}
                        {` · `}
                      </span>
                    );
                  }
                })}
            </span>
            <div className="flex flex-row">
              <UserVariant className="border-2 border-green-700 rounded-full w-7 h-7" />
              {dato && (
                <span className="flex flex-row ml-2 font-semibold">
                  {dato?.usuario?.nombre}
                  <span className="hidden ml-1 font-semibold lg:flex">
                    {dato?.usuario?.apellidos}
                  </span>
                </span>
              )}
            </div>
          </div>
          {dato && (
            <p className="w-full pt-2 min-h-[6rem]">
              {dato?.anuncio[0]?.descripcion}
            </p>
          )}
          <div className="flex flex-row items-center justify-center w-full py-6">
            <Button
              onClick={() =>
                router.push({
                  pathname: `/app/[cardID]/reservar`,
                  query: { cardID: cardID },
                })
              }
              variant="quinary"
              className="w-32 h-10 font-semibold"
              register={null}
            >
              Pagar
            </Button>
            <div className="flex flex-col ml-6 min-h-[2rem]">
              {dato && (
                <span className="text-base font-semibold">
                  S/ {dato?.anuncio[0]?.precio} / noche
                </span>
              )}
              <div className="flex flex-row items-center justify-center">
                <Star className="w-4 h-4 text-red-700 fill-current" />
                <span className="pr-1 text-sm">{dato && calificacion}</span>
                <span className="text-sm text-gray-500">
                  ({dato && dato?.anuncio[0]?.comentarios?.length} reseñas)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Seccion de facilidades */}
        <div className="flex justify-center col-span-3 sm:col-span-1">
          <div className="flex flex-row justify-between w-full p-4 bg-gray-100 rounded-lg sm:flex-col">
            <span className="font-semibold h-[15%] mb-2">El lugar ofrece:</span>
            <ul className="flex flex-row sm:flex-col justify-start h-[85%] font-semibold items-center">
              {dato &&
                dato?.caracteristica.map((car) => {
                  if (
                    car.descripcion !== "Huespedes" &&
                    car.descripcion !== "Habitaciones" &&
                    car.descripcion !== "Baños" &&
                    car?.cantidad !== 0
                  ) {
                    return (
                      <li key={car.id} title={car?.descripcion}>
                        {IconosFacilidades[car.descripcion]}
                      </li>
                    );
                  } else if (
                    car.cantidad >= 0 &&
                    !(
                      car.descripcion !== "Piscina" &&
                      car.descripcion !== "Estacionamientos" &&
                      car.descripcion !== "Jacuzzi"
                    )
                  ) {
                    // Return defectuoso
                    return (
                      <li
                        title="El lugar no ofrece nada."
                        className="bg-gray-300 rounded-lg m-1 sm:px-2"
                      >
                        <Empty className="w-8 h-8 my-2 mx-2 sm:mx-0 fill-current text-gray-600" />
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
        </div>
      </section>
      {/* Area de comentarios */}
      <section className={`flex flex-col mt-5 ${screenSizes}`}>
        <div className="flex flex-row justify-between pb-2 font-semibold border-b-2">
          <h3>Comentarios y valoraciones</h3>
          <div className="flex flex-row items-center">
            <Star className="w-5 h-5 text-red-700 fill-current" />
            <span className="pl-2">{dato && calificacion}</span>
          </div>
        </div>
        {/* Form para enviar comentario y valoracion */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-5 mt-4"
          // className="flex flex-wrap md:flex-row justify-between"
        >
          <div className="col-span-3 lg:col-span-4">
            <TextArea
              label="Enviar comentario"
              name="contenido"
              placeholder="Escribe aquí tu comentario..."
              register={register}
              errors={errors.contenido}
            />
          </div>
          <div className="flex flex-col justify-center items-center col-span-2 lg:col-span-1">
            <div className="flex flex-row pb-2 space-x-2">
              {rating.map((num, index) => (
                <Star
                  key={num}
                  className={`w-5 h-5 fill-current cursor-pointer ${
                    index + 1 <= calification ? "text-red-700" : "text-gray-500"
                  }`}
                  onClick={() => {
                    setValue("calificacion", index + 1);
                  }}
                />
              ))}
            </div>
            <div className="mb-2">
              <Button
                type="submit"
                variant="quaternary"
                className="h-10 font-semibold w-36"
              >
                Enviar
              </Button>
            </div>
          </div>
        </form>
        <div className="mt-3">
          {dato &&
            dato?.anuncio[0]?.comentarios.map((comentario) => (
              <Comment
                key={comentario.id}
                usuario={`${comentario?.usuario?.nombre} ${comentario?.usuario?.apellidos}`}
                fecha={new Date(comentario?.createdAt).toLocaleDateString()}
                comentario={comentario?.contenido}
              />
            ))}
        </div>
      </section>
    </main>
    /**
     * Se carga el contenido principal de
     * la vista de un alojamiento por
     * su id, con sus respectivas publicaciones
     * y comentarios. Se muestra el nombre
     * del alojamiento, su descripción,
     * la calificación, la imagen, la ubicación,
     * las facilidades, el precio, el número de
     * estrellas, el número de comentarios,
     * el número de favoritos, el número de visitas,
     * el número de reservas, el número de personas
     * que han reservado, el número de personas
     * que han visitado, el número de personas
     * que han hecho una reserva, el número
     * de personas que han hecho una visita,
     * el número de personas que han hecho
     * una reserva y el número de personas
     * que han hecho una visita.
     * English:
     * The main content of the view of an
     * accommodation by its id, with its
     * respective publications and
     * comments. It shows the name
     * of the accommodation, its description,
     * the rating, the image, the location,
     * the facilities, the price, the number
     * of stars, the number of comments,
     * the number of favorites,
     * the number of visits, the number of
     * reservations, the number of people who
     * have reserved, the number of people
     * who have visited, the number of people who
     * have made a reservation, the number
     * of people who have made a visit, the
     * number of people who have made a
     * reservation and the number of people who
     * have made a visit.
     *
     * Francais:
     * Le contenu principal de la vue
     * d'un logement par son id, avec
     * ses publications et commentaires.
     * Il affiche le nom du logement,
     * sa description, la note, l'image,
     * la localisation, les facilités,
     * le prix, le nombre d'étoiles,
     * le nombre de commentaires, le nombre
     * de favoris, le nombre de visites,
     * le nombre de réservations, le nombre
     * de personnes qui ont réservé, le nombre
     * de personnes qui ont visité, le nombre
     * de personnes qui ont fait une réservation,
     * le nombre de personnes qui ont fait une
     * visite, le nombre de personnes qui ont
     * fait une réservation et le nombre de
     * personnes qui ont fait une visite.
     */
  );
}
