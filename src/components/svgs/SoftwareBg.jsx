import { motion } from "framer-motion";

function SoftwareBg() {
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
      {/* Code panel */}
      <rect
        x="40"
        y="30"
        width="220"
        height="150"
        rx="8"
        fill="none"
        stroke="#1976D2"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <rect
        x="50"
        y="50"
        width="200"
        height="10"
        rx="2"
        fill="#1976D2"
        opacity="0.25"
      />
      <rect
        x="50"
        y="70"
        width="170"
        height="8"
        rx="2"
        fill="#F50057"
        opacity="0.3"
      />
      <rect
        x="50"
        y="86"
        width="140"
        height="8"
        rx="2"
        fill="#1976D2"
        opacity="0.3"
      />
      <rect
        x="50"
        y="102"
        width="180"
        height="8"
        rx="2"
        fill="#1976D2"
        opacity="0.25"
      />
      <rect
        x="50"
        y="118"
        width="120"
        height="8"
        rx="2"
        fill="#F50057"
        opacity="0.28"
      />

      {/* Brackets */}
      <path
        d="M290 40 q-12 0 -12 12 v96 q0 12 12 12"
        fill="none"
        stroke="#F50057"
        strokeWidth="2"
        opacity="0.35"
      />
      <path
        d="M310 40 q12 0 12 12 v96 q0 12 -12 12"
        fill="none"
        stroke="#F50057"
        strokeWidth="2"
        opacity="0.35"
      />

      {/* Nodes and connections */}
      <g stroke="#1976D2" strokeWidth="1.5" opacity="0.35">
        <line x1="80" y1="200" x2="160" y2="230" />
        <line x1="160" y1="230" x2="240" y2="200" />
        <line x1="240" y1="200" x2="320" y2="230" />
      </g>
      <circle cx="80" cy="200" r="4" fill="#1976D2" opacity="0.35" />
      <circle cx="160" cy="230" r="4" fill="#F50057" opacity="0.35" />
      <circle cx="240" cy="200" r="4" fill="#1976D2" opacity="0.35" />
      <circle cx="320" cy="230" r="4" fill="#F50057" opacity="0.35" />
    </motion.svg>
  );
}

export default SoftwareBg;
