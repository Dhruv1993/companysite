import { motion } from "framer-motion";

function HardwareBg() {
  return (
    <motion.svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      initial={{ opacity: 0.15 }}
      animate={{ opacity: [0.2, 0.3, 0.2], y: [0, -6, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {/* IC outline */}
      <rect
        x="80"
        y="60"
        width="180"
        height="120"
        rx="8"
        fill="none"
        stroke="#1976D2"
        strokeWidth="1.5"
        opacity="0.6"
      />
      {/* Pins */}
      <g stroke="#F50057" strokeWidth="2.2" opacity="0.35">
        <line x1="80" y1="70" x2="70" y2="70" />
        <line x1="80" y1="90" x2="70" y2="90" />
        <line x1="80" y1="110" x2="70" y2="110" />
        <line x1="80" y1="130" x2="70" y2="130" />
        <line x1="80" y1="150" x2="70" y2="150" />
        <line x1="260" y1="70" x2="270" y2="70" />
        <line x1="260" y1="90" x2="270" y2="90" />
        <line x1="260" y1="110" x2="270" y2="110" />
        <line x1="260" y1="130" x2="270" y2="130" />
        <line x1="260" y1="150" x2="270" y2="150" />
      </g>
      {/* Traces */}
      <g stroke="#1976D2" strokeWidth="1.8" opacity="0.35" fill="none">
        <path d="M 100 80 L 140 80 L 140 120 L 200 120 L 200 160 L 240 160" />
        <path d="M 100 140 L 160 140 L 160 100 L 220 100 L 220 140 L 240 140" />
      </g>
    </motion.svg>
  );
}

export default HardwareBg;
