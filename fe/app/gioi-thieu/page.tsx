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
        <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
            {/* About Section */}
            <div className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-green-600">
                            Về Chúng Tôi
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <span className="font-semibold text-yellow-400">
                Cầm Đồ Nhựt Tân
              </span>{" "}
                            là đơn vị cầm đồ uy tín hàng đầu tại Cần Thơ với hơn 20+ năm kinh
                            nghiệm trong lĩnh vực tài chính thế chấp. Chúng tôi tự hào mang
                            đến giải pháp tài chính nhanh chóng, an toàn và minh bạch cho hàng
                            nghìn khách hàng.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Với đội ngũ chuyên viên giàu kinh nghiệm và quy trình thẩm định
                            chuyên nghiệp, chúng tôi cam kết mang đến dịch vụ tốt nhất với lãi
                            suất cạnh tranh và thủ tục đơn giản.
                        </p>
                        <div className="flex items-center gap-4 mb-4">
                            <Star className="w-6 h-6 fill-cyan-500 text-cyan-500"/>
                            <span className="text-lg font-semibold">20+ năm kinh nghiệm</span>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <Star className="w-6 h-6 fill-cyan-500 text-cyan-500"/>
                            <span className="text-lg font-semibold">
                100,000+ khách hàng tin tưởng
              </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Star className="w-6 h-6 fill-cyan-500 text-cyan-500"/>
                            <span className="text-lg font-semibold">
                Giải ngân trong 5 phút
              </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={about5.src}
                            alt="Cửa hàng"
                            className="rounded-xl shadow-lg h-64 object-cover"
                        />
                        <img
                            src={about3.src}
                            // src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&q=80"
                            alt="Vàng bạc"
                            className="rounded-xl shadow-lg h-64 object-cover mt-8"
                        />
                        <img
                            src={about4.src}
                            // src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&q=80"
                            alt="Kim cương"
                            className="rounded-xl shadow-lg h-64 object-cover -mt-8"
                        />
                        <img
                            src={about2.src}
                            // src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&q=80"
                            alt="Tư vấn"
                            className="rounded-xl shadow-lg h-64 object-cover"
                        />
                    </div>
                </div>


            </div>
            <HoatDongNhatTan/>
            {/* GIỚI THIỆU DỊCH VỤ */}
            <section className="py-20 bg-white">
                <div className=" mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Trải nghiệm dịch vụ tốt nhất
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Với 20 năm kinh nghiệm, chúng tôi cam kết mang đến sự hài lòng tối
                            đa cho khách hàng
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div
                            className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition duration-300">
                            <div
                                className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                                <Shield className="w-8 h-8"/>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                An toàn & Bảo mật
                            </h3>
                            <p className="text-sm text-gray-600">
                                Thông tin cá nhân được bảo mật tuyệt đối
                            </p>
                        </div>

                        <div
                            className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition duration-300">
                            <div
                                className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                                <TrendingUp className="w-8 h-8"/>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Định giá cao</h3>
                            <p className="text-sm text-gray-600">
                                Minh bạch, chính xác và cạnh tranh nhất
                            </p>
                        </div>

                        <div
                            className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition duration-300">
                            <div
                                className="w-16 h-16 bg-purple-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                                <Clock className="w-8 h-8"/>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Lãi suất tốt nhất
                            </h3>
                            <p className="text-sm text-gray-600">
                                Cạnh tranh nhất thị trường hiện nay
                            </p>
                        </div>

                        <div
                            className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition duration-300">
                            <div
                                className="w-16 h-16 bg-orange-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                                <FileText className="w-8 h-8"/>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Hợp đồng rõ ràng
                            </h3>
                            <p className="text-sm text-gray-600">
                                Niêm phong, minh bạch, đầy đủ pháp lý
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
