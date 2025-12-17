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
      <section className="w-full bg-gradient-to-b from-white to-green-50 text-gray-800 py-20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 text-center mb-16 relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-wide text-green-800">
            <Gift className="inline mr-2 text-yellow-400" />
            SĂN QUÀ SIÊU GIÁ TRỊ
            <Gift className="inline ml-2 text-yellow-400" />
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Từ <strong className="text-green-700">01/12/2025</strong> đến{" "}
            <strong className="text-green-700">31/12/2025</strong>, khi quý khách{" "}
            <span className="underline decoration-yellow-400 font-semibold">
          cầm đồ từ 5.000.000đ
        </span>{" "}
            sẽ nhận ngay phiếu bốc thăm trúng thưởng hấp dẫn!
          </p>
        </div>

        {/* Prizes */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {prizes.map((prize, idx) => (
              <div
                  key={idx}
                  className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <img
                    src={prize.image}
                    alt={prize.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex flex-col justify-end p-5">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Gift className="text-yellow-400" /> {prize.title}
                  </h3>
                  <p className="text-white/90 text-sm mt-1">
                    {prize.description}
                  </p>
                </div>
              </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <h3 className="text-3xl font-bold mb-12 flex items-center justify-center gap-3 text-green-800">
            <Clock size={32} className="text-yellow-400" /> Thời gian sự kiện
          </h3>

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-12">
            {[{
              date: "12/11/2025",
              title: "Bắt đầu nhận phiếu",
              desc: "Khách hàng cầm đồ từ 5.000.000đ nhận ngay phiếu tham gia"
            },{
              date: "31/12/2025",
              title: "Livestream trao thưởng",
              desc: "Công bố và trao giải trực tiếp trên livestream"
            }].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 max-w-sm w-full">
                  <p className="text-xl font-bold text-yellow-500">{item.date}</p>
                  <p className="text-green-800 font-semibold mt-2">{item.title}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-green-800 flex justify-center gap-3">
            <CheckCircle size={32} className="text-yellow-400" /> Thể lệ tham gia
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Cầm đồ từ 5.000.000đ nhận 1 phiếu bốc thăm",
              "Phiếu chỉ có giá trị trong thời gian sự kiện",
              "Người trúng giải được liên hệ trực tiếp",
              "Giải thưởng không quy đổi tiền mặt"
            ].map((rule, i) => (
                <div
                    key={i}
                    className="flex items-start gap-3 p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
                >
                  <CheckCircle className="text-green-600 mt-1" />
                  <p className="text-gray-700">{rule}</p>
                </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-7xl mx-auto px-4 text-center space-y-10 mb-20">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-green-800 flex justify-center gap-3">
            <ShieldCheck size={32} className="text-yellow-400" />
            Cơ hội trúng lớn – Đừng bỏ lỡ!
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: "Nhận tiền nhanh", desc: "Giải ngân nhanh – giá tốt – không chờ đợi" },
              { icon: Clock, title: "Thủ tục gọn nhẹ", desc: "Chỉ 5 phút – trải nghiệm chuyên nghiệp" },
              { icon: Lock, title: "Bảo mật tuyệt đối", desc: "Thông tin khách hàng được bảo vệ 100%" },
              { icon: MapPin, title: "Hệ thống uy tín", desc: "Cầm Đồ Nhựt Tân – đáng tin cậy tại Cần Thơ" }
            ].map((b, i) => (
                <div
                    key={i}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-white">
                    <b.icon size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-green-800 text-lg">{b.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{b.desc}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>

        <DiaChi />
      </section>
  );

}

export default PromotionBanner;
