import Button from "components/Buttons/Button";
import router from "next/router";
import AdCard from "components/Card/AdCard";
import IconButton from "components/Buttons/IconButton";
import Search from "components/Icons/Search";
import Filter from "components/Icons/Filter";
import TextInputBrowse from "ui/TextInputBrowse";
import House from "components/Icons/House";

import { useEffect, useState } from "react";

export default function App({ user }) {
  const [anuncios, setAnuncios] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (user) {
      window
        .fetch("http://localhost:3001/api/anuncio", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setAnuncios(res.data.anuncios);
        });
    }
  }, [user]);

  const test = [
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1",
    },
  ];

  return (
    <main className="h-almost-screen flex flex-col items-center justify-center">
      <div className="w-11/12 mb-5 md:w-4/6 lg:w-5/6 xl:w-8/12 flex justify-between">
        <div className="flex flex-row items-center">
          <i>
            <House className="text-red-700 fill-current" />
          </i>
          <span className="pl-2 text-xl font-bold text-left">Alojamientos</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-row justify-end relative">
            <TextInputBrowse
              label="Buscar..."
              variant="primary"
              className="hidden md:block md:w-3/4 pl-9"
              />
            <Search className="hidden md:block absolute left-[28%] top-2 fill-current text-gray-500"/>
          </div>
          <IconButton className="md:hidden">
            <Search className="text-gray-500 fill-current" />
          </IconButton>
          <IconButton >
            <Filter className="text-gray-500 fill-current" />
          </IconButton>
        </div>
        <div className="hidden">Espacio para filtros</div>
      </div>
      <div className="overflow-y-scroll place-items-center md:grid-cols-2 w-11/12 md:w-4/6 lg:w-5/6 xl:w-8/12 lg:grid-cols-3 xl:grid-cols-4 h-3/4 grid grid-cols-1 gap-10 p-10 items-center bg-[#F5F7FB] rounded-lg border-solid border">
        {anuncios.map((item) => (
          <AdCard
            image={item.imagen[0].imagen}
            name={item.nombre}
            location={item.alojamiento.direccion}
            price={item.precio}
            rating="4.1"
          />
        ))}
      </div>
    </main>
  );
}
