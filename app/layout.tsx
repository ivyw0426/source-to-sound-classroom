import type { Metadata } from "next";
import { Inter, Kalam } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const kalam = Kalam({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "700"],
});

const description =
  "Free project-based environmental STEM lessons for K-8 teachers focused on stormwater, watersheds, salmon habitat, and water quality.";

export const metadata: Metadata = {
  metadataBase: new URL("https://source-to-sound-classroom.vercel.app"),
  title: {
    default: "Source to Sound Classroom",
    template: "%s | Source to Sound Classroom",
  },
  description,
  openGraph: {
    title: "Source to Sound Classroom",
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kalam.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
