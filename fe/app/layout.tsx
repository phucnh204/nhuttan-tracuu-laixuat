import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import logo from "./../public/logo-1.png"; // favicon
import PageLoading from "./components/PageLoading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camdocantho.net - Cầm đồ Nhựt Tân",
  description: "Camdocantho.net - Cầm đồ Nhựt Tân, Cần Thơ.",
  metadataBase: new URL("https://camdonhuttan.net"),
  openGraph: {
    title: "Hệ thống tra cứu lãi xuất - Cầm đồ Nhựt Tân",
    description:
      "Tra cứu lãi xuất nhanh chóng và chính xác tại Cầm đồ Nhựt Tân, Cần Thơ.",
    images: ["https://camdonhuttan.net/logo-1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hệ thống tra cứu lãi xuất - Cầm đồ Nhựt Tân",
    description:
      "Tra cứu lãi xuất nhanh chóng và chính xác tại Cầm đồ Nhựt Tân, Cần Thơ.",
    images: ["https://camdonhuttan.net/logo-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <PageLoading />
        {children}
        <Footer />
      </body>
    </html>
  );
}
