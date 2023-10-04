import React from 'react';
import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";

import { ThemeProvider } from '@components/Theme/themeProvider';
import { AuthProvider } from '@context/auth/AuthContext';
import { RouterProvider } from '@components/Routes';
import { IoCProvider } from '@context/IoCContext';

interface Props {
   children?: React.ReactNode;
}

const App: React.FC<Props> = ({}) => {
   return (
      <IoCProvider>
         <ThemeProvider>
            <SnackbarProvider>
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