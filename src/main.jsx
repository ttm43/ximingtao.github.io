import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  BarChart3,
  Bot,
  Braces,
  Check,
  CheckCircle2,
  Database,
  FileCheck2,
  FileJson,
  FileSpreadsheet,
  FileText,
  Gauge,
  GitBranch,
  Inbox,
  Layers3,
  Mail,
  MessageSquare,
  ScanLine,
  Search,
  Server,
  ShieldCheck,
  Table2,
  Tags,
  UserCheck,
  XCircle,
} from "lucide-react";
import "./styles.css";

const email = "directortao@gmail.com";
const assetBase = import.meta.env.BASE_URL;

const projects = [
  {
    id: "orderops",
    title: "Sales Order Automation",
    subtitle: "Email, PDF, and Excel orders into AX-ready workflow outputs.",
    tags: ["AI Agent", "Automation", "Document AI", "Human Review"],
    outcome: "70% automation for verified orders. 2h saved per user per day.",
    href: "#/projects/orderops",
    status: "Playable case study",
  },
  {
    id: "knowledge",
    title: "Legal QA Pipeline",
    subtitle: "Grounded legal Q&A with verified sources and controlled responses.",
    tags: ["RAG", "Source Grounding", "Evaluation"],
    outcome: "Verified answer records, confidence gates, and human fallback.",
    href: "#/projects/knowledgeguard",
    status: "Coming next",
  },
  {
    id: "clinic",
    title: "ClinicFlow",
    subtitle: "Clinician-in-the-loop assessments, exercise drafts, and patient reports.",
    tags: ["Healthcare Workflow", "Reports", "Human Review"],
    outcome: "AI-assisted workflow without replacing clinical decision-making.",
    href: "#/projects/clinicflow",
    status: "Product walkthrough",
  },
  {
    id: "docparse",
    title: "DocParse Engine",
    subtitle: "OCR, layout parsing, table detection, and structured extraction.",
    tags: ["Document AI", "OCR", "Layout Parsing"],
    outcome: "65% baseline to 92% post-processed layout accuracy.",
    href: "#/projects/docparse",
    status: "Technical foundation",
  },
];

const clinicScreens = [
  {
    id: "patients",
    label: "Patients",
    title: "Patient registry",
    image: `${assetBase}images/clinic-patients.jpg`,
    description:
      "A searchable patient queue gives clinicians a clear starting point before opening an assessment or report workflow.",
    points: ["Patient code search", "Status visibility", "Clinician-ready queue"],
  },
  {
    id: "assessments",
    label: "Assessments",
    title: "Assessment tracking",
    image: `${assetBase}images/clinic-assessments.jpg`,
    description:
      "Active and historical assessments are organized by review state so clinicians can quickly find work in progress and approved sessions.",
    points: ["In-progress filtering", "Review readiness", "Historical context"],
  },
  {
    id: "reports",
    label: "Reports",
    title: "Report lifecycle",
    image: `${assetBase}images/clinic-reports.jpg`,
    description:
      "Reports move through draft, approval, sharing, and revoke states without hiding the clinician approval step.",
    points: ["Draft visibility", "Approval control", "Shared report tracking"],
  },
];

const capabilityColumns = [
  {
    title: "Build AI Systems",
    intro:
      "I turn messy inputs such as emails, PDFs, spreadsheets, and internal knowledge into structured, validated outputs that business systems can use safely.",
    items: [
      "Applied AI and LLM workflow design",
      "Document intelligence, OCR, and layout parsing",
      "RAG systems with source control and confidence gates",
      "Structured extraction, schema validation, and evaluation",
      "Cost-aware model routing and prompt control",
    ],
  },
  {
    title: "Ship Business Automation",
    intro:
      "I connect AI outputs to business rules, approvals, exception handling, APIs, queues, databases, and human review so the system can actually run in production.",
    items: [
      "Workflow automation across email, files, tickets, and reports",
      "Human-in-the-loop review paths for risky decisions",
      "Rule engines, state transitions, and exception handling",
      "Cloud deployment with queues, containers, APIs, and databases",
      "Product-minded frontend systems for demos and operations",
    ],
  },
];

