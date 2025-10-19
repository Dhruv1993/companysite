import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { config } from "../config/env";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 32 }} />,
    title: "Email",
    content: config.contact.email,
    link: `mailto:${config.contact.email}`,
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 32 }} />,
    title: "Phone",
    content: config.contact.phone,
    link: `tel:${config.contact.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 32 }} />,
    title: "Location",
    content: config.contact.location,
    link: null,
  },
];

function ContactHero() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background:
          "linear-gradient(135deg, rgba(25,118,210,0.1) 0%, rgba(245,0,87,0.1) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 700,
                  mb: 3,
                  background: "linear-gradient(45deg, #1976D2, #F50057)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get In Touch
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "text.secondary",
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Ready to start your next project? Let's discuss how we can help
                bring your ideas to life with our cutting-edge technology
                solutions.
              </Typography>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} key={info.title}>
                  <MotionPaper
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    elevation={0}
                    sx={{
                      p: 3,
                      border: 1,
                      borderColor: "divider",
                      backgroundColor: "background.paper",
                      "&:hover": {
                        borderColor: "primary.main",
                        backgroundColor: "action.hover",
                      },
                      transition: "all 0.3s ease",
                      cursor: info.link ? "pointer" : "default",
                    }}
                    onClick={() => {
                      if (info.link) {
                        window.open(info.link, "_blank");
                      }
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          mr: 2,
                          p: 1,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, mb: 0.5 }}
                        >
                          {info.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {info.content}
                        </Typography>
                      </Box>
                    </Box>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactHero;
