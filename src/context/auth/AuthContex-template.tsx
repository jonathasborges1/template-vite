import axios from "axios";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

import { AuthCogCookieKeys, AuthenticationContextData, AuthenticationResponse, CognitoParsedToken } from "@context/auth/model/IAuthContext";
import { useIoCContext } from "@context/IoCContext";

import { IHttpService } from "@modules/http/models/IHttpService";
import appConfig from "@config/index";
import { Types } from "@ioc/types";

/*
  Digitos | Milisegundos    | Minutos           | Horas
    6D    -    600000       - 10 minutos        -
    7D    -    1200000      - 20 minutos        -
    8D    -    12000000     - 200 minutos       -
    13D   - 1200000000000   - 20000000 minutos  - 333333,33
*/

/*
  1e3 = 1 segundos
  30e3 = 30 segundos
*/

// Constantes para valores literais usados no código
const BUFFER_TIME_MS = 59 * 60 * 1e3; // 59 * 60 * 1 = 3549 ms = 3,54 segundos  
const TOKEN_REFRESH_BEFORE_EXPIRATION_TIME_MS = 30e3; //  30e3 = 30 segundos

const AuthContext = createContext<AuthenticationContextData | null>(null);

const authServiceStandalone = axios.create({
  baseURL: appConfig.auth.url,
  timeout: appConfig.auth.timeout,
});

interface PropsAuthProvider {
  children?: React.ReactNode;
}

const AuthProvider: React.FC<PropsAuthProvider> = ({children}:React.PropsWithChildren) => {
  const [ currentAuthState, setCurrentAuthState ] = useState<AuthenticationContextData | null>(null);
  
  const iocContext = useIoCContext();
  const httpService = iocContext.serviceContainer.get<IHttpService>(Types.IHttpService);
  
  // Função para fazer a solicitação de atualização do token
  const refreshTokenRequest = async (currentTokenRefresh: string) : Promise<AuthenticationResponse> => {
    const { data: refreshTokenResponse } = await authServiceStandalone.post<AuthenticationResponse>("/auth/refresh", {
      token: currentTokenRefresh
    });

    return refreshTokenResponse;
  }
  
  // Função para fazer de atualização do token
  const setTokenExpiration = useCallback(async (nextTokenRefreshTime: number): Promise<string | null>  => {
    try {
      const data = await tokenRefresh(nextTokenRefreshTime - TOKEN_REFRESH_BEFORE_EXPIRATION_TIME_MS);
      if(data){
        const builtToken = `${data.TokenType} ${data.AccessToken}`;
        httpService.setAuthorization(builtToken);
        return builtToken;
      }
      return null;
    } catch (error) {
      console.error("[setTokenExpiration]: Failed to refresh access token in setTokenExpirationStrategy", error);
      return null;
    }
  }, []);

  // Função principal de atualização do token
  const tokenRefresh = useCallback( async(refreshTokenExpirationTime?: number) => {
    try {
      
      const cookies = new Cookies();
      const cookiesTokenRefresh = cookies.get(AuthCogCookieKeys.refreshToken);

      // Verifica se o token atual existe no cookies da sessao
      if(!cookiesTokenRefresh) {
        throw new Error("Refresh token not found");
      }
  
      // Verifica se o token do cookie atual da sessao ainda não expirou
      if(refreshTokenExpirationTime && +new Date() <= refreshTokenExpirationTime){
        return null;
      }

      const refreshTokenResponse = await refreshTokenRequest(cookiesTokenRefresh);
      const nextTokenRefreshTime = jwtDecode<CognitoParsedToken>(refreshTokenResponse.AccessToken).exp * 1e3 - BUFFER_TIME_MS; // 1681917158000 ms
      httpService.setTokenExpirationStrategy(async () => await setTokenExpiration(nextTokenRefreshTime));

      console.info("======== Sucesso tokenRefresh ========")
      return refreshTokenResponse;

    } catch (error) {
      console.error("[tokenRefresh]: Failed to refresh access token", error);
      return null;
    }
    
  },[]);

  const bootstrapAuthentication = useCallback(async () => {
    try {
      
      const data = await tokenRefresh();

      if (!data) {
        await logout();
        return;
      }

      httpService.setAuthorization(`${data.TokenType} ${data.AccessToken}`);

      const authData: AuthenticationContextData = {
        email: data.meta.email,
        roles: new Set(data.meta.roles),
        refreshToken: data.RefreshToken,
        subject: data.meta.id,
        token: data.AccessToken,
        logout,
      };

      setCurrentAuthState(authData);

    } catch (error) {
      console.error("[bootstrapAuthentication]: Failed to refresh access token", error);
      await logout();
    }
  }, []);

  useEffect(() => {
    bootstrapAuthentication();
  }, []);

  const logout = useCallback(async () => {
    const urlLogout = import.meta.env.VITE_APP_ENV === "development" ? appConfig.urlLogoutDev : appConfig.urlLogout;
      window.location.href = urlLogout;
  }, []);

  return(
    <AuthContext.Provider value={currentAuthState}>
      { children }
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth não pode ser utilizado fora de um AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth }