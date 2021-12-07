import Close from "components/Icons/Close";

export default function Modal({ className, setOpenModal, children }) {
  return (
    // Falta volver responsive, el modal será compartido con notificaciones
    <div
      className={`${className} bg-white rounded-lg shadow-2xl flex flex-col justify-start w-[20rem] sm:w-[30rem] h-[30rem] px-7 py-6 sm:px-10 sm:py-8`}
    >
      <div className="flex flex-row w-full justify-between pb-3 border-b-2">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Lista de favoritos
        </h1>
        <div className="flex justify-center items-center p-1 w-8 h-8 cursor-pointer rounded-full transition duration-500 hover:bg-red-200 fill-current hover:text-red-600">
          <Close className="w-7 h-7" onClick={() => setOpenModal(false)} />
        </div>
        {/* Rederizar lista de favoritos */}
      </div>
      <div className="overflow-y-auto mt-4">{children}</div>
    </div>
  );
}
