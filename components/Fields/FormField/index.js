/**
 * Componente para campos de formulario
 * English:
 * Form field component
 *
 * type es el tipo de campo
 * upperText es el texto superior
 * innerText es el texto interior
 * children es el contenido del campo
 * className es la clase del campo
 *
 * English:
 * type is the field type
 * upperText is the upper text
 * innerText is the inner text
 * children is the field content
 * className is the field class
 *
 * Francais:
 * type est le type de champ
 * upperText est le texte supérieur
 * innerText est le texte interne
 * children est le contenu du champ
 * className est la classe du champ
 * @param {string} type Tipo de campo
 * @param {string} upperText Texto superior
 * @param {string} innerText Texto interno
 * @param {children} children Hijos del componente
 * @param {string} className Clase del componente
 * @returns {JSX} FormField
 */
export default function FormField({
  type,
  upperText,
  innerText,
  children,
  className,
}) {
  return (
    /**
     * Componente para campos
     * de formulario constituido
     * por un label superior,
     * un input para el texto
     * interno y un children.
     * English:
     * Form field component composed by
     * a label upper, an input for the
     * inner text
     * and a children.
     * Francais:
     * Componente pour les champs
     * de formulaire constitué
     * d'un label supérieur,
     * d'un input pour le texte
     *  interne et
     */
    <div className="flex flex-col">
      <label className="font-medium text-gray-500 pb-2">{upperText}</label>
      <input
        type={type}
        placeholder={innerText}
        className={`${className} border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal transition duration-500 ease-in-out hover:shadow-md`}
      />
      {children}
    </div>
    /**
     * Componente para campos
     * de formulario constituido
     * por un label superior,
     * un input para el texto
     * interno y un children.
     * English:
     * Form field component composed by
     * a label upper, an input for the
     * inner text
     * and a children.
     * Francais:
     * Componente pour les champs
     * de formulaire constitué
     * d'un label supérieur,
     * d'un input pour le texte
     *  interne et
     */
  );
}
