import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOCRA Reimagined | Built Solo by Vusi Kalamore",
  description: "Modern, Secure & User-Friendly Digital Platform for Botswana Communications Regulatory Authority",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}