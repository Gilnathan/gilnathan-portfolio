import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gilnathan Reis | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack especializado em C#, .NET, React e Next.js. Criação de sistemas web, APIs REST, plataformas SaaS e aplicações modernas.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/favicon/site.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
