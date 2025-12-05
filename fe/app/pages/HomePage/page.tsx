import Footer from "@/app/components/Footer/page";
// import Map from "@/app/components/Map/page";
import anh_website from "@/public/images/anh-website.png";
import ViSao from "@/app/components/ViSao/page";
import anh_laptop from "@/public/images/anh-laptop.png";
import QuyTrinh from "@/app/quy-trinh/page";
import {
  Clock,
  Shield,
  TrendingUp,
  FileText,
  MapPin,
  Phone,
  Globe,
  Facebook,
  MessageCircle,
  CheckCircle,
  Search,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import WebsiteIntroSection from "@/app/components/GioithieuWeb/page";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-100 via-blue-700 to-blue-50 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className=" mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Hệ thống tra cứu thông tin lãi suất rrrr
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
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                An toàn & Bảo mật
              </h3>
              <p className="text-sm text-gray-600">
                Thông tin cá nhân được bảo mật tuyệt đối
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Định giá cao</h3>
              <p className="text-sm text-gray-600">
                Minh bạch, chính xác và cạnh tranh nhất
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-purple-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Lãi suất tốt nhất
              </h3>
              <p className="text-sm text-gray-600">
                Cạnh tranh nhất thị trường hiện nay
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-orange-600 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                <FileText className="w-8 h-8" />
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
    </main>
  );
}
