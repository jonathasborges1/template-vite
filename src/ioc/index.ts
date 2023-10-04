import { Container } from "inversify";
import { Types } from "./types";

import AxiosHttpService from "@modules/http/implementations/AxiosHttpService";
import { IHttpService } from "@modules/http/models/IHttpService";

import { IAuthService } from "@modules/user/models/IAuthService";
import { AuthService } from "@modules/user/services/AuthService";

const appIocContainer = new Container({ defaultScope: "Singleton" });

function registerNewService<T>(type: string | symbol,constructor: new (...args: never[]) => T) {
  appIocContainer.bind<T>(type).to(constructor);
}

registerNewService<IHttpService>(Types.IHttpService, AxiosHttpService);
registerNewService<IAuthService>(Types.User.IAuthService, AuthService);

export { appIocContainer };