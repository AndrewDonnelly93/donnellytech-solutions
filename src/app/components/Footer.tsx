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

      <Typography mt={1}>
        {/* First row with three links */}
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <MuiLink
            href="/services"
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
            Services
          </MuiLink>
          <Box component="span" sx={{ color: theme.palette.secondary.main }}>
            |
          </Box>
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
          <Box component="span" sx={{ color: theme.palette.secondary.main }}>
            |
          </Box>
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
        </Box>

        {/* Second row with GitHub link */}
        <Box
          mt={{ xs: 1, sm: 0 }}
          component="span"
          sx={{
            display: "inline-flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <MuiLink
            href="https://www.linkedin.com/in/andrewdonnelly93/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.palette.secondary.main,
              textDecoration: "underline",
              mx: 1,
              transition: "color 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              "&:hover": {
                color: theme.palette.secondary.dark || "#b38b00",
              },
            }}
          >
            <LinkedInIcon sx={{ mr: 0.5 }} />
            LinkedIn
          </MuiLink>
          <Box component="span" sx={{ color: theme.palette.secondary.main }}>
            |
          </Box>

          <MuiLink
            href="https://github.com/AndrewDonnelly93"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.palette.secondary.main,
              textDecoration: "underline",
              mx: 1,
              transition: "color 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              "&:hover": {
                color: theme.palette.secondary.dark || "#b38b00",
              },
            }}
          >
            <GitHubIcon sx={{ mr: 0.5 }} />
            GitHub
          </MuiLink>
        </Box>
      </Typography>
    </Box>
  );
}
