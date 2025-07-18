import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "./_components/Navbar";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "METIC - Moklet Education of Technology Informatic Club",
  description:
    "METIC adalah organisasi teknologi di SMK Telkom Malang yang menjadi wadah eksplorasi, inovasi, dan kolaborasi siswa dalam bidang teknologi digital, bisnis kreatif, dan media komunikasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main className="overflow-x-hidden ">{children}</main>
      </body>
    </html>
  );
}
