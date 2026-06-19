export const profile = {
  name: "Ximing Tao",
  role: "AI Engineer",
  headline: "Building reliable AI systems for real-world business workflows.",
  focus: [
    "Workflow Automation",
    "Document Intelligence",
    "RAG Systems",
    "Human-in-the-loop AI",
  ],
  links: {
    email: "mailto:",
    github: "https://github.com/ttm43",
  },
};

export const metrics = [
  {
    value: "70%",
    label: "Eligible order automation",
    detail: "High-volume business requests routed through structured AI + rules workflows.",
  },
  {
    value: "80%+",
    label: "Inference cost reduction",
    detail: "Reduced model spend through routing, prompt control, and selective generation.",
  },
  {
    value: "70%",
    label: "Reduction in manual legal review",
    detail: "Human review reserved for uncertainty, exceptions, and approval checkpoints.",
  },
];

export const cases = [
  {
    id: "order-processing",
    number: "01",
    title: "Order Processing System",
    shortTitle: "Order Automation",
    summary:
      "A workflow system that turns unstructured business requests into validated ERP-ready actions.",
    outcome: "70% eligible order automation",
    href: "case-studies/order-processing/",
    tags: ["Email", "PDF", "Excel", "Validation", "ERP"],
    problemTitle: "Manual handling does not scale.",
    problemItems: ["Email", "PDF", "Excel", "Missing Information", "Wrong Price", "MOQ Issue"],
    flow: ["Email", "Classification", "Extraction", "Validation", "Review", "ERP"],
    ai: ["Classification", "Extraction", "Ranking", "Summarisation", "Draft Generation"],
    deterministic: ["Validation", "State Transition", "Approval", "CSV Generation", "External Integration"],
    architecture:
      "The system separates probabilistic understanding from deterministic execution. AI proposes structured intent; rules, state machines, and human approval decide whether anything can move forward.",
  },
  {
    id: "controlled-knowledge-system",
    number: "02",
    title: "Controlled Knowledge System",
    shortTitle: "Legal Knowledge",
    summary:
      "A legal knowledge workflow designed around verified retrieval, confidence thresholds, and escalation.",
    outcome: "70% reduction in manual legal review",
    href: "case-studies/controlled-knowledge-system/",
    tags: ["Intent", "Topic", "Jurisdiction", "Confidence", "Escalation"],
    problemTitle: "Hallucination is the product risk.",
    problemItems: ["Hallucination", "Unsupported Answer", "Wrong Jurisdiction", "Low Confidence"],
    flow: ["Question", "Structured Understanding", "Approved Knowledge", "Response"],
    ai: ["Intent Detection", "Topic Mapping", "Question Rewriting", "Answer Drafting"],
    deterministic: ["Source Control", "Policy Gate", "Confidence Threshold", "Human Fallback"],
    architecture:
      "The core design decision is to treat uncertainty as a routing signal. If retrieval, jurisdiction, or confidence is weak, the system escalates instead of improvising.",
  },
  {
    id: "document-intelligence",
    number: "03",
    title: "Document Intelligence",
    shortTitle: "Document AI",
    summary:
      "A document pipeline built before LLM reasoning: OCR, layout detection, extraction, and validation.",
    outcome: "15,000 documents processed for dataset construction",
    href: "case-studies/document-intelligence/",
    tags: ["OCR", "Layout", "Detection", "Extraction", "Validation"],
    problemTitle: "Before LLMs, the document has to become data.",
    problemItems: ["OCR", "Layout", "Detection", "Extraction", "Validation"],
    flow: ["Document", "OCR", "Layout Understanding", "Extraction", "Validation", "Dataset"],
    ai: ["Layout Detection", "Entity Extraction", "Document Ranking", "Field Suggestions"],
    deterministic: ["Schema Validation", "Quality Checks", "Batch Control", "Cost Routing"],
    architecture:
      "The important work happens before generation: reliable OCR, layout-aware parsing, validation, and cost-aware routing make downstream AI useful instead of noisy.",
  },
];

export const resume = {
  experience: [
    {
      title: "AI Systems Engineering",
      meta: "Workflow automation, document intelligence, and applied LLM systems",
      points: [
        "Designed AI-assisted business workflows that combine unstructured input handling, deterministic validation, and human approval.",
        "Built document processing pipelines covering OCR, layout understanding, extraction, validation, and dataset preparation.",
        "Reduced inference cost through model routing, prompt constraints, batching, and selective generation.",
      ],
    },
    {
      title: "Applied AI Delivery",
      meta: "Forward-deployed style implementation across ambiguous business processes",
      points: [
        "Translated unclear operational processes into auditable system flows and exception handling rules.",
        "Implemented human-in-the-loop controls for uncertainty, approval, and escalation.",
        "Focused on deployable systems rather than isolated model demos.",
      ],
    },
  ],
  skills: [
    "LLM workflow design",
    "RAG architecture",
    "OCR and document parsing",
    "Human-in-the-loop AI",
    "Python",
    "TypeScript",
    "Validation systems",
    "Cost optimisation",
    "System integration",
  ],
  education: [
    "Education details available in the PDF resume copy.",
  ],
};
