import {
  Box,
  Typography,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FadeInSection from "./FadeInSection";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Cloud as CloudIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const techStack = {
  frontend: [
    { name: "Next.js", icon: <CodeIcon /> },
    { name: "React", icon: <CodeIcon /> },
    { name: "TypeScript", icon: <CodeIcon /> },
    { name: "Material UI", icon: <BuildIcon /> },
    { name: "styled-components", icon: <BuildIcon /> },
  ],
  backend: [
    { name: "Node.js", icon: <CodeIcon /> },
    { name: "Prisma", icon: <StorageIcon /> },
  ],
  database: [{ name: "PostgreSQL", icon: <StorageIcon /> }],
  tools: [
    { name: "Stripe", icon: <CloudIcon /> },
    { name: "Contentful", icon: <CloudIcon /> },
    { name: "Resend", icon: <CloudIcon /> },
  ],
  devops: [
    { name: "Jenkins", icon: <SettingsIcon /> },
    { name: "Vercel", icon: <CloudIcon /> },
    { name: "AWS CDK", icon: <CloudIcon /> },
    { name: "GitHub Actions", icon: <SettingsIcon /> },
  ],
};

// Category colours
const categoryColors: Record<string, string> = {
  frontend: "#1976d2", // blue
  backend: "#388e3c", // green
  database: "#f57c00", // orange
  tools: "#7b1fa2", // purple
  devops: "#d32f2f", // red
};

const TechStackSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FadeInSection>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: theme.typography.h2.fontFamily, mb: 4 }}
      >
        Tech Stack
      </Typography>

      {Object.entries(techStack).map(([category, items]) => (
        <Box
          key={category}
          sx={{
            mb: 4,
            pl: isMobile ? 1 : 0, // padding on mobile
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "capitalize",
              mb: 2,
              fontWeight: 600,
              fontSize: isMobile ? "1.1rem" : "1.25rem",
              color: categoryColors[category],
            }}
          >
            {category}:
          </Typography>

          <Stack
            direction="row"
            spacing={1.5}
            flexWrap="wrap"
            useFlexGap
            sx={{
              gap: isMobile ? 1.5 : 2, // even spacing between chips
            }}
          >
            {items.map((item) => (
              <Chip
                key={item.name}
                label={item.name}
                icon={item.icon}
                variant="outlined"
                sx={{
                  fontSize: isMobile ? "0.85rem" : "1rem",
                  height: isMobile ? 40 : 48,
                  borderColor: categoryColors[category],
                  color: categoryColors[category],
                  "& .MuiChip-icon": {
                    color: categoryColors[category],
                  },
                  "&:hover": {
                    transform: "scale(1.07)",
                    backgroundColor: categoryColors[category] + "22",
                    transition: "0.25s ease",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      ))}
    </FadeInSection>
  );
};

export default TechStackSection;
