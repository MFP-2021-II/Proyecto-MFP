import Link from "next/link";
import Button from "components/Buttons/Button";
import TextInputBrowse from "ui/TextInputBrowse";
import User from "components/Icons/User";
import ArrowDown from "components/Icons/ArrowDown";
import Filter from "components/Icons/Filter";
import Search from "components/Icons/Search";
import IconButton from "components/Buttons/IconButton";
import Isotype from "components/Icons/Isotype";
import Dropdown from "components/Dropdown";
import DropdownListItem from "ui/DropdownListItem";
import LinkedDropdownListItem from "ui/LinkedDropdownListItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AppLayout({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [click, setClick] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <nav className="flex justify-center p-7 pr-10 w-full text-lg font-sans font-bold shadow-lg bg-[#FBEADC]">
        <div className="flex justify-between w-full md:w-8/12">
          <a className="flex flex-row items-center transition duration-500 ease-in-out cursor-pointer hover:scale-110">
            <Isotype className="w-11 h-11" />
            <span className="hidden md:flex">Homy.</span>
          </a>
          {/* barra de buscar */}
          <div className="flex space-x-1 md:space-x-5">
            <div className="items-center hidden space-x-10 lg:flex">
              {pathname === "/app/announcement" ? (
                <Button
                  variant="quinary"
                  className="h-10 py-1 text-sm"
                  onClick={() => router.push("/app/")}
                >
                  Vista huésped
                </Button>
              ) : (
                <Button
                  variant="quaternary"
                  className="h-10 py-1 text-sm"
                  onClick={() => router.push("/app/announcement")}
                >
                  Vista anfitrión
                </Button>
              )}
            </div>
            <div className="flex flex-row items-center justify-center">
              <div>
                <User className="bg-[#FEAC4C] w-12 h-12 rounded-full border-solid border-[3px] border-red-700 mr-4" />
              </div>
              <div className="flex flex-col ">
                <span title ={`${user?.data?.nombre} ${user?.data?.apellidos.split(" ")[0]}`} className="font-medium text-base truncate max-w-[90px]">
                  {user?.data?.nombre} {user?.data?.apellidos.split(" ")[0]}
                </span>
                <div className="flex flex-row">
                  <Link href="#">
                    <a className="text-base font-normal text-gray-500 cursor-pointer hover:underline">
                      Perfil
                    </a>
                  </Link>
                </div>
              </div>
              <i className="pl-2 cursor-pointer" onClick={() => setOpen(!open)}>
                <ArrowDown
                  className={`${
                    open
                      ? "transition duration-300"
                      : "transition duration-300 transform rotate-180"
                  }`}
                />
              </i>
              <Dropdown open={open} className="z-10">
                <DropdownListItem
                  className={`lg:hidden ${click ? "hidden" : ""}`}
                  onClick={() => setClick(true)}
                >
                  Vista anfitrión
                </DropdownListItem>
                {/* {click && (
                  <>
                    <LinkedDropdownListItem toPath="/app/announcement">
                      Mis anuncios
                    </LinkedDropdownListItem>
                    <LinkedDropdownListItem toPath="/app/announcement/create">
                      Crear anuncio
                    </LinkedDropdownListItem>
                  </>
                )} */}
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
      <Component {...pageProps} user={user} />
    </>
  );
}
