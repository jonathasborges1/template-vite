import React from 'react';
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

import RouterProvider from '@components/Routes';
import ThemeProvider from '@theme/index.js';
import { AuthProvider } from '@hooks/AuthContext';

interface Props {
   children?: React.ReactNode;
}

const App: React.FC<Props> = ({ children, ...props }) => {
   return (
      <ThemeProvider>
         <SnackbarProvider>
            <CssBaseline />
            <AuthProvider>
               <RouterProvider/>
            </AuthProvider>
         </SnackbarProvider>
      </ThemeProvider>
   )
}

export default App;