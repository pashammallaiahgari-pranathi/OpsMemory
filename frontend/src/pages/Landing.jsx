import React, { useEffect, useState } from "react";

export default function Landing({ onEnterDashboard }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToDashboard = () => {
    if (onEnterDashboard) {
      onEnterDashboard();
    } else {
      window.location.hash = "dashboard";
    }
  };

  return (
    <div className="landing-page">

      {/* ================= GLOBAL STYLES ================= */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #060711;
          color: white;
        }

        button {
          font-family: inherit;
        }

        .landing-page {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 15% 20%, rgba(105, 70, 255, .14), transparent 30%),
            radial-gradient(circle at 85% 15%, rgba(0, 210, 255, .09), transparent 28%),
            #060711;
        }

        /* ================= NAVBAR ================= */

        .landing-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 76px;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: rgba(6,7,17,.55);
          backdrop-filter: blur(20px);
          transition: .3s ease;
        }

        .landing-nav.scrolled {
          background: rgba(6,7,17,.9);
          box-shadow: 0 10px 40px rgba(0,0,0,.25);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .brand-logo {
          width: 42px;
          height: 42px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          font-size: 21px;
          font-weight: 900;
          background: linear-gradient(135deg, #7c4dff, #35d5ff);
          box-shadow:
            0 0 25px rgba(124,77,255,.4),
            inset 0 1px rgba(255,255,255,.35);
        }

        .brand-name {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -.5px;
        }

        .brand-sub {
          color: #777b92;
          font-size: 8px;
          letter-spacing: 2px;
          margin-top: 2px;
        }

        .nav-links {
          display: flex;
          gap: 34px;
          align-items: center;
        }

        .nav-links a {
          color: #9a9daf;
          text-decoration: none;
          font-size: 13px;
          transition: .2s ease;
        }

        .nav-links a:hover {
          color: white;
        }

        .nav-login {
          padding: 10px 18px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.04);
          color: white;
          border-radius: 10px;
          cursor: pointer;
          transition: .25s;
        }

        .nav-login:hover {
          background: rgba(255,255,255,.1);
        }

        /* ================= HERO ================= */

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 140px 7% 100px;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          opacity: .18;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 55px 55px;
          mask-image: radial-gradient(circle, black, transparent 75%);
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          pointer-events: none;
        }

        .orb.one {
          width: 300px;
          height: 300px;
          background: rgba(115,65,255,.18);
          top: 15%;
          left: -100px;
          animation: floatOne 8s ease-in-out infinite;
        }

        .orb.two {
          width: 250px;
          height: 250px;
          background: rgba(0,205,255,.12);
          right: -70px;
          top: 25%;
          animation: floatTwo 9s ease-in-out infinite;
        }

        @keyframes floatOne {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(50px,35px); }
        }

        @keyframes floatTwo {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-40px,50px); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1050px;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(75,230,180,.2);
          background: rgba(38,200,150,.07);
          color: #5ee6bd;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 25px;
          animation: fadeUp .8s ease both;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #40e5ac;
          box-shadow: 0 0 12px #40e5ac;
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: .45; transform: scale(.7); }
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(48px, 7vw, 88px);
          line-height: .98;
          letter-spacing: -5px;
          font-weight: 850;
          animation: fadeUp .8s .1s ease both;
        }

        .gradient-text {
          background: linear-gradient(
            100deg,
            #ffffff 10%,
            #9e82ff 45%,
            #55dfff 80%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-description {
          max-width: 680px;
          margin: 27px auto 0;
          color: #969aae;
          font-size: 17px;
          line-height: 1.7;
          animation: fadeUp .8s .2s ease both;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-buttons {
          margin-top: 38px;
          display: flex;
          justify-content: center;
          gap: 13px;
          animation: fadeUp .8s .3s ease both;
        }

        .primary-btn {
          border: none;
          color: white;
          padding: 15px 25px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 750;
          background: linear-gradient(135deg, #7148ff, #9b61ff);
          box-shadow:
            0 12px 35px rgba(113,72,255,.3),
            inset 0 1px rgba(255,255,255,.3);
          transition: .25s ease;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow:
            0 18px 45px rgba(113,72,255,.42),
            inset 0 1px rgba(255,255,255,.3);
        }

        .secondary-btn {
          padding: 14px 24px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.035);
          color: #e4e5ed;
          cursor: pointer;
          font-weight: 650;
          transition: .25s;
        }

        .secondary-btn:hover {
          background: rgba(255,255,255,.08);
          transform: translateY(-2px);
        }

        /* ================= FLOATING SYSTEM CARD ================= */

        .system-card {
          width: min(900px, 90vw);
          margin: 75px auto 0;
          padding: 18px;
          border-radius: 20px;
          background: rgba(17,18,31,.72);
          border: 1px solid rgba(255,255,255,.1);
          box-shadow:
            0 30px 100px rgba(0,0,0,.45),
            0 0 80px rgba(103,68,255,.08);
          backdrop-filter: blur(20px);
          animation: cardFloat 6s ease-in-out infinite;
        }

        @keyframes cardFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }

        .window-bar {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 3px 5px 15px;
        }

        .window-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #44465b;
        }

        .window-title {
          margin-left: 8px;
          color: #666a80;
          font-size: 10px;
        }

        .system-content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
        }

        .mini-card {
          padding: 20px;
          min-height: 120px;
          border-radius: 14px;
          background: rgba(255,255,255,.025);
          border: 1px solid rgba(255,255,255,.06);
          text-align: left;
        }

        .mini-label {
          color: #74788d;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .mini-number {
          margin-top: 10px;
          font-size: 30px;
          font-weight: 800;
        }

        .mini-green {
          color: #50e0b1;
        }

        .mini-purple {
          color: #a487ff;
        }

        .mini-blue {
          color: #5bdcff;
        }

        /* ================= FEATURES ================= */

        .section {
          position: relative;
          padding: 120px 7%;
        }

        .section-heading {
          text-align: center;
          max-width: 700px;
          margin: auto;
        }

        .eyebrow {
          color: #987cff;
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .section-heading h2 {
          font-size: clamp(35px, 5vw, 54px);
          letter-spacing: -2px;
          margin: 14px 0;
        }

        .section-heading p {
          color: #85899c;
          line-height: 1.7;
        }

        .feature-grid {
          max-width: 1150px;
          margin: 60px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature-card {
          position: relative;
          overflow: hidden;
          min-height: 230px;
          padding: 28px;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 18px;
          background: linear-gradient(
            145deg,
            rgba(255,255,255,.045),
            rgba(255,255,255,.015)
          );
          transition: .35s ease;
        }

        .feature-card::before {
          content: "";
          position: absolute;
          width: 130px;
          height: 130px;
          right: -60px;
          top: -60px;
          border-radius: 50%;
          background: rgba(127,89,255,.12);
          filter: blur(15px);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(137,105,255,.3);
          box-shadow: 0 25px 60px rgba(0,0,0,.25);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(124,83,255,.12);
          border: 1px solid rgba(124,83,255,.2);
          font-size: 22px;
          margin-bottom: 22px;
        }

        .feature-card h3 {
          margin: 0 0 10px;
          font-size: 18px;
        }

        .feature-card p {
          color: #85899c;
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        /* ================= CTA ================= */

        .cta {
          max-width: 1150px;
          margin: 40px auto 100px;
          padding: 70px 40px;
          text-align: center;
          border-radius: 25px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 0%, rgba(122,78,255,.25), transparent 55%),
            rgba(18,19,33,.8);
          border: 1px solid rgba(255,255,255,.08);
        }

        .cta h2 {
          margin: 0;
          font-size: clamp(32px, 5vw, 52px);
          letter-spacing: -2px;
        }

        .cta p {
          color: #888c9f;
          margin: 17px auto 30px;
          max-width: 570px;
          line-height: 1.7;
        }

        /* ================= FOOTER ================= */

        .footer {
          border-top: 1px solid rgba(255,255,255,.06);
          padding: 35px 7%;
          display: flex;
          justify-content: space-between;
          color: #666a7c;
          font-size: 11px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 850px) {
          .nav-links {
            display: none;
          }

          .system-content,
          .feature-grid {
            grid-template-columns: 1fr;
          }

          .system-card {
            margin-top: 45px;
          }

          .hero h1 {
            letter-spacing: -3px;
          }
        }

        @media (max-width: 550px) {
          .landing-nav {
            padding: 0 20px;
          }

          .hero {
            padding-left: 20px;
            padding-right: 20px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .footer {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      {/* ================= NAVBAR ================= */}

      <nav className={`landing-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="brand">
          <div className="brand-logo">✦</div>

          <div>
            <div className="brand-name">OpsMemory</div>
            <div className="brand-sub">INCIDENT INTELLIGENCE</div>
          </div>
        </div>

        <div className="nav-links">
          <a href="#features">Platform</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>

          <button className="nav-login" onClick={goToDashboard}>
            Open Workspace
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-grid"></div>

        <div className="orb one"></div>
        <div className="orb two"></div>

        <div className="hero-content">

          <div className="status-pill">
            <span className="status-dot"></span>
            AI-POWERED OPERATIONS MEMORY
          </div>

          <h1>
            Turn incidents into
            <br />
            <span className="gradient-text">
              organizational intelligence.
            </span>
          </h1>

          <p className="hero-description">
            OpsMemory helps engineering teams remember what happened,
            understand why it happened, and reuse proven solutions
            when the next incident arrives.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={goToDashboard}>
              Enter OpsMemory →
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Platform
            </button>
          </div>

          {/* ================= PRODUCT PREVIEW ================= */}

          <div className="system-card">

            <div className="window-bar">
              <span className="window-dot"></span>
              <span className="window-dot"></span>
              <span className="window-dot"></span>
              <span className="window-title">
                OpsMemory / Engineering Workspace
              </span>
            </div>

            <div className="system-content">

              <div className="mini-card">
                <div className="mini-label">
                  Active Incidents
                </div>

                <div className="mini-number">
                  03
                </div>

                <div className="mini-green">
                  ↑ 2.4%
                </div>
              </div>

              <div className="mini-card">
                <div className="mini-label">
                  Memory Events
                </div>

                <div className="mini-number">
                  1,284
                </div>

                <div className="mini-purple">
                  ↑ 18.7%
                </div>
              </div>

              <div className="mini-card">
                <div className="mini-label">
                  Resolution Rate
                </div>

                <div className="mini-number">
                  96.8%
                </div>

                <div className="mini-blue">
                  Operational
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="section" id="features">

        <div className="section-heading">

          <div className="eyebrow">
            ONE OPERATIONS MEMORY
          </div>

          <h2>
            Your team's knowledge
            <br />
            should never disappear.
          </h2>

          <p>
            OpsMemory connects incidents, organizational memory,
            previous resolutions and AI analysis into one intelligent
            engineering workspace.
          </p>

        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              ⚡
            </div>

            <h3>
              Incident Intelligence
            </h3>

            <p>
              Capture incidents and automatically transform them
              into structured engineering knowledge.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              ◉
            </div>

            <h3>
              Organizational Memory
            </h3>

            <p>
              Search previous incidents and discover what your
              engineering team already learned.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              ✦
            </div>

            <h3>
              AI Root-Cause Analysis
            </h3>

            <p>
              Give engineers useful context by connecting current
              incidents with previous observations and resolutions.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              ↗
            </div>

            <h3>
              Proven Resolutions
            </h3>

            <p>
              Surface solutions that worked before instead of
              forcing engineers to solve the same problem again.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              ◌
            </div>

            <h3>
              Engineering Timeline
            </h3>

            <p>
              Build a historical timeline of incidents, actions,
              observations and successful fixes.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              ⌁
            </div>

            <h3>
              Team Learning
            </h3>

            <p>
              Turn individual troubleshooting experiences into
              reusable knowledge for the entire engineering team.
            </p>

          </div>

        </div>

      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="section" id="how-it-works">

        <div className="section-heading">

          <div className="eyebrow">
            HOW OPSMEMORY WORKS
          </div>

          <h2>
            From incident
            <br />
            to intelligence.
          </h2>

        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              01
            </div>

            <h3>
              Report
            </h3>

            <p>
              An engineer reports an operational incident such as
              an API failure, database issue or service outage.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              02
            </div>

            <h3>
              Remember
            </h3>

            <p>
              OpsMemory searches organizational memory for related
              incidents, observations and previously successful actions.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              03
            </div>

            <h3>
              Resolve
            </h3>

            <p>
              Engineers receive contextual recommendations and
              preserve the final resolution for future incidents.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta" id="about">

        <div className="eyebrow">
          BUILT FOR ENGINEERING TEAMS
        </div>

        <h2>
          Stop solving the same
          <br />
          incident twice.
        </h2>

        <p>
          Build an engineering organization that remembers,
          learns and gets faster with every incident.
        </p>

        <button className="primary-btn" onClick={goToDashboard}>
          Launch OpsMemory →
        </button>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>
          © 2026 OpsMemory
        </div>

        <div>
          AI-powered incident intelligence
        </div>

      </footer>

    </div>
  );
}