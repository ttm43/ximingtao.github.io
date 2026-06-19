import { useState } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ConfidenceGateDemo() {
  const [confidence, setConfidence] = useState(92);
  const high = confidence >= 70;

  return (
    <div className="confidence-demo">
      <div className="mock-question">
        <span>Ask legal question</span>
        <h2>Can I terminate a lease early in NSW?</h2>
        <div className="parse-chips">
          <span>Intent: terminate lease</span>
          <span>Topic: tenancy</span>
          <span>Jurisdiction: NSW</span>
          <span>Confidence: {confidence}%</span>
        </div>
      </div>
      <div className="confidence-control">
        <label htmlFor="confidence">Retrieval confidence</label>
        <input
          id="confidence"
          max="95"
          min="35"
          onChange={(event) => setConfidence(Number(event.target.value))}
          type="range"
          value={confidence}
        />
        <div className={high ? "route-card approved" : "route-card warning"}>
          {high ? <CheckCircle2 size={20} /> : <AlertTriangle size={20} />}
          <div>
            <strong>{high ? "Generate answer from approved source" : "Escalate to human"}</strong>
            <p>
              {high
                ? "The response is grounded in verified knowledge records."
                : "The system refuses to improvise when retrieval evidence is weak."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
