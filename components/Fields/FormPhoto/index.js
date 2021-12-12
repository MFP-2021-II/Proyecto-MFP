/**
 * Componente para el campo de imagen
 * @param {string} type Tipo de campo
 * @param {string} name Nombre del campo
 * @param {object} register Registro del formulario
 * @param {string} onChange Funcion para cambiar el valor del campo
 * @param {string} fileImage Variable para guardar la imagen
 * @param {object} errors Errores del formulario
 * @returns {JSX} FormPhoto
 */
export default function FormPhoto({
  type,
  name,
  register,
  onChange,
  fileImage,
  errors,
}) {
  return (
    <>
      <div className="grid grid-cols-1 m-2 w-[80%]">
        <label className="pb-2 font-medium text-gray-500">Sube una foto</label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col justify-around w-full h-48 border-4 border-dashed hover:bg-gray-100 hover:border-red-300 group">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              {fileImage && typeof fileImage === "string" ? (
                <img src={fileImage} />
              ) : (
                fileImage &&
                typeof fileImage === "object" && (
                  <img
                    src={URL.createObjectURL(fileImage)}
                    className="w-full h-full"
                  />
                )
              )}

              {!fileImage && (
                <>
                  <svg
                    className="w-10 h-10 text-red-400 group-hover:text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="text-sm text-gray-500">Selecciona una imagen</p>
                </>
              )}
            </div>
            <input
              type={type}
              name={name}
              {...register(name)}
              onChange={onChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
      {fileImage && (
        <span className="p-2 mt-1 text-sm text-gray-400 bg-gray-200 rounded-lg">
          {`${fileImage.name} (${Math.round(fileImage.size / 1024)} KB)`}
        </span>
      )}
      <span className="text-xs text-red-500">{errors && errors?.message}</span>
    </>
  );
}
