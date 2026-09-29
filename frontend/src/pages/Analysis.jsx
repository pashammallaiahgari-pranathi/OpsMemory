import "./Landing.css";

function Landing({ onGetStarted }) {
  return (
    <div className="landing-page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">◈</div>
          <span>OpsMemory</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">Why OpsMemory</a>
        </div>

        <button className="nav-button" onClick={onGetStarted}>
          Get Started →
        </button>
      </nav>

      {/* Hero */}
      <main className="hero">

        <div className="hero-content">

          <div className="status-badge">
            <span className="pulse-dot"></span>
            AI-POWERED INCIDENT MEMORY
          </div>

          <h1>
            Don't just fix incidents.
            <span> Remember what they taught you.</span>
          </h1>

          <p>
            OpsMemory transforms production incidents into searchable
            organizational intelligence — helping engineering teams
            recall what happened, why it happened, and how it was solved.
          </p>

          <div className="hero-buttons">
            <button className="primary-button" onClick={onGetStarted}>
              Analyze an Incident
              <span>→</span>
            </button>

            <a href="#how-it-works" className="secondary-button">
              See How It Works
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>∞</strong>
              <span>Incident Memory</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Pattern Recall</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Knowledge Access</span>
            </div>
          </div>

        </div>

        {/* Animated Memory Core */}
        <div className="memory-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="memory-core">
            <div className="core-inner">
              <span>◈</span>
              <small>MEMORY</small>
            </div>
          </div>

          <div className="floating-node node-one">
            <span>⚡</span>
            Incident
          </div>

          <div className="floating-node node-two">
            <span>◉</span>
            Pattern
          </div>

          <div className="floating-node node-three">
            <span>✦</span>
            Solution
          </div>

          <div className="floating-node node-four">
            <span>⌁</span>
            Insight
          </div>

        </div>

      </main>

      {/* How it works */}
      <section id="how-it-works" className="section">

        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Turn incidents into institutional memory.</h2>
          <p>
            Every incident becomes another piece of knowledge your
            engineering team can use in the future.
          </p>
        </div>

        <div className="process-grid">

          <div className="process-card">
            <div className="process-number">01</div>
            <div className="process-icon">⚡</div>
            <h3>Capture</h3>
            <p>
              Store incidents, observations, causes and resolutions
              as reusable engineering knowledge.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">02</div>
            <div className="process-icon">⌕</div>
            <h3>Recall</h3>
            <p>
              Search previous incidents and discover similar situations
              within seconds.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">03</div>
            <div className="process-icon">✦</div>
            <h3>Understand</h3>
            <p>
              Connect historical evidence and identify patterns across
              previous incidents.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">04</div>
            <div className="process-icon">→</div>
            <h3>Resolve</h3>
            <p>
              Use previous successful resolutions to guide the next
              investigation.
            </p>
          </div>

        </div>

      </section>

      {/* Features */}
      <section id="features" className="section features-section">

        <div className="section-heading">
          <span>CORE CAPABILITIES</span>
          <h2>More than incident tracking.</h2>
          <p>
            OpsMemory creates a continuous memory layer for engineering teams.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card large-card">
            <div className="feature-icon">🧠</div>
            <h3>Persistent Engineering Memory</h3>
            <p>
              Preserve valuable incident knowledge instead of letting
              important lessons disappear after the incident is closed.
            </p>
            <div className="feature-line"></div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔎</div>
            <h3>Semantic Recall</h3>
            <p>
              Find related incidents even when the wording isn't identical.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚙</div>
            <h3>Evidence-Based Insights</h3>
            <p>
              Connect previous observations and resolutions to the current
              investigation.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Faster Response</h3>
            <p>
              Reduce repeated troubleshooting by learning from what the team
              already solved.
            </p>
          </div>

        </div>

      </section>

      {/* Why OpsMemory */}
      <section id="about" className="why-section">

        <div className="why-content">
          <span>WHY OPSMEMORY</span>

          <h2>
            Every incident should make
            <br />
            your team smarter.
          </h2>

          <p>
            Engineering teams solve thousands of problems, but the knowledge
            gained from those problems often gets buried in tickets, chats,
            documents and individual memory.
          </p>

          <button className="primary-button" onClick={onGetStarted}>
            Enter OpsMemory →
          </button>
        </div>

        <div className="memory-flow">

          <div className="flow-item">
            <span>01</span>
            <strong>Incident</strong>
          </div>

          <div className="flow-arrow">↓</div>

          <div className="flow-item">
            <span>02</span>
            <strong>Memory</strong>
          </div>

          <div className="flow-arrow">↓</div>

          <div className="flow-item">
            <span>03</span>
            <strong>Pattern</strong>
          </div>

          <div className="flow-arrow">↓</div>

          <div className="flow-item highlight">
            <span>04</span>
            <strong>Better Resolution</strong>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer>
        <div className="brand">
          <div className="brand-icon">◈</div>
          <span>OpsMemory</span>
        </div>

        <p>
          AI-powered incident memory and response system.
        </p>

        <span className="footer-copy">
          Built for modern engineering teams.
        </span>
      </footer>

    </div>
  );
}

export default Landing;