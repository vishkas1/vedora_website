import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import logo from "@/assets/vedora-logo.png";
import mark from "@/assets/vedora-mark.png.asset.json";
import { BookingDialog } from "@/components/site";

export function Arrow() {
  return (
    <svg className="arrow" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BpHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    on();
    window.addEventListener("scroll", on, { passive: true });
    document.addEventListener("keydown", key);
    return () => { window.removeEventListener("scroll", on); document.removeEventListener("keydown", key); };
  }, []);
  const close = () => setOpen(false);
  return (
    <header className={`bp-header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav">
        <Link className="brand" to="/" aria-label="Vedora home"><img src={logo} alt="Vedora" /></Link>
        <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
        <nav className={`nav-links${open ? " open" : ""}`} aria-label="Main">
          <Link to="/" onClick={close}>Home</Link>
          <Link to="/services" onClick={close}>Services</Link>
          <Link to="/approach" onClick={close}>Approach</Link>
          <Link to="/about" onClick={close}>About</Link>
          <Link to="/testimonials" onClick={close}>Testimonials</Link>
          <Link className="btn btn-primary btn-sm" to="/contact" onClick={close}>Get in touch</Link>
        </nav>
      </div>
    </header>
  );
}

export function BpFooter() {
  return (
    <footer className="bp-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <img src={logo} alt="Vedora" />
            <p className="foot-about">Practical AI consultancy and training for small and medium businesses in Ireland.</p>
          </div>
          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">AI Readiness Assessment</Link></li>
              <li><Link to="/services">Training &amp; workshops</Link></li>
              <li><Link to="/services">Adoption support</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/approach">How we work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Vedora Ltd (placeholder) · CRO no. 000000 · Registered address placeholder</span>
          <span>Privacy · Cookies</span>
        </div>
      </div>
    </footer>
  );
}

export function BpShell({ children }: { children: (book: () => void) => ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bp">
      <BpHeader />
      <main>{children(() => setOpen(true))}</main>
      <BpFooter />
      <BookingDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export function PageHead({ label, title, lede }: { label: string; title: string; lede?: string }) {
  return (
    <section className="wrap page-head">
      <div className="label">{label}</div>
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </section>
  );
}

export function Hero({ book }: { book: () => void }) {
  const rows: [string, string, "low" | "med"][] = [
    ["Drafting quotes from site notes", "~6 hrs / wk", "low"],
    ["Matching supplier invoices", "~4 hrs / wk", "med"],
    ["Triage of customer emails", "~3 hrs / wk", "low"],
    ["Monthly management summary", "~2 hrs / mo", "low"],
  ];
  return (
    <>
      <section className="wrap hero">
        <div>
          <div className="label">AI consultancy for Irish SMEs</div>
          <h1>Practical AI, adopted properly.</h1>
          <p className="lede hero-lede">We help your business work out where AI genuinely fits, train your people to use it well, and put it to work safely.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={book}>Book a free consultation <Arrow /></button>
            <Link className="text-link" to="/approach"><span>See how we work</span> <Arrow /></Link>
          </div>
        </div>
        <div className="hero-panel" role="img" aria-label="Example page from a Vedora AI Readiness Report">
          <span className="panel-tag">What you receive · sample report page</span>
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
      </section>
    </>
  );
}

const services = [
  { n: "01", t: "AI Readiness Assessment", p: "We look at how your business actually runs, then give you a written report: where AI could save time or money, what it would cost, the risks to watch, and a prioritised roadmap.", m: [["You get", "Written report + roadmap"], ["Typically", "2 to 3 weeks"]] },
  { n: "02", t: "Training & workshops", p: "Hands-on sessions built around your team's real work, from a half-day introduction to multi-session programmes for people ready to build their own tools.", m: [["Formats", "Half day to multi-session"], ["Delivered", "On site or online"]] },
  { n: "03", t: "Adoption & build support", p: "We help you put the roadmap into practice: setting up the right tools, building small automations and internal apps, and checking that they keep paying their way.", m: [["You get", "Working tools + review"], ["Engagement", "Project or retainer"]] },
];

export function ServicesSec({ head = true }: { head?: boolean }) {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        {head && (
          <div className="sec-head">
            <div className="label">What we do</div>
            <h2 className="h-section">Three ways we help, depending on where you are today.</h2>
            <p className="lede">Most businesses don't need an AI strategy deck. They need to know which tasks AI can take off their plate, and the confidence to do it.</p>
          </div>
        )}
        <ol className="services">
          {services.map((s) => (
            <li className="service" key={s.n}>
              <div><span className="service-num">{s.n}</span><h3>{s.t}</h3></div>
              <div>
                <p>{s.p}</p>
                <dl className="service-meta">{s.m.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepsFlow({ steps }: { steps: { w: string; t: string; p?: string; letter?: string }[] }) {
  return (
    <div className="steps-shell">
      <ol className="steps-flow">
        {steps.map((s) => (
            <li className="step-card" key={s.w}>
              <span className="step-when">{s.w}</span>
              <div className="ora-head">
                {s.letter && <span className="ora-letter" aria-hidden="true">{s.letter}</span>}
                <div className="ora-meta">
                  <h3>{s.t}</h3>
                </div>
              </div>
              {s.p && <p>{s.p}</p>}
            </li>
        ))}
      </ol>
    </div>
  );
}

export function ApproachSec({ head = true }: { head?: boolean }) {
  const steps = [
    { w: "Readiness", letter: "R", t: "Understand where you are", p: "A conversation and a structured assessment of your processes, data and team, so recommendations fit your business." },
    { w: "Adoption", letter: "A", t: "Start with quick wins", p: "Train the team and introduce one or two well-chosen tools where the payoff is clear, before committing to anything bigger." },
    { w: "Optimisation", letter: "O", t: "Measure and refine", p: "Review what's working, retire what isn't, and extend AI into the next area of the business when you're ready." },
  ];
  return (
    <section className="sec sec-alt" id="approach">
      <div className="wrap">
        {head && (
          <div className="sec-head">
            <div className="label">How we work</div>
            <h2 className="h-section">Start small, prove value, then build.</h2>
            <p className="lede">A simple path that keeps commitment low until the payoff is clear.</p>
          </div>
        )}
        <StepsFlow steps={steps} />
      </div>
    </section>
  );
}

export function AboutSec({ head = true }: { head?: boolean }) {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        {head && (
          <div className="sec-head">
            <div className="label">Who you'll work with</div>
            <h2 className="h-section">A small team, and the same people from first call to handover.</h2>
          </div>
        )}
        <div className="people">
          {["AB", "CD"].map((i) => (
            <article className="person" key={i}>
              <div className="avatar" aria-hidden="true">{i}</div>
              <div>
                <h3>Director name</h3>
                <div className="role">Director · role placeholder</div>
                <p>Two or three lines on background and what this person leads on. Photo replaces the initials.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrinciplesSec() {
  const f = [
    ["Model-agnostic", "We don't resell any AI platform. We recommend whatever suits the job, including options that run entirely on your own machines."],
    ["Your team stays in control", "We teach rather than create dependency. The aim is a team that can run, adapt and extend its own tools."],
    ["Safety built in", "Data protection, GDPR and responsible-use guidance are part of every engagement, not an afterthought."],
  ];
  return (
    <section className="sec sec-ruled" id="principles">
      <div className="wrap">
        <div className="sec-head"><h2 className="h-section">Advice you can trust, and skills your team keeps.</h2></div>
        <dl className="facts">{f.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl>
      </div>
    </section>
  );
}

export function CtaSec({ book }: { book: () => void }) {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="cta-panel">
          <div>
            <h2 className="h-section">Not sure where AI fits in your business?</h2>
            <p>Start with a free, no-obligation conversation. We'll tell you honestly whether we can help.</p>
          </div>
          <button className="btn btn-light" onClick={book}>Book a free consultation <Arrow /></button>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { q: "The free AI intro workshop was the perfect way in. No sales pitch, just clear explanations we could actually follow. We booked the assessment the same week.", n: "Marie O'Connor", r: "Owner, retail business, Cork" },
  { q: "The assessment told us the two things worth doing and, just as importantly, the five to skip. That kind of honesty saved us money and a lot of wasted effort.", n: "Declan Byrne", r: "Managing Director, logistics firm, Galway" },
  { q: "Our team uses what they learned every week. The training was built around our own processes, not a generic slide deck, and it shows.", n: "Aoife Kelly", r: "Operations Manager, professional services, Dublin" },
];

export function TestimonialsSec({ head = true }: { head?: boolean }) {
  return (
    <section className="sec sec-alt" id="testimonials">
      <div className="wrap">
        {head && (
          <div className="sec-head">
            <div className="label">Testimonials</div>
            <h2 className="h-section">What businesses say after working with us.</h2>
          </div>
        )}
        <div className="reviews">
          {reviews.map((t) => (
            <figure className="review" key={t.n}>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>&ldquo;{t.q}&rdquo;</blockquote>
              <figcaption><strong>{t.n}</strong><span>{t.r}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Homepage glimpses ---------- */
function MoreLink({ to, children }: { to: "/services" | "/approach" | "/about" | "/testimonials"; children: ReactNode }) {
  return <Link className="text-link" to={to}><span>{children}</span> <Arrow /></Link>;
}

export function Glimpses() {
  const featured = reviews[1]!;
  const svc = [
    ["01", "AI Readiness Assessment", "A written report and roadmap of where AI fits."],
    ["02", "Training & workshops", "Hands-on sessions built around your team's real work."],
    ["03", "Adoption & build support", "Help putting the roadmap into practice."],
  ];
  const steps: [string, string, string][] = [["Optimisation", "Measure and refine", "O"], ["Readiness", "Understand where you are", "R"], ["Adoption", "Start with quick wins", "A"]];
  return (
    <>
      <section className="sec" id="services">
        <div className="wrap">
          <div className="glimpse-head">
            <div><div className="label">What we do</div><h2 className="h-section">Three ways we help.</h2></div>
            <MoreLink to="/services">Explore our services</MoreLink>
          </div>
          <div className="glimpse-grid">
            {svc.map(([n, t, d]) => (
              <Link to="/services" className="glimpse-card" key={n}>
                <span className="service-num">{n}</span><h3>{t}</h3><p>{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec-alt sec-snug" id="approach">
        <div className="wrap">
          <div className="glimpse-head">
            <div><div className="label">How we work</div><h2 className="h-section">Start small, prove value, then build.</h2></div>
            <MoreLink to="/approach">See our approach</MoreLink>
          </div>
          <StepsFlow steps={steps.map(([w, t, letter]) => ({ w, t, letter }))} />
        </div>
      </section>
      <section className="sec">
        <div className="wrap glimpse-split">
          <div className="glimpse-card static">
            <div className="label">Who you'll work with</div>
            <h3>A small team, and the same people from first call to handover.</h3>
            <p>Independent of any AI vendor, focused on teaching rather than dependency.</p>
            <MoreLink to="/about">Meet the team</MoreLink>
          </div>
          <div className="glimpse-card static">
            <div className="label">Testimonials</div>
            <div className="stars">★★★★★</div>
            <h3>&ldquo;{featured.q}&rdquo;</h3>
            <p>{featured.n}, {featured.r}</p>
            <MoreLink to="/testimonials">Read more reviews</MoreLink>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Detail blocks for dedicated pages ---------- */
export function DetailList({ label, title, items }: { label: string; title: string; items: { t: string; points: string[]; letter?: string }[] }) {
  return (
    <section className="sec sec-ruled">
      <div className="wrap">
        <div className="sec-head"><div className="label">{label}</div><h2 className="h-section">{title}</h2></div>
        <div className="glimpse-grid">
          {items.map((it) => (
            <div className="glimpse-card static" key={it.t}>
              {it.letter ? (
                <div className="ora-head">
                  <span className="ora-letter" aria-hidden="true">{it.letter}</span>
                  <div className="ora-meta">
                    <h3>{it.t}</h3>
                  </div>
                </div>
              ) : (
                <h3>{it.t}</h3>
              )}
              <ul className="ticks">{it.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
