import React from "react";

const services = [
  {
    name: "Cầm Xe máy/Ô tô",
    desc: "Nhận cầm xe máy và ô tô với thủ tục nhanh chóng, minh bạch và lãi suất cạnh tranh.",
    image: "/images/anh-xe-may.png",
  },
  {
    name: "Cầm Điện Thoại/Ipad",
    desc: "Hỗ trợ cầm các dòng smartphone và iPad cao cấp như iPhone, Samsung,vv.",
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

          {/* Services */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
                <div
                    key={idx}
                    className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-md
                border border-transparent
                transition-all duration-300
                hover:shadow-2xl
                hover:border-green-400
                hover:-translate-y-2
              "
                >
                  {/* Image */}
                  <div className="relative h-56 md:h-64 ">
                    <img
                        src={service.image}
                        alt={service.name}
                        className="
                    w-full h-full
                    object-contain object-center
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                    />

                    {/* Overlay */}
                    <div
                        className="
                    absolute inset-0
                    bg-gradient-to-t from-emerald-900/30 to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                  "
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3
                        className="
                    text-xl font-bold mb-3
                    text-green-700
                    group-hover:text-yellow-500
                    transition-colors duration-300
                  "
                    >
                      {service.name}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed hidden lg:block">
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
