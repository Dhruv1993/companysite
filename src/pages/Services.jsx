import { Box } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MemoryIcon from "@mui/icons-material/Memory";
import Print3Icon from "@mui/icons-material/Print";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ServicesHero from "../components/ServicesHero";
import ServiceDetail from "../components/ServiceDetail";
import SoftwareBg from "../components/svgs/SoftwareBg";
import HardwareBg from "../components/svgs/HardwareBg";
import PrintingBg from "../components/svgs/PrintingBg";
import IcBg from "../components/svgs/IcBg";

// Import optimized hardware images
import customHardware1 from "../assets/optimized/customHardware1.jpg";
import selfbalancebot from "../assets/optimized/selfbalancebot.jpg";
import stm from "../assets/optimized/stm.jpg";

// Import new trading images
import cryptodashboard from "../assets/cryptodashboard.png";
import trading from "../assets/trading.png";
import analysis from "../assets/analysis.png";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We create tailored software solutions that perfectly align with your business needs. From web applications to enterprise systems, our development team delivers scalable, secure, and high-performance software that drives your business forward.",
    features: [
      {
        title: "Crypto Dashboard",
        description:
          "Advanced cryptocurrency trading dashboard with real-time analytics and market insights.",
        image: cryptodashboard,
      },
      {
        title: "Trading Platform",
        description:
          "Professional trading platform with advanced features and automated trading capabilities.",
        image: trading,
      },
      {
        title: "Data Analysis",
        description:
          "Comprehensive data analysis and visualization tools for market research and decision making.",
        image: analysis,
      },
      {
        title: "API Development",
        description: "RESTful APIs and microservices for seamless integration.",
      },
    ],
    image: cryptodashboard,
    icon: CodeIcon,
    Background: SoftwareBg,
  },
  {
    title: "Hardware Solutions",
    description:
      "Our hardware engineering expertise spans from concept to production. We design and develop custom hardware solutions that integrate seamlessly with your existing systems and provide the performance you need.",
    features: [
      {
        title: "PCB Design",
        description: "Custom printed circuit board design and prototyping.",
        image: customHardware1,
      },
      {
        title: "Embedded Systems",
        description: "Microcontroller and microprocessor-based solutions.",
        image: stm,
      },
      {
        title: "IoT Devices",
        description:
          "Connected devices with wireless communication capabilities.",
        image: selfbalancebot,
      },
      {
        title: "Prototyping",
        description: "Rapid prototyping and testing of hardware concepts.",
        image: customHardware1,
      },
    ],
    image: customHardware1,
    icon: MemoryIcon,
    Background: HardwareBg,
  },
  {
    title: "3D Printing Services",
    description:
      "Advanced 3D printing solutions for rapid prototyping and custom manufacturing. We offer high-quality prints using various materials and technologies to bring your designs to life quickly and cost-effectively.",
    features: [
      {
        title: "Rapid Prototyping",
        description: "Quick turnaround prototyping for design validation.",
      },
      {
        title: "Custom Manufacturing",
        description: "Small-batch production of custom parts and components.",
      },
      {
        title: "Multiple Materials",
        description: "PLA, ABS, PETG, and specialty materials available.",
      },
      {
        title: "Design Optimization",
        description: "3D model optimization for better print quality.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    icon: Print3Icon,
    Background: PrintingBg,
  },
  {
    title: "Integrated Circuits",
    description:
      "Custom IC design and development for specialized electronic applications. Our expertise in analog and digital circuit design enables us to create efficient, reliable integrated circuits tailored to your specific requirements.",
    features: [
      {
        title: "Analog Design",
        description: "Custom analog circuits for signal processing.",
      },
      {
        title: "Digital Design",
        description: "Digital logic design and FPGA implementation.",
      },
      {
        title: "Mixed-Signal",
        description: "Combined analog and digital circuit solutions.",
      },
      {
        title: "Testing & Validation",
        description: "Comprehensive testing and validation procedures.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    icon: DeveloperBoardIcon,
    Background: IcBg,
  },
];

function Services() {
  return (
    <Box>
      <ServicesHero />
      {services.map((service, index) => (
        <ServiceDetail key={service.title} {...service} index={index} />
      ))}
    </Box>
  );
}

export default Services;
