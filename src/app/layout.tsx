import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MixNav from "@/components/navbar/mixNav";
import LenisCursor from "@/components/cursor/lenis-cursor";
import FramerCursor from "@/components/cursor/cursor-framer-motion";
import FlareCursor from "@/components/cursor/cursor-effect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <LenisCursor /> */}
        <FramerCursor />
        {/* <FlareCursor /> */}
        <MixNav />

        <main className="max-w-[1200px] mx-auto px-4  flex-1 w-full flex flex-col">{children}</main>
      </body>
    </html>
  );
}
