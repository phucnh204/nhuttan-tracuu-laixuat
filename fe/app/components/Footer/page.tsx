import { Clock, Facebook, Globe, MessageCircle, Phone } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Thông tin cửa hàng */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Cửa hàng cầm đồ Nhựt Tân</h3>
              <p className="text-gray-300 mb-4">
                Hệ thống cầm đồ uy tín với hơn 18 năm kinh nghiệm. Chúng tôi cam kết mang đến dịch vụ tốt nhất với lãi suất cạnh tranh và quy trình nhanh chóng.
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/camdouytincantho" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://zalo.me/0346636399" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="0346 6363 99" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Liên hệ */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Liên hệ</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>Hotline:0346 6363 99</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <a href="https://nhuttanstore.com" className="hover:text-blue-400 transition">
                    nhuttanstore.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-blue-400" />
                  <span>Zalo: 0346 6363 99</span>
                </li>
              </ul>
            </div>

            {/* Giờ làm việc */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Giờ làm việc</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Thứ 2 - Thứ 7</p>
                    <p className="text-sm">8:00 - 20:00</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Chủ nhật</p>
                    <p className="text-sm">Nghỉ</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Hệ thống tra cứu Nhựt Tân. All rights reserved.</p>
           
          </div>
        </div>
      </footer>
  )
}

export default Footer