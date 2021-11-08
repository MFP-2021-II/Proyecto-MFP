export default function FormField ({type ,upperText, innerText, children, className }) {
  return(
    <div className="flex flex-col">
      <label className="font-medium text-gray-500 pb-2">
        {upperText}
      </label>
      <input 
        type={type} 
        placeholder={innerText} 
        className={`${className} border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal transition duration-500 ease-in-out hover:shadow-md`}
        />
      {children}
    </div>
  )
}