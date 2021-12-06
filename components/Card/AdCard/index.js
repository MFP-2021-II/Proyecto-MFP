import Star from "components/Icons/Star";
import Edit from "components/Icons/Edit";
import Delete from "components/Icons/Delete";
import Link from "next/link";

/**
 * Compontente para mostrar una tarjeta de anuncio
 * @param {string} image Imagen del anuncio
 * @param {string} name Nombre del anuncio
 * @param {string} location Ubicacion del anuncio
 * @param {string} price Precio del anuncio
 * @param {string} rating Valoracion del anuncio
 * @param {string} edit Propiedad para establecer tipo de la tarjeta
 * @returns {JSX} AdCard
 */
export default function AdCard({
  image,
  name,
  location,
  price,
  rating,
  edit = false,
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
    u_text: "font-bold text-sm md:text-base",
    m_text: "font-normal text-gray-400 text-xs md:text-sm",
    b_text: "font-light text-xs md:text-sm",
    r_text: "font-medium text-xs md:text-sm",
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
          src={`data:image/jpeg;base64,${image}`}
          className="w-60 h-full rounded-md"
          alt="reference image"
        />
      </div>
      <div className="flex flex-row items-center justify-between px-1 pt-2 rounded">
        <div className="flex flex-col">
          <span className={text_size["u_text"]}>{name}</span>
          {edit ? (
            <></>
          ) : (
            <>
              <span className={text_size["m_text"]}>{location}</span>
              <span className={text_size["b_text"]}>
                {`S/ ${price} / noche`}
              </span>
            </>
          )}
        </div>
        {edit ? (
          <div className="flex flex-row pr-1">
            <Link href="/app/announcement/edit">
              <Edit className="flex items-center w-5 h-5 fill-current hover:text-blue-700" />
            </Link>
            <Delete className="flex items-center w-5 h-5 fill-current hover:text-red-700" />
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
