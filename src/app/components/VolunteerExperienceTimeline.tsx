"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Grid,
} from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";

// Define an interface for volunteer event
interface VolunteerEvent {
  role: string;
  organization: string;
  date: string;
  points: string[];
}

// Array for volunteer experience with refined, UK English copy
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

export default function VolunteerExperienceTimeline() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        borderTop: "1px solid #444",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "white", mb: 8 }}
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
          backgroundColor: "#333",
          zIndex: 0,
        }}
      >
        <motion.div
          style={{
            scaleY,
            height: "100%",
            width: "100%",
            backgroundColor: "#4CAF50", // A different color for the volunteer timeline
            transformOrigin: "top",
          }}
        />
      </Box>

      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        {volunteerEvents.map((event, i) => {
          return (
            <Box
              key={i}
              sx={{
                mb: 4,
                position: "relative",
                zIndex: 1,
                pl: isMobile ? "40px" : 0,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  sx={{
                    p: 3,
                    backgroundColor: "rgba(44, 44, 44, 0.9)",
                    color: "white",
                    border: "1px solid #444",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 40px 0 rgba(76, 175, 80, 0.2)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                      {event.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#a5d6a7", fontWeight: 600, mb: 1 }}
                    >
                      {event.organization}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#ccc", fontStyle: "italic", mb: 2 }}
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
                          }}
                        >
                          <Typography variant="body1">{point}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
