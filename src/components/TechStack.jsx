import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Code,
  Brush,
  Build,
  Storage,
  Cloud,
  Security,
  Speed,
  Devices,
} from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const MotionCard = motion(Card);

const techCategories = [
  {
    title: "Design & CAD",
    icon: <Brush sx={{ fontSize: 40, color: "#1976D2" }} />,
    tools: [
      { name: "Fusion 360", description: "3D CAD/CAM Design" },
      { name: "Altium Designer", description: "PCB Design" },
      { name: "SolidWorks", description: "Mechanical Design" },
      { name: "AutoCAD", description: "2D/3D Drafting" },
    ],
  },
  {
    title: "Frontend Development",
    icon: <Code sx={{ fontSize: 40, color: "#F50057" }} />,
    tools: [
      { name: "React.js", description: "UI Framework" },
      { name: "Material-UI", description: "Component Library" },
      { name: "Tailwind CSS", description: "Utility CSS" },
      { name: "TypeScript", description: "Type Safety" },
    ],
  },
  {
    title: "Backend & Database",
    icon: <Storage sx={{ fontSize: 40, color: "#1976D2" }} />,
    tools: [
      { name: "Node.js", description: "Runtime Environment" },
      { name: "Python", description: "Backend Development" },
      { name: "MongoDB", description: "NoSQL Database" },
      { name: "PostgreSQL", description: "SQL Database" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud sx={{ fontSize: 40, color: "#F50057" }} />,
    tools: [
      { name: "Firebase", description: "Backend Services" },
      { name: "AWS", description: "Cloud Platform" },
      { name: "Docker", description: "Containerization" },
      { name: "GitHub", description: "Version Control" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <Speed sx={{ fontSize: 40, color: "#1976D2" }} />,
    tools: [
      { name: "TensorFlow", description: "ML Framework" },
      { name: "PyTorch", description: "Deep Learning" },
      { name: "OpenCV", description: "Computer Vision" },
      { name: "Scikit-learn", description: "ML Library" },
    ],
  },
  {
    title: "Hardware & IoT",
    icon: <Devices sx={{ fontSize: 40, color: "#F50057" }} />,
    tools: [
      { name: "Arduino", description: "Microcontroller" },
      { name: "Raspberry Pi", description: "Single Board Computer" },
      { name: "ESP32", description: "IoT Development" },
      { name: "3D Printing", description: "Rapid Prototyping" },
    ],
  },
];

function TechStack() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231976D2' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                mb: 2,
                background: "linear-gradient(45deg, #1976D2, #F50057)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Technology Stack
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: "600px",
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Cutting-edge tools and frameworks we use to bring your ideas to
              life
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3}>
          {techCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MotionCard
                  sx={{
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      background: "rgba(255, 255, 255, 0.95)",
                    },
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          background:
                            "linear-gradient(135deg, rgba(25,118,210,0.1), rgba(245,0,87,0.1))",
                          mr: 2,
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "1.1rem", md: "1.2rem" },
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      {category.tools.map((tool, toolIndex) => (
                        <Box
                          key={toolIndex}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            py: 1,
                            borderBottom:
                              toolIndex < category.tools.length - 1
                                ? "1px solid rgba(0,0,0,0.05)"
                                : "none",
                          }}
                        >
                          <Box>
                            <Typography
                              variant="body1"
                              sx={{
                                fontWeight: 500,
                                fontSize: { xs: "0.9rem", md: "1rem" },
                              }}
                            >
                              {tool.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "text.secondary",
                                fontSize: { xs: "0.8rem", md: "0.85rem" },
                              }}
                            >
                              {tool.description}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background:
                                "linear-gradient(45deg, #1976D2, #F50057)",
                              opacity: 0.7,
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </MotionCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: "center",
              mt: { xs: 4, md: 6 },
              p: 3,
              borderRadius: 3,
              background:
                "linear-gradient(135deg, rgba(25,118,210,0.05), rgba(245,0,87,0.05))",
              border: "1px solid rgba(25,118,210,0.1)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 1,
                fontSize: { xs: "1.1rem", md: "1.2rem" },
              }}
            >
              Ready to Build Something Amazing?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.9rem", md: "1rem" },
                mb: 2,
              }}
            >
              We combine the best tools and technologies to deliver exceptional
              results
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size={isMobile ? "medium" : "large"}
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate("/contact")}
                aria-label="Contact us"
                sx={{
                  borderRadius: "28px",
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  textTransform: "none",
                  boxShadow: "0 8px 16px rgba(25,118,210,0.2)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 20px rgba(25,118,210,0.3)",
                  },
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                Get in Touch
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default TechStack;
