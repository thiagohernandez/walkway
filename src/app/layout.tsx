import type { Metadata } from "next";  
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrument_sans = Instrument_Sans({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: false,
  variable: '--font-instrument_sans',
});
export const metadata: Metadata = {
  title: "Walkway",
  description: "Calendar and line charts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrument_sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
