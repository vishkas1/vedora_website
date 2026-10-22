import { createFileRoute, Link } from "@tanstack/react-router";
import { BpShell, PrinciplesSec, CtaSec, Arrow, PageHead } from "@/components/bp";
import mark from "@/assets/vedora-mark.png.asset.json";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "How we work | Vedora" },
      { name: "description", content: "Optimise first, get ready, then adopt. Vedora's three-step path to practical AI for Irish SMEs." },
      { property: "og:title", content: "How we work | Vedora" },
      { property: "og:description", content: "Optimise first, get ready, then adopt. Vedora's three-step path to practical AI for Irish SMEs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

const steps = [
  {
    id: "optimisation",
    num: "1",
    letter: "O",
    label: "Optimisation",
    title: "Find what's worth improving.",
    intro: "We start with where your business loses time and money, so AI is aimed at real problems and not at hype.",
    happens: ["A first conversation about your goals", "A look at where time and money are lost", "A shortlist of what's worth tackling first"],
    get: "Clear priorities and a shortlist.",
    link: "Free AI Intro Workshop",
  },
  {
    id: "readiness",
    num: "2",
    letter: "R",
    label: "Readiness",
    title: "Get your business ready.",
    intro: "A structured look at your processes, data and team, so recommendations fit your business.",
    happens: ["Structured review of processes, data and team", "A readiness score", "Opportunities ranked with estimated time saved"],
    get: "A written readiness report and roadmap.",
    link: "AI Assessment",
  },
  {
    id: "adoption",
    num: "3",
    letter: "A",
    label: "Adoption",
    title: "Put it to work.",
    intro: "Hands-on training and set-up built around your team's real work, so the change sticks.",
    happens: ["Training for the people who will use it", "One or two well-chosen tools put live", "Quick wins before bigger commitments"],
    get: "A trained team and working workflows.",
    link: "AI Essentials and AI Implementation & Setup",
  },
];

function OraStrip() {
  return (
    <section className="sec ora-strip-sec">
      <div className="wrap">
        <div className="ora-strip">
          {steps.map((s, i) => (
            <div className="ora-strip-item" key={s.id}>
              <a className="ora-strip-card" href={`#${s.id}`}>
                <span className="ora-strip-num">{s.num}</span>
                <span className="ora-letter" aria-hidden="true">{s.letter}</span>
                <span className="ora-strip-label">{s.label}</span>
                <span className="ora-strip-desc">{s.title}</span>
              </a>
              {i < steps.length - 1 && <span className="ora-strip-line" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OraStep({ s, alt }: { s: (typeof steps)[number]; alt: boolean }) {
  return (
    <section className={`sec${alt ? " sec-alt" : ""}`} id={s.id}>
      <div className="wrap ora-step">
        <div className="ora-step-head">
          <span className="ora-letter ora-letter-xl" aria-hidden="true">{s.letter}</span>
          <div>
            <div className="label">{s.letter} · {s.label}</div>
            <h2 className="h-section">{s.title}</h2>
          </div>
        </div>
        <p className="lede">{s.intro}</p>
        <div className="ora-step-body">
          <div className="glimpse-card static">
            <h3>What happens</h3>
            <ul className="ticks">{s.happens.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
          <div className="glimpse-card static">
            <h3>What you get</h3>
            <p>{s.get}</p>
            <div className="ora-step-link">
              <span className="ora-step-link-label">Links to</span>
              <Link className="btn btn-primary btn-sm" to="/services">{s.link} <Arrow /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SampleOutput() {
  const rows: [string, string, "low" | "med"][] = [
    ["Drafting quotes from site notes", "~6 hrs / wk", "low"],
    ["Matching supplier invoices", "~4 hrs / wk", "med"],
    ["Triage of customer emails", "~3 hrs / wk", "low"],
    ["Monthly management summary", "~2 hrs / mo", "low"],
  ];
  return (
    <section className="sec sec-ruled">
      <div className="wrap">
        <div className="sec-head">
          <div className="label">What you receive</div>
          <h2 className="h-section">A sample page from an AI Readiness Report.</h2>
        </div>
        <div className="sample-wrap">
          <div className="hero-panel" role="img" aria-label="Sample page from a Vedora AI Readiness Report">
            <span className="panel-tag">Sample · AI Readiness Report</span>
            <div className="doc" aria-hidden="true">
              <div className="doc-head">
                <img src={mark.url} alt="" style={{ width: 22, height: "auto" }} />
                <strong>AI Readiness Report</strong>
                <span>Sample client · p.4</span>
              </div>
              <div className="doc-score">
                <b>62</b>
                <small>Overall readiness score (out of 100)</small>
                <div className="bar"><i /></div>
              </div>
              <h4>Top opportunities</h4>
              <table><tbody>
                {rows.map(([a, b, c]) => (
                  <tr key={a}><td>{a}</td><td>{b}</td><td><span className={`pill pill-${c}`}>{c === "low" ? "Low effort" : "Medium"}</span></td></tr>
                ))}
              </tbody></table>
              <div className="doc-sign"><span>Reviewed and approved</span><em>Director</em></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <BpShell>
      {(book) => (
        <>
          <PageHead label="How we work" title="Optimise first. Get ready. Then adopt." lede="We start with where your business loses time and money, not with the technology." />
          <OraStrip />
          <OraStep s={steps[0]!} alt={true} />
          <OraStep s={steps[1]!} alt={false} />
          <OraStep s={steps[2]!} alt={true} />
          <SampleOutput />
          <PrinciplesSec />
          {/* <CtaSec book={book} /> */}
        </>
      )}
    </BpShell>
  );
}
