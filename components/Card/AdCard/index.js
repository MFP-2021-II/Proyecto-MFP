import Star from "components/Icons/Star";
import Edit from "components/Icons/Edit";
import Delete from "components/Icons/Delete";
import Link from "next/link";

/**
 * Compontente para mostrar una tarjeta de anuncio
 * English:
 * Component to show an ad card
 *
 * image es la imagen de la tarjeta
 * name es el nombre de la tarjeta
 * location es la ubicación de la tarjeta
 * price es el precio de la tarjeta
 * rating es la calificación de la tarjeta
 * edit es el icono para cambiar el modo de la tarjeta
 *
 * English:
 * image of the card
 * name of the card
 * location of the card
 * price of the card
 * rating of the card
 * edit icon to change the mode of the card
 * @param {string} image Imagen del anuncio
 * @param {string} name Nombre del anuncio
 * @param {string} location Ubicacion del anuncio
 * @param {string} price Precio del anuncio
 * @param {string} rating Valoracion del anuncio
 * @param {string} edit Propiedad para establecer tipo de la tarjeta
 * @returns {JSX} AdCard
 */
export default function AdCard({
  id,
  image,
  name,
  location,
  price,
  rating,
  edit = false,
  user = {},
  setReload,
  reload = false,
}) {
  /**
   * Agrega animación a la tarjeta
   * @type {string}
   */
  const event_card = "transition duration-500 ease-in-out hover:shadow-md";
  /**
   * Agrega estilos responsive a las tarjetas
   * @type {{u_text: string, m_text: string, b_text: string, r_text: string}}
   */
  const text_size = {
    u_text: "font-bold text-sm md:text-base truncate w-full",
    m_text: "font-normal text-gray-400 text-xs md:text-sm truncate w-full",
    b_text: "font-light text-xs md:text-sm truncate w-full",
    r_text: "font-medium text-xs md:text-sm",
  };
  /**
   * Muestra anuncios de confirmación para eliminar o
   * editar tarjetas una función asincrona que se ejecuta
   * al hacer click en el boton de una alerta muestra un
   * mensaje si se confirma la eliminación o editar si
   * se confirma la eliminación del anuncio, se hace
   * una petición al servidor para eliminarlo de la base
   * de datos y se cambia el estado reload para
   * actualizar la lista de anuncios
   * English:
   * Shows ads for confirmation to delete or
   * edit cards an asynchronous function that is
   * executed when you click on the button of an alert
   * shows a message if you confirm the deletion or
   * edit if you confirm the deletion of the ad,
   * a request is made to the server to delete it
   * from the database and the state reload is changed
   * to update the list of ads.
   **/
  const handleDelete = async () => {
    if (window.confirm("¿Estas seguro de eliminar el anuncio?")) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOMY_URL}/alojamiento/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setReload(!reload);
        setTimeout(() => {
          window.alert("Anuncio eliminado con exito");
        }, 500);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div
      className={`bg-white rounded-md border-solid border-2 p-4 max-w-md md:max-w-xl cursor-pointer ${event_card} ${
        edit ? "max-h-md" : "max-h-md md:max-h-80 md:h-64"
      }`}
    >
      <div className="bg-transparent h-36">
        {/* Se cambió el largo de la tarjeta de full a 60 */}
        <img
          src={image}
          className="h-full rounded-md w-60"
          alt="reference image"
        />
      </div>
      <div className="flex flex-row items-center justify-between px-1 pt-2 rounded">
        {/* Se agrego tamaño a las secciones de los texto para implementar el truncate */}
        <div className="flex flex-col w-40 sm:w-32 lg:w-40">
          <span title={name} className={text_size["u_text"]}>
            {name}
          </span>
          {/* Se realiza un operador ternario para reutilizar el mismo componente AdCard para la vista de
          edición de anuncios y la vista principal de los anuncios */}
          {edit ? (
            <></>
          ) : (
            <>
              <span title={location} className={text_size["m_text"]}>
                {location}
              </span>
              <span className={text_size["b_text"]}>
                {`S/ ${price} / noche`}
              </span>
            </>
          )}
        </div>
        {/* Se realiza un operador ternario con el mismo componente AdCard para la vista de
          edición de anuncios en la dirección /app/announcement y la vista principal de los anuncios en la dirección /app */}
        {edit ? (
          <div className="flex flex-row pr-1">
            <Link href={`/app/announcement/edit/${id}`}>
              <a>
                <Edit className="flex items-center w-5 h-5 fill-current hover:text-blue-700" />
              </a>
            </Link>
            <button onClick={handleDelete}>
              <Delete className="flex items-center w-5 h-5 fill-current hover:text-red-700" />
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-row items-center">
              <i className="pr-1">
                <Star className="w-4 text-red-700 fill-current" />
              </i>
              <span className={text_size["r_text"]}>{rating}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
