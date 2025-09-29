import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LazyMotion, domAnimation } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anas Mohammed Riza - Junior Frontend Developer",
  description:
    "Portfolio of Anas Mohammed Riza, a passionate Junior Frontend Developer specializing in React, Next.js, and modern web technologies.",
  authors: [{ name: "Anas Mohammed Riza" }],
  keywords: [
    "frontend developer",
    "react",
    "next.js",
    "portfolio",
    "web developer",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans antialiased`}>
        {/* LazyMotion for optimized Framer Motion bundle */}
        <LazyMotion features={domAnimation}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </LazyMotion>
      </body>
    </html>
  );
}
