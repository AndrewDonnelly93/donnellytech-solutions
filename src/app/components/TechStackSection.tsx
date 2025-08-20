import { Box, Typography, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import BuildIcon from "@mui/icons-material/Build";
import { JSX } from "react";

const techStack = {
  frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "Material UI",
    "styled-components",
  ],
  backend: ["Node.js", "Prisma"],
  database: ["PostgreSQL"],
  tools: ["Stripe", "Contentful", "Resend"],
  devops: ["Jenkins", "Vercel", "AWS CDK", "GitHub Actions"],
};

const categoryProps: Record<
  string,
  {
    color: "primary" | "secondary" | "success" | "warning" | "info";
    icon: JSX.Element;
  }
> = {
  frontend: { color: "success", icon: <WebIcon /> },
  backend: { color: "warning", icon: <StorageIcon /> },
  database: { color: "warning", icon: <StorageIcon /> },
  tools: { color: "info", icon: <BuildIcon /> },
  devops: { color: "secondary", icon: <BuildIcon /> },
};

const TechStackSection = () => {
  return (
    <FadeInSection>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: (theme) => theme.typography.h2.fontFamily }}
      >
        Tech Stack
      </Typography>

      {/* Legend with animation */}
      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
        {Object.entries(categoryProps).map(([category, { color, icon }], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <Chip
              icon={icon}
              label={category.charAt(0).toUpperCase() + category.slice(1)}
              color={color}
              variant="filled"
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                height: 48,
              }}
            />
          </motion.div>
        ))}
      </Stack>

      {/* Tech chips per category with staggered animation */}
      {Object.entries(techStack).map(([category, items], catIndex) => {
        const { color, icon } = categoryProps[category];
        return (
          <Box key={category} sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{ textTransform: "capitalize", mb: 1 }}
            >
              {category}:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: catIndex * 0.3 + i * 0.1,
                    duration: 0.4,
                  }}
                >
                  <Chip
                    icon={icon}
                    label={item}
                    color={color}
                    variant="outlined"
                    size="medium"
                    sx={{
                      mb: 1,
                      fontSize: "1rem",
                      height: 48,
                      "&:hover": {
                        transform: "scale(1.05)",
                        transition: "0.2s ease-in-out",
                        backgroundColor: (theme) =>
                          theme.palette[color].light + "33",
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Box>
        );
      })}
    </FadeInSection>
  );
};

export default TechStackSection;
