import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const swomp = localFont({
  src: "../../public/fonts/Swomp-Regular.ttf",
  variable: "--font-swomp",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Chrome Coffee Studio | Torrance, CA",
  description:
    "Torrance's favorite coffee studio. Signature lattes, matcha, and good vibes. 2734 Sepulveda Blvd, Torrance, CA 90505.",
  openGraph: {
    title: "Chrome Coffee Studio",
    description:
      "Torrance's favorite coffee studio. Signature lattes, matcha, and good vibes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${swomp.variable} ${dmSans.variable} h-full`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        {children}
        <Script
          src="https://is-boring.com/track.js"
          data-site-id="chrome-coffee"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
