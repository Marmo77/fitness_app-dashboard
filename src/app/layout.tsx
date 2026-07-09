import type { Metadata } from "next";
import { Inter, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nord Scan",
  description: "Nord Scan - dashboard do edytowania/dodawania aut na sprzedaż.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={cn(
        "h-full antialiased",
        inter.variable,
        manrope.variable,
        geistMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans flex flex-col bg-background text-foreground">
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}