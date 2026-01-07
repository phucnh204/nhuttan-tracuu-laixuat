"use client";

import React from "react";
import {
  Gift,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle,
  Lock,
} from "lucide-react";
import DiaChi from "@/app/dia-chi/page";
import { Metadata } from "next";


/* ================= SCHEMA EVENT ================= */
const promotionEventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Bốc thăm trúng thưởng – Kỷ niệm 20 năm Cầm Đồ Nhựt Tân",
  startDate: "2026-04-01T08:00:00+07:00",
  endDate: "2026-05-01T20:00:00+07:00",
  eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Cầm Đồ Nhựt Tân",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cần Thơ",
      addressCountry: "VN",
    },
  },
};

/* ================= GIẢI THƯỞNG ================= */
const prizes = [
  {
    title: "Giải Đặc Biệt",
    description: "02 Giải – Mỗi giải 1/2 chỉ VÀNG",
    image: "/images/giaithuong-vang.png",
  },
  {
    title: "Giải Nhất",
    description: "Samsung A06 5G (6GB/128GB) ",
    image: "/images/giaithuong-a06.png",
  },
  {
    title: "Giải Nhì",
    description: "Xiaomi Redmi 13C (8GB/256GB) ",
    image: "/images/giaithuong-13c.png",
  },
  {
    title: "Giải Ba",
    description: "Samsung A14 5G (6GB/128GB) ",
    image: "/images/giaithuong-a14.png",
  },
];

/* ================= COMPONENT ================= */
function PromotionBanner() {
  return (
      <section className="w-full bg-gradient-to-b from-white to-green-50 py-20">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-800 mb-6">
            🎉💥 KỶ NIỆM 20 NĂM THÀNH LẬP CỬA HÀNG 💥🎉
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            🌟 Trải qua <strong>20 năm hình thành và phát triển</strong>,{" "}
            <strong className="text-green-700">
              CẦM ĐỒ NHỰT TÂN
            </strong>{" "}
            tự hào là đối tác tài chính uy tín, đồng hành cùng hàng chục
            ngàn khách hàng tại <strong>TP. Cần Thơ</strong>.
            <br />
            <br />
            Nhân dịp đặc biệt này, Nhựt Tân trân trọng triển khai{" "}
            <span className="font-semibold underline decoration-yellow-400">
            CHƯƠNG TRÌNH BỐC THĂM TRÚNG THƯỞNG – KỶ NIỆM 20 NĂM
          </span>
            , như một lời tri ân chân thành gửi đến Quý khách hàng đã tin
            tưởng và đồng hành suốt chặng đường vừa qua.
          </p>
        </div>

        {/* GIẢI THƯỞNG */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {prizes.map((prize, idx) => (
              <div
                  key={idx}
                  className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                    src={prize.image}
                    alt={prize.title}
                    className="w-full h-64 object-contain"
                />
                <div className="bg-green-800 p-5 text-white">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Gift className="text-yellow-400" /> {prize.title}
                  </h3>
                  <p className="text-sm mt-2">{prize.description}</p>
                </div>
              </div>
          ))}
        </div>

        {/* THỜI GIAN */}
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12 flex justify-center gap-3">
            <Clock className="text-yellow-400" /> Thời gian chương trình
          </h3>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-yellow-500 font-bold text-xl">
                01/04/2026
              </p>
              <p className="font-semibold text-green-800 mt-2">
                Bắt đầu phát hành phiếu
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Giao dịch từ 5.000.000đ nhận 01 phiếu bốc thăm
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-yellow-500 font-bold text-xl">
                01/05/2026
              </p>
              <p className="font-semibold text-green-800 mt-2">
                Livestream bốc thăm & trao thưởng
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Bốc thăm trực tiếp – công khai – minh bạch tại cửa hàng
              </p>
            </div>
          </div>
        </div>

        {/* THỂ LỆ */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12 flex justify-center gap-3">
            <CheckCircle className="text-yellow-400" /> Thể lệ tham gia
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Mỗi giao dịch – dịch vụ từ 5.000.000đ nhận 01 phiếu bốc thăm",
              "Không giới hạn số phiếu trên mỗi hợp đồng",
              "Áp dụng cho tất cả các giao dịch – dịch vụ tại cửa hàng",
              "Giao dịch càng nhiều – cơ hội trúng thưởng càng lớn",
              "Giải thưởng trao trực tiếp, không quy đổi tiền mặt",
            ].map((rule, i) => (
                <div
                    key={i}
                    className="flex gap-3 bg-white p-5 rounded-xl shadow"
                >
                  <CheckCircle className="text-green-600 mt-1" />
                  <p className="text-gray-700">{rule}</p>
                </div>
            ))}
          </div>
        </div>

        {/* LỢI ÍCH */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
            🎯 Giao dịch càng nhiều – Cơ hội trúng càng lớn!
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Giải ngân nhanh",
                desc: "Thủ tục gọn – nhận tiền trong vài phút",
              },
              {
                icon: Clock,
                title: "Uy tín 20 năm",
                desc: "Thương hiệu lâu năm – đáng tin cậy",
              },
              {
                icon: Lock,
                title: "Bảo mật tuyệt đối",
                desc: "Thông tin khách hàng được bảo vệ 100%",
              },
              {
                icon: MapPin,
                title: "Nhiều chi nhánh",
                desc: "Phục vụ khắp Cần Thơ",
              },
            ].map((b, i) => (
                <div
                    key={i}
                    className="flex gap-4 bg-white p-6 rounded-2xl shadow"
                >
                  <b.icon className="text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">
                      {b.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {b.desc}
                    </p>
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
