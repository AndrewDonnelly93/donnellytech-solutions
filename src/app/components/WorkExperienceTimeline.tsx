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

interface TimelineEvent {
  role: string;
  organization: string;
  date: string;
  points: string[];
}

const workEvents: TimelineEvent[] = [
  {
    role: "Business Owner | Full-Stack Developer",
    organization: "Donnelly Tech Solutions",
    date: "Aug 2024 – Present",
    points: [
      "Partner directly with clients to design, build, and deploy custom web applications from concept to launch.",
      "Automate client workflows and reduce manual overhead by up to 30% through custom software solutions.",
      "Lead full-stack development using a modern tech stack including React, Next.js, Node.js, and TypeScript.",
      "Manage the complete project lifecycle, from initial client communication to final technical strategy and delivery.",
    ],
  },
  {
    role: "Software Engineer",
    organization: "Glesk Management Limited",
    date: "Oct 2022 – Aug 2024",
    points: [
      "Engineered and maintained features for high-traffic insurance and mental health platforms serving European clients.",
      "Enhanced UI consistency and code quality by implementing styled-components and automated code checks.",
      "Mentored and upskilled junior developers through targeted pair programming and knowledge-sharing sessions.",
    ],
  },
  {
    role: "Software Engineer",
    organization: "Knowledge City",
    date: "Dec 2021 – Sept 2022",
    points: [
      "Developed key UI features for an online educational platform, improving user engagement and functionality.",
      "Architected a flexible certificate template editor with fabricJS, empowering users to create custom designs.",
      "Increased application stability and performance by refactoring and modularising legacy components.",
    ],
  },
  {
    role: "Software Engineer",
    organization: "Ocuco Limited",
    date: "Jan 2021 – Aug 2021",
    points: [
      "Delivered a library of reusable UI components with React and TypeScript, accelerating future development.",
      "Strengthened deployment processes by contributing to CI/CD pipelines with Azure DevOps.",
      "Ensured high-quality feature delivery by working closely with QA and business analysts on software for the optical industry.",
    ],
  },
  {
    role: "Software Engineer",
    organization: "Viasat Europe Limited",
    date: "Jan 2020 – Dec 2020",
    points: [
      "Spearheaded the creation of a portal builder app that enabled non-technical users to prototype in-flight entertainment systems.",
      "Built dynamic UI components for in-flight experiences, including weather, video players, and banners.",
      "Implemented and managed CI/CD workflows with Jenkins and Docker to automate testing and deployment.",
    ],
  },
  {
    role: "Software Engineer",
    organization: "NRGSOFT",
    date: "Mar 2017 – Jan 2020",
    points: [
      "Contributed to a large-scale e-assessment platform, supporting a wide variety of question types and workflows.",
      "Developed complex, specialised assessment tools, including integrated code editors and mathematical editors.",
      "Managed complex asynchronous data flows and application state effectively using Redux-Saga.",
    ],
  },
  {
    role: "Copywriter & Content Strategist",
    organization: "Internet Open & Freelance",
    date: "2011 – 2015",
    points: [
      "Crafted compelling, SEO-optimised copy for a diverse range of clients in sectors including law, manufacturing, and retail.",
      "Translated complex product features and legal jargon into clear, benefit-driven content for websites and marketing materials.",
      "Developed a strong foundation in communication, which now informs my ability to write clear documentation and collaborate effectively with non-technical stakeholders.",
    ],
  },
];

export default function WorkExperienceTimeline() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Box sx={{ position: "relative", py: 8, px: 2 }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "white", mb: 8 }}
      >
        Professional Experience
      </Typography>

      {/* The timeline line, now positioned on the left for mobile */}
      <Box
        sx={{
          position: "absolute",
          top: "120px",
          bottom: 0,
          left: "20px", // Keep it on the left for a cleaner single-column look
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
            backgroundColor: theme.palette.secondary.main,
            transformOrigin: "top",
          }}
        />
      </Box>

      {/* Container for the timeline items */}
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        {workEvents.map((event, i) => {
          return (
            <Box
              key={i}
              sx={{
                mb: 4,
                position: "relative",
                zIndex: 1,
                pl: isMobile ? "40px" : 0, // Add padding to not overlap the line on mobile
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
                      boxShadow: "0 12px 40px 0 rgba(242, 201, 76, 0.2)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                      {event.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.secondary.light,
                        fontWeight: 600,
                        mb: 1,
                      }}
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
