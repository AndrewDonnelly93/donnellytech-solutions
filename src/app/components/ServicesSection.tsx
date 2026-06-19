"use client";
import { Box, Typography, Grid, Chip, useTheme } from "@mui/material";
import FadeInSection from "./FadeInSection";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import HubIcon from "@mui/icons-material/Hub";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import PatternIcon from "@mui/icons-material/Pattern";
import ApiIcon from "@mui/icons-material/Api";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import { motion } from "framer-motion";
import { useRevealOnView } from "../hooks/useRevealOnView";
import { vars } from "../../themeVars";

// ── Data types ───────────────────────────────────────────────────────────────

interface TechGroup {
  label: string;
  items: string[];
  tagColor?: string;
}

interface BusinessDomain {
  title: string;
  shortDesc: string;
  expertiseCallout: string;
  icon: React.ReactNode;
  color: string;
  techGroups: TechGroup[];
}

interface TechnicalDomain {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  iconBg: string;
  tagBg: string;
  techs: string[];
  techGroups?: TechGroup[];
  columns?: { xs: number; sm?: number; lg?: number };
}

interface TechnicalGroup {
  label: string;
  domains: TechnicalDomain[];
  columns?: { xs: number; sm?: number; lg?: number };
}

// ── Business Domains ─────────────────────────────────────────────────────────

const businessDomains: BusinessDomain[] = [
  {
    title: "FinTech & Web3",
    shortDesc:
      "Secure financial platforms and blockchain-native apps — from payment infrastructure to decentralised browsers.",
    expertiseCallout:
      "Payment gateways, banking dashboards, and Web3 applications including privacy-first dApps (e.g. MASQ Browser — a decentralised mesh-VPN browser on Ethereum/Polygon). Also experienced in server-side conversion tracking via GA4 Measurement Protocol: purchase events are forwarded directly from the server to Google Analytics, bypassing ad blockers and recovering 15–40% of lost conversion data.",
    icon: <AccountBalanceIcon sx={{ fontSize: 26 }} />,
    color: "#3b82f6",
    techGroups: [
      { label: "Backend", items: ["NestJS", "FastAPI", "PostgreSQL", "Redis", "Stripe", "Plaid"] },
      {
        label: "Web3 & Analytics",
        items: ["Ethereum", "Polygon", "MetaMask", "GA4 Measurement Protocol", "GTM Server-Side"],
        tagColor: "#f59e0b",
      },
    ],
  },
  {
    title: "Logistics & Supply Chain",
    shortDesc:
      "AI-powered operational platforms with real-time visibility and intelligent route optimisation at scale.",
    expertiseCallout:
      "Fleet tracking dashboards and warehouse systems enhanced with a custom AI optimisation layer — ML models (Google OR-Tools + reinforcement learning) compute optimal routes and reduce fuel costs, while an LLM interface (OpenAI / Claude API) lets dispatchers query live logistics data in plain language: 'What's the fastest route to depot given current traffic?' Built for scale from 10 trucks to 10,000 SKUs.",
    icon: <LocalShippingIcon sx={{ fontSize: 26 }} />,
    color: "#a855f7",
    techGroups: [
      { label: "Backend & Realtime", items: ["NestJS", "FastAPI", "MongoDB", "WebSocket", "Google Maps API"] },
      {
        label: "AI & Optimisation",
        items: ["Google OR-Tools", "Reinforcement Learning", "OpenAI API", "Claude API", "LangChain"],
        tagColor: "#f59e0b",
      },
      { label: "Frontend", items: ["React", "TypeScript"], tagColor: "#94a3b8" },
    ],
  },
  {
    title: "Wellness & Fitness",
    shortDesc:
      "Engaging digital experiences for studios, coaches, and wellness brands — on web, iOS, and Android.",
    expertiseCallout:
      "Yoga studio booking systems, membership portals, and personal trainer apps built natively for iOS and Android — class scheduling, subscription billing, on-demand video libraries, and progress tracking, all optimised for mobile-first users who live on their phones.",
    icon: <DirectionsRunIcon sx={{ fontSize: 26 }} />,
    color: "#f97316",
    techGroups: [
      { label: "Backend", items: ["NestJS", "FastAPI", "Supabase", "Stripe", "Mux Video"] },
      { label: "Mobile", items: ["React Native", "iOS (Swift)", "Android (Kotlin)", "Expo"] },
      { label: "Frontend", items: ["Next.js", "Tailwind"], tagColor: "#94a3b8" },
    ],
  },
];

