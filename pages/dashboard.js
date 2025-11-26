import Link from 'next/link';

const mockSignals = [
  {
    ticker: 'MSFT',
    company: 'Microsoft Corporation',
    reason: 'Utbrott + hög volymökning',
    confidence: 91,
    price: '$425.30',
    minutesAgo: 2,
  },
  {
    ticker: 'NVDA',
    company: 'NVIDIA Corp',
    reason: 'Momentum + buzz',
    confidence: 88,
    price: '$145.20',
    minutesAgo: 10,
  },
  {
    ticker: 'AAPL',
    company: 'Apple Inc',
    reason: 'AI-ranking + låg risk',
    confidence: 82,
    price: '$193.50',
    minutesAgo: 27,
  },
];

export default function Dashboard() {
  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h1 style={{ fontSize: "2rem" }}>📡 Live-signaler</h1>
      <p>Realtidsvarningar när AI hittar nya möjligheter</p>

      <div style={{ marginTop: "2rem" }}>
        {mockSignals.map((signal, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #f0f",
              borderRadius: "12px",
              padding: "1rem",
              marginBottom: "1rem",
              background: "#111",
              color: "#fff"
            }}
          >
            <h2 style={{ margin: 0 }}>{signal.ticker}</h2>
            <p style={{ margin: "0.2rem 0" }}>{signal.company}</p>
            <p style={{ margin: "0.2rem 0" }}>💥 {signal.reason}</p>
            <p style={{ margin: "0.2rem 0" }}>Konfidens: {signal.confidence}%</p>
            <p style={{ margin: "0.2rem 0", fontSize: "0.9rem", color: "#ccc" }}>
              {signal.minutesAgo} min sedan · {signal.price}
            </p>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/settings">⚙️ Gå till inställningar</Link>
      </p>
    </div>
  );
}
