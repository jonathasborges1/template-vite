import { UserTypes } from "@modules/user/container/types";

export const Types = {
  IHttpService: Symbol("IHttpService"),
  User: { ...UserTypes },
};
