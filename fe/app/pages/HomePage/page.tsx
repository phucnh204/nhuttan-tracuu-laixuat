import ViSao from "@/app/components/ViSao/page";

import {
    Clock,
    Shield,
    TrendingUp,
    FileText,
    Search,
    ClipboardCheck,
    ShieldCheck,
    Award,
    PhoneCall,
    HelpCircle,
} from "lucide-react";

import WebsiteIntroSection from "@/app/components/GioithieuWeb/page";
import Link from "next/link";

import anh_xe_may from "../../../public/images/anh-xe-may.png";
import DiaChi from "@/app/dia-chi/page";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import ChatBox from "@/app/components/ChatBox";
import DinhGia from "@/app/components/DinhGia/DinhGia";
import DichVu from "@/app/components/DichVu/DichVu";
import Banner from "@/app/components/Banner/Banner";
import HoatDongNhatTan from "@/app/components/HoatDong/HoatDong";

const features = [
    {
        icon: <Clock className="w-8 h-8"/>,
        title: "Nhanh Chóng",
        desc: "Thẩm định và giải ngân trong 5 phút",
    },
    {
        icon: <Shield className="w-8 h-8"/>,
        title: "Uy Tín",
        desc: "20+ năm kinh nghiệm, đảm bảo pháp lý",
    },
    {
        icon: <TrendingUp className="w-8 h-8"/>,
        title: "Lãi Suất Thấp",
        desc: "Chỉ từ 1%, lãi suất cạnh tranh nhất thị trường.",
    },
    {
        icon: <Award className="w-8 h-8"/>,
        title: "Chuyên Nghiệp",
        desc: "Đội ngũ chuyên viên giàu kinh nghiệm",
    },
];
const faqs = [
    {
        q: "Tôi quên mã hợp đồng thì làm sao?",
        a: "Bạn có thể liên hệ hotline 0919 6363 99 hoặc đến trực tiếp cửa hàng để được hỗ trợ tra cứu mã hợp đồng.",
    },
    {
        q: "Số điện thoại không khớp thì sao?",
        a: "Vui lòng sử dụng số điện thoại đã đăng ký khi làm hợp đồng. Nếu đã đổi số, hãy liên hệ với chúng tôi để cập nhật thông tin.",
    },
    {
        q: "Thông tin có được bảo mật không?",
        a: "Hoàn toàn! Mọi thông tin được mã hóa theo tiêu chuẩn quốc tế và chỉ bạn mới có thể truy cập.",
    },
    {
        q: "Tôi có thể tra cứu bao nhiêu lần?",
        a: "Bạn có thể tra cứu không giới hạn số lần, miễn phí 24/7.",
    },
];

export default function HomePage() {
    return (
        <main className="min-h-screen bg-green-50 mb-10">
            <Banner/>

            {/* Features Section */}
            <div className="container mx-auto px-4 hidden lg:block -mt-20 relative z-20 mb-20">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
    {features.map((feature, idx) => (
      <div
        key={idx}
        className="
          group
          relative
          overflow-hidden
          bg-white/90
          backdrop-blur-sm
          p-8
          rounded-3xl
          border border-emerald-100
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-[0_20px_60px_rgba(15,118,110,0.18)]
          hover:border-yellow-400
        "
      >
        {/* Glow Effect */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-emerald-500/0
            via-transparent
            to-yellow-400/0
            group-hover:from-emerald-500/5
            group-hover:to-yellow-400/10
            transition-all
            duration-500
          "
        />

        {/* Icon */}
        <div
          className="
            relative
            w-16 h-16
            flex items-center justify-center
            rounded-2xl
            bg-gradient-to-br
            from-emerald-600
            via-teal-500
            to-cyan-500
            text-white
            shadow-lg
            mb-6
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
          "
        >
          {feature.icon}
        </div>

        {/* Title */}
        <h3
          className="
            relative
            text-2xl
            font-bold
            mb-3
            text-slate-800
            transition-all
            duration-300
            group-hover:text-emerald-700
          "
        >
          {feature.title}
        </h3>

        {/* Description */}
        <p
          className="
            relative
            text-slate-600
            leading-relaxed
            text-[15px]
          "
        >
          {feature.desc}
        </p>

        {/* Bottom Accent */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-1
            w-0
            bg-gradient-to-r
            from-emerald-500
            to-yellow-400
            transition-all
            duration-500
            group-hover:w-full
          "
        />
      </div>
    ))}
  </div>
</div>


            <DinhGia/>

            {/* Services Section */}
            <DichVu/>

            <HoatDongNhatTan/>

            {/* GIỚI THIỆU WEBSITE */}

            <WebsiteIntroSection/>

            {/* VÌ SAO CHỌN NHỰT TÂN */}
            <ViSao/>

            {/* FEATURES SECTION NÂNG CẤP */}


            <DiaChi/>

            <div className="p-6">
                {/* HEADER */}
                <div className="text-center mb-16 ">


                    <h2 className="text-4xl font-extrabold text-green-800 mb-3">
                        Câu hỏi thường gặp
                    </h2>

                    <p className="text-gray-600 text-lg">
                        Giải đáp những thắc mắc phổ biến của khách hàng
                    </p>

                    <div className="mt-5 w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-400 mx-auto rounded-full"/>
                </div>

                {/* FAQ LIST */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-6 border border-gray-100
                   shadow-md hover:shadow-2xl transition-all duration-300"
                        >
                            <h3 className="flex gap-3 text-lg font-semibold text-green-800 mb-3">
          <span
              className="flex-shrink-0 w-9 h-9 rounded-xl
                       bg-gradient-to-br from-green-500 to-emerald-500
                       text-white flex items-center justify-center font-bold shadow"
          >
            {index + 1}
          </span>
                                {faq.q}
                            </h3>

                            <p className="text-gray-600 leading-relaxed pl-12">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <ChatBox/>


            <ScrollToTopButton/>
        </main>
    );
}
