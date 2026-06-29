/* =====================================================================
   Akshathaa Gopalakrishna, portfolio (one-page React app)

   HOW TO EDIT
   - Copy text lives right here in the JSX, grouped by section.
   - Colors / spacing / fonts live in src/index.css (the :root tokens).
   - Project screenshots: see the <Shot/> components below, swap the
     placeholder for an <img src="..."/> once you have screenshots.
   - Résumé file: place AkshathaaResume.pdf in the /public folder so it
     is served at /AkshathaaResume.pdf (the Download buttons point there).
   ===================================================================== */

const RESUME_PATH = '/AkshathaaResume.pdf' // <-- put the PDF in /public

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
]

// ── Placeholder image slot. Replace the inner content with:
//      <img src="/your-screenshot.png" alt="..." />
//    Put the image in /public and reference it as /your-screenshot.png
function Shot({ label, side }) {
  return (
    <div className={`shot ${side === 'left' ? 'shot--left' : ''}`}>
      {/* TODO: replace with <img src="/projects/xxx.png" alt={label} /> */}
      <span>[ screenshot ]<br />{label}</span>
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <a className="brand" href="#top">Akshathaa Gopalakrishna</a>
        <nav className="nav">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
          <a className="nav__cta" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="wrap hero">
      <div className="badge">
        <span className="dot" />
        AI Operations Builder · Product Ops · Workflow Automation
      </div>
      <h1>I build systems that help operations teams move faster.</h1>
      <p className="hero__lede">
        I'm an operations and product-ops professional who uses AI to fix the slow parts of
        a business, automating manual work, cleaning up intake and KPIs, and turning
        how-we-do-it knowledge into process anyone can run. Tools that ship and get used,
        not demos.
      </p>
      <div className="hero__actions">
        <a className="btn btn--primary" href="#projects">View projects</a>
        <a className="btn btn--ghost" href={RESUME_PATH} download>Download résumé</a>
        <a className="btn btn--ghost" href="mailto:akshathaagopalakrishna@gmail.com">Contact me</a>
        <a className="btn btn--ghost" href="https://github.com/Akshathaa140301" target="_blank" rel="noopener">GitHub</a>
      </div>

      <div className="stats">
        <div className="stat"><div className="stat__num">60%</div><div className="stat__label">Less manual processing time</div></div>
        <div className="stat"><div className="stat__num">40%</div><div className="stat__label">Data-quality gap surfaced &amp; fixed</div></div>
        <div className="stat"><div className="stat__num">2</div><div className="stat__label">Shipped operations tools</div></div>
        <div className="stat"><div className="stat__num">M.S.</div><div className="stat__label">Engineering Management, Northeastern</div></div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section section--line section--surface">
      <div className="wrap about about__grid">
        <div>
          <div className="eyebrow">About</div>
          <h2 className="about__title">I make operations measurable, repeatable, and faster.</h2>
        </div>
        <div>
          <p>
            I hold a Master's in Engineering Management from Northeastern University and built my
            operations chops at <strong>Boston Metal</strong> and <strong>Tata Elxsi</strong>. I
            work where process, data, and product overlap: the spreadsheets, tribal knowledge, and
            manual handoffs a business quietly runs on. I turn them into systems a team can trust.
          </p>
          <p>
            I use AI the way a good operator should: to research faster, troubleshoot, document, and
            automate the repetitive steps that slow everyone down. That's how I cut manual processing
            time by 60%, traced a 40% data-quality gap to its root cause, and wrote the SOPs and KPIs
            that keep work consistent and visible.
          </p>
          <p>
            I'm at my best translating between engineering, product, and QA, and shipping the small,
            practical tools that move a number, not a roadmap slide.
          </p>
          <div className="taglist">
            <span className="tag">AI-assisted operations</span>
            <span className="tag">Process improvement</span>
            <span className="tag">Workflow automation</span>
            <span className="tag">Documentation &amp; SOPs</span>
            <span className="tag">Cross-functional execution</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section section--line">
      <div className="wrap">
        <div className="eyebrow">Featured projects</div>
        <h2 className="h2">Practical tools for real operations problems.</h2>

        {/* ---------- Project 1 ---------- */}
        <article className="project">
          {/* Screenshots of the live tool (files live in /public/projects/) */}
          <div className="project__banner project__banner--pair">
            <img src="/projects/ops-triage-input.png" alt="Ops Triage Tool, paste a messy stakeholder request" />
            <img src="/projects/ops-triage-output.png" alt="Ops Triage Tool, triage output with priority, category, owner and recommended next steps" />
          </div>
          <div className="project__body">
            <div className="project__meta">
              <span className="project__num">01</span>
              <span className="project__type">React tool</span>
            </div>
            <h3>Ops Triage Tool</h3>
            <p className="project__lede">
              A React tool that turns a pile of unclear internal requests into a sorted, prioritized
              queue with suggested next steps, so a team stops triaging by hand and starts responding.
            </p>

            <div className="ps-blocks">
              <div>
                <div className="ps-label">Problem</div>
                <p>Ops teams get unclear requests and waste time manually sorting and prioritizing them.</p>
              </div>
              <div>
                <div className="ps-label">Solution</div>
                <p>A simple triage tool that categorizes each issue, assigns urgency, and gives clear next-step guidance.</p>
              </div>
              <div>
                <div className="ps-label">How it works</div>
                <p>A rule-based first pass handles the clear-cut requests; anything ambiguous is routed to an LLM that classifies it against a priority rubric and drafts the next steps, so the simple cases stay fast and cheap, and only the hard ones use a model.</p>
              </div>
            </div>

            <div className="feature-head">Features</div>
            <ul className="feature-list">
              <li>Request classification</li>
              <li>Priority assignment</li>
              <li>Suggested next steps</li>
              <li>Flags low-confidence input for review</li>
              <li>Simple interface for non-technical teams</li>
            </ul>

            <div className="stack">
              <span>React</span><span>Vite</span><span>JavaScript</span>
              <span>Workflow logic</span><span>OpenAI / Claude API</span>
            </div>

            <div className="value">
              <div className="ps-label">Why this matters</div>
              <p>Manual triage is where requests go to die. Sorting intake automatically means a faster first response, cleaner data going in, fewer dropped tickets, and escalation that's obvious instead of guessed.</p>
            </div>

            <a className="gh-link" href="https://github.com/Akshathaa140301/ops-triage" target="_blank" rel="noopener">
              View on GitHub ↗
            </a>
          </div>
        </article>

        {/* ---------- Project 2 ---------- */}
        <article className="project">
          {/* Screenshot of the live dashboard (file lives in /public/projects/) */}
          <div className="project__banner project__banner--single">
            <img src="/projects/warehouse-brief.png" alt="Warehouse Operations Brief, KPIs, anomalies, and zone-level performance for a distribution center" />
          </div>
          <div className="project__body">
            <div className="project__meta">
              <span className="project__num">02</span>
              <span className="project__type">Data &amp; dashboard</span>
            </div>
            <h3>Warehouse Ops Brief</h3>
            <p className="project__lede">
              An operations dashboard and daily brief for warehouse teams that watches a 30-day
              dataset for the productivity, safety, and congestion problems leaders usually hear
              about a day too late, then explains what changed in plain language.
            </p>

            <div className="ps-blocks">
              <div>
                <div className="ps-label">Problem</div>
                <p>Warehouse leaders need early visibility into productivity drops, safety spikes, dock congestion, and shift-level issues.</p>
              </div>
              <div>
                <div className="ps-label">Solution</div>
                <p>A synthetic operations dataset with anomaly detection and a daily brief that flags what needs attention.</p>
              </div>
              <div>
                <div className="ps-label">How it works</div>
                <p>Thresholds and 7-day baselines compute the anomalies in code, so the numbers stay deterministic and auditable, then an LLM turns those flagged metrics into a plain-language brief a supervisor can read in a minute.</p>
              </div>
            </div>

            <div className="feature-head">Features</div>
            <ul className="feature-list">
              <li>30-day simulated warehouse operations dataset</li>
              <li>Zone- and shift-level KPI tracking</li>
              <li>Exception detection for productivity, safety &amp; congestion</li>
              <li>Daily brief summarizing what changed and what needs attention</li>
            </ul>

            <div className="stack">
              <span>Python</span><span>SQL-style analysis</span><span>Power BI thinking</span>
              <span>KPI design</span><span>AI-assisted summaries</span>
            </div>

            <div className="value">
              <div className="ps-label">Why this matters</div>
              <p>The expensive warehouse problems are the ones spotted late. Catching a productivity or safety dip a day earlier, without anyone hand-building a report, is the difference between a quick fix and a bad week.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section section--line section--surface">
      <div className="wrap">
        <div className="eyebrow">Experience</div>
        <h2 className="h2">Where I've done the work.</h2>

        <div className="exp">
          <div className="exp__row exp__row--line">
            <div className="exp__head">
              <h3>Boston Metal</h3>
              <div className="exp__role">Product Operations &amp; Quality Management Co-op</div>
            </div>
            <ul className="exp__list">
              <li>Reduced manual processing time by <strong>60%</strong> by streamlining and partly automating recurring operational workflows.</li>
              <li>Identified a <strong>40%</strong> data-quality gap through root-cause analysis and drove the fix.</li>
              <li>Built SOPs and documentation systems to keep cross-team processes consistent.</li>
              <li>Tracked KPIs across teams and worked closely with engineering, product, and QA.</li>
              <li>Used AI tools to research, troubleshoot, and automate documentation and recurring workflows, compounding the time saved above.</li>
            </ul>
          </div>

          <div className="exp__row">
            <div className="exp__head">
              <h3>Tata Elxsi</h3>
              <div className="exp__role">Technical Product Management Intern</div>
            </div>
            <ul className="exp__list">
              <li>Owned requirements, specs, and process docs that kept engineering and stakeholders working from one source of truth.</li>
              <li>Translated dense technical detail into specs non-technical stakeholders could actually act on.</li>
              <li>Kept delivery aligned by tracking progress and flagging slippage across teams early.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const SKILL_GROUPS = [
  { title: 'AI & Automation', items: ['OpenAI API', 'Claude', 'ChatGPT', 'LangChain', 'Python automation', 'Prompt engineering', 'Workflow automation', 'Zapier', 'n8n'] },
  { title: 'Operations & Process', items: ['Process improvement', 'SOP development', 'Root-cause analysis', 'KPI tracking', 'Process documentation'] },
  { title: 'Analytics & Reporting', items: ['SQL', 'Power BI', 'Excel', 'Dashboards', 'KPI design'] },
  { title: 'Tools & Collaboration', items: ['Jira', 'Confluence', 'Airtable', 'Zendesk', 'Notion', 'Asana', 'Git', 'Google Workspace'] },
]

function Skills() {
  return (
    <section id="skills" className="section section--line">
      <div className="wrap">
        <div className="eyebrow">Skills</div>
        <h2 className="h2">The toolkit I work with.</h2>
        <div className="skills__grid">
          {SKILL_GROUPS.map((g) => (
            <div className="skill-card" key={g.title}>
              <h3>{g.title}</h3>
              <div className="chips">
                {g.items.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section section--line contact">
      <div className="wrap">
        <div className="eyebrow">Get in touch</div>
        <h2>Let's build operations that actually run.</h2>
        <p className="contact__lede">
          Open to roles in AI operations, product operations, business operations, and workflow
          automation, remote or anywhere in the U.S. The fastest way to reach me is email.
        </p>

        <div className="contact__actions">
          <a className="btn btn--ondark-primary" href="mailto:akshathaagopalakrishna@gmail.com">Email me</a>
          <a className="btn btn--ondark-ghost" href={RESUME_PATH} download>Download résumé</a>
        </div>

        <div className="contact__cards">
          <a className="contact__card" href="mailto:akshathaagopalakrishna@gmail.com">
            <div className="k">Email</div>
            <div className="v">akshathaagopalakrishna@gmail.com</div>
          </a>
          <a className="contact__card" href="https://linkedin.com/in/akshathaa-gopalakrishna" target="_blank" rel="noopener">
            <div className="k">LinkedIn</div>
            <div className="v">in/akshathaa-gopalakrishna</div>
          </a>
          <a className="contact__card" href="https://github.com/Akshathaa140301" target="_blank" rel="noopener">
            <div className="k">GitHub</div>
            <div className="v">github.com/Akshathaa140301</div>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="footer__name">Akshathaa Gopalakrishna</span>
        <span className="footer__meta">Boston, MA · Built with React + Vite</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
