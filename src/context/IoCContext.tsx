
import React, { ReactNode, createContext, useContext } from "react";
import { interfaces } from "inversify";

import { appIocContainer } from "@ioc/index";

export interface IIoCContext {
  serviceContainer: interfaces.Container;
}

const IoCContext = createContext<IIoCContext>({} as IIoCContext);

const IoCProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  return (
    <IoCContext.Provider value={{ serviceContainer: appIocContainer }}>
      {children}
    </IoCContext.Provider>
  );
};

const useIoCContext = (): IIoCContext => {
  const context = useContext(IoCContext);
  if (!Object.keys(context).length) {
    throw new Error(
      "useIoCContext deve ser utilizado dentro de um IoCProvider"
    );
  }
  return context;
};

export { useIoCContext, IoCProvider };
