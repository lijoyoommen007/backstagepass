import type { Metadata } from "next";
import { Inter, Sarabun, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });
const sarabun = Sarabun({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sarabun",
});
const beVietnamPro = Be_Vietnam_Pro({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "BackstagePass - Feed",
  description: "BackstagePass feed interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${sarabun.variable} ${beVietnamPro.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ErrorBoundary>
            <LayoutWrapper challengeTitle="9-Day Fitness Challenge">
              {children}
            </LayoutWrapper>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
