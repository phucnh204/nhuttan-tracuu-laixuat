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
} from "lucide-react";

import WebsiteIntroSection from "@/app/components/GioithieuWeb/page";
import Link from "next/link";
import banner from "../../../public/images/banner.png";
import anh_xe_may from "../../../public/images/anh-xe-may.png";
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

const services = [
  {
    name: "Cầm Xe",
    desc: "Nhận cầm xe máy và ô tô với thủ tục nhanh chóng, minh bạch và lãi suất cạnh tranh.",
    image: "/images/anh-xe-may.png",
  },
  {
    name: "Cầm Điện Thoại/Ipad",
    desc: "Hỗ trợ cầm các dòng smartphone và iPad cao cấp như iPhone, Samsung, bảo đảm giá trị và pháp lý rõ ràng.",
    image: "/images/anh-dt.png",
  },
  {
    name: "Cầm Laptop",
    desc: "Cầm các loại laptop, từ MacBook đến gaming laptop và workstation, thủ tục nhanh, giá trị định rõ.",
    image: "/images/anh-laptop1.png",
  },
  {
    name: "Cầm Đồng Hồ",
    desc: "Nhận cầm đồng hồ đắt giá, từ thương hiệu cao cấp đến đồng hồ sang trọng, đảm bảo an toàn tuyệt đối.",
    image: "/images/anh-dh.png",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="relative w-full h-[450px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        {/* Background gradient + image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 to-blue-700"></div>
          <img
            src={banner.src}
            alt="Cầm đồ Nhựt Tân"
            className="w-full h-full object-cover object-center opacity-50"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Cầm Đồ Nhựt Tân Cần Thơ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Giải pháp tài chính nhanh chóng, an toàn và uy tín hàng đầu tại
              Cần Thơ
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex gap-2 bg-white text-cyan-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all shadow-lg">
                <PhoneCall /> 0979 3939 55 - 0346 6363 99
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-900 transition-all">
                <Link href="https://nhuttanstore.com/">
                  Sản phẩm của cửa hàng
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      {/* Services Section */}
      <div className="bg-gradient-to-b from-white to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600">
              Chấp nhận đa dạng loại tài sản thế chấp
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl "
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden rounded">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-center "
                  />
                  {/* Optional overlay for text highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                
              </div>
            ))}
          </div>
        </div>
      </div>

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

      <DiaChi/>
    </main>
  );
}
