import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import MissionSection from "../components/MissionSection";
import TechStack from "../components/TechStack";
import SEO from "../components/SEO";
import { config } from "../config/env";

function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.company.name,
    description: config.company.description,
    url: "https://softpeaklabs.com.au",
    logo: "https://softpeaklabs.com.au/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: config.contact.phone,
      contactType: "Customer Service",
      email: config.contact.email,
      areaServed: "AU",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: config.contact.location,
      addressCountry: "AU",
    },
    sameAs: [],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
    },
  };

  return (
    <Box>
      <SEO
        title="Home"
        description="Softpeak Labs specializes in custom software development, hardware solutions, 3D printing services, and integrated circuit design. Innovating tomorrow's technology today."
        path="/"
        keywords="custom software development, hardware solutions, 3D printing, integrated circuits, PCB design, embedded systems, IoT devices, Australia, Melbourne, technology solutions"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <HeroSection />
      <MissionSection />
      <ServicesOverview />
      <TechStack />
    </Box>
  );
}

export default Home;
