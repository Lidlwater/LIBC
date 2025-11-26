import "../app/globals.css";

export const metadata = {
  title: "LidlWater Internet Business Company",
  description: "AI-aktiescanner från framtiden.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className="bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
