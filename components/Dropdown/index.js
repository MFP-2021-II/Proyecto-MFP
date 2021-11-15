import { useState } from "react";

export default function Dropdown ({ children, open }) {
  const styles={
    not_style:"flex flex-row items-center px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200 border-solid border-b",
    def_style:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200 border-solid border-b",
    end_style:"block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 hover:bg-gray-200"
  }
  
  return (
    <div className={`fixed right-0 md:right-[18vmax] top-[98px] w-full mt-2 rounded-md shadow-lg md:w-48 ${open?"":"hidden"}`}>
      <div className="flex flex-col items-center px-2 py-2 bg-white rounded-md shadow">
        {children}
        <a className={styles["not_style"]} href="#">
          Notificaciones
          <span className="flex h-3 w-3">
            <span className="relative left-2 inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
        </a>
        <a className={styles["def_style"]} href="#">
          Lista de favoritos
        </a>
        <a className={styles["end_style"]} href="#">
          Cerrar sesión
        </a>
      </div>
    </div>
  );
}