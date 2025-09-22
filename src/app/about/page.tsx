"use client";
import React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import FadeInSection from "../components/FadeInSection";
import { useTheme } from "@mui/material/styles";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// --- CURATED TESTIMONIALS ---
const testimonials = [
  {
    name: "George Burke",
    title: "Psychotherapist at Google (Client)",
    source: "LinkedIn",
    quote:
      "Working with Andrew on my website was an absolute pleasure. He really took the time to understand my professional needs and translated them into a site that reflects both my vision and the way I work with clients. His combination of technical skill, creativity, and professionalism made the whole process smooth and enjoyable.",
  },
  {
    name: "Andrei",
    title: "English Language Student",
    source: "Preply",
    quote:
      "Andrew is incredibly methodical. Our first session was not just a casual chat; it was a strategic needs analysis. He asked smart, targeted questions to understand my specific challenges with tech English. By the end of the hour, we had a clear roadmap... Exactly what I was looking for.",
  },
  {
    name: "Oleg Unger",
    title: "Angular Frontend Developer",
    source: "LinkedIn",
    quote:
      "Andrew is a talented full-stack developer with strong skills in React, Next.js, and Node.js. He can take a project from concept to completion, delivering clean, efficient, and user-friendly solutions. He is reliable, easy to work with, and always delivers high-quality work.",
  },
  {
    name: "Hugh",
    title: "English Language Student",
    source: "Preply",
    quote:
      "Andrew's tech background is a game-changer... He instantly understood the nuances of the technical language I needed for my move to Ireland, and it was fantastic. The trial lesson felt like a pair-programming session for my English.",
  },
  {
    name: "Roman Burmistrov",
    title: "BA/SA/BSA with payments expertise",
    source: "LinkedIn",
    quote:
      "I worked with Andrew in some projects in Embria. Andrew is goal-oriented, self-learned, a team-friendly developer with a very fresh vision for implementation of features and fixed issues. I was very happy to work with him.",
  },
  {
    name: "Kareslav",
    title: "English Language Student",
    source: "Preply",
    quote:
      "Andrew's experience as a writer is obvious. He gave me practical and professional feedback on my professional emails in just one trial lesson. If you need help with your business English, look no further.",
  },
];

const AboutPage = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ bgcolor: theme.palette.primary.dark, color: "white" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          {/* --- HERO SECTION --- */}
          <FadeInSection>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
                <Avatar
                  alt="Andrew Donnelly"
                  src="/images/professional-headshot.png"
                  sx={{
                    width: 200,
                    height: 200,
                    mx: "auto",
                    border: `4px solid ${theme.palette.secondary.main}`,
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  Hi, I am Andrew Donnelly.
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: theme.palette.secondary.light, mb: 3 }}
                >
                  Developer, Mentor, and Lifelong Learner.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#ccc" }}
                >
                  From crafting elegant code to coaching language learners, my
                  passion lies in building bridges—whether it is between a user
                  and a seamless digital experience, or between people from
                  different cultures. I believe technology and communication are
                  two sides of the same coin: both are about creating clear,
                  effective connections.
                </Typography>
              </Grid>
            </Grid>
          </FadeInSection>

          <Divider sx={{ my: { xs: 6, md: 8 }, borderColor: "#444" }} />

          {/* --- MY JOURNEY SECTION --- */}
          <FadeInSection>
            <Typography
              variant="h3"
              component="h2"
              align="center"
              sx={{ fontWeight: "bold", mb: 6 }}
            >
              My Professional Philosophy
            </Typography>
            <Grid container spacing={4} alignItems="stretch">
              {/* The Developer Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    backgroundColor: "rgba(44, 44, 44, 0.7)",
                    border: "1px solid #444",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.secondary.light,
                      mb: 2,
                    }}
                  >
                    A Foundation in Technology
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#ccc", lineHeight: 1.7 }}
                  >
                    As a full-stack developer with over a decade of experience,
                    I specialise in building high-performance web applications
                    that are both scalable and maintainable. My approach is
                    rooted in clean architecture and a deep understanding of
                    modern technologies like React and Next.js. I do not just
                    write code; I build practical, user-focused solutions that
                    solve real-world business problems and provide lasting
                    value. The best technology is invisible; it solves a problem
                    so seamlessly that the user barely notices it is there.
                  </Typography>
                </Card>
              </Grid>
              {/* The Mentor Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    p: 3,
                    height: "100%",
                    backgroundColor: "rgba(44, 44, 44, 0.7)",
                    border: "1px solid #444",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.secondary.light,
                      mb: 2,
                    }}
                  >
                    A Passion for Communication
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#ccc", lineHeight: 1.7 }}
                  >
                    My career path began in professional copywriting, where I
                    mastered the art of clear, persuasive language. This
                    background profoundly shapes my work today, teaching me to
                    obsess over the user&apos;s perspective. It has instilled in
                    me the importance of empathy and clear communication—whether
                    I am mentoring a junior developer, coaching a language
                    student, or collaborating with a client. My goal is to
                    create a supportive environment where people feel empowered
                    to learn, ask questions, and achieve their full potential.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </FadeInSection>

          <Divider sx={{ my: { xs: 6, md: 8 }, borderColor: "#444" }} />

          {/* --- TESTIMONIALS SECTION --- */}
          <FadeInSection>
            <Typography
              variant="h3"
              component="h2"
              align="center"
              sx={{ fontWeight: "bold", mb: 6 }}
            >
              What My Clients & Students Say
            </Typography>
            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "rgba(44, 44, 44, 0.7)",
                      border: "1px solid #444",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, color: "#ccc" }}>
                      <FormatQuoteIcon
                        sx={{
                          color: theme.palette.secondary.main,
                          fontSize: 40,
                          mb: 1,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontStyle: "italic", mb: 2 }}
                      >
                        &quot;{testimonial.quote}&quot;
                      </Typography>
                      <Typography
                        variant="h6"
                        component="p"
                        sx={{ fontWeight: "bold", color: "white" }}
                      >
                        - {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.secondary.light }}
                      >
                        {testimonial.title} via {testimonial.source}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Button
                variant="outlined"
                color="secondary"
                href="https://www.linkedin.com/in/andrewdonnelly93/details/recommendations/"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LinkedInIcon />}
              >
                View More on LinkedIn
              </Button>
            </Box>
          </FadeInSection>

          <Divider sx={{ my: { xs: 6, md: 8 }, borderColor: "#444" }} />

          {/* --- FINAL CALL TO ACTION --- */}
          <FadeInSection>
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ color: "white", fontWeight: "600", mb: 2 }}
              >
                Ready to Build or Learn?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#ccc", mb: 4, maxWidth: "600px", mx: "auto" }}
              >
                Whether you have a web project in mind or you are looking to
                improve your English, I am here to help. Let us discuss how we
                can achieve your goals together.
              </Typography>
              <Button
                variant="contained"
                href="https://calendly.com/andrew-donnelly-tech-soliutions"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<CalendarMonthIcon />}
                size="large"
                sx={{
                  bgcolor: "#F2C94C",
                  color: "#121212",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  py: 1.5,
                  px: 5,
                  "&:hover": {
                    bgcolor: "#ebb9d2d",
                  },
                }}
              >
                Book a Free Consultation
              </Button>
            </Box>
          </FadeInSection>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;
