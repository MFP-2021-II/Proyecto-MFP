import Logo from 'components/Icons/Logo'
import FormField from 'components/Fields/FormField'
import LandingButton from 'components/Buttons/LandingButton'
import Sample from 'components/InfoBoxes/Sample'
import VisibilityOn from 'components/Icons/VisibilityOn'

export default function Register () {
  return(
    <>
      <div className="bg-white flex flex-col justify-center w-6/12 px-48 pb-14">
        <div className="flex flex-row justify-center mb-7 pr-4">
          <Logo className="w-56 h-32"/>
        </div>
        <span className="font-semibold text-2xl mb-10">
          Crear una cuenta
        </span>
        <div className="flex flex-row flex-wrap justify-between mb-5">
          <FormField 
            type="text"
            upperText="Nombre" 
            innerText="Nombre"
          ></FormField>
          <FormField 
            type="text"
            upperText="Apellido" 
            innerText="Apellido"
          ></FormField>
        </div>
        <FormField 
          type="email"
          upperText="Correo electrónico" 
          innerText="Ingresa tu correo electrónico"
          className="mb-5"
        ></FormField>
        <FormField 
          type="password"
          upperText="Contraseña" 
          innerText="Ingresa tu contraseña"
        >
        </FormField>
        <div className="font-semibold my-8">
          <span className="text-gray-500">¿Ya tienes una cuenta?{` `}</span>
          <a href="/login" className="cursor-pointer font-semibold underline text-pink-500">Inicia sesión</a>
        </div>
        <LandingButton 
          type="secondary" 
          toPath="/">
          Registrarse
        </LandingButton>
      </div>
      <Sample></Sample>
    </>
  )
}