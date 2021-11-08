import Logo from 'components/Icons/Logo'
import FormField from 'components/Fields/FormField'
import NavButton from 'components/Buttons/NavButton'
import Sample from 'components/InfoBoxes/Sample'
import VisibilityOn from 'components/Icons/VisibilityOn'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Register () {
  const [user, setUser] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    window
      .fetch("http://localhost:3001/api/users/",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.ok) {
          setUser(data)
        }
      })
  };

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white flex flex-col justify-center w-6/12 px-48 pb-14">
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
            register={register}
          ></FormField>
          <FormField 
            type="text"
            upperText="Apellido" 
            innerText="Apellido"
            register={register}
          ></FormField>
        </div>
        <FormField 
          type="email"
          upperText="Correo electrónico" 
          innerText="Ingresa tu correo electrónico"
          className="mb-5"
          register={register}
        ></FormField>
        <FormField 
          type="password"
          upperText="Contraseña" 
          innerText="Ingresa tu contraseña"
          register={register}
        >
        </FormField>
        <div className="font-semibold my-8">
          <span className="text-gray-500">¿Ya tienes una cuenta?{` `}</span>
          <a href="/login" className="cursor-pointer font-semibold underline text-pink-500">Inicia sesión</a>
        </div>
        <NavButton 
          variant="secondary"
          type="submit"
          toPath="/register">
          Registrarse
        </NavButton>
      </form>
      <Sample></Sample>
    </>
  )
}