// ── Technical Expertise (grouped) ────────────────────────────────────────────

const technicalGroups: TechnicalGroup[] = [
  {
    label: "Architecture & Patterns",
    columns: { xs: 12, sm: 6, lg: 4 },
    domains: [
      {
        title: "Application Architecture",
        description:
          "Designing robust, scalable system structures using Domain-Driven Design, CQRS, event sourcing, hexagonal architecture, and Clean Architecture principles — built to grow without accumulating debt.",
        icon: <ArchitectureIcon sx={{ fontSize: 22 }} />,
        color: "#6366f1",
        iconBg: "#1e1b4b",
        tagBg: "#1e1b4b",
        techs: ["DDD", "CQRS", "Event Sourcing", "Hexagonal Arch", "Clean Arch", "ADR"],
      },
      {
        title: "Design Patterns",
        description:
          "Applying SOLID principles and Gang of Four patterns to produce extensible, testable, and maintainable code at every layer — so the next developer (or future you) isn't left guessing.",
        icon: <PatternIcon sx={{ fontSize: 22 }} />,
        color: "#d97706",
        iconBg: "#451a03",
        tagBg: "#451a03",
        techs: ["SOLID", "Repository", "Factory", "Observer", "Decorator", "Strategy"],
      },
      {
        title: "Microservices",
        description:
          "Decomposing monoliths into independently deployable services with containerisation, service meshes, and event-driven inter-service communication — designed for fault isolation and independent scaling.",
        icon: <HubIcon sx={{ fontSize: 22 }} />,
        color: "#be185d",
        iconBg: "#500724",
        tagBg: "#500724",
        techs: ["Docker", "Kubernetes", "gRPC", "RabbitMQ", "AWS ECS", "Istio"],
      },
    ],
  },
  {
    label: "Full Stack Development",
    columns: { xs: 12, sm: 6, lg: 4 },
    domains: [
      {
        title: "Frontend Engineering",
        description:
          "Production-grade user interfaces from component architecture to deployment — microfrontend strategies for large teams, type-safe React and Angular applications, and modern design systems that stay consistent, accessible, and fast at scale.",
        icon: <WebIcon sx={{ fontSize: 22 }} />,
        color: "#06b6d4",
        iconBg: "#083344",
        tagBg: "#083344",
        techs: [],
        columns: { xs: 12 },
        techGroups: [
          {
            label: "Microfrontends",
            items: ["Module Federation", "single-spa", "Independent Deploy", "Shared Design Tokens"],
          },
          {
            label: "Frameworks & Languages",
            items: ["React", "Next.js", "Angular", "TypeScript", "RxJS", "NgRx"],
          },
          {
            label: "UI Libraries & Styling",
            items: ["MUI", "Tailwind CSS", "Emotion", "Framer Motion", "shadcn/ui", "CSS Modules"],
            tagColor: "#94a3b8",
          },
          {
            label: "Quality & Delivery",
            items: ["Storybook", "Jest", "Playwright", "Vite", "Webpack", "Core Web Vitals"],
            tagColor: "#a855f7",
          },
        ],
      },
      {
        title: "Mobile Applications",
        description:
          "Cross-platform iOS and Android apps with native-feel UX — from React Native / Expo to enterprise .NET MAUI applications with offline support and seamless API integration.",
        icon: <PhoneIphoneIcon sx={{ fontSize: 22 }} />,
        color: "#059669",
        iconBg: "#022c22",
        tagBg: "#022c22",
        techs: [
          "React Native",
          "Expo",
          "iOS (Swift)",
          "Android (Kotlin)",
          ".NET MAUI",
          "C# / .NET",
          "Firebase",
          "Redux",
        ],
      },
      {
        title: "API & Service Layer",
        description:
          "End-to-end backend services from database to HTTP — versioned REST and GraphQL APIs, event-driven workflows, authentication, caching, and observability built for production scale.",
        icon: <ApiIcon sx={{ fontSize: 22 }} />,
        color: "#0d9488",
        iconBg: "#042f2e",
        tagBg: "#042f2e",
        techs: ["REST", "GraphQL", "gRPC", "NestJS", "Node.js", "OpenAPI", "Webhooks"],
      },
      {
        title: "ASP.NET / C# Backend",
        description:
          "Enterprise-grade .NET services with clean architecture, Entity Framework Core, SignalR real-time channels, background jobs, and CQRS via MediatR — secure, testable APIs for cloud workloads.",
        icon: <CodeIcon sx={{ fontSize: 22 }} />,
        color: "#7c3aed",
        iconBg: "#2e1065",
        tagBg: "#2e1065",
        techs: ["ASP.NET Core", "C#", "Entity Framework", "SignalR", "Hangfire", "MediatR"],
      },
      {
        title: "Data & Integration",
        description:
          "Connecting clients to persistent layers with ORMs, migrations, message queues, and third-party integrations — Stripe, Plaid, webhooks, and ETL pipelines in cohesive full-stack delivery.",
        icon: <StorageIcon sx={{ fontSize: 22 }} />,
        color: "#2563eb",
        iconBg: "#0c1a3a",
        tagBg: "#0c1a3a",
        techs: ["PostgreSQL", "Prisma", "Redis", "RabbitMQ", "Stripe", "Plaid"],
      },
    ],
  },
  {
    label: "Cloud Platforms",
    columns: { xs: 12, sm: 6, lg: 4 },
    domains: [
      {
        title: "AWS Cloud Solutions",
        description:
          "End-to-end AWS architectures — serverless functions, container-based workloads on ECS/EKS, S3 storage pipelines, and infrastructure-as-code with CDK. Full observability via CloudWatch and production-grade CI/CD pipelines.",
        icon: <CloudQueueIcon sx={{ fontSize: 22 }} />,
        color: "#FF9900",
        iconBg: "#451a03",
        tagBg: "#451a03",
        techs: ["Lambda", "ECS / EKS", "S3 / RDS", "CDK", "CloudWatch", "IAM", "API Gateway"],
      },
      {
        title: "Azure Cloud Solutions",
        description:
          "Microsoft Azure for enterprise workloads — App Services, Azure Functions, AKS container orchestration, Cosmos DB for globally distributed data, and Azure DevOps for fully automated delivery pipelines.",
        icon: <CloudIcon sx={{ fontSize: 22 }} />,
        color: "#0078D4",
        iconBg: "#0c1a3a",
        tagBg: "#0c1a3a",
        techs: [
          "App Service",
          "Azure Functions",
          "AKS",
          "Cosmos DB",
          "Azure DevOps",
          "Blob Storage",
          "Entra ID",
        ],
      },
      {
        title: "GCP Cloud Solutions",
        description:
          "Google Cloud deployments leveraging Cloud Run for containerised APIs, GKE for Kubernetes workloads, BigQuery for data-intensive analytics, and Firestore for real-time NoSQL — ideal for ML-driven and globally distributed applications.",
        icon: <CloudCircleIcon sx={{ fontSize: 22 }} />,
        color: "#34A853",
        iconBg: "#052e16",
        tagBg: "#052e16",
        techs: [
          "Cloud Run",
          "GKE",
          "BigQuery",
          "Cloud Functions",
          "Firestore",
          "Cloud Build",
          "Vertex AI",
        ],
      },
    ],
  },
];

