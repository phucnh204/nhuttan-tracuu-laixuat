import HoatDongNhatTan from "@/app/components/HoatDong/HoatDong";


import {Clock, FileText, Shield, Star, TrendingUp} from "lucide-react";

import about5 from "@/public/images/about5.png";
import about2 from "@/public/images/about6.jpg";
import about3 from "@/public/images/about3.png";
import about4 from "@/public/images/about4.png";
import DiaChi from "../dia-chi/page";
import {Metadata} from "next";

export const metadata_gioithieu: Metadata = {
    title: 'Giới Thiệu Cầm Đồ Nhựt Tân - 20 Năm Uy Tín Tại Cần Thơ',
    description: 'Tìm hiểu về Cầm Đồ Nhựt Tân - đơn vị cầm đồ uy tín với 20+ năm kinh nghiệm, phục vụ 100,000+ khách hàng tại Cần Thơ. Đảm bảo pháp lý, minh bạch, lãi suất từ 1%/tháng.',
    keywords: [
        'giới thiệu Cầm Đồ Nhựt Tân',
        'lịch sử hình thành',
        'cầm đồ uy tín Cần Thơ',
        'kinh nghiệm 20 năm',
        '100000 khách hàng',
    ],
    openGraph: {
        title: 'Về Chúng Tôi - Cầm Đồ Nhựt Tân',
        description: '20+ năm kinh nghiệm, phục vụ 100,000+ khách hàng tin tưởng',
        url: 'https://camdocantho.net/gioi-thieu',
        images: [{
            url: 'https://camdocantho.net/og-about.jpg',
            width: 1200,
            height: 630,
        }],
    },
    alternates: {
        canonical: 'https://camdocantho.net/gioi-thieu',
    },
}

const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
        "@id": "https://camdocantho.net/#organization"
    },
    "description": "Thông tin về Cầm Đồ Nhựt Tân - 20 năm uy tín tại Cần Thơ"
}

function GioiThieu() {
    return (
        <div className="min-h-screen ">
            {/* About Section */}
            <div className="max-w-7xl mx-auto p-6 mb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* TEXT */}
                    <div>
                        <h2 className="text-4xl font-extrabold mb-6 text-green-800">
                            Về chúng tôi
                        </h2>

                        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-yellow-400 rounded-full mb-6" />

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        <span className="font-semibold text-yellow-500">
          Cầm Đồ Nhựt Tân
        </span>{" "}
                            là đơn vị cầm đồ uy tín hàng đầu tại Cần Thơ với hơn{" "}
                            <span className="font-semibold text-green-700">20+ năm</span> kinh nghiệm
                            trong lĩnh vực tài chính thế chấp. Chúng tôi mang đến giải pháp tài chính
                            nhanh chóng, an toàn và minh bạch cho hàng nghìn khách hàng.
                        </p>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Với đội ngũ chuyên viên giàu kinh nghiệm cùng quy trình thẩm định rõ ràng,
                            Nhựt Tân cam kết cung cấp dịch vụ chuyên nghiệp, lãi suất cạnh tranh và
                            thủ tục đơn giản – giải ngân nhanh.
                        </p>

                        {/* STATS */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500
                          flex items-center justify-center shadow-md">
                                    <Star className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg font-semibold text-green-800">
            20+ năm kinh nghiệm hoạt động
          </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500
                          flex items-center justify-center shadow-md">
                                    <Star className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg font-semibold text-green-800">
            100.000+ khách hàng tin tưởng
          </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500
                          flex items-center justify-center shadow-md">
                                    <Star className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg font-semibold text-green-800">
            Giải ngân nhanh chỉ từ 5 phút
          </span>
                            </div>
                        </div>
                    </div>

                    {/* IMAGE GRID */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={about5.src}
                            alt="Cửa hàng Nhựt Tân"
                            className="rounded-2xl shadow-xl h-64 object-cover"
                        />
                        <img
                            src={about3.src}
                            alt="Tài sản thế chấp"
                            className="rounded-2xl shadow-xl h-64 object-cover mt-8"
                        />
                        <img
                            src={about4.src}
                            alt="Trang sức"
                            className="rounded-2xl shadow-xl h-64 object-cover -mt-8"
                        />
                        <img
                            src={about2.src}
                            alt="Tư vấn khách hàng"
                            className="rounded-2xl shadow-xl h-64 object-cover"
                        />
                    </div>
                </div>
            </div>

            <HoatDongNhatTan/>
            {/* GIỚI THIỆU DỊCH VỤ */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* HEADER */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-4">
                            Trải nghiệm dịch vụ tốt nhất
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-400 mx-auto rounded-full mb-6" />
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Với hơn <span className="font-semibold text-green-700">20 năm kinh nghiệm</span>,
                            Nhựt Tân cam kết mang đến dịch vụ tài chính an toàn, minh bạch và hiệu quả nhất
                            cho khách hàng.
                        </p>
                    </div>

                    {/* FEATURES */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* ITEM */}
                        <div className="group text-center p-8 rounded-2xl bg-white border border-green-100
                      shadow-sm hover:shadow-xl transition duration-300">
                            <div
                                className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 text-white
                     flex items-center justify-center rounded-2xl mx-auto mb-6
                     group-hover:scale-110 transition-transform">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-green-800 mb-2">
                                An toàn & Bảo mật
                            </h3>
                            <p className="text-sm text-gray-600">
                                Thông tin cá nhân và tài sản được bảo mật tuyệt đối.
                            </p>
                        </div>

                        {/* ITEM */}
                        <div className="group text-center p-8 rounded-2xl bg-white border border-green-100
                      shadow-sm hover:shadow-xl transition duration-300">
                            <div
                                className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 text-white
                     flex items-center justify-center rounded-2xl mx-auto mb-6
                     group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-green-800 mb-2">
                                Định giá cao – minh bạch
                            </h3>
                            <p className="text-sm text-gray-600">
                                Thẩm định công khai, chính xác và cạnh tranh.
                            </p>
                        </div>

                        {/* ITEM */}
                        <div className="group text-center p-8 rounded-2xl bg-white border border-green-100
                      shadow-sm hover:shadow-xl transition duration-300">
                            <div
                                className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 text-white
                     flex items-center justify-center rounded-2xl mx-auto mb-6
                     group-hover:scale-110 transition-transform">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-green-800 mb-2">
                                Lãi suất cạnh tranh
                            </h3>
                            <p className="text-sm text-gray-600">
                                Chính sách lãi suất rõ ràng, phù hợp từng nhu cầu.
                            </p>
                        </div>

                        {/* ITEM */}
                        <div className="group text-center p-8 rounded-2xl bg-white border border-green-100
                      shadow-sm hover:shadow-xl transition duration-300">
                            <div
                                className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 text-white
                     flex items-center justify-center rounded-2xl mx-auto mb-6
                     group-hover:scale-110 transition-transform">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-green-800 mb-2">
                                Hợp đồng rõ ràng
                            </h3>
                            <p className="text-sm text-gray-600">
                                Đầy đủ pháp lý, niêm phong tài sản minh bạch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <DiaChi/>
        </div>
    );
}

export default GioiThieu;
