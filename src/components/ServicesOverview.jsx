import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import MemoryIcon from "@mui/icons-material/Memory";
import Print3Icon from "@mui/icons-material/Print";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SecurityIcon from "@mui/icons-material/Security";
import ImageGallery from "./ImageGallery";

// Import optimized hardware images
import customHardware1 from "../assets/optimized/customHardware1.jpg";
import selfbalancebot from "../assets/optimized/selfbalancebot.jpg";
import stm from "../assets/optimized/stm.jpg";

// Import new trading images
import cryptodashboard from "../assets/cryptodashboard.png";
import trading from "../assets/trading.png";
import analysis from "../assets/analysis.png";

const MotionCard = motion(Card);

const services = [
  {
    title: "Custom Software",
    description:
      "Tailored solutions that transform your business needs into powerful, scalable software applications.",
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    images: [
      {
        url: cryptodashboard,
        title: "Crypto Dashboard",
        description:
          "Advanced cryptocurrency trading dashboard with real-time analytics",
        alt: "Cryptocurrency trading dashboard",
      },
      {
        url: trading,
        title: "Trading Platform",
        description: "Professional trading platform with advanced features",
        alt: "Trading platform interface",
      },
      {
        url: analysis,
        title: "Data Analysis",
        description: "Comprehensive data analysis and visualization tools",
        alt: "Data analysis dashboard",
      },
    ],
  },
  {
    title: "Hardware Solutions",
    description:
      "Innovative hardware designs that bring your concepts to life with cutting-edge technology.",
    icon: <MemoryIcon sx={{ fontSize: 40 }} />,
    images: [
      {
        url: customHardware1,
        title: "Custom Hardware Design",
        description: "Custom printed circuit board design and prototyping",
        alt: "Custom hardware PCB design",
      },
      {
        url: stm,
        title: "Embedded Systems",
        description: "STM microcontroller and microprocessor-based solutions",
        alt: "STM microcontroller development",
      },
      {
        url: selfbalancebot,
        title: "IoT & Robotics",
        description: "Self-balancing bot and IoT device development",
        alt: "Self-balancing robot project",
      },
    ],
  },
  {
    title: "3D Printing",
    description:
      "Advanced 3D printing services for rapid prototyping and custom manufacturing needs.",
    icon: <Print3Icon sx={{ fontSize: 40 }} />,
    images: [
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "3D Printing Services",
        description: "High-quality 3D printing for prototypes and production",
        alt: "3D printer in action",
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "Rapid Prototyping",
        description: "Quick turnaround prototyping for design validation",
        alt: "3D printed prototypes",
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "Custom Manufacturing",
        description: "Custom parts and components for specialized applications",
        alt: "Custom 3D printed parts",
      },
    ],
  },
  {
    title: "Integrated Circuits",
    description:
      "Custom IC design and development for specialized electronic applications.",
    icon: <DeveloperBoardIcon sx={{ fontSize: 40 }} />,
    images: [
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "IC Design",
        description: "Custom integrated circuit design and simulation",
        alt: "Integrated circuit design",
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "ASIC Development",
        description: "Application-specific integrated circuit development",
        alt: "ASIC chip design",
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "FPGA Programming",
        description:
          "Field-programmable gate array development and programming",
        alt: "FPGA development board",
      },
    ],
  },
  {
    title: "Data Science & Machine Learning/Deep Learning",
    description:
      "Custom ML and Deep learning models for business intelligence and predictive analytics",
    icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
    images: [
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "Cloud Infrastructure",
        description: "Scalable cloud infrastructure design and deployment",
        alt: "Cloud infrastructure diagram",
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "DevOps Services",
        description: "Continuous integration and deployment pipelines",
        alt: "DevOps workflow",
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "Microservices Architecture",
        description: "Modern microservices-based application architecture",
        alt: "Microservices architecture diagram",
      },
    ],
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and infrastructure.",
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    images: [
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "Security Audits",
        description:
          "Comprehensive security audits and vulnerability assessments",
        alt: "Cybersecurity audit process",
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "Penetration Testing",
        description: "Ethical hacking and penetration testing services",
        alt: "Penetration testing tools",
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        title: "Security Monitoring",
        description: "24/7 security monitoring and threat detection",
        alt: "Security operations center",
      },
    ],
  },
];

function ServicesOverview() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const handleCardClick = (service) => {
    setCurrentService(service);
    setGalleryOpen(true);
  };

  const handleGalleryClose = () => {
    setGalleryOpen(false);
    setCurrentService(null);
  };

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, lg: 10 },
        px: { xs: 2, sm: 3 },
        backgroundColor: "background.default",
      }}
    >
      <Container sx={{ maxWidth: "none !important" }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: { xs: 4, sm: 6, lg: 8 },
            fontWeight: 700,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
            background: "linear-gradient(45deg, #1976D2, #F50057)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            px: { xs: 1, sm: 0 },
          }}
        >
          Our Expertise
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}
          justifyContent="center"
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={service.title}
              sx={{ maxWidth: { md: "500px" } }}
            >
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * (isMobile ? 0.1 : 0.2),
                }}
                onClick={() => handleCardClick(service)}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: { xs: 2, sm: 4, lg: 6 },
                  boxShadow: {
                    xs: "0 8px 24px rgba(0,0,0,0.05)",
                    lg: "0 12px 32px rgba(0,0,0,0.08)",
                  },
                  cursor: "pointer",
                  "&:hover": {
                    transform: {
                      xs: "none",
                      md: "translateY(-12px) scale(1.02)",
                    },
                    boxShadow: {
                      xs: "0 8px 24px rgba(0,0,0,0.05)",
                      md: "0 20px 40px rgba(25,118,210,0.15)",
                    },
                    "& .service-icon": {
                      transform: { md: "scale(1.1) rotate(5deg)" },
                      backgroundColor: { md: "secondary.main" },
                    },
                    "& .service-title": {
                      color: { md: "primary.main" },
                    },
                  },
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  ...(isDesktop && {
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: "linear-gradient(45deg, #1976D2, #F50057)",
                      borderRadius: "6px 6px 0 0",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                    "&:hover::before": {
                      opacity: 1,
                    },
                  }),
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    textAlign: "center",
                    p: { xs: 2, sm: 3, lg: 4 },
                    position: "relative",
                  }}
                >
                  <IconButton
                    className="service-icon"
                    sx={{
                      mb: { xs: 1.5, sm: 2, lg: 3 },
                      backgroundColor: "primary.main",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                      },
                      width: { xs: 60, sm: 80, lg: 100 },
                      height: { xs: 60, sm: 80, lg: 100 },
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      ...(isDesktop && {
                        "& svg": {
                          fontSize: { md: "48px" },
                        },
                      }),
                    }}
                  >
                    {service.icon}
                  </IconButton>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="service-title"
                    sx={{
                      fontWeight: 600,
                      mb: { xs: 1, sm: 2, lg: 2 },
                      fontSize: { xs: "1.25rem", sm: "1.5rem", lg: "1.75rem" },
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "1rem", lg: "1.1rem" },
                      lineHeight: { xs: 1.6, lg: 1.7 },
                      ...(isDesktop && {
                        fontWeight: 400,
                      }),
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary.main"
                    sx={{
                      mt: 2,
                      fontWeight: 500,
                      opacity: 0.8,
                    }}
                  >
                    Click to view gallery →
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={currentService?.images || []}
        open={galleryOpen}
        onClose={handleGalleryClose}
        initialIndex={0}
      />
    </Box>
  );
}

export default ServicesOverview;
