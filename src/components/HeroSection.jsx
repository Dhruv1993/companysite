import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background:
          "linear-gradient(45deg, rgba(25,118,210,0.05) 0%, rgba(245,245,245,1) 100%)",
        minHeight: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" }, // Adjust for different app bar heights
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, sm: 6, md: 8 }, // Add padding for smaller screens
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {" "}
        {/* Adjust container padding */}
        <Box
          sx={{
            maxWidth: "800px",
            position: "relative",
            zIndex: 1,
            mx: "auto", // Center on mobile
            textAlign: { xs: "center", md: "left" }, // Center text on mobile
          }}
        >
          <MotionTypography
            variant="h1"
            sx={{
              fontSize: {
                xs: "2rem", // Mobile
                sm: "2.5rem", // Tablet
                md: "3.5rem", // Desktop
                lg: "4rem", // Large Desktop
              },
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              background: "linear-gradient(45deg, #1976D2, #F50057)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              wordBreak: "break-word", // Prevent text overflow on small screens
              hyphens: "auto",
              px: { xs: 1, sm: 0 }, // Add padding on smallest screens
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovating Tomorrow's Technology Today
          </MotionTypography>

          <MotionTypography
            variant="h5"
            sx={{
              mb: { xs: 3, sm: 4 },
              color: "text.secondary",
              maxWidth: "600px",
              mx: { xs: "auto", md: 0 }, // Center on mobile
              fontSize: {
                xs: "1rem",
                sm: "1.15rem",
                md: "1.25rem",
              },
              lineHeight: 1.6,
              px: { xs: 1, sm: 0 }, // Add padding on smallest screens
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We specialize in custom software, hardware, 3D printing, and
            integrated circuits, bringing your innovative ideas to life.
          </MotionTypography>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" }, // Center button on mobile
            }}
          >
            <Button
              variant="contained"
              size={isMobile ? "medium" : "large"}
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/services")}
              aria-label="Explore our services"
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
                whiteSpace: "nowrap", // Prevent button text from wrapping
              }}
            >
              Explore Our Services
            </Button>
          </MotionBox>
        </Box>
      </Container>

      {/* Tech-themed SVG Background - Desktop/Tablet Version */}
      <MotionBox
        sx={{
          position: "absolute",
          right: { sm: "-15%", md: "-10%", lg: "-5%" },
          top: isMobile ? "5%" : "0",
          width: { sm: "60%", md: "55%", lg: "50%" },
          height: isMobile ? "60%" : "100%",
          zIndex: 0,
          display: { xs: "block", sm: "block" }, // Hide on mobile
          opacity: 0.7,
          pointerEvents: "none",
        }}
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 0.7, scale: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <svg
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          {/* Neural Network Nodes */}
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1976D2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1976D2" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="connectionGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F50057" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F50057" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* IC Circuit Board */}
          <g stroke="#1976D2" strokeWidth="1" opacity="0.4">
            {/* Main IC Package */}
            <rect
              x="120"
              y="80"
              width="200"
              height="120"
              rx="8"
              fill="none"
              stroke="#1976D2"
              strokeWidth="2"
            />
            <rect
              x="130"
              y="90"
              width="180"
              height="100"
              rx="4"
              fill="rgba(25,118,210,0.1)"
            />

            {/* Internal Circuit Traces */}
            <path
              d="M 140 100 L 180 100 L 180 140 L 220 140 L 220 180 L 260 180"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1.5"
            />
            <path
              d="M 140 120 L 200 120 L 200 160 L 240 160 L 240 200 L 280 200"
              fill="none"
              stroke="#F50057"
              strokeWidth="1.5"
            />
            <path
              d="M 140 140 L 160 140 L 160 180 L 200 180 L 200 200 L 240 200"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1.5"
            />

            {/* Circuit Nodes */}
            <circle cx="140" cy="100" r="3" fill="#1976D2" />
            <circle cx="180" cy="100" r="2" fill="#1976D2" />
            <circle cx="180" cy="140" r="2" fill="#1976D2" />
            <circle cx="220" cy="140" r="2" fill="#1976D2" />
            <circle cx="220" cy="180" r="2" fill="#1976D2" />
            <circle cx="260" cy="180" r="3" fill="#1976D2" />

            <circle cx="140" cy="120" r="3" fill="#F50057" />
            <circle cx="200" cy="120" r="2" fill="#F50057" />
            <circle cx="200" cy="160" r="2" fill="#F50057" />
            <circle cx="240" cy="160" r="2" fill="#F50057" />
            <circle cx="240" cy="200" r="2" fill="#F50057" />
            <circle cx="280" cy="200" r="3" fill="#F50057" />

            {/* Pin Connections */}
            <line
              x1="120"
              y1="90"
              x2="110"
              y2="90"
              stroke="#1976D2"
              strokeWidth="2"
            />
            <line
              x1="120"
              y1="110"
              x2="110"
              y2="110"
              stroke="#1976D2"
              strokeWidth="2"
            />
            <line
              x1="120"
              y1="130"
              x2="110"
              y2="130"
              stroke="#1976D2"
              strokeWidth="2"
            />
            <line
              x1="120"
              y1="150"
              x2="110"
              y2="150"
              stroke="#1976D2"
              strokeWidth="2"
            />
            <line
              x1="120"
              y1="170"
              x2="110"
              y2="170"
              stroke="#1976D2"
              strokeWidth="2"
            />
            <line
              x1="120"
              y1="190"
              x2="110"
              y2="190"
              stroke="#1976D2"
              strokeWidth="2"
            />

            <line
              x1="320"
              y1="90"
              x2="330"
              y2="90"
              stroke="#F50057"
              strokeWidth="2"
            />
            <line
              x1="320"
              y1="110"
              x2="330"
              y2="110"
              stroke="#F50057"
              strokeWidth="2"
            />
            <line
              x1="320"
              y1="130"
              x2="330"
              y2="130"
              stroke="#F50057"
              strokeWidth="2"
            />
            <line
              x1="320"
              y1="150"
              x2="330"
              y2="150"
              stroke="#F50057"
              strokeWidth="2"
            />
            <line
              x1="320"
              y1="170"
              x2="330"
              y2="170"
              stroke="#F50057"
              strokeWidth="2"
            />
            <line
              x1="320"
              y1="190"
              x2="330"
              y2="190"
              stroke="#F50057"
              strokeWidth="2"
            />
          </g>

          {/* Biological Neurons */}
          <g opacity="0.6">
            {/* Neuron 1 */}
            <circle cx="450" cy="100" r="12" fill="url(#nodeGradient)" />
            <path
              d="M 450 88 Q 480 70 510 88 T 570 100"
              fill="none"
              stroke="#1976D2"
              strokeWidth="2"
            />
            <path
              d="M 450 112 Q 480 130 510 112 T 570 100"
              fill="none"
              stroke="#1976D2"
              strokeWidth="2"
            />
            <circle cx="570" cy="100" r="8" fill="url(#connectionGradient)" />

            {/* Neuron 2 */}
            <circle cx="450" cy="160" r="10" fill="url(#nodeGradient)" />
            <path
              d="M 450 150 Q 480 130 510 150 T 570 160"
              fill="none"
              stroke="#F50057"
              strokeWidth="2"
            />
            <path
              d="M 450 170 Q 480 190 510 170 T 570 160"
              fill="none"
              stroke="#F50057"
              strokeWidth="2"
            />
            <circle cx="570" cy="160" r="6" fill="url(#connectionGradient)" />

            {/* Neuron 3 */}
            <circle cx="450" cy="220" r="11" fill="url(#nodeGradient)" />
            <path
              d="M 450 209 Q 480 190 510 209 T 570 220"
              fill="none"
              stroke="#1976D2"
              strokeWidth="2"
            />
            <path
              d="M 450 231 Q 480 250 510 231 T 570 220"
              fill="none"
              stroke="#1976D2"
              strokeWidth="2"
            />
            <circle cx="570" cy="220" r="7" fill="url(#connectionGradient)" />

            {/* Dendrites */}
            <path
              d="M 450 100 Q 430 80 410 100 T 390 120"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1"
              opacity="0.5"
            />
            <path
              d="M 450 100 Q 430 120 410 100 T 390 80"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1"
              opacity="0.5"
            />
            <path
              d="M 450 160 Q 430 140 410 160 T 390 180"
              fill="none"
              stroke="#F50057"
              strokeWidth="1"
              opacity="0.5"
            />
            <path
              d="M 450 160 Q 430 180 410 160 T 390 140"
              fill="none"
              stroke="#F50057"
              strokeWidth="1"
              opacity="0.5"
            />
            <path
              d="M 450 220 Q 430 200 410 220 T 390 240"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1"
              opacity="0.5"
            />
            <path
              d="M 450 220 Q 430 240 410 220 T 390 200"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1"
              opacity="0.5"
            />
          </g>

          {/* Code Blocks */}
          <g opacity="0.4">
            <rect
              x="550"
              y="80"
              width="120"
              height="80"
              rx="4"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1"
            />
            <text
              x="560"
              y="100"
              fontSize="10"
              fill="#1976D2"
              fontFamily="monospace"
            >
              function AI() {"{"}
            </text>
            <text
              x="570"
              y="115"
              fontSize="10"
              fill="#F50057"
              fontFamily="monospace"
            >
              return "future";
            </text>
            <text
              x="560"
              y="130"
              fontSize="10"
              fill="#1976D2"
              fontFamily="monospace"
            >
              {"}"}
            </text>

            <rect
              x="550"
              y="200"
              width="120"
              height="80"
              rx="4"
              fill="none"
              stroke="#F50057"
              strokeWidth="1"
            />
            <text
              x="560"
              y="220"
              fontSize="10"
              fill="#F50057"
              fontFamily="monospace"
            >
              class Innovation {"{"}
            </text>
            <text
              x="570"
              y="235"
              fontSize="10"
              fill="#1976D2"
              fontFamily="monospace"
            >
              create() {"{"}
            </text>
            <text
              x="580"
              y="250"
              fontSize="10"
              fill="#F50057"
              fontFamily="monospace"
            >
              return true;
            </text>
            <text
              x="570"
              y="265"
              fontSize="10"
              fill="#1976D2"
              fontFamily="monospace"
            >
              {"}"}
            </text>
          </g>

          {/* Circuit Board Elements */}
          <g stroke="#1976D2" strokeWidth="2" opacity="0.3">
            <path d="M 650 120 L 700 120 L 700 180 L 650 180" fill="none" />
            <path d="M 650 140 L 700 140" fill="none" />
            <path d="M 650 160 L 700 160" fill="none" />
            <circle cx="660" cy="130" r="3" fill="#1976D2" />
            <circle cx="690" cy="170" r="3" fill="#1976D2" />
          </g>

          {/* Floating Tech Icons */}
          <g opacity="0.5">
            <circle cx="150" cy="350" r="15" fill="url(#connectionGradient)" />
            <circle cx="250" cy="320" r="12" fill="url(#connectionGradient)" />
            <circle cx="350" cy="380" r="10" fill="url(#connectionGradient)" />
            <circle cx="450" cy="340" r="14" fill="url(#connectionGradient)" />
            <circle cx="550" cy="370" r="11" fill="url(#connectionGradient)" />
            <circle cx="650" cy="320" r="13" fill="url(#connectionGradient)" />
          </g>

          {/* Data Flow Lines */}
          <g stroke="#F50057" strokeWidth="1" opacity="0.2">
            <path d="M 100 400 Q 200 350 300 400 T 500 380" fill="none" />
            <path d="M 150 450 Q 250 400 350 450 T 550 430" fill="none" />
            <path d="M 200 420 Q 300 370 400 420 T 600 400" fill="none" />
          </g>
        </svg>
      </MotionBox>

      {/* Tech-themed SVG Background - Mobile Version */}
      <MotionBox
        sx={{
          position: "absolute",
          right: "-20%",
          top: "15%",
          width: "70%",
          height: "70%",
          zIndex: 0,
          display: { xs: "block", sm: "none" }, // Show only on mobile
          opacity: 0.5,
          pointerEvents: "none",
        }}
        initial={{ opacity: 0, scale: 0.8, x: 30 }}
        animate={{ opacity: 0.5, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <svg
          viewBox="0 0 400 300"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
        >
          {/* Mobile IC Circuit */}
          <g stroke="#1976D2" strokeWidth="1" opacity="0.4">
            <rect
              x="60"
              y="40"
              width="100"
              height="60"
              rx="4"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1.5"
            />
            <rect
              x="70"
              y="50"
              width="80"
              height="40"
              rx="2"
              fill="rgba(25,118,210,0.1)"
            />

            {/* Simple Circuit Traces */}
            <path
              d="M 80 60 L 120 60 L 120 80 L 140 80"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1"
            />
            <path
              d="M 80 80 L 110 80 L 110 100 L 140 100"
              fill="none"
              stroke="#F50057"
              strokeWidth="1"
            />

            {/* Circuit Nodes */}
            <circle cx="80" cy="60" r="2" fill="#1976D2" />
            <circle cx="120" cy="60" r="1.5" fill="#1976D2" />
            <circle cx="120" cy="80" r="1.5" fill="#1976D2" />
            <circle cx="140" cy="80" r="2" fill="#1976D2" />

            <circle cx="80" cy="80" r="2" fill="#F50057" />
            <circle cx="110" cy="80" r="1.5" fill="#F50057" />
            <circle cx="110" cy="100" r="1.5" fill="#F50057" />
            <circle cx="140" cy="100" r="2" fill="#F50057" />

            {/* Simple Pins */}
            <line
              x1="60"
              y1="50"
              x2="50"
              y2="50"
              stroke="#1976D2"
              strokeWidth="1.5"
            />
            <line
              x1="60"
              y1="70"
              x2="50"
              y2="70"
              stroke="#1976D2"
              strokeWidth="1.5"
            />
            <line
              x1="160"
              y1="50"
              x2="170"
              y2="50"
              stroke="#F50057"
              strokeWidth="1.5"
            />
            <line
              x1="160"
              y1="70"
              x2="170"
              y2="70"
              stroke="#F50057"
              strokeWidth="1.5"
            />
          </g>

          {/* Mobile Neurons */}
          <g opacity="0.5">
            <circle cx="250" cy="60" r="8" fill="url(#nodeGradient)" />
            <path
              d="M 250 52 Q 270 40 290 52 T 330 60"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1.5"
            />
            <circle cx="330" cy="60" r="5" fill="url(#connectionGradient)" />

            <circle cx="250" cy="120" r="6" fill="url(#nodeGradient)" />
            <path
              d="M 250 114 Q 270 100 290 114 T 330 120"
              fill="none"
              stroke="#F50057"
              strokeWidth="1.5"
            />
            <circle cx="330" cy="120" r="4" fill="url(#connectionGradient)" />

            <circle cx="250" cy="180" r="7" fill="url(#nodeGradient)" />
            <path
              d="M 250 173 Q 270 160 290 173 T 330 180"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1.5"
            />
            <circle cx="330" cy="180" r="4.5" fill="url(#connectionGradient)" />
          </g>

          {/* Mobile Code Blocks */}
          <g opacity="0.3">
            <rect
              x="280"
              y="200"
              width="80"
              height="50"
              rx="3"
              fill="none"
              stroke="#1976D2"
              strokeWidth="1"
            />
            <text
              x="285"
              y="215"
              fontSize="8"
              fill="#1976D2"
              fontFamily="monospace"
            ></text>
            <text
              x="290"
              y="230"
              fontSize="8"
              fill="#F50057"
              fontFamily="monospace"
            >
              return true;
            </text>
            <text
              x="285"
              y="245"
              fontSize="8"
              fill="#1976D2"
              fontFamily="monospace"
            >
              {"}"}
            </text>
          </g>

          {/* Mobile Floating Elements */}
          <g opacity="0.4">
            <circle cx="80" cy="200" r="6" fill="url(#connectionGradient)" />
            <circle cx="120" cy="220" r="4" fill="url(#connectionGradient)" />
            <circle cx="160" cy="200" r="5" fill="url(#connectionGradient)" />
          </g>

          {/* Mobile Data Flow */}
          <g stroke="#F50057" strokeWidth="1" opacity="0.2">
            <path d="M 50 250 Q 100 230 150 250 T 250 240" fill="none" />
            <path d="M 60 270 Q 110 250 160 270 T 260 260" fill="none" />
          </g>
        </svg>
      </MotionBox>
    </Box>
  );
}

export default HeroSection;
