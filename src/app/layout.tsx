import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from 'next/font/google';
import type { Metadata } from "next";

const interFont = Inter({
    subsets: ['latin'],
    variable: "--font-inter"
})

export const metadata: Metadata = {
    title: "Google docs clone",
    description: "Google docs clone learning project from code with antonio youtube"
}


export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(interFont.className, "antialiased")}>
                {children}
            </body>
        </html>
    )
}