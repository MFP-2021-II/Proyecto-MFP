import Link from 'next/link';
import Button from "components/Buttons/Button";
import TextInputBrowse from 'ui/TextInputBrowse';
import User from 'components/Icons/User';
import ArrowDown from 'components/Icons/ArrowDown';
import Filter from 'components/Icons/Filter';
import Search from 'components/Icons/Search';
import IconButton from 'components/Buttons/IconButton';
import Isotype from "components/Icons/Isotype";
import Dropdown from "components/Dropdown";
import DropdownListItem from "ui/DropdownListItem";
import LinkedDropdownListItem from "ui/LinkedDropdownListItem";
import { useState } from 'react';

export default function AppLayout () {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <nav className="absolute flex justify-center p-7 pr-10 w-full text-lg font-sans font-bold shadow-lg bg-[#FBEADC]">
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
              <ArrowDown className={`${open?"transition duration-300":"transition duration-300 transform rotate-180"}`}/>
            </i>
            <Dropdown open={open}>
              <DropdownListItem className={`lg:hidden ${click?"hidden":""}`} onClick={()=>setClick(true)}>
                Vista anfitrión
              </DropdownListItem>
              {
                click && (
                  <>
                    <LinkedDropdownListItem toPath="/app/announcement">
                      Mis anuncios
                    </LinkedDropdownListItem>
                    <LinkedDropdownListItem toPath="/app/announcement/create">
                      Crear anuncio
                    </LinkedDropdownListItem>
                  </>
              )}
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  )
}