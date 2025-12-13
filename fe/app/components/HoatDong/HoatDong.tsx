"use client";

import React from "react";
import {CheckCircle, Shield, Users, Store} from "lucide-react";

export default function HoatDongNhatTan() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 space-y-16">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Cầm Đồ Nhựt Tân là địa chỉ hỗ trợ tài chính uy tín tại Cần Thơ,
                        chuyên phục vụ sinh viên và người lao động với quy trình nhanh gọn,
                        minh bạch và an toàn tuyệt đối.
                    </p>
                </div>

                {/* IMAGE GRID */}
                <div className="grid md:grid-cols-3 gap-6">
                    <img
                        src="/images/mat-tien.jpg"
                        alt="Mặt tiền cửa hàng Nhựt Tân"
                        className="rounded-2xl object-cover shadow-lg h-64 w-full"
                    />
                    <img
                        src="/images/about5.png"
                        alt="Không gian bên trong cửa hàng"
                        className="rounded-2xl object-cover shadow-lg h-64 w-full"
                    />
                    <img
                        src="/images/khong-gian.png"
                        alt="Nhân viên tư vấn Nhựt Tân"
                        className="rounded-2xl object-cover shadow-lg h-64 w-full"
                    />
                </div>

                {/* CONTENT */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* TEXT */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Quy Trình Làm Việc Rõ Ràng – Minh Bạch
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Tại Nhựt Tân, mọi tài sản cầm cố đều được kiểm tra,
                            định giá công khai trước mặt khách hàng.
                            Thông tin lãi suất, thời hạn và chi phí được tư vấn rõ ràng,
                            không phát sinh chi phí ẩn.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 mt-1"/>
                                <span className="text-gray-700">
                                    Nhận cầm xe máy/ô tô, điện thoại, laptop, đồng hồ,…
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 mt-1"/>
                                <span className="text-gray-700">
                                    Thủ tục đơn giản – giải ngân chỉ từ 5–10 phút.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 mt-1"/>
                                <span className="text-gray-700">
                                    Có khu vực giữ tài sản riêng, camera giám sát 24/7.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* IMAGE */}
                    <div>
                        <img
                            src="/images/nhan-vien.jpg"
                            alt="Bên trong cửa hàng Nhựt Tân"
                            className="rounded-3xl shadow-xl w-full  object-contain object-center"
                        />
                    </div>
                </div>

                {/* TRUST BLOCK */}

            </div>
        </section>
    );
}
