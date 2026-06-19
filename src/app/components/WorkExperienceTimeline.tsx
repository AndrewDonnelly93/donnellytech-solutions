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

interface TimelineEvent {
  role: string;
  organization: string;
  date: string;
  points: string[];
}

const workEvents: TimelineEvent[] = [
  {
    role: "Founder | Senior Software Engineer",
    organization: "Donnelly Tech Solutions",
    date: "Aug 2024 – Present",
    points: [
      "Founded and led Donnelly Tech Solutions Ltd, delivering custom software solutions across multiple business domains and industries.",
      "Partnered with stakeholders to analyze business challenges, streamline workflows, and implement digital transformation initiatives that improved operational efficiency and reduced overhead.",
      "Designed scalable software architectures and established engineering best practices, ensuring long-term maintainability, reliability, and business alignment.",
      "Led end-to-end product delivery, driving Agile development processes, cross-functional collaboration, and continuous improvement to maximize team productivity and project success.",
      "Provided strategic technical leadership, balancing business objectives, user experience, system scalability, and delivery timelines to achieve measurable outcomes for clients.",
      "Championed modern software engineering practices, including quality assurance, automation, architecture governance, and performance optimization, resulting in higher product quality and faster delivery cycles."
    ],
  },
  {
    role: "Senior Software Engineer",
    organization: "Glesk Management Limited",
    date: "Oct 2022 – Aug 2024",
    points: [
      "Contributed to large-scale insurance and mental health platforms serving European clients, delivering secure, scalable, and user-centric solutions.",
      "Designed and enhanced microfrontend and microservices architectures, improving system modularity, team autonomy, and deployment flexibility.",
      "Implemented event-driven communication patterns using Apache Kafka and CQRS principles to support scalable, resilient, and high-performance business workflows.",
      "Applied domain-driven design, design patterns, and architectural best practices to improve maintainability, extensibility, and long-term product sustainability.",
      "Established automated quality gates, testing standards, and CI/CD pipelines on AWS, accelerating release cycles while maintaining high software quality and reliability.",
      "Collaborated with cross-functional teams to modernize engineering processes, improve developer productivity, and enhance overall platform performance.",
      "Mentored junior engineers through architecture reviews, pair programming, and technical knowledge-sharing initiatives, fostering engineering excellence across teams.",
    ],
  },
  {
    role: "Software Engineer",
    organization: "Knowledge City",
    date: "Dec 2021 – Sept 2022",
    points: [
    ],
  },
  {
    role: "Senior Software Engineer",
    organization: "Ocuco Limited",
    date: "Jan 2021 – Aug 2021",
    points: [],
  },
  {
    role: "Software Engineer",
    organization: "Viasat Europe Limited",
    date: "Jan 2020 – Dec 2020",
    points: [],
  },
  {
    role: "Software Engineer",
    organization: "NRGSOFT",
    date: "Mar 2017 – Jan 2020",
    points: [
      "Contributed to the development and modernization of a large-scale e-assessment platform, delivering scalable and high-performance solutions supporting diverse assessment workflows and question types.",
      "Designed and implemented advanced assessment capabilities, including interactive coding environments, mathematical evaluation tools, and dynamic content delivery systems to enhance the learner experience.",
      "Leveraged microfrontend architecture and Webpack Module Federation to enable independent deployments, improve team scalability, and accelerate feature delivery across distributed engineering teams.",
      "Architected modern frontend solutions emphasizing modularity, reusability, maintainability, accessibility, and performance optimization across complex user journeys.",
      "Optimized global content delivery and application performance through Cloudflare, CDN strategies, edge caching, asset optimization, and web performance best practices, improving page load times and platform responsiveness.",
      "Collaborated closely with product, design, and engineering teams to translate complex educational requirements into intuitive and scalable user experiences.",
      "Established engineering best practices, including automated testing, code quality standards, CI/CD pipelines, performance monitoring, and observability, supporting reliable and continuous product delivery.",
      "Contributed to frontend platform governance by driving architectural consistency, security improvements, and performance enhancements across multiple applications and teams.",
    ],
  },
];

function WorkTimelineCard({ event }: { event: TimelineEvent }) {
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
            boxShadow: "0 12px 40px color-mix(in srgb, var(--mui-palette-secondary-main) 20%, transparent)",
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            {event.role}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: vars.secondaryLight,
              fontWeight: 600,
              mb: 1,
            }}
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

export default function WorkExperienceTimeline() {
  const isMobile = useMediaQuery("(max-width:600px)");

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
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 800, color: vars.textPrimary, mb: 8 }}
      >
        Professional Experience
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
            backgroundColor: vars.secondaryMain,
            transformOrigin: "top",
          }}
        />
      </Box>

      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        {workEvents.map((event, i) => (
          <Box
            key={i}
            sx={{
              mb: 4,
              position: "relative",
              zIndex: 1,
              pl: isMobile ? "40px" : 0,
            }}
          >
            <WorkTimelineCard event={event} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
