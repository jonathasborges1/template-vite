import { createBreakpoints } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import shadows from "@mui/material/styles/shadows";
import createPalette from "@mui/material/styles/createPalette.js";
import * as typography from "./typography.js"

declare module "@mui/material/styles" {
  interface Palette {
    subTitles: Palette["primary"];
    titles: Palette["primary"];
    tagsAndStatus: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    example?: {
      primary: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    subTitles?: PaletteOptions["primary"];
    titles?: PaletteOptions["primary"];
    tagsAndStatus: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    example?: {
      primary: string;
      secondary: string;
    };
  }

  interface BreakpointOverrides {
    "iphone-6-7-8": true;
    "iphone-6-7-8-plus": true;
    "iphone-5-SE": true;
    "small": true; // xs - 0px
    "mobile": true; // sm - 600px
    "tablet": true; // md - 900px
    "desktop": true; // lg - 1200px
    "fullhd": true; // xl - 1536px
  }
}

// shadow used in figma
shadows[1] = "5px 15px 30px 0px #7361611A";

const defaultTheme = createTheme();

const defaultBackgroundColor = "#1c1c1c" // "#F9F9F9"  

const palette = createPalette({
  primary: { main: "#D91F05" },
  secondary: { main: "#736161" },
  background: { default: defaultBackgroundColor },
  subTitles: { main: "#736161" },
  titles: { main: "#333E48" },
  tagsAndStatus: {
    0: "#0BB873",
    1: "#FDC742",
    2: "#F77B92",
    3: "#F1FFFA",
    4: "#FFF6DE",
    5: "#FFF5F7",
  },
});

const breakpoints = createBreakpoints({
  values: {
    ...defaultTheme.breakpoints.values,
    "iphone-5-SE": 320,
    "iphone-6-7-8": 375,
    "iphone-6-7-8-plus": 414,
    "small": 0,
    "mobile": 600,
    "tablet": 900,
    "desktop": 1200,
    "fullhd": 1536,
  },
});

const theme = createTheme({ palette, breakpoints });

const AtemTheme = createTheme({
    ...theme,
    
    typography: {
    ...typography.options,
    ...typography.overrides(theme)
    },

    /* Exemplo de estilizacao do componente MUI  */
    components: {
      MuiButton: {
        styleOverrides: {
          root: { padding: "1.2rem 2.2rem", fontSize: "1.6rem" },
        },
      },
    },
    shadows,
})


export default AtemTheme;
