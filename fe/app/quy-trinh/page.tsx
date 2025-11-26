import React from 'react'

function QuyTrinh() {
  return (
     <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quy trình nhận tiền nhanh chỉ trong 5 phút
            </h2>
            <p className="text-lg text-gray-600">
              Chuyên nghiệp – Minh bạch – An toàn tuyệt đối
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <img
                  src="/images/kiem-dinh.jpg"
                  alt="Kiểm định sản phẩm"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Kiểm định sản phẩm
                </h3>
                <p className="text-gray-600 text-sm">
                  Nhân viên kiểm định tình trạng tài sản để đánh giá chính xác
                  giá trị.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-300"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <img
                  src="/images/thong-tin-hop-dong.jpg"
                  alt="Cung cấp thông tin"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Cung cấp thông tin
                </h3>
                <p className="text-gray-600 text-sm">
                  Khách hàng cung cấp mã hợp đồng, phiếu hợp đồng, giấy tờ liên
                  quan.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-300"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <img
                  src="/images/niem-phong.jpg"
                  alt="Niêm phong tài sản"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-full mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Niêm phong rõ ràng
                </h3>
                <p className="text-gray-600 text-sm">
                  Tài sản được niêm phong minh bạch, ký nhận 2 bên, bảo quản
                  tuyệt đối.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-300"></div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <img
                  src="/images/nhan-tien.jpg"
                  alt="Nhận tiền nhanh chóng"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <div className="w-12 h-12 bg-orange-600 text-white flex items-center justify-center rounded-full mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Nhận tiền nhanh chóng
                </h3>
                <p className="text-gray-600 text-sm">
                  Hoàn tất thủ tục & nhận tiền ngay lập tức – chỉ trong 5 phút.
                </p>
              </div>
            </div>
          </div>

          {/* Banner dưới */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">
                Quy trình cầm đồ chuyên nghiệp
              </h3>
              <p className="text-blue-100">
                Minh bạch – An toàn – Rõ ràng từng bước
              </p>
            </div>
            <div className="p-8">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">
                  [Hình ảnh minh họa quy trình cầm đồ chuyên nghiệp – bạn có thể
                  thay bằng video]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default QuyTrinh