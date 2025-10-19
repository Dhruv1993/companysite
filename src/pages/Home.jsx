import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import MissionSection from "../components/MissionSection";
import TechStack from "../components/TechStack";

function Home() {
  return (
    <Box>
      <HeroSection />
      <MissionSection />
      <ServicesOverview />
      <TechStack />
    </Box>
  );
}

export default Home;
