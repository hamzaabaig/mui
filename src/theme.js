import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004643",
      light: "#026964",
    },
    secondary: {
      main: "#abd1c6",
    },
    text: {
      primary: "#fffffe",
    },
    button: {
      dark: "#fab143",
      main: "#f9bc60",
      light: "#d9a75b",
      text: "#001e1d",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
