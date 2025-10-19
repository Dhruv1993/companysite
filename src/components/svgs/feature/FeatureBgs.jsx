import { motion } from "framer-motion";

const floatAnim = {
  initial: { opacity: 0.2 },
  animate: { opacity: [0.35, 0.5, 0.35], y: [0, -6, 0] },
  transition: { duration: 9, repeat: Infinity, ease: "easeInOut" },
};

export function CodeFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <rect
        x="10"
        y="10"
        width="140"
        height="90"
        rx="8"
        fill="none"
        stroke="#1976D2"
        strokeWidth="2"
        opacity="0.7"
      />
      <path
        d="M28 40 L44 56 L28 72"
        fill="none"
        stroke="#F50057"
        strokeWidth="3"
        opacity="0.6"
      />
      <path
        d="M70 40 L54 56 L70 72"
        fill="none"
        stroke="#F50057"
        strokeWidth="3"
        opacity="0.6"
      />
      <rect
        x="20"
        y="86"
        width="120"
        height="8"
        rx="4"
        fill="#1976D2"
        opacity="0.35"
      />
    </motion.svg>
  );
}

export function MobileFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <rect
        x="40"
        y="10"
        width="60"
        height="110"
        rx="10"
        fill="none"
        stroke="#1976D2"
        strokeWidth="2.5"
        opacity="0.7"
      />
      <rect
        x="48"
        y="24"
        width="44"
        height="70"
        rx="6"
        fill="#1976D2"
        opacity="0.18"
      />
      <circle cx="70" cy="102" r="4" fill="#F50057" opacity="0.8" />
    </motion.svg>
  );
}

export function CloudFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <path
        d="M40 80 q15-25 40-10 q10-25 35-12 q25-3 30 22 q18 2 18 18 q0 18-24 18 H50 q-22 0-22-18 q0-14 12-18z"
        fill="#1976D2"
        opacity="0.18"
      />
      <path d="M50 100 H150" stroke="#F50057" strokeWidth="3" opacity="0.6" />
      <path d="M60 110 H140" stroke="#1976D2" strokeWidth="3" opacity="0.5" />
    </motion.svg>
  );
}

export function ApiFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <rect
        x="20"
        y="20"
        width="110"
        height="70"
        rx="6"
        fill="none"
        stroke="#1976D2"
        strokeWidth="2"
        opacity="0.7"
      />
      <text
        x="30"
        y="50"
        fontSize="16"
        fill="#1976D2"
        opacity="0.7"
        fontFamily="monospace"
      >
        GET /api
      </text>
      <rect
        x="30"
        y="60"
        width="80"
        height="10"
        rx="2"
        fill="#F50057"
        opacity="0.5"
      />
      <circle cx="150" cy="55" r="10" fill="#1976D2" opacity="0.35" />
      <path d="M140 55 h-10" stroke="#1976D2" strokeWidth="3" opacity="0.7" />
    </motion.svg>
  );
}

export function PcbFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <rect
        x="20"
        y="30"
        width="120"
        height="80"
        rx="8"
        fill="none"
        stroke="#1976D2"
        strokeWidth="2"
        opacity="0.7"
      />
      <g stroke="#1976D2" strokeWidth="2.2" opacity="0.6" fill="none">
        <path d="M 30 40 L 60 40 L 60 70 L 100 70 L 100 90 L 130 90" />
        <path d="M 30 80 L 70 80 L 70 60 L 110 60 L 110 80 L 130 80" />
      </g>
      <g stroke="#F50057" strokeWidth="3" opacity="0.5">
        <line x1="20" y1="45" x2="10" y2="45" />
        <line x1="20" y1="65" x2="10" y2="65" />
        <line x1="140" y1="45" x2="150" y2="45" />
        <line x1="140" y1="65" x2="150" y2="65" />
      </g>
    </motion.svg>
  );
}

export function EmbeddedFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <rect
        x="40"
        y="40"
        width="100"
        height="60"
        rx="6"
        fill="none"
        stroke="#1976D2"
        strokeWidth="2"
        opacity="0.7"
      />
      <circle cx="55" cy="55" r="4" fill="#F50057" opacity="0.8" />
      <rect
        x="60"
        y="52"
        width="60"
        height="8"
        rx="3"
        fill="#1976D2"
        opacity="0.35"
      />
      <rect
        x="60"
        y="68"
        width="50"
        height="6"
        rx="3"
        fill="#1976D2"
        opacity="0.3"
      />
    </motion.svg>
  );
}

export function IotFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <circle cx="70" cy="70" r="10" fill="#1976D2" opacity="0.35" />
      <path
        d="M70 70 m-15 0 a15 15 0 1 0 30 0 a15 15 0 1 0 -30 0"
        fill="none"
        stroke="#F50057"
        strokeWidth="3"
        opacity="0.6"
      />
      <path
        d="M70 70 m-25 0 a25 25 0 1 0 50 0 a25 25 0 1 0 -50 0"
        fill="none"
        stroke="#1976D2"
        strokeWidth="2.5"
        opacity="0.45"
      />
    </motion.svg>
  );
}

