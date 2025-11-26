import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';

export default function Dashboard() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    async function fetchRankings() {
      const { data, error } = await supabase
        .from('ai_rankings')
        .select(`
          score,
          explanation,
          run_timestamp,
          symbols ( symbol, name )
        `)
        .order('score', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error fetching rankings:', error);
      } else {
        setRankings(data);
      }
    }

    fetchRankings();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h1>🏆 AI-ranking</h1>
      <p>De 10 högst rankade aktierna just nu:</p>

      {rankings.map((r, i) => (
        <div key={i} style={{
          border: "1px solid #0f0",
          borderRadius: "10px",
          padding: "1rem",
          marginBottom: "1rem",
          background: "#111",
          color: "#fff"
        }}>
          <h2>{r.symbols.symbol} – {r.symbols.name}</h2>
          <p>Score: {r.score}</p>
          <p>📌 {r.explanation}</p>
        </div>
      ))}

      <p style={{ marginTop: "2rem" }}>
        <Link href="/settings">⚙️ Gå till inställningar</Link>
      </p>
    </div>
  );
}
