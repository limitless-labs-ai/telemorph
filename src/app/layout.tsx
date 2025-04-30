import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Utilities/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { defaultMetadata } from "@/config/landing/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body
        className={`${inter.variable} antialiased min-h-screen bg-background relative`}
      >
        {/* Gradient Background Effect */}
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="absolute top-[20%] right-[10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-[var(--background-gradient-from)] to-[var(--background-gradient-to)] blur-3xl animate-gradient-1 will-change-transform"
            style={{ transformOrigin: "center center" }}
          ></div>
          <div
            className="absolute bottom-[20%] left-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[var(--background-gradient-to)] to-[var(--background-gradient-from)] blur-3xl animate-gradient-2 will-change-transform"
            style={{ transformOrigin: "center center" }}
          ></div>
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div id="home"></div>
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
