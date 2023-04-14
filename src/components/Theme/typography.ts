import { Theme, TypographyVariantsOptions } from "@mui/material/styles";

export const options: TypographyVariantsOptions = {
  fontFamily: [
    `-apple-system`,
    `"BlinkMacSystemFont"`,
    `"Segoe UI"`,
    `"Roboto"`,
    `"Oxygen"`,
    `"Ubuntu"`,
    `"Cantarell"`,
    `"Fira Sans"`,
    `"Droid Sans"`,
    `"Helvetica Neue"`,
    `sans-serif`,
  ].join(","),
};

export const overrides = (theme: Theme): TypographyVariantsOptions => (
  {
    h1: { fontSize: "8em" },
    h2: { fontSize: "1.5em" },
    h3: { fontSize: "1.3em" },
    h4: { fontSize: "1em" },
    h5: { fontSize: "0.8em" },
    h6: { fontSize: "0.7em" },
    button: { textTransform: "none" },
 
    sectionTitle: {
     color: theme.palette.titles.main,
     fontSize: "5.5em !important", 
     fontFamily: "Poppins",
     fontWeight: 700,
     display: "block",
     [theme.breakpoints.up("iphone-5-SE")]: { fontSize: "2rem" },
     [theme.breakpoints.up("iphone-6-7-8")]: { fontSize: "2.4rem" },
    },

    sectionSubtitle: {
      display: "block",
      color: theme.palette.subTitles.main,
      [theme.breakpoints.up("iphone-5-SE")]: { fontSize: "1rem" },
      [theme.breakpoints.up("iphone-6-7-8")]: { fontSize: "1.2rem" },
    },
  }
);

 
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    sectionTitle: true;
    sectionSubtitle: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    sectionTitle: React.CSSProperties;
    sectionSubtitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    sectionTitle?: React.CSSProperties;
    sectionSubtitle?: React.CSSProperties;
  }
}