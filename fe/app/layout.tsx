// app/layout.tsx (vẫn là server component)
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";

import "./globals.css";
import ClientWrapper from "./ClientWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Đây là server metadata, vẫn hợp lệ
export const metadata = {
  title: "Camdocantho.net - Cầm đồ Nhựt Tân",
  description: "Camdocantho.net - Cầm đồ Nhựt Tân, Cần Thơ.",
  metadataBase: new URL("https://camdocantho.net"),
  icons: {
    icon: "/logo-removebg-small.png",
    shortcut: "/logo-removebg-small.png",
    apple: "/logo-removebg-small.png",
  },
  openGraph: {
    title: "Camdocantho.net - Cầm đồ Nhựt Tân",
    description: "Camdocantho.net - Cầm đồ Nhựt Tân, Cần Thơ.",
    images: ["https://camdocantho.net/logo-removebg-small.png"],
  },

  
  twitter: {
    card: "summary_large_image",
    title: "Camdocantho.net - Cầm đồ Nhựt Tân",
    description: "Camdocantho.net - Cầm đồ Nhựt Tân, Cần Thơ.",
    images: ["https://camdocantho.net/logo-removebg-small.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <ClientWrapper>{children}</ClientWrapper> 
        <Footer />
      </body>
    </html>
  );
}
