import type { Metadata } from "next";
import { LocaleProvider } from "@/components/LocaleProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isadora Guerra — Portfólio em construção",
  description:
    "Novo portfólio em construção. Frontend, mobile e sistemas inteligentes.",
  openGraph: {
    title: "Isadora Guerra — Portfólio em construção",
    description:
      "Novo portfólio em construção. Frontend, mobile e sistemas inteligentes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-bg-base text-text-primary">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
