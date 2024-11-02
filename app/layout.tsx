import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "W-ballin Design",
  description: "W-ballin Design clonde coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
