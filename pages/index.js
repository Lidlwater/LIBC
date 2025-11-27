import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "monospace", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        🚀 Välkommen till <span style={{ color: "#f0f" }}>LidlWater</span>
      </h1>
      <p>AI-aktiescanner från framtiden – byggd på 90-talets drömmar och dagens teknik.</p>
<p style={{ color: 'green' }}>✅ Auto-deploy är igång!</p>

      <ul style={{ marginTop: "2rem" }}>
        <li><Link href="/dashboard">📊 Gå till Dashboard</Link></li>
        <li><Link href="/settings">⚙️ Inställningar</Link></li>
      </ul>

      <p style={{ marginTop: "3rem", fontStyle: "italic", color: "#aaa" }}>
        PS. Du kan styla denna sida ännu mer senare.
      </p>
    </div>
  );
}