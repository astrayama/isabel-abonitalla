import type { Metadata } from "next";
import { Nunito, Silkscreen, Caveat } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import Background from "@/components/layout/Background";
import FloatingDecor from "@/components/layout/FloatingDecor";
import Taskbar from "@/components/layout/Taskbar";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  display: "swap",
  weight: ["400", "700"],
});

const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://isabel-abonitalla.lovable.app"),
  title: "Isabel Abonitalla - Product Builder, CS Undergrad, Accessibility Advocate",
  description: "Portfolio of Isabel Abonitalla: Product Builder, Computer Science Undergrad, and Accessibility Advocate, designed in a retro kawaii OS aesthetic.",
  openGraph: {
    title: "Isabel Abonitalla - Product Builder, CS Undergrad, Accessibility Advocate",
    description: "Portfolio of Isabel Abonitalla: Product Builder, Computer Science Undergrad, and Accessibility Advocate, designed in a retro kawaii OS aesthetic.",
    url: "https://isabel-abonitalla.lovable.app",
    siteName: "Isabel Abonitalla Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isabel Abonitalla - Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isabel Abonitalla - Product Builder, CS Undergrad, Accessibility Advocate",
    description: "Portfolio of Isabel Abonitalla: Product Builder, Computer Science Undergrad, and Accessibility Advocate, designed in a retro kawaii OS aesthetic.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} ${silkscreen.variable} ${caveat.variable} font-sans antialiased pb-10`}>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
          <Background />
          <FloatingDecor />
          <div className="relative z-10">{children}</div>
          <Taskbar />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
