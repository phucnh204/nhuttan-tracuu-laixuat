"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import PageLoading from "./components/PageLoading";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  // Giả lập thời gian load (hoặc bạn có thể dùng next/navigation events)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {loading && <PageLoading />}
        {!loading && (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
