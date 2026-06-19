import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const stages = ["OCR", "Layout", "Extraction", "Validation", "Dataset"];

export default function DocumentParsingDemo() {
  const [stage, setStage] = useState(0);

  return (
    <div className={`document-demo stage-${stage}`}>
      <div className="document-demo-controls">
        {stages.map((item, index) => (
          <button
            type="button"
            className={stage === index ? "active" : ""}
            key={item}
            onClick={() => setStage(index)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="document-demo-grid">
        <div className="fake-document" aria-label="Abstract document viewer">
          <div className="doc-title" />
          <div className="doc-paragraph" />
          <div className="doc-table">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="doc-signature" />
        </div>
        <div className="extraction-panel">
          <span>{stages[stage]}</span>
          {stage < 2 && <p>Document content becomes readable before any LLM workflow starts.</p>}
          {stage === 2 && (
            <pre>{`{
  "invoice_id": "detected",
  "total": "extracted",
  "table_rows": 18
}`}</pre>
          )}
          {stage === 3 && (
            <ul>
              <li><CheckCircle2 size={15} /> Schema valid</li>
              <li><CheckCircle2 size={15} /> Table structure valid</li>
              <li><CheckCircle2 size={15} /> Required fields present</li>
            </ul>
          )}
          {stage === 4 && <p>Validated samples are added to the dataset and batch quality loop.</p>}
        </div>
      </div>
    </div>
  );
}
