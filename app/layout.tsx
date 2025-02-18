import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SessionWrapper from "@/lib/SessionWrapper";
import { ThemeProvider } from "next-themes";
import ogimage from '@/assets/ogimage.png'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GigBoost AI - AI for Fiverr Gigs",
  description: "GigBooster AI is a powerful platform that helps you grow your Fiver Gig's using AI",
  keywords: ["GigBooster AI", "AI tools", "business growth", "AI-driven platform", "marketing automation"],
  authors: [{ name: "GigBooster Team" }],
  openGraph: {
    title: "GigBooster AI | Boost Gig's with AI",
    description: "GigBooster AI is a powerful platform that helps you grow your v using AI",
    images: ogimage.src,
    url: "https://www.gigboosterai.com",
    type: "website",
  },
  twitter: {
    title: "GigBooster AI | Boost Gig's with AI",
    description: "GigBooster AI is a powerful platform that helps you grow your Fiver Gig's using AI",
    images: ogimage.src,
    site: "@gigbooster",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper> 
  );
}
