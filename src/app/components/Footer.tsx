"use client";
import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { vars } from "../../themeVars";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: vars.backgroundPaper,
        color: vars.textSecondary,
        borderTop: `1px solid ${vars.divider}`,
        py: 3,
        textAlign: "center",
        fontSize: "0.9rem",
      }}
    >
      <Typography gutterBottom sx={{ color: vars.textPrimary }}>
        &copy; {new Date().getFullYear()} Donnelly Tech Solutions
      </Typography>
      <Typography gutterBottom>All rights reserved.</Typography>
      <Typography>
        📞 <strong>+44 7345 815239</strong> |{" "}
        <MuiLink
          href="mailto:andrew@donnellytechsolutions.co.uk"
          sx={{
            color: vars.primaryMain,
            textDecoration: "underline",
            "&:hover": { color: vars.primaryDark },
          }}
        >
          andrew@donnellytechsolutions.co.uk
        </MuiLink>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
          gap: 1,
        }}
      >
        <MuiLink
          href="https://www.linkedin.com/in/andrewdonnelly93/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: vars.textSecondary,
            textDecoration: "none",
            py: 0.5,
            px: 1.5,
            borderRadius: "16px",
            border: "1px solid transparent",
            transition: "all 0.3s ease",
            "&:hover": {
              color: vars.primaryMain,
              backgroundColor: "color-mix(in srgb, var(--mui-palette-primary-main) 10%, transparent)",
              borderColor: "color-mix(in srgb, var(--mui-palette-primary-main) 25%, transparent)",
            },
          }}
        >
          <LinkedInIcon sx={{ mr: 0.5 }} />
          LinkedIn
        </MuiLink>

        <Box component="span" sx={{ color: vars.divider }}>|</Box>

        <MuiLink
          href="https://github.com/AndrewDonnelly93"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: vars.textSecondary,
            textDecoration: "none",
            py: 0.5,
            px: 1.5,
            borderRadius: "16px",
            border: "1px solid transparent",
            transition: "all 0.3s ease",
            "&:hover": {
              color: vars.primaryMain,
              backgroundColor: "color-mix(in srgb, var(--mui-palette-primary-main) 10%, transparent)",
              borderColor: "color-mix(in srgb, var(--mui-palette-primary-main) 25%, transparent)",
            },
          }}
        >
          <GitHubIcon sx={{ mr: 0.5 }} />
          GitHub
        </MuiLink>
      </Box>
    </Box>
  );
}
