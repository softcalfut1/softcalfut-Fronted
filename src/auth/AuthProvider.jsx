import { useContext, createContext, useState, useEffect } from 'react';

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContext {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const AuthContext = createContext<AuthContext>({
    isAuthenticated: false,
    setIsAuthenticated: () => { },
});
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      // Código para inicializar el estado de autenticación
      // Por ejemplo, comprobar si el usuario está autenticado
      // en el almacenamiento local o en una base de datos
    }, []);
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
      </AuthContext.Provider>
    );
  };
  export const useAuth = () => useContext(AuthContext);
  export default AuthProvider;