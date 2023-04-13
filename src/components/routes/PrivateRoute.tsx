import React from "react";
import { Route, Navigate, PathRouteProps} from "react-router-dom";

import { useAuth } from "@hooks/AuthContext";
import ROUTES from "@config/routes";

interface PrivateRouteProps extends PathRouteProps {
   path: string;
   element: React.ReactNode;
 }

 const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
   const authContext = useAuth();
 
   return authContext.token ? 
   (
      <Route path={path} element={element} />
   ) 
   : 
   (
      <>
         {authContext.logout()}
         <Navigate to={ROUTES.LOGIN} replace />
      </>  
   );
 };


export default PrivateRoute;

