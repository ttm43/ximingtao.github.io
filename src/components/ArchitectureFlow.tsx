import { useState } from "react";
import { Background, ReactFlow, type Edge, type Node } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

type Props = {
  flow: string[];
};

const colors = ["#2563eb", "#0f766e", "#334155", "#b45309", "#475569", "#111827"];

const nodeDetails: Record<string, { input: string; ai: string; guardrail: string; failure: string }> = {
  Email: {
    input: "Email body, sender, attachments, and routing metadata.",
    ai: "Detect whether this looks like an order, enquiry, or exception.",
    guardrail: "Only supported senders and attachment types enter the order pipeline.",
    failure: "Unsupported requests are routed to review.",
  },
  Classification: {
    input: "Email content and attachment signals.",
    ai: "Classify order intent and identify ambiguous requests.",
    guardrail: "Confidence threshold decides whether extraction should continue.",
    failure: "Low confidence creates a review task.",
  },
  Extraction: {
    input: "PDF text, Excel rows, and template-specific fields.",
    ai: "Extract structured order JSON from mixed document formats.",
    guardrail: "Schema validation and required-field checks run before business validation.",
    failure: "Malformed or incomplete output is rejected.",
  },
  Validation: {
    input: "Extracted JSON plus customer, address, item, price, MOQ, and lead-time master data.",
    ai: "No model decision here.",
    guardrail: "Deterministic checks decide whether execution is allowed.",
    failure: "Mismatch routes to human review or clarification.",
  },
  Review: {
    input: "Validation failures, confidence issues, and exception summaries.",
    ai: "Draft clarification notes and summarize why review is needed.",
    guardrail: "Human approval is required before external action.",
    failure: "No ERP/SFTP/email action is dispatched.",
  },
  ERP: {
    input: "Validated order payload.",
    ai: "No model decision here.",
    guardrail: "CSV generation, SFTP upload, and downstream integration remain deterministic.",
    failure: "Integration errors are retried or escalated.",
  },
};

export default function ArchitectureFlow({ flow }: Props) {
  const [selected, setSelected] = useState(flow[Math.min(2, flow.length - 1)]);
  const selectedDetail = nodeDetails[selected] ?? {
    input: "Structured workflow state.",
    ai: "AI assists understanding or drafting where appropriate.",
    guardrail: "Deterministic controls decide whether the workflow advances.",
    failure: "Unclear or risky states route to review.",
  };

  const nodes: Node[] = flow.map((label, index) => ({
    id: String(index),
    data: { label },
    position: { x: index * 190, y: index % 2 === 0 ? 80 : 170 },
    style: {
      border: "1px solid rgba(15, 23, 42, 0.16)",
      borderRadius: 8,
      color: "#111827",
      background: "#ffffff",
      boxShadow: "0 18px 44px rgba(15, 23, 42, 0.08)",
      fontSize: 14,
      fontWeight: 650,
      width: 150,
      padding: 12,
    },
  }));

  const edges: Edge[] = flow.slice(0, -1).map((_, index) => ({
    id: `${index}-${index + 1}`,
    source: String(index),
    target: String(index + 1),
    animated: true,
    style: { stroke: colors[index % colors.length], strokeWidth: 2 },
  }));

  return (
    <div>
      <div className="flow-shell flow-shell-desktop">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable
          onNodeClick={(_, node) => setSelected(String(node.data.label))}
          panOnDrag
          zoomOnScroll={false}
          zoomOnPinch={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#d7dde8" gap={22} />
        </ReactFlow>
      </div>
      <div className="node-inspector">
        <div>
          <span>Selected node</span>
          <h3>{selected}</h3>
        </div>
        <dl>
          <div>
            <dt>Input</dt>
            <dd>{selectedDetail.input}</dd>
          </div>
          <div>
            <dt>AI role</dt>
            <dd>{selectedDetail.ai}</dd>
          </div>
          <div>
            <dt>Guardrail</dt>
            <dd>{selectedDetail.guardrail}</dd>
          </div>
          <div>
            <dt>Failure path</dt>
            <dd>{selectedDetail.failure}</dd>
          </div>
        </dl>
      </div>
      <ol className="flow-mobile-list">
        {flow.map((step, index) => (
          <li key={step} onClick={() => setSelected(step)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}