const resume = {
  summary:
    "AI Engineer with around five years of experience building applied AI systems across workflow automation, document intelligence, RAG, structured extraction, LLM evaluation, and business process automation.",
  experience: [
    {
      role: "AI & Automation Engineer",
      org: "Xperience, Melbourne",
      time: "Oct 2025 - May 2026",
      bullets: [
        "Led a sales order automation workflow that extracted customer orders from email attachments and processed validated outputs into AX.",
        "Reached around 70% fully automated processing for eligible orders, saving Sales Support users around two hours per day.",
        "Separated AI extraction from deterministic validation, approval, export, SFTP handoff, and email dispatch.",
      ],
    },
    {
      role: "AI Engineer",
      org: "Freelance",
      time: "Mar 2025 - Sep 2025; May 2026 - Present",
      bullets: [
        "Built AI-assisted automation systems for scheduling, medical practice communication, clinical assessment workflows, and patient-facing reports.",
        "Reduced AI processing cost by over 80% in a document intelligence SaaS workflow through routing and prompt control.",
      ],
    },
    {
      role: "Machine Learning Engineer",
      org: "Virtual Mike, Australia",
      time: "Apr 2024 - Mar 2025",
      bullets: [
        "Built a controlled legal Q&A system grounded in approved, versioned PostgreSQL answer records.",
        "Implemented legal topic, intent, jurisdiction, confidence, retrieval, evaluation, and human fallback flows.",
        "Reduced repetitive legal review effort by approximately 70%.",
      ],
    },
    {
      role: "Machine Learning Engineer",
      org: "Auxilis, Australia",
      time: "Apr 2022 - Feb 2024",
      bullets: [
        "Developed PaddleOCR-based document intelligence systems for layout analysis across tables, paragraphs, and titles.",
        "Built a 15,000-sample training dataset using AWS Textract and Label Studio.",
        "Improved layout parsing accuracy from a 65% baseline to 85% after fine-tuning and 92% after post-processing, while reducing cloud API reliance by 60%.",
      ],
    },
    {
      role: "Machine Learning Engineer",
      org: "Wuhan Purvar Bigdata Technology Co., Ltd.",
      time: "Jun 2020 - Sep 2021",
      bullets: [
        "Worked on automated English essay scoring with BERT-based Transformer representations and scoring consistency experiments.",
      ],
    },
  ],
  skills: [
    "Python",
    "TypeScript",
    "React",
    "PostgreSQL",
    "RAG",
    "LangChain",
    "LangSmith",
    "ChromaDB",
    "OCR",
    "PaddleOCR",
    "OpenCV",
    "AWS Textract",
    "Azure OpenAI",
    "Azure Container Apps",
    "Docker",
  ],
};

