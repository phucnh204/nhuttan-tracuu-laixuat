import { CheckCircle } from "lucide-react";
import React from "react";
import vi_sao from "../../../public/images/chat (98).png";
import Image from "next/image";
function ViSao() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4">
            Vì sao khách hàng tin chọn Nhựt Tân?
          </h2>
          <p className="text-lg text-green-400">
            Uy tín – Minh bạch – Thành lập từ năm 2006
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LIST BENEFITS */}
          <div className="space-y-6">
            {/* ITEM 1 */}
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl transition duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-1">
                  Kinh nghiệm hơn 20+ năm
                </h3>
                <p className="text-green-600">
                  Hoạt động từ năm 2006 với hàng ngàn khách hàng tin tưởng và
                  quay lại.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-green-100 shadow-sm hover:shadow-xl transition duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-1">
                  Đội ngũ chuyên nghiệp – tận tâm
                </h3>
                <p className="text-green-600">
                  Nhân viên được đào tạo bài bản, tư vấn rõ ràng – hỗ trợ chu
                  đáo.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-purple-100 shadow-sm hover:shadow-xl transition duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-1">
                  Công nghệ hiện đại – tra cứu online
                </h3>
                <p className="text-green-600">
                  Hệ thống kiểm tra lãi suất – lịch sử giao dịch minh bạch, rõ
                  ràng.
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl transition duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-1">
                  Bảo mật tuyệt đối
                </h3>
                <p className="text-green-600">
                  Mã hóa toàn bộ thông tin khách hàng – chỉ bạn mới xem được.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE */}

          <div className="relative flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-yellow-100">
              <Image
                className="w-full h-[380px] object-cover"
                alt="Nhựt Tân uy tín"
                src={vi_sao}
              />

              {/* <img
                  src="/images/why-choose.jpg"
                  alt="Nhựt Tân uy tín"
                  className="w-full h-[380px] object-cover"
                /> */}
            </div>

            {/* Decorative circle */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-200 rounded-full opacity-40 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-200 rounded-full opacity-40 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViSao;
