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
  
    // const [open, setOpen] = useState(false);

    // const [click, setClick] = useState(false);

    //Prevent double click
    // document.addEventListener('mousedown', function (event) {
    //   if (event.detail > 1) {
    //     event.preventDefault();
    //   }
    // }, false);

  return (
    /*<div className="App">
      <h1>Hola, estos son tus datos personales:</h1>
      <ul>
        <li>Nombre: {user?.firstName}</li>
        <li>Apellido: {user?.lastName}</li>
        <li>Email: {user?.email}</li>
      </ul>
      <div className="w-64">
        <Button
          onClick={() => {
            window.localStorage.removeItem("user");
            router.push("/login");
          }}
        >
          Cerrar Sesión
        </Button>
      </div>
    </div>
    */
    <>
    {/* <nav className="absolute flex justify-center p-7 pr-10 w-full text-lg font-sans font-bold shadow-lg bg-[#FBEADC]">
      <div className="w-full md:w-8/12 flex justify-between">
        <a className="flex flex-row items-center transition duration-500 ease-in-out hover:scale-110 cursor-pointer">
          <Isotype className="w-11 h-11"/>
          <span className="hidden md:flex">Homy.</span>
        </a>
        <div className="flex items-center">
            <TextInputBrowse
              label="Buscar..."
              variant="primary"
              className="hidden md:block md:w-3/4"
            />
            <IconButton className="md:hidden">
              <Search className="fill-current text-gray-500"></Search>
            </IconButton>
            <IconButton>
              <Filter className="fill-current text-gray-500"/>
            </IconButton>

        </div>
        <div className="flex space-x-1 md:space-x-5">
          <div className="space-x-10 hidden lg:flex items-center">
            <Button variant="quaternary" className={`h-10 text-sm py-1 ${click?"hidden":""}`}  onClick={()=>setClick(true)}>
              Vista <br />anfitrión
            </Button>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div>
              <User className="w-12 rounded-full border-solid border-[3px] border-red-700 mr-4"/>
            </div>
            <div className="flex flex-col ">
              <span className="font-medium text-base truncate max-w-[90px]">
                Railly Hugo Quispe
              </span>
              <div className="flex flex-row">
                <Link href="#">
                  <a className="font-normal text-base text-gray-500 cursor-pointer hover:underline">
                    Perfil
                  </a>
                </Link>
              </div>
            </div>
            <i className="pl-2 cursor-pointer" onClick={()=>setOpen(!open)}>
              <ArrowDown />
            </i>
            <Dropdown open={open}>
              <DropdownListItem className={`lg:hidden ${click?"hidden":""}`} onClick={()=>setClick(true)}>
                Vista anfitrión
              </DropdownListItem>
              {
                click && (
                  <LinkedDropdownListItem>
                    Mis anuncios
                  </LinkedDropdownListItem>
                )
              }
            </Dropdown>
          </div>
        </div>
      </div>
    </nav> */}
          
    
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
  </>
  );
}
