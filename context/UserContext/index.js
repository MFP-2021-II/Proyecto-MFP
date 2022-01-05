const { createContext } = require("react");
/**
 * useUserContext hook
 * English:
 * useUserContext hook
 */
export const UserContext = createContext();

/**
 * Contexto de usuario
 * English:
 * User context
 *
 * children - Contenido del layout
 * English:
 * children - Content of the layout
 * @param {children} children Contenido del componente
 * @returns {JSX} UserContextProvider
 */
const UserContextProvider = ({ children }) => {
  /**
   * useState para el estado de la sesión
   * English:
   * useState for the session state
   */
  const [user, setUser] = useState(null);

  /**
   * Se crea un contexto de usuario
   * English:
   * Create a user context
   */
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
