import Button from "components/Buttons/Button";
import router from "next/router";
import AdCard from 'components/Card/AdCard';

import Link from 'next/link';
import TextInputBrowse from 'ui/TextInputBrowse';
import User from 'components/Icons/User';
import ArrowDown from 'components/Icons/ArrowDown';
import House from 'components/Icons/House';
import Filter from 'components/Icons/Filter';
import Search from 'components/Icons/Search';
import IconButton from 'components/Buttons/IconButton';
import Isotype from "components/Icons/Isotype";
import Dropdown from "components/Dropdown";
import DropdownListItem from "ui/DropdownListItem";
import LinkedDropdownListItem from "ui/LinkedDropdownListItem";

import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const localUser = window.localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

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
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Casa1",
      location: "Lima, Surco",
      price: "50",
      rating: "4.1"
    }];

    //Prevent double click
    // document.addEventListener('mousedown', function (event) {
    //   if (event.detail > 1) {
    //     event.preventDefault();
    //   }
    // }, false);

  return (
  <main className="pt-20 h-screen flex flex-col items-center justify-center">
    <div className="w-11/12 md:w-4/6 lg:w-5/6 xl:w-8/12 mb-10">
      <div className="flex flex-row items-center">
        <i>
          <House className="fill-current text-red-700"/>
        </i>
        <span className="text-left pl-2 font-bold text-xl">Alojamientos</span>
      </div>
      <div className="hidden">Espacio para filtros</div>
    </div>
    <div className="overflow-y-scroll place-items-center md:grid-cols-2 w-11/12 md:w-4/6 lg:w-5/6 xl:w-8/12 lg:grid-cols-3 xl:grid-cols-4 h-3/4 grid grid-cols-1 gap-10 p-10 items-center bg-[#F5F7FB] rounded-lg border-solid border">
      {test.map((item) => (
        <AdCard
          img = {item.img}
          name = {item.name}
          location = {item.location}
          price = {item.price}
          rating = {item.rating}
        />
      ))}
    </div>
  </main>
  );
}
