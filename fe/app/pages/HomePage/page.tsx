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

const features = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Nhanh Chóng",
    desc: "Thẩm định và giải ngân trong 5 phút",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Uy Tín",
    desc: "18+ năm kinh nghiệm, đảm bảo pháp lý",
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
    <main className="min-h-screen bg-gray-50">
      <Banner />

      {/* Features Section */}
      <div className="container mx-auto px-4 hidden lg:block -mt-20 relative z-20 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="text-cyan-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <DinhGia />

      {/* Services Section */}
      <DichVu />
      {/* GIỚI THIỆU WEBSITE */}

      <WebsiteIntroSection />

      {/* VÌ SAO CHỌN NHỰT TÂN */}
      <ViSao />

      {/* FEATURES SECTION NÂNG CẤP */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Tính năng vượt trội
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Hệ thống tra cứu hiện đại – nhanh chóng – an toàn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center rounded-xl mb-6 text-2xl font-bold shadow-lg">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Tra cứu nhanh chóng
              </h3>
              <p className="text-gray-600">
                Nhập mã hợp đồng và số điện thoại để nhận kết quả ngay lập tức
                qua hệ thống bảo mật cao cấp.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 text-white flex items-center justify-center rounded-xl mb-6 text-2xl font-bold shadow-lg">
                <ClipboardCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Minh bạch & chính xác
              </h3>
              <p className="text-gray-600">
                Dữ liệu đồng bộ trực tiếp từ hệ thống chính, đảm bảo tính chính
                xác 100%.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white flex items-center justify-center rounded-xl mb-6 text-2xl font-bold shadow-lg">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                An toàn tuyệt đối
              </h3>
              <p className="text-gray-600">
                Tất cả dữ liệu được mã hóa theo tiêu chuẩn quốc tế, chỉ bạn mới
                có quyền tra cứu thông tin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DiaChi />
      <div className="text-center mb-12">
        <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Câu Hỏi Thường Gặp
        </h2>
        <p className="text-gray-600">Giải đáp những thắc mắc phổ biến</p>
      </div>
      <div className="space-y-4 mx-10 grid grid-cols-1  lg:grid-cols-2 gap-x-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-2 hover:shadow-xl transition-all"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start gap-3">
              <span className="text-blue-600 flex-shrink-0">Q{index + 1}.</span>
              {faq.q}
            </h3>
            <p className="text-gray-600 ml-8">{faq.a}</p>
          </div>
        ))}
      </div>
      <ChatBox />
    

      <ScrollToTopButton />
    </main>
  );
}
