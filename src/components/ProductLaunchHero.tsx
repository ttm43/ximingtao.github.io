import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Inbox,
  ShieldCheck,
} from "lucide-react";
import { useMemo, useState } from "react";

type Mode = "happy" | "exception";

const tabs = ["Inbox", "Orders", "Validation", "Human Review", "ERP Export"];

const scenarioCopy = {
  happy: {
    label: "Run happy path",
    status: "Export ready",
    tone: "success",
    summary: "Known customer, supported template, required fields present.",
    rows: [
      ["Incoming", "New order email received", "09:41"],
      ["AI Extraction", "PDF fields extracted", "09:42"],
      ["Reference Match", "Customer and SKU matched", "09:42"],
      ["Validation", "Price and MOQ passed", "09:43"],
      ["Export", "ERP-ready CSV generated", "09:44"],
    ],
    checks: [
      ["Customer", "Matched"],
      ["Price", "Passed"],
      ["MOQ", "Passed"],
      ["Action", "Export to ERP"],
    ],
  },
  exception: {
    label: "Trigger exception",
    status: "Review required",
    tone: "warning",
    summary: "Recognized order intent, but business rules block automatic execution.",
    rows: [
      ["Incoming", "New order email received", "09:41"],
      ["AI Extraction", "PDF fields extracted", "09:42"],
      ["Reference Match", "Customer matched, SKU ambiguous", "09:42"],
      ["Validation", "MOQ warning detected", "09:43"],
      ["Decision", "Human review ticket prepared", "09:44"],
    ],
    checks: [
      ["Customer", "Matched"],
      ["Price", "Needs review"],
      ["MOQ", "Warning"],
      ["Action", "Hold for approval"],
    ],
  },
} as const;

export default function ProductLaunchHero() {
  const [mode, setMode] = useState<Mode>("exception");
  const scenario = scenarioCopy[mode];

  const activeTab = useMemo(() => {
    return mode === "happy" ? "ERP Export" : "Human Review";
  }, [mode]);

  return (
    <div className="product-console" aria-label="OrderOps AI operating console">
      <div className="console-topbar">
        <div>
          <span className="console-eyebrow">Live operating console</span>
          <h2>OrderOps AI</h2>
        </div>
        <span className={`console-status ${scenario.tone}`}>
          {mode === "happy" ? <CheckCircle2 size={15} /> : <AlertTriangle size={15} />}
          {scenario.status}
        </span>
      </div>

      <div className="console-tabs" aria-label="OrderOps modules">
        {tabs.map((tab) => (
          <span className={tab === activeTab ? "active" : ""} key={tab}>
            {tab}
          </span>
        ))}
      </div>

      <div className="console-body">
        <section className="activity-panel" aria-label="Workflow activity">
          <div className="panel-title">
            <Inbox size={16} />
            Workflow activity
          </div>
          <div className="activity-list">
            {scenario.rows.map(([stage, text, time]) => (
              <article className="activity-row" key={`${stage}-${text}`}>
                <span className="activity-dot" />
                <div>
                  <strong>{stage}</strong>
                  <p>{text}</p>
                </div>
                <time>{time}</time>
              </article>
            ))}
          </div>
        </section>

        <section className="order-panel" aria-label="Order decision">
          <div className="panel-title">
            <FileText size={16} />
            Order #A-2047
          </div>
          <p>{scenario.summary}</p>
          <div className="check-grid">
            {scenario.checks.map(([label, value]) => (
              <div className={value.includes("Warning") || value.includes("review") || value.includes("Hold") ? "warn" : ""} key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="decision-strip">
            <ShieldCheck size={17} />
            <span>AI understands. Rules decide. Humans approve exceptions.</span>
          </div>
        </section>
      </div>

      <div className="console-actions">
        <button
          className={mode === "happy" ? "active" : ""}
          type="button"
          onClick={() => setMode("happy")}
        >
          Run happy path
          <ArrowRight size={15} />
        </button>
        <button
          className={mode === "exception" ? "active warning" : "warning"}
          type="button"
          onClick={() => setMode("exception")}
        >
          Trigger exception
          <AlertTriangle size={15} />
        </button>
      </div>
    </div>
  );
}
