import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartSidebar } from "@/components/ecommerce/CartSidebar";
import { Chatbot } from "@/components/chatbot/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Healthy Living Corporation | Premium Health Products",
    template: "%s | Helicorp",
  },
  description: "Helicorp provides premium, modern health products to improve your lifestyle. Discover our selection of carefully curated items.",
  keywords: ["Health", "Wellness", "Helicorp", "Healthy Living"],
  authors: [{ name: "Healthy Living Corporation" }],
  creator: "Helicorp",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://helicorp.vn",
    title: "Healthy Living Corporation | Premium Health Products",
    description: "Helicorp provides premium, modern health products to improve your lifestyle.",
    siteName: "Helicorp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy Living Corporation",
    description: "Premium health products for a modern lifestyle.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartSidebar />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
