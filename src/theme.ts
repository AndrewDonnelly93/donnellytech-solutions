import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      surface: string;
      surfaceElevated: string;
      border: string;
      borderSubtle: string;
      navInactive: string;
      cardShadow: string;
      bodyGradient: string;
      accentGradient: string;
      navScrolledBg: string;
      navScrolledBorder: string;
      navScrolledShadow: string;
      primarySoft: string;
      hoverOverlay: string;
      timelineTrack: string;
      volunteer: string;
      heroGlow: string;
      ctaGradient: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      surface?: string;
      surfaceElevated?: string;
      border?: string;
      borderSubtle?: string;
      navInactive?: string;
      cardShadow?: string;
      bodyGradient?: string;
      accentGradient?: string;
      navScrolledBg?: string;
      navScrolledBorder?: string;
      navScrolledShadow?: string;
      primarySoft?: string;
      hoverOverlay?: string;
      timelineTrack?: string;
      volunteer?: string;
      heroGlow?: string;
      ctaGradient?: string;
    };
  }
}

const sharedTypography = {
  fontFamily: 'var(--font-inter), "Inter", system-ui, -apple-system, sans-serif',
  h1: {
    fontWeight: 800,
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    letterSpacing: "-0.03em",
    lineHeight: 1.1,
  },
  h2: {
    fontWeight: 700,
    fontSize: "clamp(2rem, 4vw, 3rem)",
    letterSpacing: "-0.02em",
  },
  h3: {
    fontWeight: 700,
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
    letterSpacing: "-0.01em",
  },
  h4: { fontWeight: 600, fontSize: "1.5rem" },
  h5: { fontWeight: 600, fontSize: "1.2rem" },
  button: {
    fontWeight: 600,
    letterSpacing: "0.01em",
    textTransform: "none" as const,
    fontSize: "0.95rem",
  },
};

