"use client";
import { Box, Typography, Card, Grid, Chip, useTheme } from "@mui/material";
import FadeInSection from "./FadeInSection";

// --- Custom SVG Icon Components (for a more professional look) ---

const NextjsIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M12.001 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2.404 21.6V8.4h1.711v10.592H9.863l-1.95-3.04H7.643v3.04H5.932V2.4h5.275a3.6 3.6 0 0 1 2.546 1.05A3.52 3.52 0 0 1 14.8 6a3.52 3.52 0 0 1-1.047 2.55 3.6 3.6 0 0 1-2.547 1.05H9.597zm0-12h1.711a1.8 1.8 0 0 0 1.282-.52A1.76 1.76 0 0 0 13.04 6a1.76 1.76 0 0 0-.525-1.27A1.8 1.8 0 0 0 11.23 4.2H9.597v5.4zm8.404 12V2.4h1.711v19.2h-1.711z" />
  </svg>
);
const ReactIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M12.001 2.001a10.001 10.001 0 1 0 0 20.002 10.001 10.001 0 0 0 0-20.002zm0 18.002a8.001 8.001 0 1 1 0-16.002 8.001 8.001 0 0 1 0 16.002z" />
    <path d="M12.001 6.001a6.001 6.001 0 1 0 0 12.002 6.001 6.001 0 0 0 0-12.002zm0 10.002a4.001 4.001 0 1 1 0-8.002 4.001 4.001 0 0 1 0 8.002z" />
    <path d="M12.001 11.001a1.001 1.001 0 1 0 0 2.002 1.001 1.001 0 0 0 0-2.002z" />
    <ellipse
      cx="12.001"
      cy="12.001"
      rx="2.5"
      ry="6"
      transform="rotate(30 12 12)"
    />
    <ellipse
      cx="12.001"
      cy="12.001"
      rx="2.5"
      ry="6"
      transform="rotate(90 12 12)"
    />
    <ellipse
      cx="12.001"
      cy="12.001"
      rx="2.5"
      ry="6"
      transform="rotate(150 12 12)"
    />
  </svg>
);
const TypeScriptIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zM8.342 17.534l7.99-7.99.707-.707-1.414-1.414-.707.707-7.99 7.99-.707.707 1.414 1.414zm5.42 2.122H5.667v-2.122h5.973v-5.972h2.122v8.094z" />
  </svg>
);
const NodejsIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zM8.47 18.995a.47.47 0 0 1-.47-.47V5.47a.47.47 0 0 1 .94 0v13.055a.47.47 0 0 1-.47.47zm7.06 0a.47.47 0 0 1-.47-.47V5.47a.47.47 0 0 1 .94 0v13.055a.47.47 0 0 1-.47.47zM12 18.995a.47.47 0 0 1-.47-.47V5.47a.47.47 0 0 1 .94 0v13.055a.47.47 0 0 1-.47.47z" />
  </svg>
);

const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "Next.js", icon: <NextjsIcon /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      {
        name: "Material UI",
        icon: (
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "#0081CB",
              mask: "url(https://mui.com/static/logo.svg) no-repeat center",
              maskSize: "contain",
            }}
          />
        ),
      }, // MUI has a specific logo
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: <NodejsIcon /> },
      {
        name: "Prisma",
        icon: (
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "currentColor",
              mask: "url(https://www.prisma.io/images/logo-dark.svg) no-repeat center",
              maskSize: "contain",
            }}
          />
        ),
      },
    ],
  },
  {
    category: "Database",
    technologies: [
      {
        name: "PostgreSQL",
        icon: (
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "#336791",
              mask: "url(https://www.postgresql.org/media/img/about/press/elephant.png) no-repeat center",
              maskSize: "contain",
            }}
          />
        ),
      },
    ],
  },
  {
    category: "Tools & Integrations",
    technologies: [
      {
        name: "Stripe",
        icon: (
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "#6772E5",
              mask: "url(https://stripe.com/img/v3/home/social.png) no-repeat center",
              maskSize: "contain",
            }}
          />
        ),
      },
      {
        name: "Contentful",
        icon: (
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "currentColor",
              mask: "url(https://www.contentful.com/assets/images/logos/contentful-isotype-light.svg) no-repeat center",
              maskSize: "contain",
            }}
          />
        ),
      },
      {
        name: "Resend",
        icon: (
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "currentColor",
              mask: "url(https://resend.com/static/logo.svg) no-repeat center",
              maskSize: "contain",
            }}
          />
        ),
      },
    ],
  },
  {
    category: "DevOps",
    technologies: [
      {
        name: "Vercel",
        icon: (
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "currentColor",
              mask: "url(https://assets.vercel.com/image/upload/front/favicon/vercel/vercel-icon-dark.svg) no-repeat center",
              maskSize: "contain",
            }}
          />
        ),
      },
      {
        name: "AWS CDK",
        icon: (
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "#FF9900",
              mask: "url(https://static.vecteezy.com/system/resources/previews/019/521/119/original/aws-logo-aws-icon-transparent-aws-icon-free-free-png.png) no-repeat center",
              maskSize: "contain",
            }}
          />
        ),
      },
      {
        name: "GitHub Actions",
        icon: (
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: "currentColor",
              mask: "url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) no-repeat center",
              maskSize: "contain",
            }}
          />
        ),
      },
    ],
  },
];

const TechStackSection = () => {
  const theme = useTheme();
  return (
    <FadeInSection>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          color: "white",
        }}
      >
        My Tech Stack
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {techStack.map((category) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category.category}>
            <Card
              sx={{
                p: 3,
                height: "100%",
                backgroundColor: "rgba(44, 44, 44, 0.7)",
                color: "white",
                border: "1px solid #444",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.secondary.light, // Accent color for the title
                  textAlign: "center",
                }}
              >
                {category.category}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                {category.technologies.map((tech) => (
                  <Chip
                    key={tech.name}
                    label={tech.name}
                    icon={tech.icon}
                    sx={{
                      fontSize: "1rem",
                      color: "#f5f5f5", // Brighter text for better contrast
                      backgroundColor: "rgba(0, 0, 0, 0.25)", // More opaque background
                      border: "1px solid #666", // Stronger border
                      "& .MuiChip-icon": {
                        color: "#f5f5f5", // Ensure icon is also bright
                      },
                      transition: "background-color 0.3s, transform 0.3s",
                      "&:hover": {
                        backgroundColor: "rgba(242, 201, 76, 0.2)", // Use your accent color on hover
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </FadeInSection>
  );
};

export default TechStackSection;
