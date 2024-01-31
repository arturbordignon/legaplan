import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "Teste Legaplan",
  description: "Teste para vaga de Web Dev na Legaplan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
