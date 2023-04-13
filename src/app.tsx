import React from 'react';
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

import RouterProvider from '@components/Routes';
import ThemeProvider from '@theme/index.js';

interface Props {
   children?: React.ReactNode;
}

const App: React.FC<Props> = ({ children, ...props }) => {
   return (
      <ThemeProvider>
         <SnackbarProvider>
            <CssBaseline />
            <RouterProvider/>
         </SnackbarProvider>
      </ThemeProvider>
   )
}

export default App;