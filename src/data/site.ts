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
    email: "mailto:directortao@gmail.com",
    github: "https://github.com/ttm43",
    resumePdf: "XimingTao_resume.pdf",
  },
};

export const intro = {
  title: "I build practical AI systems that solve real business problems.",
  body:
    "I started in NLP and machine learning, working on automated English essay scoring. After moving to Australia, I worked on OCR and document intelligence systems. Over time I became more focused on integrating AI into real business workflows rather than only improving model performance.",
  timeline: [
    "NLP and automated essay scoring",
    "OCR and document intelligence systems",
    "Controlled legal knowledge retrieval",
    "Sales order workflow automation",
    "Clinical assessment and patient-report applications",
  ],
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
  summary:
    "AI Engineer with 5 years of experience building applied AI systems across workflow automation, document intelligence, RAG, structured extraction, and LLM evaluation. Strong at turning ambiguous business processes into structured rules, validation workflows, and deployable automation pipelines.",
  experience: [
    {
      title: "AI & Automation Engineer",
      meta: "Xperience, Melbourne | Oct 2025 - May 2026",
      points: [
        "Architected and delivered a cloud-hosted sales order automation platform using Power Automate triggers, Azure Container Apps, Azure Service Bus, SharePoint, PostgreSQL, and SFTP handoff.",
        "Achieved around 70% fully automatic processing for eligible orders in production, saving each Sales Support user around two hours per day.",
        "Separated LLM capabilities from deterministic workflow execution, keeping validation, approval, CSV generation, SFTP upload, and email dispatch controlled.",
      ],
    },
    {
      title: "AI Engineer",
      meta: "Freelance | Mar 2025 - Sep 2025; May 2026 - Present",
      points: [
        "Extended a Next.js SaaS starter into a cost-aware document intelligence platform and reduced AI processing cost by over 80%.",
        "Designed document classification, confidence-based escalation, prompt routing, structured extraction, validation logic, and error-handling flows.",
        "Built AI-assisted workflow systems for scheduling, medical practice communication, structured notes, and patient-facing reports.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      meta: "Virtual Mike, Australia | Apr 2024 - Mar 2025",
      points: [
        "Built a controlled legal Q&A system that mapped real estate law enquiries to approved, versioned PostgreSQL answer records.",
        "Implemented query understanding for legal topic, user intent, jurisdiction, timing, and uncertainty before retrieval.",
        "Used ChromaDB, LangChain, and LangSmith to support verified retrieval, routing, evaluation, cost tracking, latency monitoring, and human fallback.",
        "Reduced repetitive legal review effort by approximately 70% by routing common enquiries to verified content and escalating high-risk cases.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      meta: "Auxilis, Australia | Apr 2022 - Feb 2024",
      points: [
        "Developed a PaddleOCR-based document intelligence system for end-to-end layout analysis across tables, paragraphs, and titles.",
        "Built a 15,000-sample training dataset using AWS Textract and Label Studio, improving layout parsing accuracy from 65% to 85%.",
        "Implemented rule-based post-processors that pushed final extraction precision to 92% and reduced reliance on expensive cloud APIs by 60%.",
        "Developed a Faster R-CNN table detector for challenging table structures, reaching 98% precision.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      meta: "Wuhan Purvar Bigdata Technology Co., Ltd., China | Jun 2020 - Sep 2021",
      points: [
        "Worked on an English essay auto-scoring system for long-form student writing.",
        "Fine-tuned a BERT-based Transformer model for essay-level representations and tested regression and ranking-loss approaches for scoring consistency.",
      ],
    },
  ],
  skillGroups: [
    { title: "Languages", items: ["Python", "TypeScript/JavaScript", "SQL"] },
    { title: "AI / LLM", items: ["RAG", "LangChain", "LangSmith", "ChromaDB", "Prompt Engineering", "Context Engineering", "LLM Evaluation"] },
    { title: "ML / Document AI", items: ["OCR", "PaddleOCR", "Faster R-CNN", "OpenCV", "AWS Textract"] },
    { title: "Full-stack & Automation", items: ["PostgreSQL", "REST APIs", "Django", "FastAPI", "Node.js", "React", "Next.js", "Power Automate", "n8n"] },
    { title: "Cloud & DevOps", items: ["AWS", "Azure AI Document Intelligence", "Azure OpenAI Service", "Azure Functions", "Azure Container Apps", "Docker", "Git", "CI/CD"] },
  ],
  education: [
    {
      degree: "Master of Information Technology",
      school: "RMIT University, Australia",
      years: "2023 - 2024",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "Mingchuan University, Taiwan",
      years: "2015 - 2020",
    },
  ],
  licenses: [
    "Full working rights in Australia",
    "Australian driver licence",
  ],
};
