const { createContext } = require("react");
/**
 * useUserContext hook
 */
export const UserContext = createContext();

/**
 * Contexto de usuario
 * @param {children} children Contenido del componente
 * @returns {JSX} UserContextProvider
 */
const UserContextProvider = ({ children }) => {
  /**
   * useState para el estado de la sesión
   */
  const [user, setUser] = useState(null);

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
