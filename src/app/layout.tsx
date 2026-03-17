import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Shabbir | Full Stack Web Developer",
  description: "Portfolio of Abdullah Shabbir, an undergrad at Air University and Full Stack Developer specializing in .NET, C++, Node.js and Modern Web architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0a0f1e] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
