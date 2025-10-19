import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FactoryIcon from "@mui/icons-material/Factory";
import SchoolIcon from "@mui/icons-material/School";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlightIcon from "@mui/icons-material/Flight";
import SecurityIcon from "@mui/icons-material/Security";
import { AssessmentOutlined } from "@mui/icons-material";

const MotionBox = motion(Box);

const industries = [
  {
    icon: <LocalHospitalIcon sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }} />,
    title: "Healthcare",
    description: "Digital health solutions and medical technology innovations.",
  },
  {
    icon: <AssessmentOutlined sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }} />,
    title: "Data",
    description:
      "Predictive modeling for business forecasting and optimization",
  },
  {
    icon: <EngineeringIcon sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }} />,
    title: "Mining",
    description: "Smart mining technology and automation systems.",
  },
  {
    icon: <FactoryIcon sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }} />,
    title: "Manufacturing",
    description: "Industry 4.0 and smart manufacturing solutions.",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }} />,
    title: "Education",
    description: "EdTech platforms and learning management systems.",
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }} />,
    title: "Retail",
    description: "E-commerce and retail technology solutions.",
  },
  {
    icon: <FlightIcon sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }} />,
    title: "Transportation",
    description: "Logistics and transportation management systems.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }} />,
    title: "Ndis software",
    description: "National Disability Insurance Scheme and Aged care",
  },
];

function MissionSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 3 },
        background:
          "linear-gradient(135deg, rgba(25,118,210,0.05) 0%, rgba(245,0,87,0.05) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Mobile Layout - Stacked */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: { xs: 2, sm: 3 },
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem" },
              background: "linear-gradient(45deg, #1976D2, #F50057)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Industries We Digitize
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: { xs: 4, sm: 6 },
              color: "text.secondary",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", sm: "1.15rem" },
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Transforming traditional sectors with cutting-edge technology
            solutions that drive innovation, efficiency, and growth.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {industries.map((industry, index) => (
              <Grid item xs={6} key={industry.title}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  sx={{
                    width: { sm: "200px" },
                    height: { xs: "100px", sm: "200px" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: { xs: 1, sm: 2 },
                    backgroundColor: "transparent",
                    border: "2px solid",
                    borderColor: "primary.main",
                    borderRadius: 2,
                    textAlign: "center",
                    mx: "auto",
                    "&:hover": {
                      transform: { xs: "none", sm: "translateY(-8px)" },
                      borderColor: { xs: "primary.main", sm: "secondary.main" },
                      backgroundColor: {
                        xs: "transparent",
                        sm: "rgba(25, 118, 210, 0.05)",
                      },
                      "& .industry-icon": {
                        transform: { xs: "none", sm: "scale(1.1)" },
                        color: { xs: "primary.main", sm: "secondary.main" },
                      },
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box
                    className="industry-icon"
                    sx={{
                      mb: { xs: 0.5, sm: 1.5 },
                      p: { xs: 0.5, sm: 1 },
                      borderRadius: "50%",
                      backgroundColor: "transparent",
                      color: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: { xs: "24px", sm: "48px" },
                      height: { xs: "24px", sm: "48px" },
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {industry.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "0.6rem", sm: "1rem" },
                      lineHeight: 1.2,
                      color: "primary.main",
                    }}
                  >
                    {industry.title}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Desktop Layout - 4 Column Grid */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {/* Mission Statement */}
          <MotionBox
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            sx={{
              textAlign: "center",
              mb: 8,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: "3rem",
                background: "linear-gradient(45deg, #1976D2, #F50057)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Industries We Digitize
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                fontSize: "1.3rem",
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              Transforming traditional sectors with cutting-edge technology
              solutions that drive innovation, efficiency, and growth.
            </Typography>
          </MotionBox>

          {/* 4 Column Grid - Now showing all 8 cards */}
          <Grid container spacing={3} justifyContent="center">
            {industries.map((industry, index) => (
              <Grid item xs={12} md={3} key={industry.title}>
                <MotionBox
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  sx={{
                    width: "250px",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    backgroundColor: "transparent",
                    border: "2px solid",
                    borderColor: "primary.main",
                    borderRadius: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    mx: "auto",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "secondary.main",
                      backgroundColor: "rgba(25, 118, 210, 0.05)",
                      "& .industry-icon": {
                        transform: "scale(1.1)",
                        color: "secondary.main",
                      },
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Icon */}
                  <Box
                    className="industry-icon"
                    sx={{
                      mb: 1.5,
                      p: 1,
                      borderRadius: "50%",
                      backgroundColor: "transparent",
                      color: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "48px",
                      height: "48px",
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {industry.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1rem",
                      lineHeight: 1.2,
                      color: "primary.main",
                    }}
                  >
                    {industry.title}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default MissionSection;
