import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "LidlWater AI Scanner",
  description: "AI-driven aktiescanner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body style={styles.body}>
        <nav style={styles.nav}>
          <Link href="/" style={styles.brand}>
            🚀 LidlWater
          </Link>

          <div style={styles.links}>
            <Link href="/dashboard" style={styles.link}>
              📊 Dashboard
            </Link>
            <Link href="/settings" style={styles.link}>
              ⚙️ Inställningar
            </Link>
          </div>
        </nav>

        <main style={styles.main}>{children}</main>
      </body>
    </html>
  );
}

const styles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "#0A0A0A",
    color: "#FFFFFF",
    fontFamily: "monospace",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    borderBottom: "2px solid #FF00FF",
    background: "#111",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  brand: {
    fontSize: "1.4rem",
    color: "#FF66FF",
    textDecoration: "none",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#FFF",
    textDecoration: "none",
    fontSize: "1.1rem",
  },
  main: {
    padding: "2rem",
  },
};