export function ProtoFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <rect
        x="50"
        y="30"
        width="80"
        height="80"
        rx="6"
        fill="#1976D2"
        opacity="0.18"
      />
      <path
        d="M50 90 L90 50 L130 90"
        fill="none"
        stroke="#F50057"
        strokeWidth="3"
        opacity="0.6"
      />
      <circle cx="90" cy="50" r="4" fill="#F50057" opacity="0.8" />
    </motion.svg>
  );
}

export function LayersFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <path d="M40 50 L100 30 L160 50 L100 70 Z" fill="#1976D2" opacity="0.2" />
      <path
        d="M40 70 L100 50 L160 70 L100 90 Z"
        fill="#F50057"
        opacity="0.18"
      />
      <path
        d="M40 90 L100 70 L160 90 L100 110 Z"
        fill="#1976D2"
        opacity="0.16"
      />
    </motion.svg>
  );
}

export function MaterialsFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <circle cx="70" cy="60" r="16" fill="#1976D2" opacity="0.25" />
      <circle cx="110" cy="80" r="14" fill="#F50057" opacity="0.25" />
      <circle cx="90" cy="90" r="12" fill="#1976D2" opacity="0.25" />
    </motion.svg>
  );
}

export function OptimizeFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <path
        d="M40 90 Q80 40 120 60 T 160 50"
        fill="none"
        stroke="#1976D2"
        strokeWidth="3"
        opacity="0.65"
      />
      <circle cx="80" cy="40" r="5" fill="#F50057" opacity="0.8" />
      <circle cx="120" cy="60" r="5" fill="#F50057" opacity="0.8" />
    </motion.svg>
  );
}

export function AnalogFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <path
        d="M30 80 L60 80 L65 70 L80 90 L95 60 L110 100 L130 70 L160 90"
        fill="none"
        stroke="#1976D2"
        strokeWidth="3"
        opacity="0.65"
      />
    </motion.svg>
  );
}

export function DigitalFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <path
        d="M40 60 H80 V100 H120 V60 H160"
        fill="none"
        stroke="#F50057"
        strokeWidth="3"
        opacity="0.65"
      />
    </motion.svg>
  );
}

export function MixedFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <path d="M30 80 L80 80" stroke="#1976D2" strokeWidth="3" opacity="0.65" />
      <path
        d="M80 80 H120 V60 H150"
        fill="none"
        stroke="#F50057"
        strokeWidth="3"
        opacity="0.65"
      />
    </motion.svg>
  );
}

export function TestingFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      <circle cx="60" cy="70" r="12" fill="#1976D2" opacity="0.25" />
      <path d="M75 70 H150" stroke="#F50057" strokeWidth="3" opacity="0.65" />
      <path d="M75 90 H140" stroke="#1976D2" strokeWidth="3" opacity="0.5" />
    </motion.svg>
  );
}

export function RapidProtoFeatureBg() {
  return (
    <motion.svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      {...floatAnim}
      aria-hidden
    >
      {/* Stopwatch */}
      <circle
        cx="70"
        cy="60"
        r="24"
        fill="none"
        stroke="#1976D2"
        strokeWidth="3"
        opacity="0.8"
      />
      <rect
        x="66"
        y="28"
        width="8"
        height="8"
        rx="2"
        fill="#F50057"
        opacity="0.9"
      />
      <path d="M70 60 L70 42" stroke="#1976D2" strokeWidth="3" opacity="0.8" />
      <path d="M70 60 L84 66" stroke="#F50057" strokeWidth="3" opacity="0.9" />
      {/* Lightning bolt */}
      <path
        d="M120 40 L110 70 L126 70 L116 100 L150 60 L134 60 Z"
        fill="#F50057"
        opacity="0.7"
      />
      {/* Wireframe cube */}
      <g stroke="#1976D2" strokeWidth="2.2" opacity="0.7" fill="none">
        <rect x="40" y="90" width="40" height="30" />
        <rect x="55" y="80" width="40" height="30" />
        <line x1="40" y1="90" x2="55" y2="80" />
        <line x1="80" y1="90" x2="95" y2="80" />
        <line x1="80" y1="120" x2="95" y2="110" />
        <line x1="40" y1="120" x2="55" y2="110" />
      </g>
    </motion.svg>
  );
}

export function featureBgForTitle(title) {
  const t = (title || "").toLowerCase();
  if (t.includes("web")) return CodeFeatureBg;
  if (t.includes("mobile")) return MobileFeatureBg;
  if (t.includes("enterprise")) return CloudFeatureBg;
  if (t.includes("api")) return ApiFeatureBg;

  if (t.includes("pcb")) return PcbFeatureBg;
  if (t.includes("embedded")) return EmbeddedFeatureBg;
  if (t.includes("iot")) return IotFeatureBg;
  if (t.includes("protot")) return ProtoFeatureBg;

  if (t.includes("rapid")) return RapidProtoFeatureBg;
  if (t.includes("custom")) return ProtoFeatureBg;
  if (t.includes("material")) return MaterialsFeatureBg;
  if (t.includes("optim")) return OptimizeFeatureBg;

  if (t.includes("analog")) return AnalogFeatureBg;
  if (t.includes("digital")) return DigitalFeatureBg;
  if (t.includes("mixed")) return MixedFeatureBg;
  if (t.includes("test")) return TestingFeatureBg;

  // fallback
  return CodeFeatureBg;
}
