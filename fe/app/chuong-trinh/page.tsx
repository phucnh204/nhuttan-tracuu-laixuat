"use client";

import React from "react";
import { Gift, Clock, MapPin, ShieldCheck, CheckCircle, Lock } from "lucide-react";
import DiaChi from "@/app/dia-chi/page";
import {Metadata} from "next";
export const metadata_khuyenmai: Metadata = {
  title: 'Khuyến Mãi Tháng 12/2025 - Trúng 1 Chỉ Vàng | Cầm Đồ Nhựt Tân',
  description: '🎁 Săn quà siêu giá trị! Cầm đồ từ 5.000.000đ nhận ngay phiếu bốc thăm trúng: 1 chỉ vàng 9999, Samsung A07, A06 và nhiều phần quà hấp dẫn. Từ 01/12 - 31/12/2025. Chi tiết: 0919 636 399',
  keywords: [
    'khuyến mãi cầm đồ',
    'bốc thăm trúng thưởng',
    'trúng vàng',
    'quà tặng sinh viên',
    'khuyến mãi Cần Thơ',
    'Samsung A07',
  ],
  openGraph: {
    title: 'Trúng 1 Chỉ Vàng Khi Cầm Đồ - Khuyến Mãi 12/2025',
    description: 'Cầm đồ từ 5 triệu, nhận phiếu bốc thăm trúng vàng và nhiều giải thưởng',
    url: 'https://camdocantho.net/khuyen-mai',
    images: [{
      url: 'https://camdocantho.net/og-promotion.jpg',
      width: 1200,
      height: 630,
    }],
  },
  alternates: {
    canonical: 'https://camdocantho.net/khuyen-mai',
  },
}

const promotionEventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Chương trình bốc thăm trúng thưởng",
  "startDate": "2025-12-01T08:00:00+07:00",
  "endDate": "2025-12-31T20:00:00+07:00",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Cầm Đồ Nhựt Tân",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "102 Đường 3 Tháng 2",
      "addressLocality": "Cần Thơ",
      "addressCountry": "VN"
    }
  },
  "organizer": {
    "@id": "https://camdocantho.net/#organization"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "VND",
    "availability": "https://schema.org/InStock"
  }
}
const prizes = [
  {
    title: "Giải Đặc Biệt",
    description: "1 chỉ vàng 9999",
    image: "/images/giaithuong1.jpg",
  },
  {
    title: "Giải Nhất",
    description: "Điện thoại Samsung A07 – Full Box",
    image: "/images/giaithuong2.jpg",
  },
  {
    title: "Giải Nhì",
    description: "Điện thoại Samsung A06 – Full Box",
    image: "/images/giaithuong3.jpg",
  },
  {
    title: "Giải Ba",
    description: "05 cục sạc dự phòng 10.000 mAh",
    image: "/images/giaithuong4.jpg",
  },
];

const branches = [
  {
    name: "Chi nhánh đường 3 tháng 2",
    address: "102 Đ. 3 Tháng 2, P. Xuân Khánh, Ninh Kiều, Cần Thơ",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.675060595385!2d105.76070867926734!3d10.029764592684842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a088231748c1ed%3A0x349b82a37881e8e7!2zMTAyIMSQxqFuZyA0IFRoYW5nIDIsIFh1w6FuIEtoYcOgbmgsIE5pbmggS2nhu4dwLCDEkMOgIEjDoCwgQ-G7kyBUsIELDoCBBbmc!5e0!3m2!1svi!2s!4v1700000000000",
  },
  {
    name: "Chi nhánh Đường 30 Tháng 4",
    address: "555 Đường 30/4, P. Hưng Lợi, Q. Ninh Kiều, Cần Thơ",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.431733120049!2d105.75593147926658!3d10.011945692716717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089de6dc70b0b%3A0x197ee1e2d24b37b7!2zNTU1IMSQxrDhu51uZyAzMC80LCBIw6BuZyBMw7RuZyA0w6JtLCBOaW5oIEtow6puLCBDw6puIFRoacOxbiwgVMOibiBDaMOtIE7hu5lp!5e0!3m2!1svi!2s!4v1700000000001",
  },
];

