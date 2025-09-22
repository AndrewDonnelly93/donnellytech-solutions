"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.main }}
      elevation={4}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            color: theme.palette.secondary.main,
            fontWeight: "bold",
            letterSpacing: "0.1em",
            cursor: "pointer",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.secondary.dark || "#b38b00",
              textShadow: `0 0 8px ${theme.palette.secondary.main}`,
            },
          }}
        >
          Donnelly Tech Solutions
        </Typography>

        <Box>
          <Button
            color="inherit"
            component={Link}
            href="/services"
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              mr: 2,
              transition: "color 0.3s ease, transform 0.2s ease",
              "&:hover": {
                color: theme.palette.secondary.dark || "#b38b00",
                transform: "scale(1.05)",
              },
            }}
          >
            Services
          </Button>
          <Button
            color="inherit"
            component={Link}
            href="/portfolio"
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              mr: 2,
              transition: "color 0.3s ease, transform 0.2s ease",
              "&:hover": {
                color: theme.palette.secondary.dark || "#b38b00",
                transform: "scale(1.05)",
              },
            }}
          >
            Portfolio
          </Button>
          <Button
            color="inherit"
            component={Link}
            href="/contact"
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              transition: "color 0.3s ease, transform 0.2s ease",
              "&:hover": {
                color: theme.palette.secondary.dark || "#b38b00",
                transform: "scale(1.05)",
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
