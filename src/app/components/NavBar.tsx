"use client";
import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useColorScheme } from "@mui/material/styles";
import type { ThemeMode } from "../context/ThemeContext";
import { vars } from "../../themeVars";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const navLinks = [
  { title: "About", section: "about" },
  { title: "Work", section: "work" },
  { title: "Contact", section: "contact" },
];

const themeModes: { value: ThemeMode; icon: React.ReactNode; label: string }[] = [
  { value: "dark", icon: <DarkModeIcon sx={{ fontSize: 16 }} />, label: "Dark" },
  { value: "light", icon: <LightModeIcon sx={{ fontSize: 16 }} />, label: "Light" },
  { value: "system", icon: <SettingsBrightnessIcon sx={{ fontSize: 16 }} />, label: "System" },
];

const Navbar = () => {
  const { mode, setMode } = useColorScheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const themeMode = mode ?? "dark";
  const isHome = pathname === "/";

  const getHref = (section: string) => (isHome ? `#${section}` : `/#${section}`);

  const updateActiveSection = useCallback(() => {
    if (!isHome) return;
    const offset = 100;
    const scrollPos = window.scrollY + offset;
    let current = "about";

    for (const link of navLinks) {
      const el = document.getElementById(link.section);
      if (el && el.offsetTop <= scrollPos) {
        current = link.section;
      }
    }
    setActiveSection(current);
  }, [isHome]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      updateActiveSection();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActiveSection]);

  useEffect(() => {
    if (isHome) updateActiveSection();
  }, [isHome, updateActiveSection]);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const navLinkColor = vars.navInactive;
  const navLinkActive = vars.textPrimary;

  const appBarBorder = scrolled
    ? `1px solid ${vars.navScrolledBorder}`
    : "1px solid transparent";

  const isLinkActive = (section: string) => isHome && activeSection === section;

  const ThemeToggle = ({ compact = false }: { compact?: boolean }) => (
    <Tooltip title="Switch theme" placement="bottom">
      <ToggleButtonGroup
        value={themeMode}
        exclusive
        onChange={(_, val: string | null) => val && setMode(val as "dark" | "light" | "system")}
        size="small"
        sx={{
          height: compact ? 36 : 32,
          "& .MuiToggleButton-root": {
            px: compact ? 1.5 : 1,
            py: 0,
            border: `1px solid ${vars.border}`,
            color: vars.navInactive,
            transition: "all 0.2s ease",
            "&.Mui-selected": {
              backgroundColor: vars.primarySoft,
              color: vars.primaryMain,
              borderColor: "color-mix(in srgb, var(--mui-palette-primary-main) 31%, transparent)",
            },
            "&:hover": {
              backgroundColor: vars.hoverOverlay,
            },
          },
        }}
      >
        {themeModes.map((m) => (
          <Tooltip key={m.value} title={m.label} placement="bottom">
            <ToggleButton value={m.value} aria-label={m.label}>
              {m.icon}
            </ToggleButton>
          </Tooltip>
        ))}
      </ToggleButtonGroup>
    </Tooltip>
  );

  const drawerBg = vars.backgroundPaper;
  const drawerTextColor = vars.textSecondary;

  const drawer = (
    <Box sx={{ height: "100%", backgroundColor: drawerBg, pt: 3, px: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, px: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            background: vars.accentGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Donnelly Tech
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: vars.textPrimary }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {navLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              component="a"
              href={getHref(item.section)}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: "8px",
                mb: 0.5,
                "&:hover": { backgroundColor: vars.hoverOverlay },
              }}
            >
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontWeight: isLinkActive(item.section) ? 700 : 500,
                  color: isLinkActive(item.section) ? navLinkActive : drawerTextColor,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider sx={{ my: 2, borderColor: vars.divider }} />

        <ListItem>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              variant="caption"
              sx={{
                color: vars.textSecondary,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "0.68rem",
              }}
            >
              Theme
            </Typography>
            <ThemeToggle compact />
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          backgroundColor: scrolled ? vars.navScrolledBg : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? appBarBorder : "1px solid transparent",
          boxShadow: scrolled ? vars.navScrolledShadow : "none",
          transition:
            "background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 3 },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "-0.01em",
              background: vars.accentGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
              "&:hover": { opacity: 0.8 },
            }}
          >
            Donnelly Tech Solutions
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.title}
                component="a"
                href={getHref(link.section)}
                sx={{
                  color: isLinkActive(link.section) ? navLinkActive : navLinkColor,
                  fontWeight: isLinkActive(link.section) ? 700 : 400,
                  fontSize: "1rem",
                  px: 1,
                  py: 0.5,
                  minWidth: "auto",
                  textTransform: "none",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: navLinkActive,
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  },
                }}
              >
                {link.title}
              </Button>
            ))}

            <ThemeToggle />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
            <IconButton
              aria-label="open navigation"
              onClick={handleDrawerToggle}
              sx={{ color: vars.textSecondary }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer — keeps content below fixed navbar */}
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }} />

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