// ── Animation ────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" as const },
  }),
};

// ── Business Domain Card ─────────────────────────────────────────────────────

const BusinessDomainCard = ({
  domain,
  index,
}: {
  domain: BusinessDomain;
  index: number;
}) => {
  const theme = useTheme();
  const { ref, visible } = useRevealOnView();

  return (
    <Grid size={{ xs: 12, sm: 6 }}>
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
            borderRadius: "14px",
            backgroundColor: vars.surface,
            backdropFilter: theme.palette.mode === "dark" ? "blur(12px)" : "none",
            border: `1px solid ${vars.border}`,
            borderTop: `3px solid ${domain.color}`,
            boxShadow: vars.cardShadow,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.28s ease, box-shadow 0.28s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: `0 16px 40px rgba(0,0,0,0.15), 0 0 0 1px ${domain.color}30`,
            },
          }}
        >
          {/* Card header */}
          <Box sx={{ p: 3, pb: 1.5 }}>
            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: "10px",
                backgroundColor: `${domain.color}18`,
                border: `1px solid ${domain.color}2a`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: domain.color,
                mb: 2,
              }}
            >
              {domain.icon}
            </Box>

            <Typography
              sx={{ fontWeight: 700, color: vars.textPrimary, mb: 0.7, fontSize: "1.05rem", lineHeight: 1.3 }}
            >
              {domain.title}
            </Typography>

            <Typography
              sx={{ color: vars.textSecondary, lineHeight: 1.6, fontSize: "0.875rem" }}
            >
              {domain.shortDesc}
            </Typography>
          </Box>

          {/* Expertise callout — blockquote style */}
          <Box
            sx={{
              mx: 3,
              my: 2,
              pl: 2,
              pr: 1.5,
              py: 1.5,
              borderRadius: "0 8px 8px 0",
              borderLeft: `3px solid ${domain.color}50`,
              backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : `${domain.color}08`,
            }}
          >
            <Typography
              sx={{
                color: vars.textSecondary,
                fontSize: "0.81rem",
                lineHeight: 1.72,
              }}
            >
              {domain.expertiseCallout}
            </Typography>
          </Box>

          {/* Grouped tech tags */}
          <Box sx={{ px: 3, pb: 3, pt: 0.5, display: "flex", flexDirection: "column", gap: 2, mt: "auto" }}>
            {domain.techGroups.map((group) => (
              <Box key={group.label}>
                <Typography
                  sx={{
                    fontSize: "0.62rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: vars.navInactive,
                    mb: 0.8,
                  }}
                >
                  {group.label}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
                  {group.items.map((item) => {
                    const tagColor = group.tagColor ?? domain.color;
                    return (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      sx={{
                        backgroundColor: "transparent",
                        border: `1px solid ${tagColor}40`,
                        color: tagColor,
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        height: "24px",
                        borderRadius: "100px",
                        "& .MuiChip-label": { px: "10px" },
                        transition: "background 0.15s ease",
                        "&:hover": {
                          backgroundColor: `${tagColor}12`,
                        },
                      }}
                    />
                    );
                  })}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Grid>
  );
};

// ── Technical Expertise Card ─────────────────────────────────────────────────

const TechnicalCard = ({
  domain,
  index,
  columns = { xs: 12, sm: 6, lg: 4 },
}: {
  domain: TechnicalDomain;
  index: number;
  columns?: { xs: number; sm?: number; lg?: number };
}) => {
  const theme = useTheme();
  const filledTagText = theme.palette.common.white;
  const { ref, visible } = useRevealOnView();

  return (
    <Grid size={columns}>
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
            p: 3,
            borderRadius: "14px",
            backgroundColor: vars.surface,
            backdropFilter: theme.palette.mode === "dark" ? "blur(12px)" : "none",
            border: `1px solid ${vars.border}`,
            borderTop: `3px solid ${domain.color}`,
            boxShadow: vars.cardShadow,
            display: "flex",
            flexDirection: "column",
            gap: 1.8,
            transition: "transform 0.28s ease, box-shadow 0.28s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: `0 16px 40px rgba(0,0,0,0.15), 0 0 0 1px ${domain.color}30`,
            },
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "10px",
              backgroundColor:
                theme.palette.mode === "dark" ? `${domain.color}22` : domain.iconBg,
              border:
                theme.palette.mode === "dark" ? `1px solid ${domain.color}35` : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.palette.mode === "dark" ? domain.color : filledTagText,
            }}
          >
            {domain.icon}
          </Box>

          <Typography sx={{ fontWeight: 700, color: vars.textPrimary, fontSize: "1.02rem", lineHeight: 1.3 }}>
            {domain.title}
          </Typography>

          <Typography sx={{ color: vars.textSecondary, lineHeight: 1.72, flexGrow: 1, fontSize: "0.84rem" }}>
            {domain.description}
          </Typography>

          {domain.techGroups && domain.techGroups.length > 0 ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mt: "auto", pt: 0.5 }}>
              {domain.techGroups.map((group) => (
                <Box key={group.label}>
                  <Typography
                    sx={{
                      fontSize: "0.62rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: vars.navInactive,
                      mb: 0.7,
                    }}
                  >
                    {group.label}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
                    {group.items.map((tech) => {
                      const tagColor = group.tagColor ?? domain.color;
                      return (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor:
                              theme.palette.mode === "dark" ? `${tagColor}22` : domain.tagBg,
                            border:
                              theme.palette.mode === "dark" ? `1px solid ${tagColor}40` : "none",
                            color: theme.palette.mode === "dark" ? tagColor : filledTagText,
                            fontSize: "0.68rem",
                            fontWeight: 500,
                            height: "24px",
                            borderRadius: "100px",
                            "& .MuiChip-label": { px: "10px" },
                          }}
                        />
                      );
                    })}
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7, mt: "auto", pt: 0.5 }}>
            {domain.techs.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark" ? `${domain.color}22` : domain.tagBg,
                  border:
                    theme.palette.mode === "dark" ? `1px solid ${domain.color}40` : "none",
                  color: theme.palette.mode === "dark" ? domain.color : filledTagText,
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  height: "24px",
                  borderRadius: "100px",
                  "& .MuiChip-label": { px: "10px" },
                }}
              />
            ))}
          </Box>
          )}
        </Box>
      </motion.div>
    </Grid>
  );
};

