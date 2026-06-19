"use client";
import { Box, Typography, Grid, Button } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { vars } from "../../themeVars";
import { useRevealOnView } from "../hooks/useRevealOnView";

const clientFeedback = [
  {
    name: "George Burke",
    title: "Psychotherapist at Google",
    source: "LinkedIn",
    quote:
      "Working with Andrew on my website was an absolute pleasure. He really took the time to understand my professional needs and translated them into a site that reflects both my vision and the way I work with clients. His combination of technical skill, creativity, and professionalism made the whole process smooth and enjoyable.",
  },
  {
    name: "Oleg Unger",
    title: "Angular Frontend Developer",
    source: "LinkedIn",
    quote:
      "Andrew is a talented full-stack developer with strong skills in React, Next.js, and Node.js. He can take a project from concept to completion, delivering clean, efficient, and user-friendly solutions. He is reliable, easy to work with, and always delivers high-quality work.",
  },
  {
    name: "Roman Burmistrov",
    title: "BA / SA / BSA — Payments Expertise",
    source: "LinkedIn",
    quote:
      "I worked with Andrew on some projects at Embria. Andrew is goal-oriented, self-learned, a team-friendly developer with a very fresh vision for implementation of features and fixed issues. I was very happy to work with him.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" as const },
  }),
};

const FeedbackCard = ({ item, index }: { item: (typeof clientFeedback)[number]; index: number }) => {
  const { ref, visible } = useRevealOnView(0.15);

  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <motion.div
        ref={ref}
        custom={index}
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? "visible" : undefined}
        variants={fadeUp}
        style={{ height: "100%" }}
      >
        <Box
          sx={{
            height: "100%",
            p: 3.5,
            borderRadius: "14px",
            backgroundColor: vars.surface,
            border: `1px solid ${vars.border}`,
            borderTop: `3px solid ${vars.secondaryMain}`,
            boxShadow: vars.cardShadow,
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.28s ease, box-shadow 0.28s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
            },
          }}
        >
          <FormatQuoteIcon sx={{ color: vars.secondaryMain, fontSize: 36, mb: 1.5, opacity: 0.85 }} />
          <Typography
            sx={{
              color: vars.textPrimary,
              fontStyle: "italic",
              lineHeight: 1.75,
              flexGrow: 1,
              fontSize: "0.9rem",
              mb: 2.5,
            }}
          >
            &ldquo;{item.quote}&rdquo;
          </Typography>
          <Box>
            <Typography sx={{ fontWeight: 700, color: vars.textPrimary, fontSize: "0.95rem" }}>
              {item.name}
            </Typography>
            <Typography sx={{ color: vars.textSecondary, fontSize: "0.8rem", mt: 0.3 }}>
              {item.title} · {item.source}
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Grid>
  );
};

const TailoredFeedbackSection = () => (
  <FadeInSection>
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography
        sx={{
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: vars.primaryMain,
          fontWeight: 700,
          mb: 1.5,
          fontSize: "0.72rem",
        }}
      >
        Client Feedback
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 800, color: vars.textPrimary, mb: 2 }}>
        Tailored.
      </Typography>
      <Typography
        sx={{
          color: vars.textSecondary,
          maxWidth: 520,
          mx: "auto",
          lineHeight: 1.7,
          fontSize: "1rem",
        }}
      >
        Real feedback from clients and collaborators — tailored solutions,
        clear communication, and results that matter.
      </Typography>
    </Box>

    <Grid container spacing={3}>
      {clientFeedback.map((item, i) => (
        <FeedbackCard key={item.name} item={item} index={i} />
      ))}
    </Grid>

    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Button
        variant="outlined"
        color="secondary"
        href="https://www.linkedin.com/in/andrewdonnelly93/details/recommendations/"
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<LinkedInIcon />}
        sx={{ fontWeight: 600, px: 3, py: 1.2 }}
      >
        View More on LinkedIn
      </Button>
    </Box>
  </FadeInSection>
);

export default TailoredFeedbackSection;
