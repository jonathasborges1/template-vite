import { inject, injectable } from "inversify";
import jwt_decode from "jwt-decode";

import { IAuthService, LoginAuthService, LoginAuthServiceResponse, LogoutAuthService, RefreshTokenAuthService, TokenDecoded } from "@modules/user/models/IAuthService";

import type { IHttpService } from "@modules/http/models/IHttpService";
import { Types } from "ioc/types";

@injectable()
export class AuthService implements IAuthService {

  @inject(Types.IHttpService)
  private httpInstance!: IHttpService;

  private decodeToken(token: string) {
    const decodedAccessToken = jwt_decode<TokenDecoded>(token);
    return decodedAccessToken;
  }

  public async login(data: LoginAuthService): Promise<LoginAuthServiceResponse> {

    const loginResponse = await this.httpInstance.post<LoginAuthServiceResponse>("/auth/login", data);

    return {
      ...loginResponse,
      decodedAccessToken: this.decodeToken(loginResponse.AccessToken),
      isLoginByQrCode: false,
    };

  }

  public async logout(data: LogoutAuthService): Promise<void> {
    return this.httpInstance.post("/auth/logout", { token: data.refreshToken });
  }

  public async refreshToken(data: RefreshTokenAuthService): Promise<Omit<LoginAuthServiceResponse, "RefreshToken">> {
    
   const refreshResponse = await this.httpInstance.post<Omit<LoginAuthServiceResponse, "RefreshToken">>("/auth/refresh", { token: data.refreshToken });

    return {
      ...refreshResponse,
      decodedAccessToken: this.decodeToken(refreshResponse.AccessToken),
    };

  }

}
