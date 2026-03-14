import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { HeaderInfo } from "@/components/HeaderInfo";
import { ScrollToTop } from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhirup's Portfolio",
  description: "Portfolio built with Next.js, Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!sessionStorage.getItem('tabVisited')) {
                sessionStorage.setItem('tabVisited', 'true');
                if (window.location.pathname === '/') {
                  window.location.replace('/about');
                }
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <HeaderInfo />
          <Navbar />
          <main className="pt-32 pb-28 md:pb-16 px-2 max-w-6xl mx-auto">
            {children}
          </main>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
