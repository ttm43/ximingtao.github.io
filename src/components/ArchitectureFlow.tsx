import { Background, ReactFlow, type Edge, type Node } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

type Props = {
  flow: string[];
};

const colors = ["#2563eb", "#0f766e", "#334155", "#b45309", "#475569", "#111827"];

export default function ArchitectureFlow({ flow }: Props) {
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
          elementsSelectable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#d7dde8" gap={22} />
        </ReactFlow>
      </div>
      <ol className="flow-mobile-list">
        {flow.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}
