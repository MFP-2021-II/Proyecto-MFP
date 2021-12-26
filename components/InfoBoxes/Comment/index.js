import UserVariant from "components/Icons/UserVariant";

export default function Comment({ usuario, fecha, comentario }) {
  return (
    <div className="flex flex-row w-full justify-between mb-8">
      {/* Foto, nombre, fecha */}
      <div className="flex flex-row items-center w-[50%] lg:w-[30%]">
        <UserVariant className="rounded-full w-10 h-10 border-2 border-green-700" />
        <div className="flex flex-col pl-3 justify-center">
          <h1 className="font-medium">{usuario}</h1>
          <span className="font-medium text-xs text-gray-500">{fecha}</span>
        </div>
      </div>
      {/* Comentario */}
      <p className="w-[40%] lg:w-[68%]">{comentario}</p>
    </div>
  );
}
