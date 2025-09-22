"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// --- Navigation Links Data ---
const navLinks = [
  { title: "Services", path: "/services" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // --- Reusable Button Styles ---
  const navButtonStyle = {
    color: "white", // Ensure text is white
    textTransform: "uppercase",
    fontWeight: 600,
    mr: 2,
    transition: "color 0.3s ease, transform 0.2s ease",
    "&:hover": {
      color: theme.palette.secondary.dark || "#b38b00",
      transform: "scale(1.05)",
    },
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        pt: 2,
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Navigation
      </Typography>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant="contained"
            fullWidth
            href="https://calendly.com/andrew-donnelly-tech-solutions"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 1,
              bgcolor: "#F2C94C",
              color: "#121212",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "#ebb92d",
              },
            }}
          >
            Book a Call
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
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
              flexGrow: 1, // Allow title to take up space
              "&:hover": {
                color: theme.palette.secondary.dark || "#b38b00",
                textShadow: `0 0 8px ${theme.palette.secondary.main}`,
              },
            }}
          >
            Donnelly Tech Solutions
          </Typography>

          {/* --- DESKTOP NAVIGATION --- */}
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.title}
                component={Link}
                href={link.path}
                sx={navButtonStyle}
              >
                {link.title}
              </Button>
            ))}
            <Button
              variant="contained"
              href="https://calendly.com/andrew-donnelly-tech-solutions"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<CalendarMonthIcon />}
              sx={{
                ml: 2,
                bgcolor: "#F2C94C",
                color: "#121212",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#ebb92d",
                },
              }}
            >
              Book a Call
            </Button>
          </Box>

          {/* --- MOBILE NAVIGATION (HAMBURGER ICON) --- */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* --- MOBILE DRAWER --- */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
