import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";

const play = Play({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dream Team",
  description:
    "Dream Team futbol app para armar 2 equipos con los jugadores de tus sueños",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={play.className}>{children}</body>
    </html>
  );
}
