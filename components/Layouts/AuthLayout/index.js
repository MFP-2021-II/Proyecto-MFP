export default function AuthLayout ({ children, type }) {
  const types={
    'Registro': 'bg-gradient-to-r from-red-400 to-red-300',
    'Iniciar Sesion': 'bg-gradient-to-r from-green-600 to-yellow-100'
  }
  return(
    <div className={`${types[type]} h-screen flex flex-row lg:justify-between justify-center`}>
      {children}
    </div>  
  )
}