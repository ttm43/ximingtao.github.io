import { useState } from "react";
import { AlertTriangle, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

type Scenario = "happy" | "exception";

const steps = [
  {
    title: "Incoming email",
    happy: "Known customer sends a supported order template with PDF and Excel attachments.",
    exception: "Known customer sends an order, but the attachment contains mismatched line items.",
    status: "Input received",
  },
  {
    title: "Attachment parsed",
    happy: "The worker parses PDF and Excel data into a standard order JSON shape.",
    exception: "The worker still extracts the order, but marks uncertain fields for validation.",
    status: "Parsing complete",
  },
  {
    title: "Order fields extracted",
    happy: "AI proposes structured fields: PO, customer, items, quantities, and delivery date.",
    exception: "AI extracts the same fields, but the system does not trust them by default.",
    status: "Structured JSON ready",
  },
  {
    title: "Business rules validated",
    happy: "Customer, address, price, MOQ, quantity, and lead time checks pass.",
    exception: "Price and MOQ checks fail against master data.",
    status: "Validation gate",
  },
  {
    title: "Exception detected / approved",
    happy: "No exception detected, so the order can continue without manual intervention.",
    exception: "The order is routed to Zendesk review with a clarification draft.",
    status: "Review decision",
  },
  {
    title: "ERP-ready action generated",
    happy: "The system generates AX-compatible CSV and SFTP handoff.",
    exception: "No downstream execution happens until a human approves the resolution.",
    status: "Controlled execution",
  },
];

export default function OrderDemoMode() {
  const [open, setOpen] = useState(true);
  const [scenario, setScenario] = useState<Scenario>("happy");
  const [step, setStep] = useState(0);
  const current = steps[step];
  const isException = scenario === "exception" && step >= 3;

  return (
    <div className={`demo-mode-panel ${open ? "open" : ""}`}>
      <div className="demo-mode-header">
        <div>
          <span>Demo Mode</span>
          <h2>Walk through the order system step by step.</h2>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)}>
          {open ? "Collapse" : "Enter Demo Mode"}
        </button>
      </div>

      {open && (
        <>
          <div className="demo-scenario-controls" aria-label="Scenario controls">
            <button
              type="button"
              className={scenario === "happy" ? "active" : ""}
              onClick={() => {
                setScenario("happy");
                setStep(0);
              }}
            >
              <CheckCircle2 size={15} />
              Happy path
            </button>
            <button
              type="button"
              className={scenario === "exception" ? "active warning" : ""}
              onClick={() => {
                setScenario("exception");
                setStep(0);
              }}
            >
              <AlertTriangle size={15} />
              Risky order
            </button>
          </div>

          <div className="demo-walkthrough">
            <article>
              <span>{current.status}</span>
              <h3>{current.title}</h3>
              <p>{current[scenario]}</p>
              <div className="demo-nav">
                <button type="button" onClick={() => setStep(Math.max(0, step - 1))}>
                  <ArrowLeft size={15} />
                  Back
                </button>
                <button type="button" onClick={() => setStep(Math.min(steps.length - 1, step + 1))}>
                  Next
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>
            <div className={`order-state-card ${isException ? "warning" : ""}`}>
              <div>
                {isException ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
                <strong>{isException ? "Exception path" : "Validated path"}</strong>
              </div>
              <ol>
                {steps.map((item, index) => (
                  <li className={index === step ? "active" : index < step ? "done" : ""} key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.title}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
