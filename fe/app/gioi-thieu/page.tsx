"use-client";

import { Clock, FileText, Shield, Star, TrendingUp } from "lucide-react";

import about5 from "@/public/images/about5.png";
import about2 from "@/public/images/about6.jpg";
import about3 from "@/public/images/about3.png";
import about4 from "@/public/images/about4.png";
import DiaChi from "../dia-chi/page";

function GioiThieu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* About Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Về Chúng Tôi
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <span className="font-semibold text-cyan-700">
                Cầm Đồ Nhựt Tân
              </span>{" "}
              là đơn vị cầm đồ uy tín hàng đầu tại Cần Thơ với hơn 18 năm kinh
              nghiệm trong lĩnh vực tài chính thế chấp. Chúng tôi tự hào mang
              đến giải pháp tài chính nhanh chóng, an toàn và minh bạch cho hàng
              nghìn khách hàng.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Với đội ngũ chuyên viên giàu kinh nghiệm và quy trình thẩm định
              chuyên nghiệp, chúng tôi cam kết mang đến dịch vụ tốt nhất với lãi
              suất cạnh tranh và thủ tục đơn giản.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <Star className="w-6 h-6 fill-cyan-500 text-cyan-500" />
              <span className="text-lg font-semibold">18+ năm kinh nghiệm</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Star className="w-6 h-6 fill-cyan-500 text-cyan-500" />
              <span className="text-lg font-semibold">
                100,000+ khách hàng tin tưởng
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Star className="w-6 h-6 fill-cyan-500 text-cyan-500" />
              <span className="text-lg font-semibold">
                Giải ngân trong 5 phút
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={about5.src}
              alt="Cửa hàng"
              className="rounded-xl shadow-lg h-64 object-cover"
            />
            <img
              src={about3.src}
              // src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&q=80"
              alt="Vàng bạc"
              className="rounded-xl shadow-lg h-64 object-cover mt-8"
            />
            <img
              src={about4.src}
              // src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&q=80"
              alt="Kim cương"
              className="rounded-xl shadow-lg h-64 object-cover -mt-8"
            />
            <img
              src={about2.src}
              // src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&q=80"
              alt="Tư vấn"
              className="rounded-xl shadow-lg h-64 object-cover"
            />
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

       <DiaChi />
    </div>
  );
}

export default GioiThieu;
