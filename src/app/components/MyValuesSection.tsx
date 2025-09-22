"use client";
import {
  Box,
  Typography,
  Card,
  Grid,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FadeInSection from "./FadeInSection";
import {
  Architecture as ArchitectureIcon,
  Groups as GroupsIcon,
  School as SchoolIcon,
  Public as PublicIcon,
} from "@mui/icons-material";

const values = [
  {
    category: "Engineering Excellence",
    icon: <ArchitectureIcon sx={{ color: "#F2C94C", fontSize: 30 }} />,
    points: [
      "Crafting scalable and maintainable software architecture.",
      "Building sleek, modern, and intuitive user interfaces.",
    ],
  },
  {
    category: "Client-Centric Communication",
    icon: <GroupsIcon sx={{ color: "#F2C94C", fontSize: 30 }} />,
    points: [
      "Putting the client's needs and goals at the heart of every project.",
      "Translating complex technical requirements into clear, understandable language.",
    ],
  },
  {
    category: "Continuous Growth",
    icon: <SchoolIcon sx={{ color: "#F2C94C", fontSize: 30 }} />,
    points: [
      "A commitment to lifelong learning to stay on the cutting edge of technology.",
      "Believing that every person and every project is an opportunity to learn.",
    ],
  },
  {
    category: "Curiosity & Exploration",
    icon: <PublicIcon sx={{ color: "#F2C94C", fontSize: 30 }} />,
    points: [
      "Passionately exploring new cultures, technologies, and ideas.",
      "Using creative exploration and writing to find new perspectives.",
    ],
  },
];

const MyValuesSection = () => {
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
        My Guiding Principles
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {values.map((valueCategory) => (
          <Grid size={{ xs: 12, sm: 6 }} key={valueCategory.category}>
            <Card
              sx={{
                p: 3,
                height: "100%",
                backgroundColor: "rgba(44, 44, 44, 0.7)",
                color: "white",
                border: "1px solid #444",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                {valueCategory.icon}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    ml: 1.5,
                    color: theme.palette.secondary.light,
                  }}
                >
                  {valueCategory.category}
                </Typography>
              </Box>
              <List sx={{ flexGrow: 1 }}>
                {valueCategory.points.map((point, index) => (
                  <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "#F2C94C",
                          borderRadius: "50%",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={point}
                      primaryTypographyProps={{ color: "#ccc" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        ))}
      </Grid>
    </FadeInSection>
  );
};

export default MyValuesSection;
