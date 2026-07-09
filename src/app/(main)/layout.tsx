import type { Metadata } from "next";
import { Inter, Manrope, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";

import { createClient } from "@/lib/supabase/server";

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

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

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
                    <Navbar user={user} />
                    {children}
                </div>
            </body>
        </html>
    );
}