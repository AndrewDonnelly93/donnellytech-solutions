// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7F0909", // Gryffindor deep red
    },
    secondary: {
      main: "#FFC500", // Gryffindor gold
    },
    background: {
      default: "#1a1a1a", // Dark background for drama
      paper: "#2a2a2a",
    },
    text: {
      primary: "#fff",
      secondary: "#f0e68c",
    },
  },
  typography: {
    fontFamily: "'Cormorant Garamond', serif",
    h1: {
      fontFamily: "'IM Fell English', serif",
      fontWeight: 700,
      fontSize: "3rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: "'IM Fell English', serif",
      fontWeight: 600,
      fontSize: "2.5rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 400,
      fontSize: "1.1rem",
      lineHeight: 1.6,
      color: "#eee",
    },
    body2: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 300,
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#ccc",
    },
    button: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
  },
});

export default theme;
