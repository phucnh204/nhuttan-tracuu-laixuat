import { MapPin, Phone } from 'lucide-react'
import React from 'react'

function DiaChi() {
  return (
    <section className="py-20 bg-gray-50">
        <div className=" mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hệ thống Cầm đồ Nhựt Tân
            </h2>
            <p className="text-lg text-gray-600">
              2 chi nhánh chính phục vụ quý khách
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chi nhánh 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Chi nhánh 1 
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                       102 Đường 3/2, P. Xuân Khánh, Q. Ninh Kiều, Cần Thơ
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span>0936636399</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Chi nhánh 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-green-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Chi nhánh 2 
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      555 Đường 30/4, P. Hưng Lợi, Q. Ninh Kiều, Cần Thơ
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span>0879393955 </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default DiaChi