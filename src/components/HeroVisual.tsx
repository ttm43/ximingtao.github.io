import { motion } from "framer-motion";

const nodes = [
  { label: "Input", x: "12%", y: "28%", tone: "blue" },
  { label: "Classify", x: "34%", y: "18%", tone: "teal" },
  { label: "Extract", x: "52%", y: "34%", tone: "blue" },
  { label: "Validate", x: "70%", y: "22%", tone: "amber" },
  { label: "Review", x: "82%", y: "50%", tone: "teal" },
  { label: "System", x: "54%", y: "72%", tone: "slate" },
];

const documents = ["Email", "PDF", "Excel"];

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-grid" />
      <svg className="visual-lines" viewBox="0 0 900 520" role="presentation">
        <path d="M120 150 C260 70 330 90 430 180 S650 300 740 260" />
        <path d="M300 120 C420 210 470 310 500 390" />
        <path d="M620 130 C620 250 650 320 735 390" />
      </svg>
      {nodes.map((node, index) => (
        <motion.div
          className={`system-node ${node.tone}`}
          key={node.label}
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.12, duration: 0.55 }}
        >
          <span />
          {node.label}
        </motion.div>
      ))}
      <div className="document-stack">
        {documents.map((doc, index) => (
          <motion.div
            className="doc-chip"
            key={doc}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: index * 0.45 }}
          >
            {doc}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="review-gate"
        animate={{ opacity: [0.68, 1, 0.68] }}
        transition={{ duration: 3.8, repeat: Infinity }}
      >
        Human Review Gate
      </motion.div>
    </div>
  );
}
