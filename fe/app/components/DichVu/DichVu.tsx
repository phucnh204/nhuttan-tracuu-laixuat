import React from "react";

const services = [
  {
    name: "Cầm Xe máy/Ô tô",
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
function DichVu() {
  return (
    <div className="bg-gradient-to-b from-cyan-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Dịch Vụ Của Cửa hàng Nhựt Tân
          </h2>
          <p className="text-xl text-gray-600">
            Chấp nhận đa dạng loại tài sản thế chấp
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="text-gray-600 hidden lg:block leading-relaxed">
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
