import {
  Globe,
  Star,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import anh_web from "../../../public/images/anh-laptop.png";

export default function WebsiteIntroSection() {
  return (
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-yellow-50 relative overflow-hidden">
        {/* Soft background blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Subtle grid */}
        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                  "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 items-center gap-20">

            {/* TEXT */}
            <div className="text-center lg:text-left space-y-10">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-green-800">
                  Khám phá hệ thống
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-yellow-400 bg-clip-text text-transparent">
                  Nhựt Tân Store
                </span>
                </h2>

                <p className="text-lg text-gray-600 mt-6 leading-relaxed max-w-xl">
                  Website chính thức giúp bạn tra cứu dịch vụ, lãi suất,
                  quy trình cầm cố và chính sách minh bạch – nhanh – an toàn.
                </p>

                <div className="mt-6 w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full"></div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <a
                    href="https://nhuttanstore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  group inline-flex items-center justify-center gap-3
                  bg-gradient-to-r from-green-600 to-green-500
                  text-yellow-300 font-bold
                  px-8 py-4 rounded-2xl
                  shadow-xl hover:shadow-2xl
                  hover:scale-105 transition-all duration-300
                "
                >
                  <Globe className="w-5 h-5" />
                  Truy cập website
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                    href="#features"
                    className="
                  inline-flex items-center justify-center
                  gap-3 px-8 py-4 rounded-2xl
                  border border-green-300
                  text-green-700 font-semibold
                  hover:bg-green-50 transition-all
                "
                >
                  Tìm hiểu thêm
                </a>
              </div>

              {/* Highlights */}
              <div className="hidden lg:grid grid-cols-3 gap-4 pt-6">
                {[
                  {
                    icon: <Star />,
                    title: "Giao diện đẹp",
                    desc: "Chuẩn hiện đại",
                    bg: "from-yellow-400 to-amber-500",
                  },
                  {
                    icon: <Zap />,
                    title: "Tốc độ cao",
                    desc: "Nhanh – mượt",
                    bg: "from-green-400 to-emerald-500",
                  },
                  {
                    icon: <Shield />,
                    title: "Bảo mật",
                    desc: "An toàn tuyệt đối",
                    bg: "from-emerald-500 to-green-700",
                  },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow border"
                    >
                      <div
                          className={`w-10 h-10 bg-gradient-to-br ${item.bg} rounded-lg flex items-center justify-center text-white`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-gray-800">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* LAPTOP MOCKUP */}
            <div className="relative flex justify-center lg:mt-10">
              <div className="relative w-full md:w-[620px]">
                <div className="relative bg-gray-900 rounded-t-2xl border-[4px] border-gray-400 shadow-2xl pb-2">
                  <div className="flex justify-center pt-2 pb-1">
                    <div className="w-2.5 h-2.5 bg-gray-700 rounded-full"></div>
                  </div>

                  <div className="relative w-full bg-black rounded-lg overflow-hidden">
                    <Image
                        src={anh_web}
                        alt="Nhựt Tân Website"
                        className="w-full h-full object-cover px-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>

                <div className="h-3 bg-gradient-to-b from-gray-400 to-gray-900 rounded-b-2xl"></div>
                <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
                fill="#f9fafb"
            />
          </svg>
        </div>
      </section>
  );
}
