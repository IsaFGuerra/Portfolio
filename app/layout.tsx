import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-bg-base text-text-primary">
        {children}
      </body>
    </html>
  );
}
