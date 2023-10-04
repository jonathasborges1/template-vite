import React, { createContext, useContext, useState } from 'react';
import { IAuth } from '@context/auth/model/IAuthContext';

interface IAuthContext {
   currentAuthState: IAuth;
   login: () => void;
   logout: () => void;
}

// Crie um contexto para o AuthProvider
const AuthContext = createContext< IAuthContext | undefined>(undefined);

interface AuthProviderProps {
   children?: React.ReactNode;
 }

// Crie o provedor de autenticação
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentAuthState, setCurrentAuthState] = useState<IAuth>({});

  // Função para fazer login
  const login = () => {
    const user:IAuth = {
      isAuthenticated: true,
    }
    setCurrentAuthState(user);
  };

  // Função para fazer logout
  const logout = () => {
   const user:IAuth = {
      isAuthenticated: false,
    }
   setCurrentAuthState(user);
  };

  return (
    <AuthContext.Provider value={{ currentAuthState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Um hook personalizado para acessar o contexto de autenticação
const useAuth = () => {
   const context = useContext(AuthContext);
   
   if (context === undefined) {
      throw new Error("useAuth não pode ser utilizado fora de um AuthProvider");
   }
   
   return context;
};

export { AuthProvider, useAuth }