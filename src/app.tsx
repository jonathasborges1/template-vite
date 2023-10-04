import React from 'react';
import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";

import { IoCProvider } from '@context/IoCContext';
import { ThemeProvider } from '@components/Theme/themeProvider';
import { AuthProvider } from '@context/auth/AuthContext';
import { RouterProvider } from '@components/Routes';

interface Props {
   children?: React.ReactNode;
}

const App: React.FC<Props> = ({}) => {
   
   return (
      <IoCProvider>
         <ThemeProvider>
            <SnackbarProvider
               autoHideDuration={5000}
               anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
               }}
            >
               <CssBaseline />
               <AuthProvider>
                  <RouterProvider/>
               </AuthProvider>
            </SnackbarProvider>
         </ThemeProvider>
      </IoCProvider>
   )
}

export default App;