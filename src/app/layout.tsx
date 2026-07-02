import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import dynamic from "next/dynamic";
import { AnalyticsProvider } from "@/components/layout/AnalyticsProvider";
import { MotionProvider } from "@/components/layout/MotionProvider";

const CartSidebar = dynamic(() => import("@/components/ecommerce/CartSidebar").then(mod => mod.CartSidebar));
const Chatbot = dynamic(() => import("@/components/chatbot/Chatbot").then(mod => mod.Chatbot));
const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer));
const Toaster = dynamic(() => import("sonner").then(mod => mod.Toaster));

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aura Vision AR | Mở Khóa Tương Lai - NexGen Tech",
    template: "%s | NexGen Tech",
  },
  description: "Khám phá Aura Vision AR - Chiếc kính thực tế ảo tăng cường đột phá nhất từ NexGen Tech. Trải nghiệm không giới hạn với màn hình 4K Micro-OLED.",
  keywords: ["AR Glasses", "Kính AR", "NexGen Tech", "Aura Vision", "Công nghệ"],
  authors: [{ name: "NexGen Tech" }],
  creator: "NexGen Tech",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://nexgentech.vn",
    title: "Aura Vision AR | Mở Khóa Tương Lai",
    description: "Trải nghiệm không giới hạn với màn hình 4K Micro-OLED từ chiếc kính thực tế ảo tăng cường đột phá nhất.",
    siteName: "NexGen Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Vision AR",
    description: "Kính thực tế ảo tăng cường đột phá nhất từ NexGen Tech.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NexGen Tech",
              url: "https://nexgentech.vn",
              logo: "https://nexgentech.vn/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84-999-888-777",
                contactType: "customer service",
              },
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartSidebar />
            <AnalyticsProvider />
            <Chatbot />
            <Toaster position="bottom-right" richColors />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
