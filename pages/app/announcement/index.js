import AdCard from "components/Card/AdCard";
import Ballot from "components/Icons/Ballot";

export default function Announcement () {
  const test=[
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1"
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1"
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1"
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1"
    }];
  
  return (
    <main className="pt-20 h-screen flex flex-col items-center justify-center">
    <div className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-8/12 mb-10">
      <div className="flex flex-row items-center">
        <i>
          <Ballot className="fill-current text-red-700"/>
        </i>
        <span className="text-left pl-2 font-bold text-xl">Mis anuncios</span>
      </div>
    </div>
    <div className="overflow-y-scroll place-items-center md:grid-cols-2 w-11/12 md:w-4/6 lg:w-5/6 xl:w-8/12 lg:grid-cols-3 xl:grid-cols-4 h-3/4 grid grid-cols-1 gap-10 p-10 items-center bg-[#F5F7FB] rounded-lg border-solid border">
      {test.map((item) => (
        <AdCard
          edit = {true}
          img = {item.img}
          name = {item.name}
          location = {item.location}
          price = {item.price}
          rating = {item.rating}
        />
      ))}
    </div>
  </main>
  )
}