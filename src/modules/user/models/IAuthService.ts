export interface LogoutAuthService {
  refreshToken: string;
}

export interface RefreshTokenAuthService extends LogoutAuthService {}
export interface TokenDecoded {
   sub: string;
   auth_time: number;
   exp: number;
   iat: number;
   username: string;
}

export interface LoginAuthService {
  email: string;
  password: string;
}

export interface LoginAuthServiceResponse {
   AccessToken: string;
   ExpiresIn: number;
   RefreshToken: string;
   decodedAccessToken: TokenDecoded;
   isLoginByQrCode: boolean;
   meta: {
     email: string;
     name: string;
     custom_attributes: {};
   };
 }

export interface IAuthService {
  login(data: LoginAuthService): Promise<LoginAuthServiceResponse>;
  logout(data: LogoutAuthService): Promise<void>;
  refreshToken( data: RefreshTokenAuthService): Promise<Omit<LoginAuthServiceResponse, "RefreshToken">>;
}