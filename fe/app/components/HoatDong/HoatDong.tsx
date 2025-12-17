"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export default function HoatDongNhatTan() {
    return (
        <section className="bg-gradient-to-b from-emerald-50 via-white to-white py-24">
            <div className="max-w-6xl mx-auto px-6 space-y-20">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-green-700 mb-4">
                        Hoạt động tại Cầm Đồ Nhựt Tân
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        Cầm Đồ Nhựt Tân là địa chỉ hỗ trợ tài chính uy tín tại Cần Thơ,
                        chuyên phục vụ sinh viên và người lao động với quy trình nhanh gọn,
                        minh bạch và an toàn tuyệt đối.
                    </p>

                    <div className="mt-4 w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-400 mx-auto rounded-full" />
                </div>

                {/* IMAGE GRID */}
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { src: "/images/mat-tien.jpg", alt: "Mặt tiền cửa hàng Nhựt Tân" },
                        { src: "/images/about5.png", alt: "Không gian bên trong cửa hàng" },
                        { src: "/images/khong-gian.png", alt: "Nhân viên tư vấn Nhựt Tân" },
                    ].map((img, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="
                  h-64 w-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
                            />
                            <div
                                className="
                  absolute inset-0
                  bg-gradient-to-t from-emerald-900/40 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
                            />
                        </div>
                    ))}
                </div>

                {/* CONTENT */}
                <div className="grid md:grid-cols-2 gap-14 items-center">

                    {/* TEXT */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-green-700">
                            Quy trình làm việc rõ ràng – minh bạch
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Tại Nhựt Tân, mọi tài sản cầm cố đều được kiểm tra và định giá công khai
                            trước mặt khách hàng. Lãi suất, thời hạn và chi phí được tư vấn rõ ràng,
                            cam kết không phát sinh chi phí ẩn.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Nhận cầm xe máy, ô tô, điện thoại, laptop, đồng hồ,…",
                                "Thủ tục đơn giản – giải ngân chỉ từ 5–10 phút.",
                                "Khu vực giữ tài sản riêng, camera giám sát 24/7.",
                            ].map((text, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                  <span
                      className="
                      flex items-center justify-center
                      w-8 h-8 rounded-full
                      bg-gradient-to-br from-green-500 to-yellow-400
                      text-white
                      shadow-md
                      flex-shrink-0
                    "
                  >
                    <CheckCircle className="w-5 h-5" />
                  </span>
                                    <span className="text-gray-700 leading-relaxed">
                    {text}
                  </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* IMAGE */}
                    <div className="relative">
                        <img
                            src="/images/nhan-vien.jpg"
                            alt="Bên trong cửa hàng Nhựt Tân"
                            className="
                rounded-3xl shadow-2xl w-full
                object-contain object-center
              "
                        />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
