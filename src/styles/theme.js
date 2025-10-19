import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2", // Deep Blue
    },
    secondary: {
      main: "#F50057", // Vivid Pink
    },
    background: {
      default: "#F5F5F5", // Light Gray
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121", // Dark Gray
    },
    accent: {
      main: "#FFCA28", // Amber
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
