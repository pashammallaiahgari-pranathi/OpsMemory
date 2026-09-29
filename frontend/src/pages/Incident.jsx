import React, { useState } from "react";

export default function Incident() {
  const [incident, setIncident] = useState("");
  const [severity, setSeverity] = useState("Medium");
  const [status, setStatus] = useState("Open");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!incident.trim()) return;

    setAnalyzing(true);
    setResult(null);

    // Demo AI analysis
    // Later this can be connected directly to your completed backend.
    setTimeout(() => {
      setResult({
        summary:
          "The incident appears to be related to a service or infrastructure failure.",
        rootCause:
          "A sudden increase in system load or an unavailable backend dependency.",
        resolution:
          "Check service health, inspect application logs, verify database connections and restart the affected service if required.",
        confidence: "94%",
      });

      setAnalyzing(false);
    }, 1200);
  };

  const handleClear = () => {
    setIncident("");
    setSeverity("Medium");
    setStatus("Open");
    setResult(null);
  };

  return (
    <div className="incident-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="eyebrow">
            <span className="status-dot"></span>
            INCIDENT MANAGEMENT
          </div>

          <h1>Report an Incident</h1>

          <p>
            Capture incidents, analyze their causes, and turn every resolution
            into organizational memory.
          </p>
        </div>

        <div className="header-status">
          <span className="status-dot"></span>
          OpsMemory Operational
        </div>
      </div>

      {/* Main Grid */}
      <div className="incident-grid">
        {/* Incident Form */}
        <section className="incident-card">
          <div className="card-heading">
            <div>
              <span className="section-label">INCIDENT DETAILS</span>
              <h2>What happened?</h2>
            </div>

            <span className="ai-badge">✦ AI READY</span>
          </div>

          <p className="card-description">
            Describe the incident clearly. OpsMemory will analyze the event and
            help identify similar incidents, possible causes and previous
            resolutions.
          </p>

          <div className="form-group">
            <label>Incident description</label>

            <textarea
              value={incident}
              onChange={(e) => setIncident(e.target.value)}
              placeholder="Example: Payment API started returning HTTP 503 errors after a database connection spike..."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Severity</label>

              <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Open</option>
                <option>Investigating</option>
                <option>Resolved</option>
              </select>
            </div>
          </div>

          <div className="memory-enabled">
            <span>●</span>
            Hindsight memory enabled
          </div>

          <div className="form-actions">
            <button className="secondary-btn" onClick={handleClear}>
              Clear
            </button>

            <button
              className="primary-btn"
              onClick={handleAnalyze}
              disabled={analyzing || !incident.trim()}
            >
              {analyzing ? "Analyzing..." : "Analyze Incident →"}
            </button>
          </div>
        </section>

        {/* Incident Summary */}
        <section className="summary-card">
          <div className="card-heading">
            <div>
              <span className="section-label">INCIDENT STATUS</span>
              <h2>Incident overview</h2>
            </div>

            <span className={`severity-badge ${severity.toLowerCase()}`}>
              {severity}
            </span>
          </div>

          <div className="overview-item">
            <span>STATUS</span>
            <strong>{status}</strong>
          </div>

          <div className="overview-item">
            <span>SEVERITY</span>
            <strong>{severity}</strong>
          </div>

          <div className="overview-item">
            <span>MEMORY SEARCH</span>
            <strong className="green-text">Enabled</strong>
          </div>

          <div className="overview-item">
            <span>AI ENGINE</span>
            <strong className="green-text">Ready</strong>
          </div>

          <div className="health-box">
            <div className="health-icon">✦</div>

            <div>
              <strong>OpsMemory AI</strong>
              <p>Ready to analyze this incident</p>
            </div>
          </div>
        </section>
      </div>

      {/* AI Result */}
      {result && (
        <section className="analysis-result">
          <div className="result-header">
            <div>
              <span className="section-label">AI INCIDENT ANALYSIS</span>
              <h2>Analysis complete</h2>
            </div>

            <span className="confidence">
              {result.confidence} confidence
            </span>
          </div>

          <div className="result-grid">
            <div className="result-box">
              <span>WHAT HAPPENED</span>
              <p>{result.summary}</p>
            </div>

            <div className="result-box">
              <span>LIKELY ROOT CAUSE</span>
              <p>{result.rootCause}</p>
            </div>

            <div className="result-box">
              <span>RECOMMENDED RESOLUTION</span>
              <p>{result.resolution}</p>
            </div>
          </div>

          <div className="memory-save">
            <div>
              <strong>✦ Organizational memory</strong>
              <p>
                This analysis can be saved and reused when a similar incident
                occurs again.
              </p>
            </div>

            <button className="primary-btn">Save to Memory →</button>
          </div>
        </section>
      )}
    </div>
  );
}