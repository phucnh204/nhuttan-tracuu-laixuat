import {
  Globe,
  Monitor,
  Smartphone,
  Star,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import anh_web from "../../../public/images/anh-laptop.png";
import anh_phone from "../../../public/images/anh-website.png";

export default function WebsiteIntroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-400 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          {/* TEXT CONTENT */}
          <div className="text-center lg:text-left space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Khám phá thế giới
                <br />
                <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Nhựt Tân Store
                </span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                Truy cập website chính thức để khám phá chi tiết dịch vụ, sản
                phẩm, quy trình và chính sách minh bạch của chúng tôi.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <a
                href="https://nhuttanstore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
                <span>Truy cập ngay</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Tìm hiểu thêm
              </a>
            </div>

            {/* Features List */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">Thiết kế đẹp</div>
                  <div className="text-xs text-blue-200">Modern UI</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">Nhanh chóng</div>
                  <div className="text-xs text-blue-200">Lightning fast</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">Bảo mật</div>
                  <div className="text-xs text-blue-200">Secure</div>
                </div>
              </div>
            </div>
          </div>

          {/* DEVICE MOCKUPS */}
          <div className="relative flex flex-col  justify-center items-center gap-14 lg:mt-20">
            {/* L A P T O P */}
            <div className="relative w-full h-full md:w-[620px]">
              {/* Khung laptop */}
              <div className="relative bg-gray-900 rounded-t-2xl border-[4px] border-gray-400 shadow-lg pb-2">
                {/* Webcam */}
                <div className="flex justify-center pt-2 pb-1">
                  <div className="w-2.5 h-2.5 bg-gray-700 rounded-full"></div>
                </div>

                {/* Màn hình laptop thực */}
                <div className="relative w-full  bg-black rounded-lg overflow-hidden shadow-inner">
                  <Image
                    src={anh_web} // ảnh web desktop
                    alt="Laptop Display"
                    className="w-full h-full object-cover px-1"
                  />

                  {/* Optional: reflection glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/0 pointer-events-none"></div>
                </div>
              </div>

              {/* Thân dưới laptop */}
              <div className="h-3 bg-gradient-to-b from-gray-400 to-gray-900 rounded-b-2xl"></div>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-40"></div>
            </div>
            {/* Badge */}
            <div className="cursor-pointer inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
              <a
                href="https://nhuttanstore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 "
              >
                <Globe className="w-4 h-4 text-blue-200" />
                <span className="text-sm font-semibold text-blue-100">
                  Website chính thức
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="rgb(249, 250, 251)"
          />
        </svg>
      </div>
    </section>
  );
}
