type CaseStudy = {
  number: string;
  title: string;
  summary: string;
  outcome: string;
  href: string;
  tags: string[];
  flow: string[];
};

type Props = {
  cases: CaseStudy[];
  baseUrl: string;
};

export default function SystemCardsInteractive({ cases, baseUrl }: Props) {
  return (
    <div className="systems-grid interactive-systems">
      {cases.map((item) => (
        <a className="system-card" href={`${baseUrl}${item.href}`} key={item.title}>
          <span className="case-number">Case Study {item.number}</span>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <div className="tag-row card-tags">
            {item.tags.slice(0, 4).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="mini-pipeline" aria-label={`${item.title} workflow preview`}>
            {item.flow.slice(0, 5).map((step, index) => (
              <span style={{ transitionDelay: `${index * 70}ms` }} key={step}>
                {step}
              </span>
            ))}
          </div>
          <strong>{item.outcome}</strong>
        </a>
      ))}
    </div>
  );
}
