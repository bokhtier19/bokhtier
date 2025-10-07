// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Footer from "../../components/Footer";
import { Space_Mono, Inter } from "next/font/google";
import Socials from "../../components/Social";
import ScrollNav from "../../components/ScrollNav";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const space = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "300"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "Frontend Engineer | React & Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${space.variable}`}>
            <body className="font-sans">
                <AnimatePresence>
                    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange>
                        {children}
                        <Socials />
                        <ScrollNav />
                        <Footer />
                        <Analytics />
                        <SpeedInsights />
                    </ThemeProvider>
                </AnimatePresence>
                <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
                <Script id="google-analytics">
                    {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
              `}
                </Script>
            </body>
        </html>
    );
}
