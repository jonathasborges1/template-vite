import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

import RouterProvider from '@components/routes';
import ThemeProvider from '@theme/index.js';

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SnackbarProvider>
        <CssBaseline />
        <RouterProvider/>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
)
