"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import { vars } from "../../themeVars";
import { useRevealOnView } from "../hooks/useRevealOnView";

interface VolunteerEvent {
  role: string;
  organization: string;
  date: string;
  points: string[];
}

const volunteerEvents: VolunteerEvent[] = [
  {
    role: "English Language Mentor",
    organization: "Angloville, Poland",
    date: "Aug 2025",
    points: [
      "Mentored and coached Polish teenagers (ages 11–18) to build conversational fluency and confidence in an immersive English-speaking environment.",
      "Demonstrated adaptability by tailoring communication styles to a wide range of proficiency levels in both one-to-one and group settings.",
      "Fostered a positive and inclusive atmosphere, encouraging effective cross-cultural communication and understanding.",
    ],
  },
  {
    role: "Volunteer Healthcare Assistant",
    organization: "Camphill Duffcarrig",
    date: "Nov 2017 – Sep 2018",
    points: [
      "Provided empathetic support to adults with mental disabilities, assisting in daily life to promote fulfilment and independence.",
      "Engaged in community-building activities, including shared meals, housekeeping, and collaborative workshops like gardening and pottery.",
      "Contributed to key operational tasks, demonstrating organisational skills by helping to manage fundraising campaigns and staff rosters.",
    ],
  },
];

function VolunteerTimelineCard({ event }: { event: VolunteerEvent }) {
  const { ref, visible } = useRevealOnView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card
        sx={{
          p: 3,
          backgroundColor: vars.surface,
          color: vars.textPrimary,
          border: `1px solid ${vars.border}`,
          boxShadow: vars.cardShadow,
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 40px color-mix(in srgb, var(--mui-palette-custom-volunteer) 20%, transparent)",
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            {event.role}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: vars.volunteer, fontWeight: 600, mb: 1 }}
          >
            {event.organization}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: vars.textSecondary, fontStyle: "italic", mb: 2 }}
          >
            {event.date}
          </Typography>
          <List sx={{ p: 0 }}>
            {event.points.map((point, idx) => (
              <ListItem
                key={idx}
                sx={{
                  display: "list-item",
                  listStyleType: "disc",
                  pl: 2,
                  p: 0,
                  mb: 1,
                  color: vars.textPrimary,
                }}
              >
                <Typography variant="body1" sx={{ color: vars.textPrimary }}>
                  {point}
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function VolunteerExperienceTimeline() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Box
      sx={{
        position: "relative",
        py: 8,
        px: 2,
        mt: 4,
        borderTop: `1px solid ${vars.divider}`,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 800, color: vars.textPrimary, mb: 8 }}
      >
        Volunteer & Mentorship
      </Typography>

      <Box
        sx={{
          position: "absolute",
          top: "120px",
          bottom: 0,
          left: "20px",
          width: "4px",
          backgroundColor: vars.timelineTrack,
          zIndex: 0,
        }}
      >
        <motion.div
          style={{
            scaleY,
            height: "100%",
            width: "100%",
            backgroundColor: "var(--mui-palette-custom-volunteer)",
            transformOrigin: "top",
          }}
        />
      </Box>

      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        {volunteerEvents.map((event, i) => (
          <Box
            key={i}
            sx={{
              mb: 4,
              position: "relative",
              zIndex: 1,
              pl: isMobile ? "40px" : 0,
            }}
          >
            <VolunteerTimelineCard event={event} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
