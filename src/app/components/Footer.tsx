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
        &copy; {new Date().getFullYear()} Donnelly Tech Solutions. All rights
        reserved.
      </Typography>
      <Typography>
        📞 <strong>+353 87 607 26 84</strong> |{" "}
        <MuiLink
          href="mailto:andrew.donnelly.1403@gmail.com"
          sx={{
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.dark || "#b38b00",
            },
          }}
        >
          andrew.donnelly.1403@gmail.com
        </MuiLink>
      </Typography>
      <Typography mt={1}>
        <MuiLink
          href="/portfolio"
          sx={{
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            mx: 1,
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.dark || "#b38b00",
            },
          }}
        >
          Portfolio
        </MuiLink>
        |
        <MuiLink
          href="/contact"
          sx={{
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            mx: 1,
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.dark || "#b38b00",
            },
          }}
        >
          Contact
        </MuiLink>
        |
        <MuiLink
          href="https://www.linkedin.com/in/andrewdonnelly93/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            mx: 1,
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.dark || "#b38b00",
            },
          }}
        >
          <LinkedInIcon sx={{ mr: 0.5, verticalAlign: "middle" }} />
          LinkedIn
        </MuiLink>
        |
        <MuiLink
          href="https://github.com/AndrewDonnelly93"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            mx: 1,
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.dark || "#b38b00",
            },
          }}
        >
          <GitHubIcon sx={{ mr: 0.5, verticalAlign: "middle" }} />
          GitHub
        </MuiLink>
      </Typography>
    </Box>
  );
}
