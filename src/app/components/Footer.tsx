import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        py: 3,
        textAlign: "center",
        fontSize: "0.9rem",
      }}
    >
      <Typography gutterBottom>
        &copy; {new Date().getFullYear()} Donnelly Tech Solutions
      </Typography>
      <Typography gutterBottom>All rights reserved.</Typography>
      <Typography>
        📞 <strong>+353 87 607 26 84</strong> |{" "}
        <MuiLink
          href="mailto:andrew@donnellytechsolutions.co.uk"
          sx={{
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.dark || "#b38b00",
            },
          }}
        >
          andrew@donnellytechsolutions.co.uk
        </MuiLink>
      </Typography>

      {/* Single flex container for all links to ensure perfect alignment */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
          gap: 1, // Handles spacing between all items
        }}
      >
        {/* Social Link: LinkedIn */}
        <MuiLink
          href="https://www.linkedin.com/in/andrewdonnelly93/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: theme.palette.secondary.main,
            textDecoration: "none",
            py: 0.5,
            px: 1.5,
            borderRadius: "16px",
            border: "1px solid transparent",
            transition: "all 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.light,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: theme.palette.secondary.main,
            },
          }}
        >
          <LinkedInIcon sx={{ mr: 0.5 }} />
          LinkedIn
        </MuiLink>

        {/* Separator */}
        <Box component="span" sx={{ color: theme.palette.secondary.main }}>
          |
        </Box>

        {/* Social Link: GitHub */}
        <MuiLink
          href="https://github.com/AndrewDonnelly93"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: theme.palette.secondary.main,
            textDecoration: "none",
            py: 0.5,
            px: 1.5,
            borderRadius: "16px",
            border: "1px solid transparent",
            transition: "all 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.light,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: theme.palette.secondary.main,
            },
          }}
        >
          <GitHubIcon sx={{ mr: 0.5 }} />
          GitHub
        </MuiLink>

        {/* Separator */}
        <Box
          component="span"
          sx={{
            color: theme.palette.secondary.main,
            display: { xs: "none", sm: "inline" },
          }}
        >
          |
        </Box>

        {/* Page Link: Services */}
        <MuiLink
          href="/services"
          sx={{
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.dark || "#b38b00",
            },
          }}
        >
          Services
        </MuiLink>

        {/* Separator */}
        <Box component="span" sx={{ color: theme.palette.secondary.main }}>
          |
        </Box>

        {/* Page Link: Portfolio */}
        <MuiLink
          href="/portfolio"
          sx={{
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.dark || "#b38b00",
            },
          }}
        >
          Portfolio
        </MuiLink>

        {/* Separator */}
        <Box component="span" sx={{ color: theme.palette.secondary.main }}>
          |
        </Box>

        {/* Page Link: Contact */}
        <MuiLink
          href="/contact"
          sx={{
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.dark || "#b38b00",
            },
          }}
        >
          Contact
        </MuiLink>
      </Box>
    </Box>
  );
}
