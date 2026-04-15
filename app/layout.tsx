import type { Metadata } from "next";
import { LocaleProvider } from "@/components/LocaleProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isadora Guerra — Frontend & Mobile Developer",
  description:
    "Thoughtful digital experiences across frontend, mobile, and intelligent systems. Product-minded engineering with craft and clarity.",
  openGraph: {
    title: "Isadora Guerra — Frontend & Mobile Developer",
    description:
      "Thoughtful digital experiences across frontend, mobile, and intelligent systems.",
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
