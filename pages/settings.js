import Link from 'next/link';

export default function Settings() {
  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h1>⚙️ Inställningar</h1>

      <p>Här kommer du kunna:</p>
      <ul>
        <li>🔑 Lägga in din OpenAI-nyckel</li>
        <li>🧪 Se status på API:er (t.ex. EODHD, Reddit)</li>
        <li>📦 Spara preferenser</li>
      </ul>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/">🏠 Till startsidan</Link>
      </p>
    </div>
  );
}
