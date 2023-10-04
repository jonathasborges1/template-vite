import React from "react";
import { Navigate, PathRouteProps, Outlet } from "react-router-dom";

import { useAuth } from "@context/auth/AuthContext";
import { ROUTES } from "@config/routes";

import useDialogAlert from "@hooks/useDialogAlert";

interface PrivateRouteProps extends PathRouteProps {}

 const PrivateRoute: React.FC<PrivateRouteProps> = ({}) => {

   const { snackbar } = useDialogAlert();

   const { currentAuthState } = useAuth();

   if (!currentAuthState.isAuthenticated) {
      snackbar({message:'Voce nao possui permissao para acessar essa pagina', variant: 'warning'});
      return <Navigate to={ROUTES.HOME} />;
   }

   return(<Outlet />);
}

export default PrivateRoute;