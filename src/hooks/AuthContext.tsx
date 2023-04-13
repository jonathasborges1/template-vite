import React, {createContext, useContext,} from "react";

import { LoginAuthServiceResponse } from "@modules/user/models/IAuthService";

interface AuthProviderProps {
   children?: React.ReactNode;
}

export interface AuthContextProps {
   loadingLogout: boolean;
   token: LoginAuthServiceResponse | null;
   setToken: React.Dispatch<React.SetStateAction<LoginAuthServiceResponse | null>>;
   logout: () => Promise<void>;
 }

 const AuthContext = createContext({} as AuthContextProps);

 export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
   return(
      <>
         {children}
      </>
   )
 }

 export const useAuth = () => {
   const context = useContext(AuthContext);
   if(Object.values(context).length === 0){
      throw new Error("useAuth não pode ser utilizado fora de um AuthProvider");
   }
   return context;
 }