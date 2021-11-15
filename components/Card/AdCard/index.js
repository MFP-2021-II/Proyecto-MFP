import Star from 'components/Icons/Star';

export default function AdCard ({ img ,name, location, price, rating }) {
  const event_card = "transition duration-500 ease-in-out hover:shadow-md";
  const text_size = {
    u_text: "font-bold text-sm md:text-base",
    m_text: "font-normal text-gray-400 text-xs md:text-sm",
    b_text: "font-light text-xs md:text-sm",
    r_text: "font-medium text-xs md:text-sm"
  };
  
  return (
    <div className={`bg-white rounded-md border-solid border-2 p-4 max-w-md md:max-w-xl max-h-md md:max-h-80 md:h-64 cursor-pointer ${event_card}`}>
      <div className="bg-transparent h-36">
        <img src={img} className="w-full h-full rounded-md" alt="reference image" />
      </div>
      <div className="flex flex-row justify-between items-center rounded pt-2 px-1">
        <div className="flex flex-col">
          <span className={text_size["u_text"]} >
            {name}
          </span>
          <span className={text_size["m_text"]}>
            {location}
          </span>
          <span className={text_size["b_text"]}>
          {`S/ ${price} / noche`}
          </span>
        </div>
        <div className="flex flex-row items-center">
          <i className="pr-1">
            <Star className="w-4 fill-current text-red-700"/>
          </i>
          <span className={text_size["r_text"]}>
            {rating}
          </span>
        </div>
      </div>
    </div>
  )
}