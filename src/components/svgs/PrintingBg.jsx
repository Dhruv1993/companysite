import { motion } from "framer-motion";

function PrintingBg() {
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
      {/* Nozzle */}
      <path d="M 200 40 L 180 80 L 220 80 Z" fill="#1976D2" opacity="0.25" />
      <rect
        x="190"
        y="80"
        width="20"
        height="10"
        fill="#F50057"
        opacity="0.3"
      />
      {/* Layers */}
      <g stroke="#1976D2" strokeWidth="2.2" opacity="0.35">
        <path d="M 120 110 Q 200 120 280 110" fill="none" />
        <path d="M 120 130 Q 200 140 280 130" fill="none" />
        <path d="M 120 150 Q 200 160 280 150" fill="none" />
        <path d="M 120 170 Q 200 180 280 170" fill="none" />
      </g>
      {/* Build plate */}
      <rect
        x="110"
        y="190"
        width="180"
        height="6"
        rx="3"
        fill="#1976D2"
        opacity="0.3"
      />
    </motion.svg>
  );
}

export default PrintingBg;
