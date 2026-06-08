import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { MessageCircle } from "lucide-react";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Visionary Express Movers | Premium Moving Services",
  description: "Visionary Express Movers provides top-tier residential and commercial moving solutions. Focus on client satisfaction with seamless, stress-free relocations. Contact us via WhatsApp today!",
  keywords: ["moving company", "movers", "local movers", "long distance moving", "Visionary Express", "relocation services"],
  openGraph: {
    title: "Visionary Express Movers | Premium Moving Services",
    description: "Visionary Express Movers provides top-tier residential and commercial moving solutions. Contact us via WhatsApp today!",
    type: "website",
    locale: "en_CA",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/15199927703"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-16 bg-white text-gray-900 text-sm font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </body>
    </html>
  );
}
