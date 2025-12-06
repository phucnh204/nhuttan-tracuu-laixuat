"use client";

import { useState } from "react";
import { Menu, X, Home, Search, ClipboardList, MapPin, PhoneCall, BookOpenCheck, ShieldQuestionMark } from "lucide-react";
import logoImage from "../../../public/logo-1.png";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    // { name: "Trang chủ", href: "/", icon: Home },
    { name: "Giới thiệu", href: "/gioi-thieu", icon: BookOpenCheck },
    { name: "Hướng dẫn tra cứu", href: "/tra-cuu", icon: ShieldQuestionMark },
    
    { name: "Tra cứu lãi suất", href: "https://camdonhuttan.com/kiem-tra-lai-suat/", icon: Search },
    { name: "Quy trình làm việc", href: "/quy-trinh", icon: ClipboardList },
    // { name: "Địa chỉ cửa hàng", href: "/dia-chi", icon: MapPin },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* <img src={logoImage} className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg group-hover:scale-105 transition duration-300"/> */}
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src={logoImage}
                alt="Nhựt Tân"
                className="rounded-xl shadow-lg object-cover"
                fill
              />
            </div>

            <div className="">
              <div className="text-lg md:text-xl font-bold text-gray-900">
                Cửa hàng Nhựt Tân
              </div>
              <div className="text-xs text-gray-500">Cầm đồ uy tín Cần Thơ</div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 font-medium"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA BUTTON - Desktop */}
          <a
            // href="https://camdonhuttan.com/kiem-tra-lai-suat/"
            className="hidden text-sm md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition duration-300"
          >
            <PhoneCall className="w-4 h-4" />
            0979 3939 55 - 0346 6363 99
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-fadeIn">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </a>
                );
              })}

              {/* CTA Button - Mobile */}
              <a
                href="/lookup"
                className="flex items-center justify-center gap-2 mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <PhoneCall className="w-5 h-5" />
                0979 3939 55 - 0346 6363 99
              </a>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}
