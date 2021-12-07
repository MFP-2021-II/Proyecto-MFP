import House from "components/Icons/House";
import Delete from "components/Icons/Delete";

export default function ModalItem({ name }) {
  return (
    <div className="w-full items-center bg-[#FCF8F8] hover:bg-gray-100 flex flex-row justify-between mb-3 p-3 border rounded-lg">
      <div className="flex flex-row items-center">
        <House className="w-10 h-10 fill-current text-gray-700" />
        <span className="ml-4 font-medium text-sm sm:text-base truncate w-36 sm:w-64">
          {name}
        </span>
      </div>
      <Delete className="w-8 h-8 fill-current text-gray-700 hover:text-red-700 cursor-pointer" />
    </div>
  );
}
