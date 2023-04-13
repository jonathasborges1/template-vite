import { ReactNode } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import * as typography from "./typography.js";

declare module "@mui/material/styles" {
  interface Palette {
    example?: {
      primary: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    example?: {
      primary: string;
      secondary: string;
    };
  }
}

 export const theme = createTheme({
  typography: {
    ...typography.options,
    ...typography.overrides
  },
  palette: {
    primary: {
      main: "#FF6347",
    },
    secondary: {
      main: "#4E4E4E",
    },
    background: {
      default: "#F5F5F5",
    },
    example: {
      primary: "#fff",
      secondary: "#000",
    }
  },
});

interface Props {
  children: ReactNode;
}

const ThemeProvider: React.FC<Props> = ({children})  => {
   return(
    <MuiThemeProvider theme={theme}>
       {children}
    </MuiThemeProvider>
   ) 
 };
 
export default ThemeProvider;
