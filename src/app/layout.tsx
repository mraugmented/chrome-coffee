import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Chrome Coffee Studio | Torrance, CA",
  description:
    "Torrance's favorite coffee studio. Signature lattes, matcha, and good vibes.",
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
    <html lang="en" className={`${quicksand.variable} h-full`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif" }}
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
