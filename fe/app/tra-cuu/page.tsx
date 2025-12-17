"use client";

import { useState } from "react";
import {
  Search,
  FileText,
  Phone,
  Shield,
  ChevronRight,
  CheckCircle,
  BookOpen,
  HelpCircle,
  Clock,
  Star, TrendingUp, Award, ClipboardCheck, ShieldCheck,
} from "lucide-react";
import DiaChi from "@/app/dia-chi/page";


const features = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Nhanh Chóng",
    desc: "Thẩm định và giải ngân trong 5 phút",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Uy Tín",
    desc: "20+ năm kinh nghiệm, đảm bảo pháp lý",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Lãi Suất Thấp",
    desc: "Chỉ từ 1%, lãi suất cạnh tranh nhất thị trường.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Chuyên Nghiệp",
    desc: "Đội ngũ chuyên viên giàu kinh nghiệm",
  },
];
export default function HuongDanTraCuu() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Bước 1: Chuẩn bị thông tin",
      desc: "Chuẩn bị sẵn mã hợp đồng và số điện thoại đăng ký",
      image: "/images/buoc1.png",
      details: [
        "Tìm mã hợp đồng trên giấy tờ cầm đồ của bạn",
        "Số điện thoại phải trùng với số đã đăng ký khi làm hợp đồng",
        "Kiểm tra kỹ thông tin trước khi nhập",
      ],
    },
    {
      title: "Bước 2: Truy cập trang camdocantho.net",
      desc: "Vào menu 'Tra Cứu Lãi Xuất' trên website camdocantho.net",
      image: "/images/buoc2.png",
      details: [
        "Click vào menu 'Tra Cứu Lãi Xuất' ở đầu trang",
        <div key="link1">
          Hoặc truy cập trực tiếp qua đường link{" "}
          <a
            href="https://camdonhuttan.com/kiem-tra-lai-suat/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            https://camdonhuttan.com/kiem-tra-lai-suat/
          </a>
        </div>,
        <div key="link2">
          Truy cập website chính thức:{" "}
          <a
            href="https://camdocantho.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            camdocantho.net
          </a>
        </div>,
      ],
    },
    {
      title: "Bước 3: Nhập thông tin",
      desc: "Điền chính xác mã hợp đồng và số điện thoại",
      image: "/images/buoc3.png",
      details: [
        "Nhập mã hợp đồng vào ô 'Mã hợp đồng'",
        "Nhập số điện thoại đã đăng ký vào ô 'Số điện thoại'",
        "Kiểm tra lại thông tin đã nhập có chính xác không",
      ],
    },
    {
      title: "Bước 4: Xem kết quả",
      desc: "Hệ thống hiển thị thông tin lãi suất và lịch sử",
      image: "/images/buoc4.png",
      details: [
        "Thông tin lãi suất hiện tại được hiển thị chi tiết",
        "Số tiền cần phải thanh toán và các giao dịch liên quan",
        "Có thể tkiểm tra thời gian đến hẹn đóng lãi",
      ],
    },
  ];



  return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white mb-10">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-green-700 to-green-800 text-yellow-400 py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
              <BookOpen className="w-16 h-16 text-yellow-400" />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Hướng Dẫn Tra Cứu Lãi Suất
            </h1>

            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Thực hiện theo 4 bước đơn giản để kiểm tra lãi suất & thông tin hợp đồng
            </p>
          </div>
        </div>

        {/* QUICK STATS */}
        <div className="max-w-6xl mx-auto px-6 -mt-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <Clock />, label: "Chỉ 2 phút", value: "Tra cứu nhanh" },
              { icon: <Shield />, label: "100% Bảo mật", value: "An toàn tuyệt đối" },
              { icon: <Star />, label: "24/7", value: "Hệ thống luôn sẵn sàng" },
            ].map((stat, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg p-6 text-center
                       hover:-translate-y-1 hover:shadow-xl transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12
                            bg-green-100 text-green-700 rounded-full mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                </div>
            ))}
          </div>
        </div>

        {/* HƯỚNG DẪN */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-green-800">
            Hướng Dẫn Chi Tiết
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden
                       border border-green-100 hover:shadow-2xl transition"
                >
                  <div className="grid md:grid-cols-2">
                    {/* IMAGE */}
                    <div className="relative bg-green-50 flex items-center justify-center p-6">
                      <img
                          src={step.image}
                          alt={step.title}
                          className="max-h-56 object-contain"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12
                                bg-yellow-400 text-green-900
                                rounded-full flex items-center justify-center
                                text-xl font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-green-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{step.desc}</p>

                      <div className="space-y-3">
                        {step.details.map((detail, i) => (
                            <div key={i} className="flex gap-3">
                              <div className="w-2.5 h-2.5 mt-2 bg-green-600 rounded-full" />
                              <span className="text-gray-700 leading-relaxed">{detail}</span>
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* TÍNH NĂNG */}
        <section className="py-24 bg-green-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900 mb-4">
                Tính năng vượt trội
              </h2>
              <p className="text-lg text-green-700">
                Hệ thống tra cứu hiện đại – minh bạch – an toàn
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: <Search />, title: "Tra cứu nhanh", desc: "Nhập mã hợp đồng và số điện thoại để xem kết quả ngay." },
                { icon: <ClipboardCheck />, title: "Minh bạch", desc: "Dữ liệu đồng bộ trực tiếp từ hệ thống chính." },
                { icon: <ShieldCheck />, title: "Bảo mật", desc: "Thông tin được mã hóa – chỉ bạn mới truy cập." },
              ].map((f, i) => (
                  <div
                      key={i}
                      className="bg-white p-8 rounded-3xl border border-green-100
                         shadow-lg hover:-translate-y-1 hover:shadow-2xl transition"
                  >
                    <div className="w-16 h-16 mb-6 flex items-center justify-center
                              bg-gradient-to-br from-green-700 to-green-600
                              text-white rounded-xl shadow-lg">
                      {f.icon}
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-3">
                      {f.title}
                    </h3>
                    <p className="text-gray-600">{f.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-green-700 to-green-800 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Tra cứu lãi suất ngay hôm nay
          </h2>
          <p className="text-green-100 max-w-xl mx-auto mb-8">
            Kiểm tra nhanh – rõ ràng – chính xác theo từng hợp đồng
          </p>
          <a
              href="https://camdonhuttan.com/kiem-tra-lai-suat/"
              className="inline-block bg-yellow-400 text-green-900 font-bold
                   px-10 py-4 rounded-xl shadow-lg
                   hover:bg-yellow-300 hover:scale-105 transition"
          >
            Tra cứu ngay →
          </a>
        </section>
      </div>
  );

}
