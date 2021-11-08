export default function LandingButton ({ children,className }) {
  return(
    <button className={`${className} font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg`}>
      <a href="#" className="flex flex-row items-center">{children}</a>
    </button>
  )
}