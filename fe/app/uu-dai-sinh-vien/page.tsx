"use client";

import React from "react";
import {
    GraduationCap,
    TrendingDown,
    Clock,
    CheckCircle,
    Sparkles,
    Gift,
    Shield,
    Rocket,
    BadgeCheck,
    Wallet,
    PhoneCall,
    BookOpen,
    HandCoins,
    UsersRound,
    Building2,
} from "lucide-react";
import DichVu from "@/app/components/DichVu/DichVu";
import {Metadata} from "next";

export const metadata_uudai: Metadata = {
    title: 'Ưu Đãi Sinh Viên - Giảm 50% Lãi Suất Kỳ Đầu | Cầm Đồ Nhựt Tân',
    description: '🎓 Chương trình ưu đãi đặc biệt cho sinh viên Cần Thơ: Giảm 50% lãi suất kỳ đầu tiên! Cầm điện thoại, laptop, xe máy với thủ tục đơn giản, chỉ cần thẻ sinh viên. Hotline: 0919 636 399',
    keywords: [
        'ưu đãi sinh viên Cần Thơ',
        'cầm đồ sinh viên',
        'vay tiền sinh viên',
        'giảm 50% lãi suất',
        'cầm điện thoại sinh viên',
        'cầm laptop sinh viên',
    ],
    openGraph: {
        title: 'Giảm 50% Lãi Suất Cho Sinh Viên - Cầm Đồ Nhựt Tân',
        description: 'Ưu đãi đặc biệt dành riêng cho sinh viên Cần Thơ',
        url: 'https://camdocantho.net/uu-dai-sinh-vien',
        images: [{
            url: 'https://camdocantho.net/og-student.jpg',
            width: 1200,
            height: 630,
        }],
    },
    alternates: {
        canonical: 'https://camdocantho.net/uu-dai-sinh-vien',
    },
}

const studentOfferSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Ưu đãi cầm đồ cho sinh viên",
    "description": "Giảm 50% lãi suất kỳ đầu tiên cho sinh viên",
    "price": "0",
    "priceCurrency": "VND",
    "availability": "https://schema.org/InStock",
    "eligibleCustomerType": "Student",
    "validFrom": "2025-01-01",
    "validThrough": "2025-12-31",
    "seller": {
        "@id": "https://camdocantho.net/#organization"
    }
}
export default function UuDaiSinhVien() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-800">

            {/* ==== HERO ==== */}
            <div className="relative w-full bg-gradient-to-br from-green-50 via-white to-yellow-50 pb-32 overflow-hidden">
                <img
                    src="/images/sv.png"
                    alt="bg"
                    className="absolute inset-0 w-full h-full object-cover opacity-15"
                />

                <div className="relative max-w-6xl mx-auto px-6 pt-24 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800">
                        Ưu Đãi Đặc Biệt Dành Cho Sinh Viên 2025
                    </h1>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
                        Chương trình hỗ trợ tài chính{" "}
                        <span className="font-semibold text-green-700">
            linh hoạt – minh bạch – phí thấp nhất thị trường
          </span>{" "}
                        dành cho sinh viên. Chỉ cần thẻ sinh viên, CMND/CCCD hoặc giấy báo nhập học.
                    </p>

                    {/* Offer */}
                    <div className="mt-10 max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-yellow-200">
                        <div className="flex justify-center items-center gap-3">
                            <Sparkles className="w-8 h-8 text-yellow-400" />
                            <p className="text-4xl sm:text-6xl font-black text-yellow-500">
                                GIẢM 50%
                            </p>
                            <Sparkles className="w-8 h-8 text-yellow-400" />
                        </div>

                        <p className="text-center text-2xl font-semibold mt-3 text-green-800">
                            Lãi Suất Kỳ Đầu Tiên
                        </p>

                        <p className="text-center text-gray-500 mt-2">
                            Duy nhất dành cho sinh viên 🎓
                        </p>
                    </div>

                    {/* Quick tags */}
                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        {[
                            "Giải ngân trong 5 phút",
                            "Niêm phong minh bạch",
                            "Hợp đồng rõ ràng",
                            "Hỗ trợ T2–T7 (8:00 – 20:00)",
                        ].map((tag, i) => (
                            <div
                                key={i}
                                className="px-5 py-2 bg-white border border-green-100 rounded-full shadow-sm text-sm text-green-700"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ==== MAIN CONTENT ==== */}
            <div className="mx-auto px-6 py-20 space-y-20">

                {/* BENEFITS */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 -mt-32 relative z-10">

                    {/* CARD 1 */}
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-green-100">
                        <TrendingDown className="w-14 h-14 text-green-600 mb-4" strokeWidth={1.3} />

                        <h3 className="text-2xl font-bold text-green-800">
                            Ưu Đãi Cầm Đồ Sinh Viên
                        </h3>

                        <p className="text-lg text-gray-600 mt-3 leading-relaxed">
                            Dành riêng cho sinh viên khu vực Cần Thơ – tặng gói lãi suất thấp &
                            chi phí minh bạch khi cầm điện thoại, laptop và xe máy.
                        </p>

                        <p className="text-3xl font-extrabold text-yellow-500 mt-5">
                            Phí Ưu Đãi Đặc Biệt
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            Áp dụng khi xuất trình thẻ sinh viên hoặc giấy báo nhập học
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-green-100">
                        <Clock className="w-14 h-14 text-yellow-400 mb-4" strokeWidth={1.3} />

                        <h3 className="text-2xl font-bold text-green-800">
                            Thủ Tục Nhanh – Hỗ Trợ Tận Tình
                        </h3>

                        <p className="text-lg text-gray-600 mt-3 leading-relaxed">
                            Sinh viên được hỗ trợ tối đa với quy trình cầm đơn giản,
                            giải ngân chỉ từ 5–10 phút. Chi phí luôn công khai, tư vấn rõ ràng trước khi ký.
                        </p>

                        <ul className="mt-4 text-green-700 text-sm space-y-2">
                            <li>• Hỗ trợ từ 8:00 – 20:00 (T2–T7)</li>
                            <li>• Có thể gia hạn hoặc tất toán online</li>
                        </ul>
                    </div>
                </div>

                <DichVu />
            </div>
        </div>
    );

}
