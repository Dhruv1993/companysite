import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionTypography = motion(Typography);

function ServicesHero() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(135deg, rgba(25,118,210,0.1) 0%, rgba(245,0,87,0.1) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 800,
            mx: "auto",
            px: { xs: 2, sm: 3 },
          }}
        >
          <MotionTypography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              background: "linear-gradient(45deg, #1976D2, #F50057)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </MotionTypography>
          <MotionTypography
            variant="h5"
            sx={{
              color: "text.secondary",
              mb: 4,
              lineHeight: 1.8,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From custom software development to integrated circuits, we provide
            end-to-end technology solutions that drive innovation and business
            growth.
          </MotionTypography>
        </Box>
      </Container>
    </Box>
  );
}

export default ServicesHero;
