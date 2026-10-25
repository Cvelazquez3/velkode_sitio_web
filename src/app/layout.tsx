import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velkode — Desarrollo Web & Software a la Medida",
  description:
    "Desarrollamos sitios web y software a la medida con diseño sofisticado, claridad en costos y entregas puntuales. See it. Build it.",
  keywords: [
    "consultora software",
    "desarrollo web",
    "software a la medida",
    "sistemas web",
    "Velkode",
  ],
  openGraph: {
    title: "Velkode — Desarrollo Web & Software a la Medida",
    description:
      "Sitios web de alto impacto y software a la medida para empresas. See it. Build it.",
    url: "https://velkode.com",
    siteName: "Velkode",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Outfit:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black text-slate-100 font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
