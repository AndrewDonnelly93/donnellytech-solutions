"use client";

import React from "react";
import Head from "next/head";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Link as MuiLink,
  Divider,
  CardMedia,
} from "@mui/material";
// Tech Icons
import CodeIcon from "@mui/icons-material/Code";
import StorefrontIcon from "@mui/icons-material/Storefront";
import StorageIcon from "@mui/icons-material/Storage";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PageviewIcon from "@mui/icons-material/Pageview";
import SpeedIcon from "@mui/icons-material/Speed";
import TerminalIcon from "@mui/icons-material/Terminal";
// Language Icons
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import { useTheme } from "@mui/material";
import Link from "next/link";

// --- Tech Service Data ---
const techServices = [
  {
    icon: <CodeIcon sx={{ fontSize: 50, color: "#F2C94C" }} />,
    title: "Custom Website Development",
    description:
      "From a simple landing page to a complex web application, I build bespoke websites from the ground up using modern technologies like React, Next.js, and TypeScript, ensuring a perfect fit for your vision.",
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 50, color: "#F2C94C" }} />,
    title: "E-commerce Solutions",
    description:
      "Ready to sell online? I create secure and user-friendly e-commerce platforms with full payment integration (Stripe), product management, and a seamless checkout experience for your customers.",
  },
  {
    icon: <StorageIcon sx={{ fontSize: 50, color: "#F2C94C" }} />,
    title: "Headless CMS Integration",
    description:
      "Take full control of your content. I specialize in integrating headless Content Management Systems like Contentful, giving you the power to update your website easily without needing to touch a line of code.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: "#F2C94C" }} />,
    title: "Maintenance & Support",
    description:
      "A website needs ongoing care. I offer reliable maintenance packages to handle updates, security checks, bug fixes, and performance monitoring, ensuring your site remains fast and secure.",
  },
  {
    icon: <PageviewIcon sx={{ fontSize: 50, color: "#F2C94C" }} />,
    title: "SEO & Performance Optimisation",
    description:
      "A great website needs to be found. I implement on-page SEO best practices and optimize site performance to improve your Google ranking, attract more visitors, and provide a lightning-fast user experience.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 50, color: "#F2C94C" }} />,
    title: "Responsive Design",
    description:
      "With a mobile-first approach, I ensure your website looks and functions beautifully on all devices—desktops, tablets, and smartphones—providing a consistent and engaging experience for every user.",
  },
];

// --- Language Service Data ---
const languageServices = [
  {
    icon: <RecordVoiceOverIcon sx={{ fontSize: 50, color: "#F2C94C" }} />,
    title: "Conversational Fluency",
    description:
      "Build confidence and speak English naturally. Drawing on experience from immersive programs like Angloville, our lessons focus on real-world conversation, pronunciation, and practical vocabulary.",
  },
  {
    icon: <TerminalIcon sx={{ fontSize: 50, color: "#F2C94C" }} />,
    title: "English for Tech Professionals",
    description:
      "As a software developer and a language coach, I offer specialized training for IT professionals. We'll cover technical vocabulary, stand-up meetings, code reviews, and clear communication for a global tech environment.",
  },
  {
    icon: <ChildCareIcon sx={{ fontSize: 50, color: "#F2C94C" }} />,
    title: "English for Young Learners",
    description:
      "A safe, patient, and encouraging learning environment for children. As a TEFL-certified tutor trusted by parents, I make learning fun and effective, building a strong foundation for your child's future.",
  },
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 50, color: "#F2C94C" }} />,
    title: "Business & Professional English",
    description:
      "Communicate effectively in the workplace. We can work on interview preparation, professional email writing, presentation skills, and other business-specific language needs to advance your career.",
  },
  {
    icon: <SpellcheckIcon sx={{ fontSize: 50, color: "#F2C94C" }} />,
    title: "Grammar & Exam Preparation",
    description:
      "Master the details of English. Whether for exam preparation (IELTS, etc.) or personal improvement, I provide clear explanations and targeted practice to improve your grammar and writing skills.",
  },
];

const ServicesPage = () => {
  const theme = useTheme();
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        maxWidth: "1200px !important",
        mx: "auto", // centers horizontally
        color: theme.palette.text.primary,
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        textAlign: "center",
      }}
    >
      <Head>
        <title>Services | Donnelly Tech & Language Solutions</title>
        <meta
          name="description"
          content="Explore professional services from Andrew Donnelly, including custom web development, e-commerce, and personalized English language coaching."
        />
      </Head>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* --- MAIN TITLE --- */}
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "white", mb: 4 }}
        >
          My Professional Services
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: "#ccc", mb: 8 }}>
          Offering expert solutions in both technology and language education.
        </Typography>

        {/* --- WEB DEVELOPMENT SECTION --- */}
        <Box component="section" sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ color: "white", fontWeight: "600", mb: 5 }}
          >
            Technology & Web Solutions
          </Typography>
          <Grid container spacing={4}>
            {techServices.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "rgba(44, 44, 44, 0.9)",
                    color: "white",
                    border: "1px solid #444",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 16px 40px 0 rgba(242, 201, 76, 0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                    <Box mb={2}>{service.icon}</Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: "600" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#ccc" }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* --- LANGUAGE COACHING SECTION --- */}
        <Box component="section" sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ color: "white", fontWeight: "600", mb: 5 }}
          >
            English Language Coaching
          </Typography>
          <Grid container spacing={4}>
            {languageServices.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "rgba(44, 44, 44, 0.9)",
                    color: "white",
                    border: "1px solid #444",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 16px 40px 0 rgba(242, 201, 76, 0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                    <Box mb={2}>{service.icon}</Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: "600" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#ccc" }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* --- NEW QUALIFICATIONS SECTION --- */}
        <Box component="section">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ color: "white", fontWeight: "600", mb: 5 }}
          >
            My Qualifications
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* TEFL Certificate */}
            <Grid size={{ xs: 12, sm: 8, md: 5 }}>
              <Link
                href="/documents/tefl-certificate.pdf"
                rel="noopener noreferrer"
                target="_blank"
                passHref
              >
                <Card
                  sx={{
                    backgroundColor: "rgba(44, 44, 44, 0.9)",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/images/tefl-certificate.jpg"
                    alt="TEFL Certificate"
                    sx={{ borderBottom: "1px solid #444" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ color: "white", fontWeight: "bold" }}
                    >
                      120-Hour TEFL Certificate
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            {/* Reference Letter */}
            <Grid size={{ xs: 12, sm: 8, md: 5 }}>
              <Link
                href="/documents/reference-letter.pdf"
                rel="noopener noreferrer"
                target="_blank"
                passHref
              >
                <Card
                  sx={{
                    backgroundColor: "rgba(44, 44, 44, 0.9)",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/images/reference-letter.jpg"
                    alt="Letter of Reference"
                    sx={{ borderBottom: "1px solid #444" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ color: "white", fontWeight: "bold" }}
                    >
                      Letter of Reference
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </Box>

        {/* --- FINAL CALL TO ACTION --- */}
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Divider sx={{ borderColor: "#444", my: 6 }} />
          <Typography variant="h5" sx={{ color: "white", mb: 2 }}>
            Ready to start a project or book a lesson?
          </Typography>
          <Link href="/contact" passHref>
            <MuiLink
              variant="button"
              sx={{
                fontSize: "1rem",
                color: "#121212",
                backgroundColor: "#F2C94C",
                padding: "10px 30px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#ebb92d",
                },
              }}
            >
              Get in Touch
            </MuiLink>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;
