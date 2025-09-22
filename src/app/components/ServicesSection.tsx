"use client";
import { Box, Typography, Card, Grid, Button } from "@mui/material";
import FadeInSection from "./FadeInSection";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import StorefrontIcon from "@mui/icons-material/Storefront";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";

const coreServices = [
  {
    title: "Custom Web Development",
    description:
      "Building bespoke, high-performance websites and applications from the ground up with modern technologies like Next.js and TypeScript.",
    icon: <CodeIcon sx={{ fontSize: 40, color: "#F2C94C" }} />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Creating secure, user-friendly online stores with full payment integration to help you sell your products and services effectively.",
    icon: <StorefrontIcon sx={{ fontSize: 40, color: "#F2C94C" }} />,
  },
  {
    title: "English Language Coaching",
    description:
      "Offering personalised, TEFL-certified coaching to help professionals and young learners achieve conversational fluency and confidence.",
    icon: <RecordVoiceOverIcon sx={{ fontSize: 40, color: "#F2C94C" }} />,
  },
];

const ServicesSection = () => {
  const theme = useTheme();

  return (
    <FadeInSection>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          color: "white",
        }}
      >
        Core Services
      </Typography>

      <Grid container spacing={4}>
        {coreServices.map((service, idx) => (
          <Grid size={{ xs: 12, md: 4 }} key={idx}>
            <Card
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                backgroundColor: "rgba(44, 44, 44, 0.7)",
                color: "white",
                border: "1px solid #444",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 40px 0 rgba(242, 201, 76, 0.2)",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{service.icon}</Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc" }}>
                {service.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Link href="/services" passHref>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              py: 1.5,
              px: 4,
            }}
          >
            Explore All Services
          </Button>
        </Link>
      </Box>
    </FadeInSection>
  );
};

export default ServicesSection;