// ── Technical group subsection ───────────────────────────────────────────────

const TechnicalGroupSection = ({
  group,
  startIndex,
}: {
  group: TechnicalGroup;
  startIndex: number;
}) => {
  const columns = group.columns ?? { xs: 12, sm: 6, lg: 4 };

  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        sx={{
          fontSize: "0.62rem",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: vars.navInactive,
          mb: 2.5,
          pb: 1.5,
          borderBottom: `1px solid ${vars.divider}`,
        }}
      >
        {group.label}
      </Typography>
      <Grid container spacing={3}>
        {group.domains.map((domain, i) => (
          <TechnicalCard
            key={domain.title}
            domain={domain}
            index={startIndex + i}
            columns={domain.columns ?? columns}
          />
        ))}
      </Grid>
    </Box>
  );
};

// ── Label ────────────────────────────────────────────────────────────────────

const SectionLabel = ({ label, color }: { label: string; color?: string }) => (
  <Typography
    sx={{
      textTransform: "uppercase",
      letterSpacing: "0.16em",
      color: color ?? vars.primaryMain,
      fontWeight: 700,
      mb: 1.5,
      fontSize: "0.72rem",
    }}
  >
    {label}
  </Typography>
);

// ── Main ─────────────────────────────────────────────────────────────────────

