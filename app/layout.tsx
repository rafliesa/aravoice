import type { Metadata } from "next";
import {
  Geist_Mono,
  Lexend,
  Libre_Caslon_Text,
  Plus_Jakarta_Sans,
} from "next/font/google";
import AccessibilityWidget from "@/components/accessibility/AccessibilityWidget";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const libreCaslonText = Libre_Caslon_Text({
  variable: "--font-libre-caslon-text",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Paravoice.id",
    template: "%s | Paravoice.id",
  },
  description:
    "Media olahraga disabilitas independen yang berkomitmen pada integritas jurnalisme dan inklusivitas tanpa batas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${libreCaslonText.variable} ${geistMono.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className={`${plusJakartaSans.className} min-h-full flex flex-col`}>
        <div id="site-shell" className="flex min-h-full flex-1 flex-col">
          <Navbar />
          <div
            id="main-content"
            tabIndex={-1}
            className="flex flex-1 flex-col outline-none"
          >
            {children}
          </div>
          <Footer />
        </div>
        <AccessibilityWidget />
      </body>
    </html>
  );
}
