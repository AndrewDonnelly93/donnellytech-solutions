"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  List,
  ListItem,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

interface Volunteer {
  role: string;
  organization: string;
  date: string;
  points: string[];
}

const volunteers: Volunteer[] = [
   {
    role: "Native English Speaker & Mentor",
    organization: "Angloville, Poland",
    date: "Aug 2025",
    points: [
      "Guided Polish teenagers (ages 11–18) in developing confidence and fluency in English through immersive conversations, games, and cultural exchange.",
      "Adapted teaching style to different levels of English ability, supporting participants in one-to-one and group settings.",
      "Contributed to a positive, inclusive environment that encouraged cross-cultural understanding and effective communication.",
    ],
  },
  {
    role: "Volunteer Healthcare Assistant",
    organization: "Camphill Duffcarrig",
    date: "Nov 2017 – Sep 2018",
    points: [
      "Supported people with mental disabilities, helping them achieve satisfaction and fulfillment in daily life.",
      "Shared life experiences through meals, housekeeping, and participation in workshops.",
      "Assisted in community projects such as gardening and pottery.",
      "Contributed to operational tasks including organizing fundraising campaigns and updating staff rosters.",
    ],
  },
];

const VolunteerExperienceTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ position: "relative", py: 8 }}>
      {/* Heading */}
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          color: theme.palette.text.primary,
          letterSpacing: 1.5,
        }}
      >
        Volunteer Experience
      </Typography>

      {/* Parallax timeline line */}
      <Parallax speed={-10}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: isMobile ? "20px" : "50%",
            transform: isMobile ? "none" : "translateX(-50%)",
            width: "4px",
            height: "100%",
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
          }}
        />
      </Parallax>

      {volunteers.map((vol, i) => {
        const isEven = i % 2 === 0;
        return (
          <Grid
            container
            key={i}
            justifyContent={
              isMobile ? "flex-start" : isEven ? "flex-end" : "flex-start"
            }
            sx={{ mb: 8 }}
          >
            <Grid size={{ xs: 12, sm: 7, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card
                  sx={{
                    backgroundColor: "background.paper",
                    boxShadow: 4,
                    "&:hover": {
                      transform: "scale(1.02)",
                      transition: "0.3s ease",
                    },
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <CardContent sx={{ fontSize: "1.1rem" }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                      {vol.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        fontSize: "1.3rem",
                        mb: 1,
                      }}
                    >
                      {vol.organization}
                    </Typography>
                    <Chip
                      label={vol.date}
                      size="medium"
                      sx={{
                        mt: 1,
                        mb: 2,
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        backgroundColor: theme.palette.primary.light + "DD",
                        color: theme.palette.primary.contrastText,
                      }}
                    />
                    <List sx={{ pl: 2, pr: 2 }}>
                      {vol.points.map((point, idx) => (
                        <ListItem
                          key={idx}
                          sx={{
                            p: 0,
                            display: "list-item",
                            listStyleType: "disc",
                            ml: 2,
                            mr: 2,
                            mb: 1.5,
                          }}
                        >
                          <Typography variant="body1">{point}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}

export default VolunteerExperienceTimeline;