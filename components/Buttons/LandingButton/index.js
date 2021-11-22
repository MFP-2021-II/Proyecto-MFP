import Link from 'next/link' 

export default function LandingButton ({ children, toPath, variant, className, type }) {
  const types = {
    'primary': 'text-gray-900',
    'secondary': 'bg-gray-900 text-gray-50'
  }
  
  return(
    <Link href={toPath}>
      <button type={type} className={`${types[variant]} font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-[101%] hover:shadow-lg ${className}`}>
        <a className="flex flex-row items-center justify-center">{children}</a>
      </button>
    </Link>  
  )
}