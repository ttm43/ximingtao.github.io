import { useEffect, useRef, useState } from "react";

type Metric = {
  value: string;
  label: string;
  detail: string;
};

type Props = {
  metrics: Metric[];
};

const explanations: Record<string, string[]> = {
  "Eligible order automation": [
    "Eligible = known customer, supported template, enough order fields, and validation passed.",
    "Not eligible = missing information, price mismatch, unknown template, MOQ issue, or low confidence.",
    "Human review remained part of the system for exceptions.",
  ],
  "Inference cost reduction": [
    "Lower-cost routing handled simple documents first.",
    "More capable models were reserved for ambiguous or low-confidence cases.",
    "Validation errors were treated as routing signals, not prompt problems.",
  ],
  "Reduction in manual legal review": [
    "Common enquiries were answered from approved knowledge records.",
    "Ambiguous, unsupported, or high-risk questions escalated to human review.",
    "The metric is about review workload, not removing expert oversight.",
  ],
};

function parseMetric(value: string) {
  const match = value.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

export default function MetricsExplorer({ metrics }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [ticks, setTicks] = useState(metrics.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.35 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const started = performance.now();
    const duration = 950;
    let frame = 0;

    const animate = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      setTicks(metrics.map((metric) => Math.round(parseMetric(metric.value) * progress)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [metrics, visible]);

  return (
    <section className="metric-band metric-explorer" aria-label="Selected metrics" ref={ref}>
      {metrics.map((metric, index) => {
        const suffix = metric.value.includes("+") ? "%+" : metric.value.includes("%") ? "%" : "";
        const isActive = active === index;
        return (
          <article className={isActive ? "active" : ""} key={metric.label}>
            <button type="button" onClick={() => setActive(index)}>
              <strong>{visible ? `${ticks[index]}${suffix}` : metric.value}</strong>
              <h2>{metric.label}</h2>
              <p>{metric.detail}</p>
            </button>
            {isActive && (
              <div className="metric-explanation">
                {explanations[metric.label].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
}
