"use client";

import { useState } from "react";
import {
  Search,
  FileText,
  Phone,
  Shield,

} from "lucide-react";

export default function TraCuu() {
  const [contractCode, setContractCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Chức năng tra cứu đang được phát triển!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl flex gap-8 md:text-5xl font-extrabold mb-4">
            
            Tra cứu thông tin lãi suất
            <Search className="w-12 h-12" />
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Nhập thông tin để kiểm tra lãi suất và lịch sử giao dịch của bạn
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 -mt-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contract Code */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Mã hợp đồng
              </label>
              <input
                type="text"
                value={contractCode}
                onChange={(e) => setContractCode(e.target.value)}
                placeholder="Nhập mã hợp đồng"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition duration-300 outline-none"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <Phone className="w-5 h-5 text-green-600" />
                Số điện thoại
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Nhập số điện thoại đăng ký"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition duration-300 outline-none"
                required
              />
            </div>

            {/* Security Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3 items-start">
              <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700">
                <p className="font-semibold text-blue-900 mb-1">
                  Bảo mật thông tin
                </p>
                <p>
                  Thông tin của bạn được mã hóa và bảo vệ theo tiêu chuẩn cao
                  nhất.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Đang xử lý...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Tra cứu ngay
                </>
              )}
            </button>
          </form>
        </div>

        {/* Support Section */}
        {/* <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cần hỗ trợ?</h3>
              <p className="text-sm text-gray-700 mb-3">
                Nếu gặp khó khăn trong việc tra cứu, vui lòng liên hệ:
              </p>
              <div className="space-y-1 flex justify-around text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Hotline:{" "}
                  <span className="font-semibold text-blue-600">0919 6363 99</span>
                </p>
                <p className="flex items-center gap-2">
                  <ChartAreaIcon className="w-4 h-4" /> Zalo:{" "}
                  <span className="font-semibold text-blue-600">
                    0919 6363 99
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Features */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Search className="w-6 h-6" />,
                title: "Tra cứu nhanh",
                desc: "Kết quả hiển thị ngay lập tức",
                bg: "bg-blue-100 text-blue-600",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Thông tin chính xác",
                desc: "Dữ liệu đồng bộ trực tiếp",
                bg: "bg-green-100 text-green-600",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Bảo mật tuyệt đối",
                desc: "Mã hóa theo tiêu chuẩn quốc tế",
                bg: "bg-purple-100 text-purple-600",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div
                  className={`w-14 h-14 ${feature.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
