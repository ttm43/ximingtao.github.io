import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, FileText, Play, RotateCcw } from "lucide-react";

const steps = [
  {
    id: "input",
    label: "Input",
    detail: "Messy business inputs arrive as email, PDF, and Excel attachments.",
    talk: "The system starts from messy business inputs.",
  },
  {
    id: "classify",
    label: "Classify",
    detail: "The request is classified as an order, enquiry, or exception.",
    talk: "First we classify whether it is an order, enquiry, or exception.",
  },
  {
    id: "extract",
    label: "Extract",
    detail: "Structured fields are extracted from supported PDFs and Excel templates.",
    talk: "Then we extract structured fields from PDF or Excel.",
  },
  {
    id: "validate",
    label: "Validate",
    detail: "Rules check customer, address, price, MOQ, quantity, and lead time.",
    talk: "This is where business rules control the output.",
  },
  {
    id: "review",
    label: "Review",
    detail: "Low confidence or failed validation is routed to human review.",
    talk: "If confidence is low or data fails validation, it goes to review.",
  },
  {
    id: "system",
    label: "System",
    detail: "Only validated actions reach ERP, SFTP, Zendesk, or approved email dispatch.",
    talk: "Only validated actions reach downstream systems.",
  },
];

type Scenario = "happy" | "exception";

export default function HeroWorkflowPlayback() {
  const [active, setActive] = useState(0);
  const [scenario, setScenario] = useState<Scenario>("happy");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;

    setActive(0);
    const timer = window.setInterval(() => {
      setActive((current) => {
        if (current >= steps.length - 1) {
          window.clearInterval(timer);
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 950);

    return () => window.clearInterval(timer);
  }, [playing, scenario]);

  const current = steps[active];
  const failedValidation = scenario === "exception" && active >= 3;
  const status = useMemo(() => {
    if (scenario === "happy") {
      return active < 5 ? "Order moving through validation" : "ERP-ready action generated";
    }
    if (active < 3) return "Risk not visible yet";
    if (active === 3) return "Validation failed";
    if (active === 4) return "Human review required";
    return "Zendesk ticket and clarification draft";
  }, [active, scenario]);

  function run(nextScenario: Scenario) {
    setScenario(nextScenario);
    setPlaying(true);
  }

  return (
    <div className="workflow-playback" aria-label="Interactive workflow playback">
      <div className="playback-toolbar">
        <button type="button" onClick={() => run("happy")} className="primary-action">
          <Play size={15} />
          Run happy path
        </button>
        <button type="button" onClick={() => run("exception")}>
          <AlertTriangle size={15} />
          Trigger risky order
        </button>
        <button type="button" onClick={() => setActive(0)} aria-label="Reset workflow">
          <RotateCcw size={15} />
        </button>
      </div>

      <div className={`playback-canvas ${scenario} step-${current.id}`}>
        <div className="input-chips">
          {["Email", "PDF", "Excel"].map((item) => (
            <span className={active >= 0 ? "is-on" : ""} key={item}>
              <FileText size={14} />
              {item}
            </span>
          ))}
        </div>

        <div className="playback-line" />
        <div className="playback-nodes">
          {steps.map((step, index) => {
            const isActive = index === active;
            const isDone = index < active;
            const isFailed = failedValidation && step.id === "validate";
            return (
              <button
                type="button"
                className={[
                  "playback-node",
                  isActive ? "active" : "",
                  isDone ? "done" : "",
                  isFailed ? "failed" : "",
                  step.id,
                ].join(" ")}
                key={step.id}
                onClick={() => setActive(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.label}</strong>
              </button>
            );
          })}
        </div>

        <div className={`playback-detail ${failedValidation ? "warning" : ""}`}>
          <div>
            {failedValidation ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
            <span>{status}</span>
          </div>
          <h2>{current.label}</h2>
          <p>{current.detail}</p>
          {current.id === "extract" && (
            <pre>{`{
  "customer": "known",
  "po": "detected",
  "lines": 12
}`}</pre>
          )}
          {current.id === "validate" && (
            <ul>
              <li>Price check {scenario === "exception" ? "failed" : "passed"}</li>
              <li>MOQ check {scenario === "exception" ? "failed" : "passed"}</li>
              <li>Address match passed</li>
            </ul>
          )}
          {current.id === "system" && (
            <ul>
              <li>{scenario === "happy" ? "AX-compatible CSV" : "Zendesk ticket"}</li>
              <li>{scenario === "happy" ? "SFTP handoff" : "Clarification email draft"}</li>
            </ul>
          )}
        </div>
      </div>

      <div className="playback-talk-track">
        <span>Talk track</span>
        <p>{current.talk}</p>
      </div>
    </div>
  );
}