function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function App() {
  const route = useHashRoute();
  const slug = route.replace("#", "").replace(/^\/+/, "");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  return (
    <div>
      <SiteHeader />
      <main>
        {slug === "" && <HomePage />}
        {slug === "projects/orderops" && <OrderOpsPage />}
        {slug === "projects/knowledgeguard" && <LegalPipelinePage />}
        {slug === "projects/docparse" && <DocParsePage />}
        {slug === "projects/clinicflow" && <ClinicFlowPage />}
        {slug === "resume" && <ResumePage />}
        {slug.startsWith("projects/") &&
          slug !== "projects/orderops" &&
          slug !== "projects/knowledgeguard" &&
          slug !== "projects/docparse" &&
          slug !== "projects/clinicflow" && (
          <PlaceholderPage slug={slug.split("/").pop()} />
        )}
      </main>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#/" className="brand" aria-label="Ximing Tao home">
        <span>XT</span>
        Ximing Tao
      </a>
      <nav>
        <a href="#/">Home</a>
        <a href="#/resume">Resume</a>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-kicker">Ximing Tao / AI Engineer</span>
          <h1>Reliable AI systems for real-world business workflows.</h1>
          <p>
            I design the AI layer, validation logic, human review paths, and integrations that
            turn messy business inputs into usable workflow actions.
          </p>
          <div className="hero-keywords" aria-label="Core focus areas">
            {["Document Intelligence", "RAG", "Workflow Automation", "Human-in-the-loop AI", "Cloud Deployment"].map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </div>
        <HeroProjectDeck />
      </section>

      <section className="section capabilities">
        <div className="section-heading">
          <h2>Capabilities and orchestration</h2>
          <p>A compact view of what I can design, build, validate, and ship.</p>
        </div>
        <div className="capability-grid">
          {capabilityColumns.map((column) => (
            <article key={column.title}>
              <h3>{column.title}</h3>
              <p>{column.intro}</p>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>
                    <Check size={15} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function HeroProjectDeck() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <aside className="hero-deck" aria-label="Featured projects" onMouseLeave={() => setActiveIndex(null)}>
      {projects.map((project, index) => (
        <a
          className={`deck-card deck-card-${index + 1} ${activeIndex === index ? "active" : ""}`}
          href={project.href}
          key={project.id}
          style={{ "--i": index }}
          tabIndex={-1}
        >
          <div className="deck-card-top">
            <span>Project {String(index + 1).padStart(2, "0")}</span>
            <ArrowRight size={16} />
          </div>
          <div className="deck-visual">
            {index === 0 ? <SandboxThumbnail /> : <BlankProjectVisual />}
          </div>
          <div className="deck-card-copy">
            <h2>{project.title}</h2>
            <p>{project.subtitle}</p>
            <div className="tag-list">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <strong className="deck-outcome">{project.outcome}</strong>
          </div>
        </a>
      ))}
      <div className="deck-hit-zones">
        {projects.map((project, index) => (
          <a
            href={project.href}
            aria-label={`Open ${project.title}`}
            key={project.id}
            onFocus={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            style={{ "--zone": index }}
            tabIndex={0}
          >
            <span>{project.title}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <a className={`project-card ${featured ? "featured-card" : ""} ${project.dimmed ? "dimmed" : ""}`} href={project.href}>
      <div className="project-top">
        <span>{project.status}</span>
        <ArrowRight size={16} />
      </div>
      {featured ? <SandboxThumbnail /> : <BlankProjectVisual />}
      <h3>{project.title}</h3>
      <p>{project.subtitle}</p>
      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {featured && <strong>Click to play the interactive case study</strong>}
    </a>
  );
}

function SandboxThumbnail() {
  return (
    <div className="sandbox-thumb" aria-hidden="true">
      <motion.span
        className="thumb-mail"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <Mail size={18} />
      </motion.span>
      <motion.span
        className="thumb-pdf"
        animate={{ x: [0, 62, 115], y: [0, -14, 20], opacity: [0.6, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.7 }}
      >
        PDF
      </motion.span>
      <motion.span
        className="thumb-agent"
        animate={{ boxShadow: ["0 0 0 rgba(99,102,241,0)", "0 0 32px rgba(99,102,241,.28)", "0 0 0 rgba(99,102,241,0)"] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.7 }}
      >
        AI
      </motion.span>
      <span className="thumb-glow" />
    </div>
  );
}

function BlankProjectVisual() {
  return (
    <div className="blank-visual" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function OrderOpsPage() {
  return <AutomationSandbox />;
}

function AutomationSandbox() {
  const canvasRef = useRef(null);
  const [isNarrowCanvas, setIsNarrowCanvas] = useState(() => window.innerWidth <= 980);
  const attachmentPositions = {
    pdf: { x: 74, y: 240 },
    excel: { x: 154, y: 240 },
  };
  const nodePositions = isNarrowCanvas
    ? {
        extractionAgent: { x: 26, y: 276 },
        scripts: { x: 26, y: 476 },
        validation: { x: 26, y: 676 },
        sftp: { x: 26, y: 876 },
        human: { x: 26, y: 1076 },
      }
    : {
        extractionAgent: { x: 372, y: 44 },
        scripts: { x: 372, y: 244 },
        validation: { x: 622, y: 144 },
        sftp: { x: 872, y: 44 },
        human: { x: 872, y: 244 },
      };
  const [flights, setFlights] = useState([]);
  const [processed, setProcessed] = useState({
    pdf: false,
    excel: false,
    agentJson: false,
    scriptsJson: false,
    approved: false,
    rejected: false,
    reviewed: false,
  });

  useEffect(() => {
    function updateCanvasMode() {
      setIsNarrowCanvas(window.innerWidth <= 980);
    }

    updateCanvasMode();
    window.addEventListener("resize", updateCanvasMode);
    return () => window.removeEventListener("resize", updateCanvasMode);
  }, []);

  function flightPoint(position, offset = { x: 42, y: 60 }) {
    return {
      x: position.x + offset.x,
      y: position.y + offset.y,
    };
  }

  function launchFlight({ kind, from, to, activates }) {
    if (!from || !to) return;
    if (activates) setProcessed((current) => ({ ...current, [activates]: false }));
    setFlights((current) => [
      ...current,
      {
        id: `${kind}-${Date.now()}-${current.length}`,
        kind,
        from,
        to,
        activates,
      },
    ]);
  }

  function completeFlight(id, activates) {
    setFlights((current) => current.filter((flight) => flight.id !== id));
    if (activates) setProcessed((current) => ({ ...current, [activates]: true }));
  }

  function launchAttachment(kind) {
    const route = {
      pdf: {
        to: flightPoint(nodePositions.extractionAgent),
        activates: "pdf",
      },
      excel: {
        to: flightPoint(nodePositions.scripts),
        activates: "excel",
      },
    }[kind];

    launchFlight({
      kind,
      from: attachmentPositions[kind],
      ...route,
    });
  }

  function launchJson(source) {
    const fromNode = source === "agentJson" ? nodePositions.extractionAgent : nodePositions.scripts;
    launchFlight({
      kind: "json",
      from: flightPoint(fromNode),
      to: flightPoint(nodePositions.validation),
      activates: source,
    });
  }

  function launchValidationResult(kind) {
    launchFlight({
      kind,
      from: flightPoint(nodePositions.validation, kind === "approved" ? { x: 30, y: 80 } : { x: 105, y: 80 }),
      to: kind === "approved" ? flightPoint(nodePositions.sftp) : flightPoint(nodePositions.human),
      activates: kind,
    });
  }

  function launchHumanReview() {
    launchFlight({
      kind: "reviewed",
      from: flightPoint(nodePositions.human),
      to: flightPoint(nodePositions.sftp),
      activates: "reviewed",
    });
  }

  return (
    <section className="sandbox-section">
      <div className="sandbox-head">
        <div>
          <h2>Sales Order Automation</h2>
          <p>
            Hold the fixed attachments and nodes to move files through extraction, validation,
            human review, and SFTP handoff.
          </p>
        </div>
      </div>

      <div
        className="automation-canvas"
        ref={canvasRef}
      >
        <div className="canvas-grid" />
        <OrderOpsFlowLines processed={processed} />
        <motion.div
          className="email-card inbox-card"
          animate={{ y: [0, -8, 0], rotateX: [0, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="inbox-visual" aria-hidden="true">
            <span className="inbox-icon-badge">
              <Inbox size={34} />
            </span>
          </div>
          <strong>Order inbox</strong>
          <span>Hold an attachment to route it</span>
        </motion.div>

        <FixedAttachment
          kind="pdf"
          label="PDF"
          icon={<FileText size={20} />}
          position={attachmentPositions.pdf}
          onHold={launchAttachment}
        />
        <FixedAttachment
          kind="excel"
          label="Excel"
          icon={<FileSpreadsheet size={20} />}
          position={attachmentPositions.excel}
          onHold={launchAttachment}
        />

        {flights.map((flight) => (
          <FlightAttachment
            key={flight.id}
            flight={flight}
            onComplete={completeFlight}
          />
        ))}

        <AgentNode
          className="agent-drop"
          position={nodePositions.extractionAgent}
          title="Extraction Agent"
          subtitle="PDF understanding"
          active={processed.pdf}
          onHold={() => launchJson("agentJson")}
        />
        <ScriptsNode
          position={nodePositions.scripts}
          active={processed.excel}
          onHold={() => launchJson("scriptsJson")}
        />
        <ValidationAgent
          position={nodePositions.validation}
          active={processed.agentJson || processed.scriptsJson}
          onApprove={() => launchValidationResult("approved")}
          onReject={() => launchValidationResult("rejected")}
        />
        <HumanReviewNode
          position={nodePositions.human}
          active={processed.rejected}
          onHold={launchHumanReview}
        />
        <SftpNode
          position={nodePositions.sftp}
          active={processed.approved || processed.reviewed}
        />
      </div>
      <ImpactStrip />
    </section>
  );
}

function OrderOpsFlowLines({ processed }) {
  return (
    <svg
      className={`flow-lines ${processed.approved ? "pass-active" : ""} ${
        processed.rejected ? "fail-active" : ""
      }`}
      viewBox="0 0 1120 505"
      aria-hidden="true"
    >
      <path className="flow-path" d="M252 145 C300 112 330 120 372 133" />
      <path className="flow-path" d="M252 195 C305 250 330 318 372 333" />
      <path className="flow-path" d="M562 133 C600 133 600 233 622 233" />
      <path className="flow-path" d="M562 333 C600 333 600 233 622 233" />
      <path className="flow-path pass-path" d="M812 208 C840 170 850 140 872 133" />
      <path className="flow-path fail-path" d="M812 258 C840 296 850 326 872 333" />
      <path className="flow-path review-path" d="M872 333 C830 290 830 178 872 133" />
    </svg>
  );
}

function ImpactStrip() {
  const impact = [
    { value: "70%", label: "eligible order automation" },
    { value: "2h", label: "saved per support user/day" },
    { value: "20", label: "support users in workflow" },
  ];

  return (
    <div className="impact-strip">
      {impact.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function FixedAttachment({ kind, label, icon, position, onHold }) {
  const holdProps = useLongPress(() => onHold(kind));

  return (
    <div
      className={`attachment fixed-attachment ${kind}`}
      style={{ left: position.x, top: position.y }}
      {...holdProps}
    >
      {icon}
      <strong>{label}</strong>
    </div>
  );
}

function FlightAttachment({ flight, onComplete }) {
  const fileMeta = {
    pdf: { icon: <FileText size={20} />, label: "PDF" },
    excel: { icon: <FileSpreadsheet size={20} />, label: "Excel" },
    json: { icon: <FileText size={20} />, label: "JSON" },
    approved: { icon: <CheckCircle2 size={20} />, label: "Valid" },
    rejected: { icon: <XCircle size={20} />, label: "Issue" },
    reviewed: { icon: <UserCheck size={20} />, label: "Approved" },
  }[flight.kind];

  return (
    <motion.div
      className={`attachment flying-attachment ${flight.kind}`}
      initial={{
        left: flight.from.x,
        top: flight.from.y,
        opacity: 0.92,
        scale: 1,
        rotate: flight.kind === "pdf" ? -3 : 3,
      }}
      animate={{
        left: flight.to.x,
        top: flight.to.y,
        opacity: [0.92, 1, 0],
        scale: [1, 1.1, 0.72],
        rotate: flight.kind === "pdf" ? 10 : -10,
      }}
      transition={{ duration: 4.4, ease: [0.2, 0.8, 0.2, 1] }}
      onAnimationComplete={() => onComplete(flight.id, flight.activates)}
    >
      {fileMeta.icon}
      <strong>{fileMeta.label}</strong>
    </motion.div>
  );
}

function useLongPress(onHold) {
  const holdTimer = useRef(null);

  function clearHold() {
    if (holdTimer.current) {
      window.clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
  }

  function beginHold(event) {
    event.preventDefault();
    clearHold();
    holdTimer.current = window.setTimeout(() => {
      onHold();
      holdTimer.current = null;
    }, 240);
  }

  useEffect(() => clearHold, []);

  return {
    onMouseDown: beginHold,
    onMouseUp: clearHold,
    onMouseLeave: clearHold,
    onTouchStart: beginHold,
    onTouchEnd: clearHold,
  };
}

function AgentNode({ className, position, title, subtitle, active, onHold }) {
  const holdProps = useLongPress(onHold);

  return (
    <div
      className={`processing-node target-node agent-node-card ${className} ${active ? "active" : ""}`}
      style={{ left: position.x, top: position.y }}
      {...holdProps}
    >
      <div className="pulse-ring" />
      <div className="robot-visual" aria-hidden="true">
        <span className="robot-glow" />
        <span className="robot-head">
          <Bot size={28} />
        </span>
        <span className="robot-base" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

function ScriptsNode({ position, active, onHold }) {
  const holdProps = useLongPress(onHold);

  return (
    <div
      className={`scripts-node target-node ${active ? "active" : ""}`}
      style={{ left: position.x, top: position.y }}
      {...holdProps}
    >
      <div className="template-stack" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} style={{ "--i": index }} />
        ))}
      </div>
      <div>
        <h3>Extraction Script</h3>
        <p>8 extraction scripts</p>
      </div>
    </div>
  );
}

function ValidationAgent({ position, active, onApprove, onReject }) {
  const approveProps = useLongPress(onApprove);
  const rejectProps = useLongPress(onReject);

  return (
    <div
      className={`validation-agent target-node ${active ? "active" : ""}`}
      style={{ left: position.x, top: position.y }}
    >
      <div className="robot-visual compact" aria-hidden="true">
        <span className="robot-glow" />
        <span className="robot-head">
          <Bot size={24} />
        </span>
        <span className="robot-base" />
      </div>
      <div>
        <h3>Validation Agent</h3>
        <p>Schema, rules, confidence</p>
      </div>
      <div className="validation-actions">
        <button className="valid-action" type="button" {...approveProps}>
          <CheckCircle2 size={18} />
          Pass
        </button>
        <button className="invalid-action" type="button" {...rejectProps}>
          <XCircle size={18} />
          Fail
        </button>
      </div>
    </div>
  );
}

function HumanReviewNode({ position, active, onHold }) {
  const holdProps = useLongPress(onHold);

  return (
    <div
      className={`handoff-node human-review-node target-node ${active ? "active" : ""}`}
      style={{ left: position.x, top: position.y }}
      {...holdProps}
    >
      <div className="handoff-icon">
        <UserCheck size={27} />
      </div>
      <h3>Human Review</h3>
      <p>Approve exception</p>
    </div>
  );
}

function SftpNode({ position, active }) {
  return (
    <div
      className={`handoff-node sftp-node target-node ${active ? "active" : ""}`}
      style={{ left: position.x, top: position.y }}
    >
      <div className="handoff-icon">
        <Server size={27} />
      </div>
      <h3>SFTP Server</h3>
      <p>Validated handoff</p>
    </div>
  );
}

function LegalPipelinePage() {
  const [legalStep, setLegalStep] = useState(0);
  const [legalFlights, setLegalFlights] = useState([]);
  const [showEvaluationData, setShowEvaluationData] = useState(false);
  const legalPositions = {
    question: { x: 64, y: 190 },
    understanding: { x: 210, y: 190 },
    match: { x: 356, y: 190 },
    postgres: { x: 502, y: 190 },
    router: { x: 648, y: 190 },
    simple: { x: 794, y: 46 },
    complex: { x: 794, y: 190 },
    ambiguous: { x: 794, y: 350 },
    response: { x: 938, y: 190 },
    evaluation: { x: 1068, y: 190 },
  };
  const evaluation = [
    ["cost", "$0.003"],
    ["latency", "1.2s"],
    ["token usage", "1.8k"],
    ["fallback rate", "tracked"],
    ["expert review outcome", "captured"],
  ];
  const evaluationReady = legalStep >= 7 && showEvaluationData;

  function resetLegalFlow() {
    setLegalStep(0);
    setLegalFlights([]);
    setShowEvaluationData(false);
  }

  function launchLegalFlight(kind, fromKey, toKey, nextStep) {
    const from = legalPositions[fromKey];
    const to = legalPositions[toKey];
    if (!from || !to) return;

    setLegalStep((current) => Math.max(current, nextStep));
    setLegalFlights((current) => [
      ...current,
      {
        id: `${kind}-${Date.now()}-${current.length}`,
        kind,
        from,
        to,
        nextStep,
      },
    ]);
  }

  function completeLegalFlight(id, nextStep) {
    setLegalFlights((current) => current.filter((flight) => flight.id !== id));
    setLegalStep((current) => Math.max(current, nextStep));
  }

  function routeFromRouter() {
    launchLegalFlight("simple", "router", "simple", 5);
    launchLegalFlight("complex", "router", "complex", 5);
    launchLegalFlight("fallback", "router", "ambiguous", 5);
  }

  return (
    <section className="legal-page">
      <div className="legal-head">
        <h1>Legal QA Pipeline</h1>
        <p>
          Routes legal enquiries to verified, versioned answer records instead of allowing
          free-form LLM responses.
        </p>
      </div>

      <div className="legal-shell">
        <div className={`legal-flow legal-step-${legalStep}`}>
          <div className="canvas-grid" />
          {legalFlights.map((flight) => (
            <LegalFlight
              flight={flight}
              key={flight.id}
              onComplete={completeLegalFlight}
            />
          ))}
          <LegalNode
            className="question-node"
            icon={<MessageSquare size={23} />}
            title="Legal Question"
            body="Can rent be increased during a fixed-term lease in NSW?"
            active={legalStep === 0}
            complete={legalStep > 0}
            onHold={() => legalStep === 0 && launchLegalFlight("question", "question", "understanding", 1)}
          />
          <LegalNode
            className="understanding-node"
            icon={<Tags size={23} />}
            title="Query Understanding"
            body=""
            active={legalStep === 1}
            complete={legalStep > 1}
            disabled={legalStep < 1}
            onHold={() => legalStep === 1 && launchLegalFlight("tags", "understanding", "match", 2)}
          >
            <LegalNodeList
              items={[
                "topic: rent increase",
                "intent: tenant rights",
                "jurisdiction: NSW",
                "uncertainty: medium",
              ]}
            />
          </LegalNode>
          <LegalNode
            className="match-node"
            icon={<Search size={23} />}
            title="Semantic Matching"
            body=""
            active={legalStep === 2}
            complete={legalStep > 2}
            disabled={legalStep < 2}
            onHold={() => legalStep === 2 && launchLegalFlight("match", "match", "postgres", 3)}
          >
            <LegalNodeList items={["ChromaDB", "similar approved questions", "confidence score"]} />
          </LegalNode>
          <LegalNode
            className="postgres-node"
            icon={<Database size={23} />}
            title="Approved Answer Retrieval"
            body=""
            active={legalStep === 3}
            complete={legalStep > 3}
            disabled={legalStep < 3}
            onHold={() => legalStep === 3 && launchLegalFlight("record", "postgres", "router", 4)}
          >
            <LegalNodeList
              items={[
                "PostgreSQL",
                "versioned legal answer",
                "source: verified content only",
              ]}
            />
          </LegalNode>
          <LegalNode
            className="router-node"
            icon={<GitBranch size={23} />}
            title="LLM Router"
            body=""
            active={legalStep === 4}
            complete={legalStep > 4}
            disabled={legalStep < 4}
            onHold={() => legalStep === 4 && routeFromRouter()}
          >
            <LegalNodeList
              items={[
                "classifies route type",
                "selects model strength",
                "blocks unsupported generation",
              ]}
            />
          </LegalNode>
          <LegalNode
            className="simple-route-node route-node"
            icon={<Bot size={23} />}
            title="Simple Route"
            body=""
            active={legalStep === 5}
            complete={legalStep > 5}
            disabled={legalStep < 5}
            onHold={() => legalStep === 5 && launchLegalFlight("answer", "simple", "response", 6)}
          >
            <LegalNodeList items={["simple query", "cheaper model", "approved record required"]} />
          </LegalNode>
          <LegalNode
            className="complex-route-node route-node"
            icon={<Bot size={23} />}
            title="Complex Route"
            body=""
            active={legalStep === 5}
            complete={legalStep > 5}
            disabled={legalStep < 5}
            onHold={() => legalStep === 5 && launchLegalFlight("answer", "complex", "response", 6)}
          >
            <LegalNodeList items={["complex/high-risk", "stronger model", "stricter response boundary"]} />
          </LegalNode>
          <LegalNode
            className="ambiguous-route-node route-node"
            icon={<UserCheck size={23} />}
            title="Ambiguous"
            body=""
            active={legalStep === 5}
            complete={legalStep > 5}
            disabled={legalStep < 5}
            onHold={() => legalStep === 5 && launchLegalFlight("fallback", "ambiguous", "evaluation", 7)}
          >
            <LegalNodeList items={["ambiguous", "unsupported risk", "human review"]} />
          </LegalNode>
          <LegalNode
            className="response-node"
            icon={<FileCheck2 size={23} />}
            title="Final Response"
            body=""
            active={legalStep === 6}
            complete={legalStep > 6}
            disabled={legalStep < 6}
            onHold={() => legalStep === 6 && launchLegalFlight("eval", "response", "evaluation", 7)}
          >
            <LegalNodeList
              items={[
                "answer assembled from approved record",
                "no unsupported legal generation",
              ]}
            />
          </LegalNode>
          <LegalNode
            className="evaluation-node"
            icon={<Gauge size={23} />}
            title="Evaluation Dashboard"
            body=""
            active={legalStep >= 7}
            disabled={legalStep < 7}
            onHold={() => legalStep >= 7 && setShowEvaluationData(true)}
          >
            <LegalNodeList
              items={[
                "cost",
                "latency",
                "token usage",
                "fallback rate",
                "expert review outcome",
              ]}
            />
          </LegalNode>
          <svg className="legal-lines" viewBox="0 0 1180 440" aria-hidden="true">
            <path className="legal-line main" d="M152 219 L170 219" />
            <path className="legal-line main" d="M298 219 L316 219" />
            <path className="legal-line main" d="M444 219 L462 219" />
            <path className="legal-line main" d="M590 219 L608 219" />
          </svg>
        </div>

        <aside className={`evaluation-panel ${evaluationReady ? "ready" : "pending"}`}>
          <div>
            <Gauge size={22} />
            <h2>LangSmith Evaluation</h2>
          </div>
          <button className="reset-flow-button" onClick={resetLegalFlow} type="button">
            Reset flow
          </button>
          {evaluationReady && (
            <>
              <dl>
                {evaluation.map(([key, value]) => (
                  <div key={key}>
                    <dt>{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <p>
                The system does not answer when retrieval confidence or jurisdiction coverage is
                insufficient.
              </p>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}

function LegalNode({ active, body, children, className, complete, disabled, hint, icon, onHold, title }) {
  const holdProps = useLongPress(() => {
    if (!disabled && onHold) onHold();
  });
  function activateNode(event) {
    event.preventDefault();
    if (!disabled && onHold) onHold();
  }

  return (
    <article
      className={`legal-node ${className} ${onHold ? "interactive" : ""} ${active ? "active" : ""} ${
        complete ? "complete" : ""
      } ${disabled ? "disabled" : ""}`}
      onClick={onHold ? activateNode : undefined}
      {...(onHold ? holdProps : {})}
    >
      <div className="legal-node-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
      {children}
      {hint && <span className="legal-node-hint">{hint}</span>}
    </article>
  );
}

function LegalNodeList({ items }) {
  return (
    <ul className="legal-node-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function LegalFlight({ flight, onComplete }) {
  const meta = {
    question: { icon: <MessageSquare size={16} />, label: "Question" },
    tags: { icon: <Tags size={16} />, label: "Intent tags" },
    match: { icon: <Search size={16} />, label: "Match" },
    record: { icon: <Database size={16} />, label: "Verified record" },
    simple: { icon: <Bot size={16} />, label: "Simple" },
    complex: { icon: <Bot size={16} />, label: "Complex" },
    answer: { icon: <FileCheck2 size={16} />, label: "Answer" },
    eval: { icon: <Gauge size={16} />, label: "Metrics" },
    fallback: { icon: <UserCheck size={16} />, label: "Review" },
  }[flight.kind];

  return (
    <motion.div
      animate={{
        left: flight.to.x,
        top: flight.to.y,
        opacity: [0.92, 1, 0],
        scale: [1, 1.08, 0.78],
      }}
      className={`legal-flight ${flight.kind}`}
      initial={{
        left: flight.from.x,
        top: flight.from.y,
        opacity: 0.92,
        scale: 1,
      }}
      onAnimationComplete={() => onComplete(flight.id, flight.nextStep)}
      transition={{ duration: 2.7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {meta.icon}
      <strong>{meta.label}</strong>
    </motion.div>
  );
}

const docStages = [
  {
    id: "baseline",
    label: "Baseline",
    headline: "Cloud OCR baseline",
    layoutAccuracy: "65%",
    gain: "Baseline",
    cost: "High",
    samples: "Seed",
    note:
      "Initial parsing relied heavily on AWS Textract and struggled with dense tables, nested rows, and noisy scans.",
  },
  {
    id: "model",
    label: "Layout Model",
    headline: "PaddleOCR layout model",
    layoutAccuracy: "85%",
    gain: "+20 pts",
    cost: "-42%",
    samples: "15K",
    note:
      "A semi-automated labelling pipeline produced 15K reviewed samples for titles, paragraphs, tables, and key-value regions.",
  },
  {
    id: "post",
    label: "Post-processed",
    headline: "Rule-corrected extraction",
    layoutAccuracy: "92%",
    gain: "+27 pts",
    cost: "-60%",
    samples: "15K",
    note:
      "Structural correction aligned table rows and merged layout blocks before producing validated JSON and table output.",
  },
];

function DocParsePage() {
  const [stageIndex, setStageIndex] = useState(0);
  const stage = docStages[stageIndex];

  function runParsing() {
    setStageIndex((current) => (current + 1) % docStages.length);
  }

  return (
    <section className="docparse-page">
      <div className="docparse-head">
        <h1>Document Intelligence Platform</h1>
        <p>
          A PaddleOCR-based layout analysis system for complex business documents, combining
          semi-automated labelling, model training, table detection, and structural correction.
        </p>
      </div>

      <div className={`docparse-lab doc-stage-${stage.id}`}>
        <div className="canvas-grid" />
        <div className="doc-preview-panel">
          <DocumentPreview stage={stage.id} />
        </div>

        <div className="doc-process-panel">
          <div className="doc-stage-tabs" role="tablist" aria-label="Document parsing stage">
            {docStages.map((item, index) => (
              <button
                className={index === stageIndex ? "active" : ""}
                key={item.id}
                onClick={() => setStageIndex(index)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="doc-pipeline">
            <DocProcessNode icon={<FileText size={18} />} title="Raw Business Document" />
            <DocProcessNode icon={<ScanLine size={18} />} title="Textract-assisted Labelling" />
            <DocProcessNode icon={<Layers3 size={18} />} title="15K Training Dataset" />
            <DocProcessNode icon={<Bot size={18} />} title="PaddleOCR Layout Model" />
            <DocProcessNode icon={<Table2 size={18} />} title="Table Detector" />
            <DocProcessNode icon={<Braces size={18} />} title="Structured Output" />
          </div>

          <button className="run-parse-button" type="button" onClick={runParsing}>
            Run parsing
            <ArrowRight size={16} />
          </button>
        </div>

        <aside className="doc-eval-panel">
          <div>
            <BarChart3 size={22} />
            <h2>{stage.headline}</h2>
          </div>
          <dl>
            <div>
              <dt>layout accuracy</dt>
              <dd>{stage.layoutAccuracy}</dd>
            </div>
            <div>
              <dt>accuracy gain</dt>
              <dd>{stage.gain}</dd>
            </div>
            <div>
              <dt>cloud API reliance</dt>
              <dd>{stage.cost}</dd>
            </div>
            <div>
              <dt>training samples</dt>
              <dd>{stage.samples}</dd>
            </div>
          </dl>
          <p>{stage.note}</p>
        </aside>
      </div>

      <div className="doc-impact-strip">
        <div>
          <strong>65% -&gt; 85% -&gt; 92%</strong>
          <span>layout accuracy progression</span>
        </div>
        <div>
          <strong>15K</strong>
          <span>labelled training samples</span>
        </div>
        <div>
          <strong>60%</strong>
          <span>less cloud API reliance</span>
        </div>
        <div>
          <strong>Post</strong>
          <span>rule-corrected layout output</span>
        </div>
      </div>
    </section>
  );
}

function DocProcessNode({ icon, title }) {
  return (
    <article>
      <span>{icon}</span>
      <strong>{title}</strong>
    </article>
  );
}

function DocumentPreview({ stage }) {
  return (
    <div className={`document-preview ${stage}`}>
      <div className="doc-paper">
        <div className="doc-title-line" />
        <div className="doc-line wide" />
        <div className="doc-line" />
        <div className="doc-line short" />
        <div className="doc-table">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="doc-line wide lower" />
        <div className="doc-line lower" />
        <span className="box title-box">title</span>
        <span className="box paragraph-box">paragraph</span>
        <span className="box table-box">table</span>
        <span className="box cell-box">cells</span>
        <span className="box keyvalue-box">key-value</span>
      </div>
      <div className="structured-output">
        <FileJson size={20} />
        <pre>{`{
  "document": "business_pdf",
  "tables": 3,
  "layout_accuracy": "${stage === "post" ? "92%" : stage === "model" ? "85%" : "65%"}"
}`}</pre>
      </div>
    </div>
  );
}

function ClinicFlowPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = clinicScreens[activeIndex];

  function selectScreen(index, event) {
    const scrollY = window.scrollY;
    event.currentTarget.blur();
    setActiveIndex(index);
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
    });
    window.setTimeout(() => {
      window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
    }, 90);
    window.setTimeout(() => {
      window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
    }, 360);
  }

  return (
    <section className="clinic-page">
      <div className="clinic-head">
        <h1>Clinical Workflow App</h1>
        <p>
          A clinician-facing application for managing patients, tracking movement assessments,
          and controlling patient report status across a structured review workflow.
        </p>
      </div>

      <div className="clinic-showcase">
        <div className="clinic-copy">
          <h2>Clinical workflow, built as a real app.</h2>
          <p>{active.description}</p>

          <div className="clinic-tabs" role="tablist" aria-label="Clinical app screens">
            {clinicScreens.map((screen, index) => (
              <button
                className={index === activeIndex ? "active" : ""}
                key={screen.id}
                onClick={(event) => selectScreen(index, event)}
                type="button"
              >
                {screen.label}
              </button>
            ))}
          </div>
        </div>

        <div className="clinic-phone-stage" aria-live="polite">
          {clinicScreens.map((screen, index) => (
            <motion.figure
              animate={{
                opacity: index === activeIndex ? 1 : 0.28,
                x: index === activeIndex ? 0 : (index - activeIndex) * 42,
                y: index === activeIndex ? 0 : 24,
                rotate: index === activeIndex ? 0 : (index - activeIndex) * 5,
                scale: index === activeIndex ? 1 : 0.88,
                zIndex: index === activeIndex ? 3 : 1,
              }}
              className="clinic-phone"
              initial={false}
              key={screen.id}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <img alt={`${screen.label} screen`} src={screen.image} />
            </motion.figure>
          ))}
        </div>

        <div className="clinic-panels">
          <div className="clinic-detail-card">
            <span>{active.title}</span>
            <ul>
              {active.points.map((point) => (
                <li key={point}>
                  <Check size={15} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="clinic-control-card">
            <ShieldCheck size={20} />
            <div>
              <strong>Clinician remains in control</strong>
              <p>
                The system structures work and report states; clinical recommendations stay
                reviewable and approval-controlled.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="clinic-workflow">
        {[
          ["Patient", "Registry and search"],
          ["Assessment", "Status tracking"],
          ["Findings", "Structured clinical notes"],
          ["Review", "Clinician approval"],
          ["Report", "Share or revoke"],
        ].map(([title, body], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlaceholderPage({ slug }) {
  const titleMap = {
    docparse: "DocParse Engine",
    clinicflow: "ClinicFlow",
  };
  return (
    <section className="placeholder-page">
      <div className="grid-bg" />
      <h1>{titleMap[slug] || "Project"}</h1>
      <p>
        This page intentionally keeps the same visual system as the homepage. Content will be
        designed after the homepage, OrderOps AI Sandbox, and resume are approved.
      </p>
      <a href="#/">Back to home</a>
    </section>
  );
}

function ResumePage() {
  return (
    <section className="resume-page">
      <div className="resume-hero">
        <div>
          <h1>Ximing Tao</h1>
          <p>{resume.summary}</p>
        </div>
        <div className="resume-actions">
          <a href={`mailto:${email}`}>{email}</a>
          <button onClick={() => window.print()}>
            <ArrowDownToLine size={16} />
            Print / Save PDF
          </button>
        </div>
      </div>

      <div className="resume-layout">
        <aside>
          <h2>Skills</h2>
          <div className="resume-skills">
            {resume.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </aside>
        <div className="experience-list">
          <h2>Experience</h2>
          {resume.experience.map((item) => (
            <article key={`${item.role}-${item.org}`}>
              <div>
                <h3>{item.role}</h3>
                <span>{item.org} / {item.time}</span>
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