const ServicesSection = () => (
    <Box>
      <FadeInSection>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <SectionLabel label="What I Build" />
          <Typography variant="h2" sx={{ fontWeight: 800, color: vars.textPrimary, mb: 2 }}>
            Expertise
          </Typography>
          <Typography variant="body1" sx={{ color: vars.textSecondary, maxWidth: 640, mx: "auto", lineHeight: 1.7 }}>
            Industry-focused delivery backed by full-stack backend, modern frontend engineering,
            and cloud-native technical depth — from architecture through to production.
          </Typography>
        </Box>
      </FadeInSection>

      <FadeInSection>
        <Box sx={{ mb: 3 }}>
          <SectionLabel label="Business Domains" color={vars.primaryDark} />
          <Typography variant="h3" sx={{ fontWeight: 700, color: vars.textPrimary, mb: 4 }}>
            Industries I Serve
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {businessDomains.map((domain, i) => (
            <BusinessDomainCard key={domain.title} domain={domain} index={i} />
          ))}
        </Grid>
      </FadeInSection>

      <FadeInSection>
        <Box sx={{ pt: 6, borderTop: `1px solid ${vars.divider}`, mb: 3 }}>
          <SectionLabel label="Technical Expertise" color={vars.secondaryMain} />
          <Typography variant="h3" sx={{ fontWeight: 700, color: vars.textPrimary, mb: 4 }}>
            How I Build It
          </Typography>
        </Box>
        <Box sx={{ mb: 1 }}>
          {technicalGroups.map((group, groupIndex) => {
            const startIndex = technicalGroups
              .slice(0, groupIndex)
              .reduce((sum, g) => sum + g.domains.length, 0);
            return (
              <TechnicalGroupSection
                key={group.label}
                group={group}
                startIndex={startIndex}
              />
            );
          })}
        </Box>
      </FadeInSection>
    </Box>
);

export default ServicesSection;
