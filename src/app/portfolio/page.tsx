"use client";
import React from "react";
import {
  useTheme,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link as MuiLink,
  Grid,
} from "@mui/material";
import Link from "next/link";

const projects = [
  {
    title: "David McEwen International",
    description:
      "A full ecommerce artist portfolio with Stripe payments, Contentful CMS, responsive design, and custom email notifications.",
    image: "/portfolio/david-mcewen-international-screenshot.png",
    url: "https://www.davidmceweninternational.ie/",
    github: "https://github.com/AndrewDonnelly93/artist-portfolio",
  },
  {
    title: "Trish Bourke Therapy",
    description:
      "A simple informational website for a therapist with blog features, built with React and styled with MUI.",
    image: "/portfolio/trish-bourke-screenshot.png",
    url: "https://www.trishbourke-therapy.ie/",
    github: "https://github.com/AndrewDonnelly93/therapy-app",
  },
];

export default function Portfolio() {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #330000 80%), url('/gryffindor-pattern.jpg')`,
        backgroundBlendMode: "multiply",
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
        color: theme.palette.text.primary,
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{ letterSpacing: "0.08em", mb: 4 }}
      >
        Portfolio
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map(({ title, description, image, url, github }) => (
          <Grid size={{ xs: 12, sm: 10, md: 6 }} key={title}>
            <Card
              sx={{
                bgcolor: theme.palette.background.paper + "DD",
                boxShadow: 3,
                borderRadius: 2,
                textAlign: "left",
                width: { xs: "100%", sm: 800 }, // fixed width on desktop, full width on mobile
                mx: "auto", // centers card horizontally
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // center children horizontally
              }}
            >
              <CardMedia
                component="img"
                image={image}
                alt={`${title} screenshot`}
                sx={{
                  width: "100%",
                  maxWidth: 800, // limits max size inside the card
                  height: 800,
                  objectFit: "cover",
                  borderRadius: 1,
                }}
              />

              <CardContent
                sx={{
                  width: "100%",
                  px: 2,
                }}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ fontFamily: theme.typography.h3.fontFamily }}
                >
                  {title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }} gutterBottom>
                  {description}
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    component="a"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Link href="/" passHref>
          <Button variant="outlined" color="secondary">
            ← Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
