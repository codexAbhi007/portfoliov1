import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
// import { HeaderInfo } from "@/components/HeaderInfo";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { HeaderInfo } from "@/components/HeaderInfo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Selene Yu's Portfolio - Clone",
  description: "Portfolio built with Next.js, Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <HeaderInfo />
          <Navbar />
          <main className="pt-32 pb-16 px-6 max-w-5xl mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
