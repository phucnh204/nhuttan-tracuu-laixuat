import { CheckCircle } from "lucide-react";
import React from "react";
import Image from "next/image";
import vi_sao from "../../../public/images/chat (98).png";

function ViSao() {
  return (
      <section className="py-28 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4">
              Vì sao khách hàng tin chọn Nhựt Tân?
            </h2>

            <p className="text-lg text-gray-600">
              Uy tín – Minh bạch – Đồng hành cùng khách hàng từ năm 2006
            </p>

            <div className="mt-5 w-28 h-1 bg-gradient-to-r from-green-500 to-yellow-400 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* BENEFITS */}
            <div className="space-y-6">

              {[
                {
                  title: "Kinh nghiệm hơn 20+ năm",
                  desc: "Hoạt động từ năm 2006, phục vụ hàng ngàn khách hàng tin tưởng và quay lại.",
                },
                {
                  title: "Đội ngũ chuyên nghiệp – tận tâm",
                  desc: "Nhân viên tư vấn rõ ràng, hỗ trợ nhanh chóng và luôn đặt quyền lợi khách hàng lên hàng đầu.",
                },

                {
                  title: "Bảo mật tuyệt đối thông tin",
                  desc: "Toàn bộ dữ liệu khách hàng được bảo mật nghiêm ngặt và an toàn.",
                },
              ].map((item, idx) => (
                  <div
                      key={idx}
                      className="
                  group flex gap-5 p-6
                  bg-white rounded-2xl
                  border border-gray-100
                  shadow-sm hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                "
                  >
                    <div className="flex-shrink-0">
                      <div
                          className="
                      w-12 h-12 rounded-xl
                      bg-gradient-to-br from-green-500 to-yellow-400
                      flex items-center justify-center
                      shadow-md
                      group-hover:scale-110
                      transition-transform
                    "
                      >
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
              ))}
            </div>

            {/* IMAGE */}
            <div className="relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-yellow-100">
                <Image
                    src={vi_sao}
                    alt="Nhựt Tân uy tín"
                    className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Decorative blobs */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-green-300/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-300/30 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
  );
}

export default ViSao;
