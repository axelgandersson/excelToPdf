import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// override mui standard   theme 
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#6366f1" },
    background: { default: "#0f172a", paper: "rgba(15,23,42,0.96)" },
    text: { primary: "#e2e8f0", secondary: "#a5b4fc" },
    divider: "rgba(99,102,241,0.35)",
  },
  components: {
    // gör popover menyerna mörka (påverkar bara sorterings menyn)
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(15,23,42,0.96)",
          color: "#e2e8f0",
          border: "1px solid rgba(99,102,241,0.25)",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(15,23,42,0.96)",
          color: "#e2e8f0",
          border: "1px solid rgba(99,102,241,0.25)",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(15,23,42,0.96)",
          color: "#e2e8f0",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
