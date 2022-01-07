/**
 * Componente para el campo de imagen
 * English:
 * Image field component
 *
 * type es el tipo de campo
 * name es el nombre del campo
 * register es el registro del campo
 * onChange es el evento de cambio
 * fileImage es la imagen del campo
 * errors es el error del campo
 *
 * English:
 * type is the field type
 * name is the field name
 * register is the field register
 * onChange is the event of change
 * fileImage is the field image
 * errors is the field error
 *
 * Francais:
 * type est le type du champ
 * name est le nom du champ
 * register est le champ enregistre
 * onChange est l'evenement de changement
 * fileImage est l'image du champ
 * errors est l'erreur du champ
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
    /**
     * Componente para el campo de imagen
     * constituido por un label superior,
     * dentro un div para crear la caja de
     * la imagen y un input para guardar
     * la imagen.
     * English:
     * Image field component composed by
     * a label upper, inside a div to create
     * the box of the image and an input to
     * save the image.
     * Francais:
     * Componente pour le champ de l'image
     * constitué par un label supérieur,
     * à l'intérieur d'un div pour créer la
     * boîte de l'image et un input pour
     * enregistrer l'image.
     * Portugues:
     * Componente para o campo de imagem
     * constituido por um label superior,
     * dentro de um div para criar a caixa
     * da imagem e um input para salvar
     * a imagem.
     */
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
    /**
     * Componente para el campo de imagen
     * constituido por un label superior,
     * dentro un div para crear la caja de
     * la imagen y un input para guardar
     * la imagen.
     * English:
     * Image field component composed by
     * a label upper, inside a div to create
     * the box of the image and an input to
     * save the image.
     * Francais:
     * Componente pour le champ de l'image
     * constitué par un label supérieur,
     * à l'intérieur d'un div pour créer la
     *
     * Italien:
     * Componente per il campo dell'immagine
     * composto da un label superiore,
     * dentro un div per creare la casella
     * dell'immagine e un input per salvare
     * l'immagine.
     * Portugues:
     * Componente para o campo de imagem
     * constituido por um label superior,
     * dentro de um div para criar a caixa
     * da imagem e um input para salvar
     * a imagem.
     */
  );
}
