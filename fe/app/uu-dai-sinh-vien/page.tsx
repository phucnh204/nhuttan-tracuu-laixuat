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

export default function UuDaiSinhVien() {
    return (
        <div className="min-h-screen bg-green-500 text-green-800">

            {/* ==== HERO ==== */}
            <div className="relative w-full bg-gradient-to-br from-[#E3F2FD] to-[#F8FBFF] pb-32 overflow-hidden">
                <img
                    src="/images/sv.png"
                    alt="bg"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />

                <div className="relative max-w-6xl mx-auto px-6 pt-24 text-center">


                    <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-500">
                        Ưu Đãi Đặc Biệt Dành Cho Sinh Viên 2025
                    </h1>

                    <p className="text-lg text-yellow-700 max-w-3xl mx-auto leading-relaxed mt-4">
                        Chương trình hỗ trợ tài chính **linh hoạt – minh bạch – phí thấp nhất thị trường** dành cho sinh
                        viên.
                        Chỉ cần thẻ sinh viên, CMND/CCCD hoặc giấy báo nhập học để tham gia.
                    </p>

                    {/* Offer */}
                    <div
                        className="mt-10 max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-yellow-100">
                        <div className="flex justify-center items-center gap-3">
                            <Sparkles className="w-8 h-8 text-yellow-500"/>
                            <p className="text-4xl sm:text-6xl font-black text-yellow-600">
                                GIẢM 50%
                            </p>
                            <Sparkles className="w-8 h-8 text-yellow-500"/>
                        </div>

                        <p className="text-center text-2xl font-semibold mt-3">
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
                            "Hợp đồng  rõ ràng",
                            "Hỗ trợ từ T2 - T7 khung giờ từ 8:00 - 20:00",
                        ].map((tag, i) => (
                            <div
                                key={i}
                                className="px-5 py-2 bg-white border border-yellow-100 rounded-full shadow-sm text-sm text-gray-600"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ==== MAIN CONTENT ==== */}
            <div className="  mx-auto px-6 py-20 space-y-20">

                {/* BENEFITS */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 -mt-32 relative z-10">


                    {/* CARD 1 */}
                    <div
                        className="bg-white rounded p-10 shadow-lg border border-yellow-100 relative overflow-hidden">
                        <TrendingDown className="w-14 h-14 text-green-500 mb-4" strokeWidth={1.3}/>

                        <h3 className="text-2xl font-bold text-gray-900">Ưu Đãi Cầm Đồ Sinh Viên</h3>
                        <p className="text-lg text-gray-700 mt-2 leading-relaxed">
                            Dành riêng cho sinh viên khu vực Cần Thơ – tặng gói lãi suất thấp
                            & chi phí minh bạch khi cầm điện thoại, laptop & xe máy.
                        </p>

                        <p className="text-3xl font-extrabold text-yellow-600 mt-4">Phí Ưu Đãi Đặc Biệt</p>
                        <p className="text-sm text-gray-500">Chỉ áp dụng khi sinh viên xuất trình thẻ SV hoặc giấy báo
                            nhập học</p>


                    </div>

                    {/* CARD 2 */}
                    <div
                        className="bg-white rounded p-10 shadow-lg border border-yellow-100 relative overflow-hidden">
                        <Clock className="w-14 h-14 text-yellow-500 mb-4" strokeWidth={1.3}/>

                        <h3 className="text-2xl font-bold text-gray-900">Thủ Tục Nhanh – Hỗ Trợ Tận Tình</h3>

                        <p className="text-lg text-gray-700 mt-2 leading-relaxed">
                            Tại Nhựt Tân, sinh viên được hỗ trợ tối đa với quy trình cầm đơn giản,
                            giải ngân chỉ 5–10 phút. Chi phí luôn công khai và tư vấn rõ ràng trước khi ký.
                        </p>

                        <ul className="mt-4 text-gray-600 text-sm space-y-2">

                            <li>• Hỗ trợ từ 8:00 – 20:00 (T2–T7)</li>
                            <li>• Có thể gia hạn hoặc tất toán online</li>
                        </ul>


                    </div>

                </div>

                <DichVu/>
                {/* WHY US */}


            </div>
        </div>
    );
}
