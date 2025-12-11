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
  Star,
} from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hướng Dẫn Tra Cứu Lãi Xuất
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Làm theo 4 bước đơn giản để tra cứu thông tin lãi suất của bạn
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Clock className="w-6 h-6" />,
              label: "Chỉ 2 phút",
              value: "Tra cứu nhanh",
            },
            {
              icon: <Shield className="w-6 h-6" />,
              label: "100% Bảo mật",
              value: "An toàn tuyệt đối",
            },
            {
              icon: <Star className="w-6 h-6" />,
              label: "24/7",
              value: "Hệ thống tra cứu luôn sẵn sàng",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
                {stat.icon}
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Hướng Dẫn Chi Tiết
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-lg overflow-hidden transform transition-all duration-500 
          hover:shadow-2xl hover:scale-[1.02] relative group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain  "
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-xl">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>

                  {/* Chi tiết step (UI) */}
                  <div className="mt-6 space-y-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0 mt-0.5"></div>
                        <div className="text-gray-700 leading-relaxed">
                          {detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Tutorial Section */}
      <div className="max-w-6xl hidden mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Search className="w-10 h-10" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Video Hướng Dẫn Chi Tiết</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Xem video hướng dẫn trực quan để hiểu rõ hơn về quy trình tra cứu
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChevronRight className="w-8 h-8" />
                </div>
                <p className="text-white/80">
                  Video hướng dẫn sẽ được cập nhật sớm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        

       
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-100 via-blue-700 to-blue-50 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className=" mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Hệ thống tra cứu thông tin lãi suất
            <br />
            <span className="text-blue-200">dành cho khách hàng Nhựt Tân</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            An toàn – Minh bạch – Nhanh chóng. Dễ dàng kiểm tra tiền lãi theo
            kỳ, tình trạng thanh toán và lịch sử giao dịch.
          </p>

          <a
            href="https://camdonhuttan.com/kiem-tra-lai-suat/"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Tra cứu ngay →
          </a>
        </div>
      </section>
    </div>
  );
}
