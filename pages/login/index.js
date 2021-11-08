import Logo from 'components/Icons/Logo'
import FormField from 'components/Fields/FormField'
import NavButton from 'components/Buttons/NavButton'
import LandingButton from 'components/Buttons/LandingButton'
import Sample from 'components/InfoBoxes/Sample'

export default function Login () {
  return(
    <>
      <div className="bg-white flex flex-col justify-center w-6/12 px-48 pb-14">
        <div className="flex flex-row justify-center mb-7 pr-4">
          <Logo className="w-56 h-32"/>
        </div>
        <span className="font-semibold text-2xl mb-10">
          Inicia sesión
        </span>
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
        <a href="/" className="cursor-pointer font-semibold underline text-gray-500 my-8">¿Olvidaste tu contraseña?</a>
        <NavButton 
          variant="secondary" 
          toPath="/"
          className="mb-4">
          Iniciar sesión
        </NavButton>
        <NavButton
          variant="primary"
          toPath="/register">
          Crear una cuenta
        </NavButton>
      </div>
      <Sample></Sample>
    </>
  )
}