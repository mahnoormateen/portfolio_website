import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "../components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahnoor Mateen Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full min-h-full antialiased`}
    >
      <body className="relative min-h-full min-w-full overflow-x-hidden overflow-y-auto bg-[#050505] text-white">
        <AnimatedBackground />

        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>

        <Analytics />
      </body>
    </html>
  );
}
