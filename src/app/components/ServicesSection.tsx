import { Box, Typography, Card, Chip, Grid } from "@mui/material";
import FadeInSection from "../components/FadeInSection";
import PaymentIcon from "@mui/icons-material/Payment";
import StorageIcon from "@mui/icons-material/Storage";
import EmailIcon from "@mui/icons-material/Email";
import DevicesIcon from "@mui/icons-material/Devices";

const services = [
  {
    title: "Stripe Payment Integration",
    description:
      "Smooth, secure transactions for your ecommerce or portfolio site.",
    icon: <PaymentIcon color="primary" />,
  },
  {
    title: "Contentful CMS",
    description: "Easy artwork or content management and showcasing.",
    icon: <StorageIcon color="primary" />,
  },
  {
    title: "Custom Email Notifications & Forms",
    description:
      "Keep in touch with users through tailored contact forms and automated emails.",
    icon: <EmailIcon color="primary" />,
  },
  {
    title: "Fully Responsive Design",
    description:
      "Seamless experiences on desktops, tablets, and mobile devices.",
    icon: <DevicesIcon color="primary" />,
  },
];

const ServicesSection = () => {
  return (
    <FadeInSection>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: (theme) => theme.typography.h2.fontFamily, mb: 4 }}
      >
        What I Do
      </Typography>
      <Typography variant="body1" paragraph>
        I build responsive, user-friendly websites and applications tailored to
        your needs. For example, I recently developed a full ecommerce artist
        portfolio for David McEwen, which included:
      </Typography>

      <Grid container spacing={3}>
        {services.map((service, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
            <Card
              sx={{
                p: 2,
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: 4,
                "&:hover": {
                  transform: "scale(1.03)",
                  transition: "0.3s ease",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                {service.icon}
                <Typography variant="h6" sx={{ ml: 1, fontWeight: "bold" }}>
                  {service.title}
                </Typography>
              </Box>
              <Typography variant="body2">{service.description}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body1" sx={{ mt: 4 }}>
        Whether you need a business site, portfolio, or custom web app, I
        deliver quality solutions using modern tools like{" "}
        <Chip label="Next.js" color="primary" size="small" sx={{ mr: 1 }} />,{" "}
        <Chip label="MUI" color="primary" size="small" sx={{ mr: 1 }} />, and{" "}
        <Chip label="TypeScript" color="primary" size="small" />.
      </Typography>
    </FadeInSection>
  );
};

export default ServicesSection;
