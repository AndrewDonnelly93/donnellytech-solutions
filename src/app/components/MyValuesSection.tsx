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
  Architecture as ArchitectureIcon,
  Brush as BrushIcon,
  Chat as ChatIcon,
  School as SchoolIcon,
  Public as PublicIcon,
  Edit as EditIcon,
} from "@mui/icons-material";

const values = {
  engineering: [
    {
      name: "Scalable & maintainable architecture",
      icon: <ArchitectureIcon />,
    },
    { name: "Sleek, modern UI technologies", icon: <BrushIcon /> },
  ],
  communication: [
    { name: "Client-first mindset", icon: <ChatIcon /> },
    { name: "Translating non-technical needs into code", icon: <ChatIcon /> },
    { name: "Surveys & feedback loops", icon: <ChatIcon /> },
  ],
  growth: [
    { name: "Continuous learning", icon: <SchoolIcon /> },
    { name: "Every person has something to teach", icon: <SchoolIcon /> },
  ],
  curiosity: [
    { name: "Exploring cultures & new tech", icon: <PublicIcon /> },
    { name: "Creative exploration through writing", icon: <EditIcon /> },
  ],
};

// Category colours
const categoryColors: Record<string, string> = {
  engineering: "#1976d2", // blue
  communication: "#388e3c", // green
  growth: "#f57c00", // orange
  curiosity: "#7b1fa2", // purple
};

const MyValuesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FadeInSection>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: theme.typography.h2.fontFamily, mb: 4 }}
      >
        What I Value
      </Typography>

      {Object.entries(values).map(([category, items]) => (
        <Box
          key={category}
          sx={{
            mb: 4,
            pl: isMobile ? 1 : 0,
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
            sx={{ gap: isMobile ? 1.5 : 2 }}
          >
            {items.map((item) => (
              <Chip
                key={item.name}
                label={item.name}
                icon={item.icon}
                variant="outlined"
                sx={{
                  height: isMobile ? 48 : 56,
                  px: 2.5,
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  fontWeight: 500,
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

export default MyValuesSection;
