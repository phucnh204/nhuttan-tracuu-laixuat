"use client";

import { useEffect, useState, useTransition } from "react";
import {
    Menu,
    X,
    Search,
    ClipboardList,
    Cannabis,
    PhoneCall,
    BookOpenCheck,
    ShieldQuestionMark,
    Clock,
    Phone,
    Globe,
    Facebook,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logoImage from "../../../public/logo-removebg.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const navItems = [
        { name: "Giới thiệu", href: "/gioi-thieu", icon: BookOpenCheck },
        { name: "Hướng dẫn tra cứu", href: "/tra-cuu", icon: ShieldQuestionMark },
        {
            name: "Tra cứu lãi suất",
            href: "https://camdonhuttan.com/kiem-tra-lai-suat/",
            icon: Search,
        },
        { name: "Chương trình cuối năm", href: "/chuong-trinh", icon: ClipboardList },
        { name: "Ưu đãi sinh viên", href: "/uu-dai-sinh-vien", icon: Cannabis },
    ];

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 400);
        return () => clearTimeout(timer);
    }, [pathname]);

    const handleClick = (href: string) => {
        if (href.startsWith("http")) {
            window.open(href, "_blank");
        } else {
            startTransition(() => router.push(href));
        }
    };

    return (
        <>
            {/* Loading */}
            {isLoading && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/70">
                    <div className="animate-spin h-10 w-10 border-4 border-[#F59E0B] border-t-transparent rounded-full" />
                </div>
            )}

            {/* TOP BAR */}
            <div className="hidden lg:block bg-gradient-to-r from-[#0F766E] to-[#134E4A] text-white">
                <div className="max-w-7xl mx-auto px-4 py-2">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#F59E0B]" />
                                <span>Thứ 2 - T7: 8:00 - 20:00 | Chủ nhật: Nghỉ</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-[#F59E0B]" />
                                <a href="tel:0346636399" className="hover:text-[#F59E0B]">
                                    0346 6363 99
                                </a>
                                <span>|</span>
                                <a href="tel:0879393955" className="hover:text-[#F59E0B]">
                                    0879 3939 55
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-[#F59E0B]" />
                                <a href="https://camdocantho.net" target="_blank">
                                    camdocantho.net
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <Facebook className="w-4 h-4 text-[#F59E0B]" />
                                <a
                                    href="https://www.facebook.com/camdouytincantho"
                                    target="_blank"
                                >
                                    Cầm đồ Nhựt Tân Cần Thơ
                                </a>
                            </div>
                        </div>

                        <div className="text-xs opacity-90">
                            Dịch vụ cầm đồ uy tín – giải ngân nhanh
                        </div>
                    </div>
                </div>
            </div>

            {/* HEADER */}
            <header className="bg-white sticky top-0 z-50 shadow-md">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center p-2">
                            <Image
                                src={logoImage}
                                alt="Nhựt Tân"
                                className="object-contain w-[140px]"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isExternal = item.href.startsWith("http");
                                const isActive = !isExternal && pathname === item.href;

                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => handleClick(item.href)}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-xl font-semibold transition
                      ${
                                            isActive
                                                ? "text-[#F59E0B]"
                                                : "text-[#0F766E] hover:text-[#F59E0B]"
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {item.name}
                                    </button>
                                );
                            })}
                        </nav>

                        {/* CTA */}
                        <a
                            href="tel:0346636399"
                            className="hidden   md:inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#EA580C] text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg transition"
                        >
                            <PhoneCall className="w-4 h-4 animate-bounce" />
                            0346 6363 99 | 0879 3939 55
                        </a>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-[#0F766E] hover:bg-gray-100"
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden border-t py-4 animate-fadeIn">
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = pathname === item.href;

                                    return (
                                        <button
                                            key={item.name}
                                            onClick={() => {
                                                handleClick(item.href);
                                                setIsMenuOpen(false);
                                            }}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition
                        ${
                                                isActive
                                                    ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                                                    : "text-[#0F766E] hover:text-[#F59E0B]"
                                            }`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            {item.name}
                                        </button>
                                    );
                                })}
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
                        animation: fadeIn 0.25s ease-out;
                    }
                `}</style>
            </header>
        </>
    );
}
