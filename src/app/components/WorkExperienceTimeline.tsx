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

interface Job {
  role: string;
  company: string;
  date: string;
  points: string[];
}

const jobs: Job[] = [
  {
    role: "Business Owner | Software Engineer",
    company: "Donnelly Tech Solutions",
    date: "Aug 2024 – Present",
    points: [
      "Running my own software development company delivering custom web applications directly to clients.",
      "Improving client workflows and automating manual tasks, reducing operational overhead by up to 30%.",
      "Hands-on full-stack development using React (frontend), Node.js (backend), and TypeScript.",
      "Manage client communication, timelines, and technical strategy.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Glesk Management Limited",
    date: "Oct 2022 – Aug 2024",
    points: [
      "Worked on insurance and mental health platforms supporting European clients.",
      "Introduced automated code quality checks and styled-components for consistent UI.",
      "Mentored junior developers through pair programming sessions and knowledge sharing.",
      "Technologies: React, Redux, styled-components, Firebase, Node.js, REST APIs.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Knowledge City",
    date: "Dec 2021 – Sept 2022",
    points: [
      "Developed UI features and refactored legacy code on an online educational platform.",
      "Created a flexible certificate template editor using fabricJS.",
      "Improved codebase stability by refactoring and modularizing legacy components.",
      "Collaborated with product owners and designers to align development with user needs.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Ocuco Limited",
    date: "Jan 2021 – Aug 2021",
    points: [
      "Built software managing optician workflows, appointments, and patient data.",
      "Delivered reusable UI components and improved data flow using React, TypeScript, and Redux.",
      "Contributed to CI/CD pipelines with Azure DevOps.",
      "Worked closely with QA and business analysts to deliver high-quality features on time.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Viasat Europe Limited",
    date: "Jan 2020 – Dec 2020",
    points: [
      "Created a portal builder app allowing non-technical users to prototype in-flight entertainment systems.",
      "Developed UI components like Banner, Weather, and Video Player.",
      "Implemented CI/CD workflows with Jenkins and Docker.",
      "Participated in environment simulation features for robust testing.",
    ],
  },
  {
    role: "Software Engineer",
    company: "NRGSOFT",
    date: "Mar 2017 – Jan 2020",
    points: [
      "Worked on an e-assessment platform supporting diverse question types and workflows.",
      "Developed new question types including code editors and mathematical assignment tools.",
      "Collaborated with front-end, back-end, and design teams.",
      "Used Redux-Saga for managing complex asynchronous flows.",
    ],
  },
];

export default function WorkExperienceTimeline() {
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
        Work Experience
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

      {jobs.map((job, i) => {
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
                      {job.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.text.primary, // Use primary text color, usually brighter
                        fontWeight: 600,
                        fontSize: "1.3rem", // bigger font size
                        mb: 1,
                      }}
                    >
                      {job.company}
                    </Typography>
                    <Chip
                      label={job.date}
                      size="medium"
                      sx={{
                        mt: 1,
                        mb: 2,
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        backgroundColor: theme.palette.primary.light + "DD", // subtle bg for chip to pop
                        color: theme.palette.primary.contrastText,
                      }}
                    />
                    <List sx={{ pl: 2, pr: 2 }}>
                      {job.points.map((point, idx) => (
                        <ListItem
                          key={idx}
                          sx={{
                            p: 0,
                            display: "list-item",
                            listStyleType: "disc", // make sure bullet is disc
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
