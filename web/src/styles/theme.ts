import { createTheme } from "@mui/material/styles";
import { Colors } from "./variables";

export interface CustomTheme {
  additionalPalette: {
    highlight: string;
    pageTitle: string;
    danger: string;
    success: string;
    warning: string;
  };
}

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: `${Colors.secondary.main}`,
        },
      },
    },
  },
  palette: {
    primary: {
      light: `${Colors.primary.light}`,
      main: `${Colors.primary.main}`,
    },
    secondary: {
      light: `${Colors.secondary.light}`,
      main: `${Colors.secondary.main}`,
    },
    error: {
      main: `${Colors.danger}`,
    },
  },
  additionalPalette: {
    highlight: `${Colors.highlight}`,
    pageTitle: `${Colors.pageTitle}`,
    danger: `${Colors.danger}`,
    success: `${Colors.success}`,
    warning: `${Colors.warning}`,
  },
});