function PromotionBanner() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 text-blue-800 py-16 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 opacity-20 rounded-full translate-x-1/4 translate-y-1/4"></div>

      {/* Header */}
      <div className="max-w-8xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-pulse tracking-wide text-yellow-400">
          <Gift className="inline mr-2 text-blue-500" /> SĂN QUÀ SIÊU GIÁ TRỊ!{" "}
          <Gift className="inline ml-2 text-blue-500" />
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-green-800">
          Từ <strong>01/12/2025</strong> đến <strong>31/12/2025</strong>, khi
          quý khách{" "}
          <span className="underline decoration-blue-400">
            cầm đồ từ 5.000.000đ
          </span>
          , sẽ nhận ngay phiếu bốc thăm trúng thưởng hấp dẫn!
        </p>
      </div>

      {/* Prizes */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {prizes.map((prize, idx) => (
          <div
            key={idx}
            className="relative rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-500 cursor-pointer group"
          >
            <img
              src={prize.image}
              alt={prize.title}
              className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/70 to-transparent flex flex-col justify-end p-4 transition-opacity duration-500 group-hover:opacity-100 opacity-90">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Gift /> {prize.title}
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                {prize.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline nâng cấp chuyên nghiệp */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h3 className="text-3xl font-bold mb-12 flex items-center justify-center gap-3 text-green-400">
          <Clock size={32} /> Thời gian sự kiện
        </h3>

        <div className="relative flex flex-col sm:flex-row items-center sm:justify-between">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-8 sm:left-0 sm:right-0 h-1 bg-blue-200 z-0 hidden sm:block"></div>

          {/* Event 1 */}
          <div className="relative z-10 flex flex-col items-center text-center mb-10 sm:mb-0 sm:w-1/2 group">
            {/* <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full text-white shadow-xl mb-4 transform transition group-hover:scale-105">
              <Clock size={32} />
            </div> */}
            <div className="bg-white p-5 rounded-xl shadow-lg border border-blue-100 w-full sm:max-w-xs">
              <p className="text-xl font-bold text-yellow-800">12/11/2025</p>
              <p className="text-green-700 mt-2 font-medium">
                Bắt đầu nhận phiếu tham gia
              </p>
              <p className="text-sm text-green-500 mt-1">
                Khách hàng nhận ngay phiếu bốc thăm khi cầm đồ từ 5.000.000đ
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="relative z-10 flex flex-col items-center text-center sm:w-1/2 group">
            {/* <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full text-white shadow-xl mb-4 transform transition group-hover:scale-105">
              <Clock size={32} />
            </div> */}
            <div className="bg-white p-5 rounded-xl shadow-lg border border-blue-100 w-full sm:max-w-xs">
              <p className="text-xl font-bold text-yellow-800">31/12/2025</p>
              <p className="text-green-700 mt-2 font-medium">
                Livestream bóc thăm - Trao thưởng
              </p>
              <p className="text-sm text-green-500 mt-1">
                Theo dõi livestream để biết ai là người may mắn trúng giải đặc
                biệt
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Participation rules nâng cấp */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h3 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-3 text-yellow-400">
          <CheckCircle size={32} /> Thể lệ tham gia
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Rule 1 */}
          <div className="flex items-start p-4 bg-blue-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <CheckCircle className="text-green-500 mt-1 mr-3" size={24} />
            <div>
              <p className="font-semibold text-green-300 mb-1">
                Nhận phiếu bốc thăm
              </p>
              <p className="text-gray-400 text-sm">
                Mỗi khách hàng cầm đồ từ <strong>5.000.000đ</strong> sẽ nhận
                ngay 1 phiếu bốc thăm may mắn.
              </p>
            </div>
          </div>

          {/* Rule 2 */}
          <div className="flex items-start p-4 bg-blue-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <CheckCircle className="text-green-500 mt-1 mr-3" size={24} />
            <div>
              <p className="font-semibold text-green-300 mb-1">Giá trị phiếu</p>
              <p className="text-gray-400 text-sm">
                Phiếu bốc thăm chỉ có giá trị trong thời gian sự kiện và không
                được chuyển nhượng.
              </p>
            </div>
          </div>

          {/* Rule 3 */}
          <div className="flex items-start p-4 bg-blue-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <CheckCircle className="text-green-500 mt-1 mr-3" size={24} />
            <div>
              <p className="font-semibold text-green-300 mb-1">
                Thông báo người trúng giải
              </p>
              <p className="text-gray-400 text-sm">
                Người trúng giải sẽ được liên hệ qua số điện thoại trong phiếu.
              </p>
            </div>
          </div>

          {/* Rule 4 */}
          <div className="flex items-start p-4 bg-blue-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <CheckCircle className="text-green-500 mt-1 mr-3" size={24} />
            <div>
              <p className="font-semibold text-green-300 mb-1">
                Quy định giải thưởng
              </p>
              <p className="text-gray-400 text-sm">
                Giải thưởng không có giá trị quy đổi thành tiền mặt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits nâng cấp */}
      <div className="max-w-7xl mx-auto px-4 text-center space-y-8 mb-16">
        {/* Header */}
        <p className="text-3xl sm:text-4xl font-extrabold flex items-center justify-center gap-3 text-green-400 animate-pulse">
          <ShieldCheck size={32} /> Cơ hội trúng lớn – Tại sao không thử ngay?
        </p>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-5 bg-white  shadow-lg  hover:shadow-2xl transition">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-100 text-white rounded-full">
              <ShieldCheck size={20} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-yellow-400 text-lg">
                 Nhận tiền nhanh chóng
              </h4>
              <p className="text-green-600 text-sm mt-1">
                Cầm nhanh – Giá tốt, nhận ngay tiền mặt mà không cần chờ lâu
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white  shadow-lg  hover:shadow-2xl transition">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-100 text-white rounded-full">
              <Clock size={20} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-yellow-400 text-lg">
                 Thủ tục nhanh gọn
              </h4>
              <p className="text-green-600 text-sm mt-1">
                Chỉ 5 phút – Không rườm rà, trải nghiệm tiện lợi và chuyên
                nghiệp
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white  shadow-lg  hover:shadow-2xl transition">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-100 text-white rounded-full">
              <Lock size={20} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-yellow-400 text-lg">
                 Bảo mật tuyệt đối
              </h4>
              <p className="text-green-600 text-sm mt-1">
                Thông tin khách hàng được bảo vệ 100%, an tâm tuyệt đối khi tham
                gia
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white  shadow-lg  hover:shadow-2xl transition">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-100 text-white rounded-full">
              <MapPin size={20} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-yellow-400 text-lg">
                 Hệ thống uy tín
              </h4>
              <p className="text-green-600 text-sm mt-1">
                Cầm Đồ Nhựt Tân tại Cần Thơ – Địa chỉ đáng tin cậy, trải nghiệm
                chuyên nghiệp
              </p>
            </div>
          </div>

          
        </div>
      </div>


      <DiaChi/>
    </section>
  );
}

export default PromotionBanner;
