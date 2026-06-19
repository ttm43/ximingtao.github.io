import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Presentation, X } from "lucide-react";

const slideSelectors = [
  ".hero-section",
  ".intro-section",
  ".metric-band",
  ".systems-section",
  ".case-hero",
  ".demo-section",
  ".problem-stage",
  ".system-stage",
  ".architecture-stage",
  ".boundary-stage",
  ".risk-stage",
  ".understanding-stage",
  ".fallback-stage",
  ".before-stage",
  ".dataset-stage",
  ".cost-stage",
  ".resume-hero",
  ".resume-section",
];

function getSlides() {
  return slideSelectors.flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector)));
}

export default function PresentationMode() {
  const [enabled, setEnabled] = useState(false);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("demo") === "1") setEnabled(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("presentation-mode", enabled);
    const slides = getSlides();
    setCount(slides.length);
    if (enabled && slides[0]) slides[0].scrollIntoView({ behavior: "smooth", block: "start" });
    return () => document.body.classList.remove("presentation-mode");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "Escape") setEnabled(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [enabled, index]);

  function go(delta: number) {
    const slides = getSlides();
    const next = Math.max(0, Math.min(slides.length - 1, index + delta));
    setIndex(next);
    slides[next]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (!enabled) {
    return (
      <button className="presentation-toggle" type="button" onClick={() => setEnabled(true)}>
        <Presentation size={15} />
        Presentation Mode
      </button>
    );
  }

  return (
    <div className="presentation-controls" aria-label="Presentation controls">
      <button type="button" onClick={() => go(-1)} aria-label="Previous section">
        <ChevronLeft size={16} />
      </button>
      <span>
        {String(index + 1).padStart(2, "0")} / {String(Math.max(1, count)).padStart(2, "0")}
      </span>
      <button type="button" onClick={() => go(1)} aria-label="Next section">
        <ChevronRight size={16} />
      </button>
      <button type="button" onClick={() => setEnabled(false)} aria-label="Exit presentation mode">
        <X size={16} />
      </button>
    </div>
  );
}
