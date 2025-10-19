import { motion } from "framer-motion";

function IcBg() {
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
      {/* IC package */}
      <rect
        x="100"
        y="70"
        width="200"
        height="120"
        rx="10"
        fill="none"
        stroke="#1976D2"
        strokeWidth="2"
        opacity="0.6"
      />
      {/* Die */}
      <rect
        x="160"
        y="110"
        width="80"
        height="40"
        rx="4"
        fill="#1976D2"
        opacity="0.25"
      />
      {/* Bond wires */}
      <g stroke="#F50057" strokeWidth="2" opacity="0.35" fill="none">
        <path d="M 160 110 Q 150 100 140 100" />
        <path d="M 240 110 Q 250 100 260 100" />
        <path d="M 160 150 Q 150 160 140 160" />
        <path d="M 240 150 Q 250 160 260 160" />
      </g>
      {/* Grid */}
      <g stroke="#1976D2" strokeWidth="1.2" opacity="0.18">
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={120 + i * 30}
            y1={80}
            x2={120 + i * 30}
            y2={180}
          />
        ))}
        {Array.from({ length: 3 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1={110}
            y1={100 + i * 30}
            x2={290}
            y2={100 + i * 30}
          />
        ))}
      </g>
    </motion.svg>
  );
}

export default IcBg;
