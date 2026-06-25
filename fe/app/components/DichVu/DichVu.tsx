import React from "react";

const services = [
  {
    name: "Cầm Xe Máy • Ô Tô",
    desc: "Nhận cầm xe máy và ô tô với hạn mức cao, định giá minh bạch, thủ tục đơn giản và giải ngân nhanh chóng trong ngày.",
    image: "/images/anh-xe-may(2).png",
  },
  {
    name: "Cầm Điện Thoại • iPad",
    desc: "Hỗ trợ cầm cố các dòng điện thoại, iPhone, Samsung, Xiaomi, Oppo, iPad và thiết bị di động chính hãng với mức định giá cạnh tranh.",
    image: "/images/anh-dt(2).png",
  },
  {
    name: "Cầm Laptop • PC • Smart TV",
    desc: "Nhận cầm MacBook, Laptop Gaming, Laptop Văn Phòng, PC và Smart TV với quy trình chuyên nghiệp, bảo quản an toàn.",
    image: "/images/anh-dh(2).png",
  },
  {
    name: "Cầm Máy Ảnh • Smartwatch",
    desc: "Hỗ trợ cầm máy ảnh DSLR, Mirrorless, Apple Watch, đồng hồ thông minh và các thiết bị công nghệ giá trị cao.",
    image: "/images/anh-dh(3).png",
  },
];

function DichVu() {
  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-white py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold mb-4 text-green-700">
            Dịch vụ Cửa hàng Nhựt Tân
          </h2>

          <p className="text-lg text-gray-600">
            Chấp nhận đa dạng loại tài sản thế chấp giá trị cao
          </p>

          <p className="text-sm text-yellow-500 font-semibold mt-2">
            Xe máy • Ô tô • Điện thoại • Ipad • Laptop • Máy ảnh • …
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
        group
        relative
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        border border-gray-100
        hover:border-green-400
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        transition-all duration-500
        hover:-translate-y-3
      "
            >


              {/* Image */}
              <div
                className="
          relative
          h-64
          flex items-center justify-center
          bg-gradient-to-br
          from-green-50
          via-white
          to-yellow-50
        "
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="
            w-[85%]
            h-[85%]
            object-contain
            transition-all duration-500
            group-hover:scale-110
            group-hover:rotate-1
          "
                />

                <div
                  className="
            absolute inset-0
            bg-gradient-to-t
            from-green-900/10
            to-transparent
          "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="
            text-xl
            font-bold
            text-green-700
            mb-3
            group-hover:text-yellow-500
            transition
          "
                >
                  {service.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DichVu;