const bodyStyles = {
  backgroundColor: "var(--mui-palette-background-default)",
  backgroundImage: "var(--mui-palette-custom-bodyGradient)",
  color: "var(--mui-palette-text-primary)",
  minHeight: "100vh",
  margin: 0,
  overflowX: "hidden" as const,
};

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data",
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: "#00d2c8", dark: "#009e97", light: "#4dfff5", contrastText: "#050816" },
        secondary: { main: "#a855f7", dark: "#7c3aed", light: "#c084fc" },
        warning: { main: "#f59e0b", dark: "#d97706", light: "#fbbf24" },
        info: { main: "#3b82f6", dark: "#2563eb", light: "#60a5fa" },
        background: { default: "#050816", paper: "rgba(13, 17, 40, 0.85)" },
        text: { primary: "#ffffff", secondary: "#94a3b8" },
        divider: "rgba(255, 255, 255, 0.06)",
        custom: {
          surface: "rgba(13, 17, 40, 0.7)",
          surfaceElevated: "rgba(13, 17, 40, 0.85)",
          border: "rgba(255, 255, 255, 0.07)",
          borderSubtle: "rgba(255, 255, 255, 0.06)",
          navInactive: "#64748b",
          cardShadow: "0 4px 24px rgba(0,0,0,0.3)",
          bodyGradient: `
            radial-gradient(ellipse at 15% 40%, rgba(0, 210, 200, 0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 15%, rgba(168, 85, 247, 0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 90%, rgba(59, 130, 246, 0.04) 0%, transparent 50%)
          `,
          accentGradient: "linear-gradient(90deg, #00d2c8, #a855f7)",
          navScrolledBg: "rgba(5, 8, 22, 0.92)",
          navScrolledBorder: "rgba(0, 210, 200, 0.12)",
          navScrolledShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
          primarySoft: "rgba(0, 210, 200, 0.12)",
          hoverOverlay: "rgba(255, 255, 255, 0.05)",
          timelineTrack: "rgba(255, 255, 255, 0.1)",
          volunteer: "#4ade80",
          heroGlow: "radial-gradient(circle, rgba(0,210,200,0.12) 0%, transparent 70%)",
          ctaGradient: "linear-gradient(135deg, rgba(0,210,200,0.08) 0%, rgba(168,85,247,0.08) 100%)",
        },
      },
    },
    light: {
      palette: {
        primary: { main: "#007a75", dark: "#005c58", light: "#00d2c8", contrastText: "#ffffff" },
        secondary: { main: "#7c3aed", dark: "#5b21b6", light: "#a855f7" },
        warning: { main: "#d97706", dark: "#b45309", light: "#f59e0b" },
        info: { main: "#2563eb", dark: "#1d4ed8", light: "#3b82f6" },
        background: { default: "#f1f5f9", paper: "#ffffff" },
        text: { primary: "#0f172a", secondary: "#475569" },
        divider: "rgba(0, 0, 0, 0.07)",
        custom: {
          surface: "#ffffff",
          surfaceElevated: "#ffffff",
          border: "rgba(0, 0, 0, 0.09)",
          borderSubtle: "rgba(0, 0, 0, 0.07)",
          navInactive: "#94a3b8",
          cardShadow: "0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.06)",
          bodyGradient: `
            radial-gradient(ellipse at 15% 40%, rgba(0, 122, 117, 0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 15%, rgba(124, 58, 237, 0.05) 0%, transparent 55%)
          `,
          accentGradient: "linear-gradient(90deg, #007a75, #7c3aed)",
          navScrolledBg: "rgba(248, 250, 252, 0.92)",
          navScrolledBorder: "rgba(0, 0, 0, 0.08)",
          navScrolledShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          primarySoft: "rgba(0, 122, 117, 0.1)",
          hoverOverlay: "rgba(0, 0, 0, 0.04)",
          timelineTrack: "rgba(0, 0, 0, 0.08)",
          volunteer: "#16a34a",
          heroGlow: "radial-gradient(circle, rgba(0,122,117,0.1) 0%, transparent 70%)",
          ctaGradient: "linear-gradient(135deg, rgba(0,122,117,0.06) 0%, rgba(124,58,237,0.06) 100%)",
        },
      },
    },
  },
  typography: {
    ...sharedTypography,
    body1: { fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.75, color: "var(--mui-palette-text-primary)" },
    body2: { fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.6, color: "var(--mui-palette-text-secondary)" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: bodyStyles,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 24px",
          transition: "all 0.25s ease",
          textTransform: "none",
        },
        containedPrimary: {
          background:
            "linear-gradient(135deg, var(--mui-palette-primary-main) 0%, var(--mui-palette-primary-dark) 100%)",
          color: "var(--mui-palette-primary-contrastText)",
          fontWeight: 700,
          "&:hover": {
            background:
              "linear-gradient(135deg, var(--mui-palette-primary-light) 0%, var(--mui-palette-primary-main) 100%)",
            transform: "translateY(-2px)",
            boxShadow: "0 8px 24px color-mix(in srgb, var(--mui-palette-primary-main) 35%, transparent)",
          },
        },
        outlinedSecondary: {
          borderColor: "color-mix(in srgb, var(--mui-palette-secondary-main) 50%, transparent)",
          color: "var(--mui-palette-secondary-light)",
          "&:hover": {
            borderColor: "var(--mui-palette-secondary-main)",
            backgroundColor: "color-mix(in srgb, var(--mui-palette-secondary-main) 8%, transparent)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--mui-palette-custom-surface)",
          border: "1px solid var(--mui-palette-custom-border)",
          borderRadius: "16px",
          boxShadow: "var(--mui-palette-custom-cardShadow)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "color-mix(in srgb, var(--mui-palette-text-primary) 5%, transparent)",
          border: "1px solid var(--mui-palette-custom-border)",
          color: "var(--mui-palette-text-secondary)",
          fontSize: "0.8rem",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "var(--mui-palette-divider)",
        },
      },
    },
  },
});

export default theme;
