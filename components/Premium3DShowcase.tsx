"use client";

export function Premium3DShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`premium-3d ${compact ? "premium-3d-compact" : ""}`}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
        event.currentTarget.style.setProperty("--tilt-x", `${y}deg`);
        event.currentTarget.style.setProperty("--tilt-y", `${x}deg`);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--tilt-x", "0deg");
        event.currentTarget.style.setProperty("--tilt-y", "0deg");
      }}
    >
      <div className="premium-3d-stage">
        <div className="depth-ring depth-ring-one" />
        <div className="depth-ring depth-ring-two" />

        <div className="device laptop">
          <div className="device-topbar">
            <span />
            <span />
            <span />
          </div>
          <div className="dashboard-grid">
            <div className="metric metric-wide">
              <div className="metric-title">Launch Dashboard</div>
              <div className="metric-copy">Discovery, design, development and QA tracked in one clear product cockpit.</div>
              <div className="metric-line teal-line">Strategy sprint</div>
              <div className="metric-line teal-line">Build progress</div>
            </div>
            <div className="metric chart">
              <strong>Growth</strong>
              <div className="bar b1" />
              <div className="bar b2" />
              <div className="bar b3" />
              <div className="bar b4" />
            </div>
            <div className="metric list">
              <strong>Project Scope</strong>
              <span>Mobile app</span>
              <span>Website</span>
              <span>UI/UX system</span>
            </div>
          </div>
        </div>

        <div className="device phone">
          <div className="phone-notch" />
          <div className="phone-card ring-card" />
          <div className="phone-row teal-line">App</div>
          <div className="phone-row teal-line">UX</div>
          <div className="phone-row teal-line">Launch</div>
        </div>

        <div className="floating-panel panel-one">
          <div className="panel-chip" />
          <div className="panel-title">Premium UI</div>
          <div className="panel-line">Design system</div>
          <div className="panel-line short">Conversion flow</div>
        </div>

        <div className="floating-panel panel-two">
          <div className="node-flow">
            <span />
            <span />
            <span />
          </div>
          <div className="panel-title">Build Flow</div>
          <div className="panel-line">Idea → Prototype → Launch</div>
        </div>

        <div className="connector c1" />
        <div className="connector c2" />
        <div className="connector c3" />

        <div className="scene-label">
          <span>3D Product Lab</span>
          <strong>Apps • Websites • UI/UX</strong>
        </div>
      </div>
    </div>
  );
}
