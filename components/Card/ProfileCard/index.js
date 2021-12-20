import Link from "next/link";

export default function ProfileCard({ children, titulo, descripcion, toPath }) {
  return (
    <Link href={toPath}>
      <a className="h-48 w-full">
        <div className="w-full h-full bg-white rounded-md border-solid border-2 p-4 transition duration-500 ease-in-out shadow-lg cursor-pointer hover:bg-gray-100">
          <div className="flex flex-row justify-center mb-4 h-12 items-center">
            {children}
            <span className="font-semibold pl-2 text-center">{titulo}</span>
          </div>
          <p className="text-sm justify-center text-gray-500">{descripcion}</p>
        </div>
      </a>
    </Link>
  );
}
