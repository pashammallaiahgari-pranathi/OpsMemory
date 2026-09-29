import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";

const API_URL = "http://127.0.0.1:8000";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  const [activePage, setActivePage] = useState("Dashboard");

  const [incident, setIncident] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentTime, setCurrentTime] = useState(new Date());

  // --------------------------------------------------
  // TIME
  // --------------------------------------------------

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  const greeting = useMemo(() => {
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();

    if (hour < 12) {
      return "Good morning";
    }

    if (hour < 15 || (hour === 15 && minute <= 30)) {
      return "Good afternoon";
    }

    return "Good evening";
  }, [currentTime]);

  // --------------------------------------------------
  // BACKEND API
  // --------------------------------------------------

  const analyzeIncident = async () => {
    if (!incident.trim()) {
      setResult({
        error: "Please describe the incident before analyzing.",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        `${API_URL}/incidents/analyze`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            incident: incident.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Backend returned ${response.status}`
        );
      }

      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error("OpsMemory API Error:", error);

      setResult({
        error:
          "Unable to connect to OpsMemory backend. Make sure FastAPI is running on http://127.0.0.1:8000.",
      });
    } finally {
      setLoading(false);
    }
  };

  const clearIncident = () => {
    setIncident("");
    setResult(null);
  };

  // --------------------------------------------------
  // LANDING PAGE
  // --------------------------------------------------

  if (showLanding) {
    return (
      <Landing
        onEnterDashboard={() => {
          setShowLanding(false);
        }}
      />
    );
  }

  // --------------------------------------------------
  // DASHBOARD
  // --------------------------------------------------

  return (
    <div className="app">

      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        <div className="brand">

          <div className="brand-icon">
            ✦
          </div>

          <div>
            <h1>OpsMemory</h1>

            <span>
              INCIDENT INTELLIGENCE
            </span>
          </div>

        </div>


        <div className="workspace">

          <div className="workspace-avatar">
            O
          </div>

          <div>
            <small>
              WORKSPACE
            </small>

            <strong>
              Engineering Ops
            </strong>
          </div>

          <span className="chevron">
            ⌄
          </span>

        </div>


        <nav>

          <p className="nav-title">
            WORKSPACE
          </p>

          <NavItem
            icon="⌂"
            label="Dashboard"
            active={
              activePage === "Dashboard"
            }
            onClick={() =>
              setActivePage("Dashboard")
            }
          />

          <NavItem
            icon="⚠"
            label="Incidents"
            active={
              activePage === "Incidents"
            }
            onClick={() =>
              setActivePage("Incidents")
            }
          />

          <NavItem
            icon="◉"
            label="Memory"
            active={
              activePage === "Memory"
            }
            onClick={() =>
              setActivePage("Memory")
            }
          />

          <NavItem
            icon="✦"
            label="AI Analysis"
            active={
              activePage === "AI Analysis"
            }
            onClick={() =>
              setActivePage("AI Analysis")
            }
          />

          <p className="nav-title second">
            MANAGEMENT
          </p>

          <NavItem
            icon="◫"
            label="Team"
            active={
              activePage === "Team"
            }
            onClick={() =>
              setActivePage("Team")
            }
          />

          <NavItem
            icon="⚙"
            label="Settings"
            active={
              activePage === "Settings"
            }
            onClick={() =>
              setActivePage("Settings")
            }
          />

        </nav>


        <div className="sidebar-bottom">

          <div className="system-status">

            <span></span>

            <div>

              <strong>
                Systems operational
              </strong>

              <small>
                Hindsight connected
              </small>

            </div>

          </div>


          <div className="user-profile">

            <div className="user-avatar">
              P
            </div>

            <div>

              <strong>
                Engineer
              </strong>

              <small>
                Engineering Team
              </small>

            </div>

            <span>
              •••
            </span>

          </div>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="main">

        {/* TOPBAR */}

        <header className="topbar">

          <div className="breadcrumb">

            Workspace /

            <span>
              {activePage}
            </span>

          </div>


          <div className="top-actions">

            <button className="icon-button">
              ?
            </button>

            <button className="icon-button notification">
              ♢
            </button>

            <div className="top-avatar">
              P
            </div>

          </div>

        </header>


        {/* ================= CONTENT ================= */}

        <div className="content">

          {activePage === "Dashboard" && (

            <>

              {/* PAGE HEADER */}

              <section className="page-header">

                <div>

                  <div className="live-label">

                    <span></span>

                    LIVE OPERATIONS

                  </div>

                  <h2>
                    {greeting}, Engineer.
                  </h2>

                  <p>
                    Turn every incident into organizational memory.
                  </p>

                </div>


                <button
                  className="new-incident-button"
                  onClick={() =>
                    document
                      .getElementById(
                        "incident-console"
                      )
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  + Report Incident
                </button>

              </section>


              {/* STAT CARDS */}

              <section className="stats">

                <StatCard
                  icon="⚡"
                  title="Active Incidents"
                  value="03"
                  change="+2.4%"
                  description="vs last week"
                />

                <StatCard
                  icon="◉"
                  title="Memory Events"
                  value="1,284"
                  change="+18.7%"
                  description="this month"
                />

                <StatCard
                  icon="◈"
                  title="Resolved"
                  value="96.8%"
                  change="+4.2%"
                  description="resolution rate"
                />

                <StatCard
                  icon="◷"
                  title="Avg. Response"
                  value="11m"
                  change="-21.4%"
                  description="faster than last month"
                />

              </section>


              {/* MAIN GRID */}

              <section className="dashboard-grid">

                {/* INCIDENT CONSOLE */}

                <div
                  className="panel incident-panel"
                  id="incident-console"
                >

                  <div className="panel-header">

                    <div>

                      <span className="panel-label">
                        AI INCIDENT ANALYSIS
                      </span>

                      <h3>
                        What happened?
                      </h3>

                    </div>

                    <div className="ai-badge">
                      ✦ AI READY
                    </div>

                  </div>


                  <p className="panel-description">

                    Describe the incident. OpsMemory
                    will search organizational memory
                    for similar incidents, root causes
                    and previous resolutions.

                  </p>


                  <textarea
                    value={incident}
                    onChange={(event) =>
                      setIncident(
                        event.target.value
                      )
                    }
                    placeholder="Example: Payment API started returning HTTP 503 errors after a database connection spike..."
                  />


                  <div className="console-footer">

                    <span>
                      🧠 Hindsight memory enabled
                    </span>


                    <div className="console-buttons">

                      <button
                        className="clear-button"
                        onClick={clearIncident}
                      >
                        Clear
                      </button>


                      <button
                        className="analyze-button"
                        onClick={analyzeIncident}
                        disabled={loading}
                      >

                        {loading
                          ? "Analyzing..."
                          : "Analyze Incident →"}

                      </button>

                    </div>

                  </div>

                </div>


                {/* SYSTEM HEALTH */}

                <div className="panel health-panel">

                  <div className="panel-header">

                    <div>

                      <span className="panel-label">
                        SYSTEM HEALTH
                      </span>

                      <h3>
                        Operational status
                      </h3>

                    </div>

                    <span className="healthy">
                      ● HEALTHY
                    </span>

                  </div>


                  <div className="health-visual">

                    <div className="health-circle">

                      <strong>
                        98
                      </strong>

                      <span>
                        HEALTH
                      </span>

                    </div>

                    <div className="pulse-ring"></div>

                  </div>


                  <div className="health-items">

                    <HealthItem
                      name="API Gateway"
                      value="Operational"
                    />

                    <HealthItem
                      name="Memory Engine"
                      value="Operational"
                    />

                    <HealthItem
                      name="Database"
                      value="Operational"
                    />

                    <HealthItem
                      name="AI Analysis"
                      value="Operational"
                    />

                  </div>

                </div>

              </section>


              {/* BACKEND RESULT */}

              {result && (

                <section className="result-section">

                  <div className="panel result-panel">

                    <div className="result-header">

                      <div>

                        <span className="panel-label">
                          OPSMEMORY RESULT
                        </span>

                        <h3>
                          Incident intelligence
                        </h3>

                      </div>

                      <span className="result-live">
                        ● ANALYSIS COMPLETE
                      </span>

                    </div>


                    {result.error ? (

                      <div className="error-box">
                        ⚠ {result.error}
                      </div>

                    ) : (

                      <pre className="result-data">
                        {JSON.stringify(
                          result,
                          null,
                          2
                        )}
                      </pre>

                    )}

                  </div>

                </section>

              )}


              {/* MEMORY ACTIVITY */}

              <section className="activity-section">

                <div className="panel activity-panel">

                  <div className="panel-header">

                    <div>

                      <span className="panel-label">
                        MEMORY ACTIVITY
                      </span>

                      <h3>
                        Recent engineering knowledge
                      </h3>

                    </div>

                    <button
                      className="view-button"
                      onClick={() =>
                        setActivePage("Memory")
                      }
                    >
                      View memory →
                    </button>

                  </div>


                  <div className="activity-list">

                    <Activity
                      type="RESOLVED"
                      title="Payment API 503 errors"
                      description="Database connection pool exhaustion"
                      time="11 min ago"
                    />

                    <Activity
                      type="MEMORY"
                      title="Authentication latency spike"
                      description="Previous OAuth token refresh issue recalled"
                      time="34 min ago"
                    />

                    <Activity
                      type="ANALYSIS"
                      title="Checkout service degradation"
                      description="3 similar historical incidents discovered"
                      time="1 hr ago"
                    />

                    <Activity
                      type="RESOLVED"
                      title="Notification service timeout"
                      description="Redis connection saturation"
                      time="2 hrs ago"
                    />

                  </div>

                </div>

              </section>


              <footer>

                <span>
                  OpsMemory © 2026
                </span>

                <span>
                  AI-powered incident intelligence
                </span>

                <span>
                  Hindsight ● Connected
                </span>

              </footer>

            </>

          )}


          {/* OTHER NAVIGATION PAGES */}

          {activePage !== "Dashboard" && (

            <section className="page-header">

              <div>

                <div className="live-label">
                  <span></span>
                  OPSMEMORY
                </div>

                <h2>
                  {activePage}
                </h2>

                <p>
                  {activePage === "Incidents"
                    ? "Manage and analyze engineering incidents."
                    : activePage === "Memory"
                    ? "Explore organizational engineering memory."
                    : activePage === "AI Analysis"
                    ? "Use AI-powered incident intelligence."
                    : activePage === "Team"
                    ? "Manage your engineering workspace."
                    : "Configure your OpsMemory workspace."}
                </p>

              </div>


              <button
                className="new-incident-button"
                onClick={() =>
                  setActivePage("Dashboard")
                }
              >
                ← Back to Dashboard
              </button>

            </section>

          )}

        </div>

      </main>

    </div>
  );
}


/* =====================================================
   NAV ITEM
===================================================== */

function NavItem({
  icon,
  label,
  active,
  onClick,
}) {
  return (
    <button
      className={`nav-item ${
        active ? "active" : ""
      }`}
      onClick={onClick}
    >

      <span className="nav-icon">
        {icon}
      </span>

      <span>
        {label}
      </span>

    </button>
  );
}


/* =====================================================
   STAT CARD
===================================================== */

function StatCard({
  icon,
  title,
  value,
  change,
  description,
}) {
  return (
    <div className="stat-card">

      <div className="stat-top">

        <div className="stat-icon">
          {icon}
        </div>

        <span className="stat-change">
          {change}
        </span>

      </div>

      <span className="stat-title">
        {title}
      </span>

      <strong className="stat-value">
        {value}
      </strong>

      <span className="stat-description">
        {description}
      </span>

    </div>
  );
}


/* =====================================================
   HEALTH ITEM
===================================================== */

function HealthItem({
  name,
  value,
}) {
  return (
    <div className="health-item">

      <span className="health-dot"></span>

      <span>
        {name}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


/* =====================================================
   ACTIVITY
===================================================== */

function Activity({
  type,
  title,
  description,
  time,
}) {
  return (
    <div className="activity-item">

      <div className="activity-icon">
        ✦
      </div>

      <div className="activity-content">

        <div className="activity-title">

          <strong>
            {title}
          </strong>

          <span
            className={`activity-type ${type.toLowerCase()}`}
          >
            {type}
          </span>

        </div>

        <p>
          {description}
        </p>

      </div>

      <span className="activity-time">
        {time}
      </span>

    </div>
  );
}


export default App;