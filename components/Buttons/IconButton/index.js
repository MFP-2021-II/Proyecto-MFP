export default function IconButton ({ children, className, onClick }) {
  const primary = "ml-2 h-11 w-10 bg-gray-50 rounded-lg border-solid border border-gray-400 border-opacity-60 transition duration-500 ease-in-out hover:shadow-md flex items-center justify-center";
  
  return(
    <button onClick={onClick} className={`${primary} ${className}`}>
      <a href="#">{children}</a>
    </button>
  )
}