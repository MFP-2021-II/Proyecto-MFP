export default function LandingButton ({ children,className }) {
  return(
    <button className={`${className} font-bold p-2 rounded-md border-solid border-2 border-gray-900 px-9`}>
      <a href="#">{children}</a>
    </button>
  )
}