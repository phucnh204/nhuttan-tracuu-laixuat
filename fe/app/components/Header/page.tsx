"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Search,
  ClipboardList,
  MapPin,
  Cannabis,
  PhoneCall,
  BookOpenCheck,
  ShieldQuestionMark,
  Clock,
  Phone,
  Globe,
  Facebook,
} from "lucide-react";
import logoImage from "../../../public/logo-removebg.png";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    // { name: "Trang chủ", href: "/", icon: Home },
    { name: "Giới thiệu", href: "/gioi-thieu", icon: BookOpenCheck },
    { name: "Hướng dẫn tra cứu", href: "/tra-cuu", icon: ShieldQuestionMark },

    {
      name: "Tra cứu lãi suất",
      href: "https://camdonhuttan.com/kiem-tra-lai-suat/",
      icon: Search,
    },

    // { name: "Quy trình làm việc", href: "/quy-trinh", icon: ClipboardList },
    { name: "Chương trình cuối năm", href: "/chuong-trinh", icon: ClipboardList },
    { name: "Ưu đãi sinh viên", href: "/uu-dai-sinh-vien", icon: Cannabis },
  ];

  return (
    <>
      {" "}
      {/* Top Bar - Info */}
      <div className="hidden lg:block bg-gradient-to-r from-green-400 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Thứ 2 - T7: 8:00 - 20:00 | Chủ nhật: Nghỉ</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:0346636399"
                  className="hover:text-yellow-200 transition-colors"
                >
                  0346636399 {"  | "}
                </a>
                <Phone className="w-4 h-4" />
                <a
                  href="tel:0879393955"
                  className="hover:text-yellow-200 transition-colors"
                >
                  0879393955
                </a>
              </div>
              {/* Website */}
               <div className="flex items-center gap-2 min-w-[160px]">
                <Globe className="text-white flex-shrink-0" />
                <a
                  href="https://camdocantho.net"
                  target="_blank"
                  className="hover:underline truncate sm:whitespace-normal"
                >
                  camdocantho.net
                </a>
              </div>

              {/* Fanpage */}
              <div className="flex items-center gap-2 min-w-[140px]">
                <Facebook className="text-white flex-shrink-0" />
                <a
                  href="https://www.facebook.com/camdouytincantho"
                  target="_blank"
                  className="hover:underline truncate sm:whitespace-normal"
                >
                  Cầm đồ Nhựt Tân Cần Thơ
                </a>
              </div>
            </div>
            <div className="text-xs opacity-90">
              Địa điểm đáng tin cậy của bạn tại Cần thơ
            </div>
          </div>
        </div>
      </div>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center p-3 group">
              {/* <img src={logoImage} className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg group-hover:scale-105 transition duration-300"/> */}

              <Image
                src={logoImage}
                alt="Nhựt Tân"
                className=" object-cover w-50"
              />
              {/* <div className="text-xs text-gray-500">Cầm đồ uy tín Cần Thơ</div> */}
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 px-2 py-2  text-yellow-300 rounded-lg  hover:text-yellow-500  transition duration-300 font-semibold"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="">{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* CTA BUTTON - Desktop */}
            <a
              // href="https://camdonhuttan.com/kiem-tra-lai-suat/"
              className="hidden text-sm md:inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-400 text-yellow-300 px-6 py-2.5 rounded-xl font-semibold hover:from-yellow-700 hover:to-yellow-800 hover:shadow-lg transition duration-300"
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
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition duration-300 font-medium"
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
                  className="flex items-center justify-center gap-2 mt-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-yellow-700 hover:to-yellow-800 transition duration-300"
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
    </>
  );
}
