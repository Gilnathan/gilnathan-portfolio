import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gilnathan Reis | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack especializado em C#, .NET, React e Next.js. Criação de sistemas web, APIs REST, plataformas SaaS e aplicações modernas."
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
