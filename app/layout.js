// app/layout.js
import "./globals.css";

export const metadata = {
  title: "LidlWater",
  description: "AI-driven aktiescanner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className="app-bg text-white font-mono">
        <header className="header">
          <div className="header-content">
            <span className="logo">🚀 LidlWater</span>

            <nav className="nav">
              <a href="/" className="nav-item">Start</a>
              <a href="/dashboard" className="nav-item">Dashboard</a>
              <a href="/settings" className="nav-item">Inställningar</a>
            </nav>
          </div>
        </header>

        <main className="page-container">{children}</main>
      </body>
    </html>
  );
}
