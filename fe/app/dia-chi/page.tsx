import React from "react";
import {MapPin, Phone} from "lucide-react";

function DiaChi() {
    return (
        <section className="py-24 bg-gradient-to-b from-white via-emerald-50 to-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* TITLE */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-4">
                        Hệ thống Cầm đồ Nhựt Tân
                    </h2>
                    <p className="text-lg text-gray-600">
                        2 chi nhánh chính – phục vụ nhanh chóng tại Cần Thơ
                    </p>

                    <div className="mt-5 w-28 h-1 bg-gradient-to-r from-green-500 to-yellow-400 mx-auto rounded-full"/>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* CHI NHÁNH 1 */}
                    <div
                        className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">

                        <div className="relative aspect-video">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.367099934133!2d105.7695435771389!3d10.029646589429085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a088231748c1ed%3A0x349b82a37881e8e7!2zMTAyIMSQw6A!5e0!3m2!1svi!2s!4v1733565123456!5m2!1svi!2s"
                                className="w-full h-full border-0"
                                loading="lazy"
                            />

                            {/* overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none"/>
                        </div>

                        <div className="p-6 space-y-3">
                            <div className="flex justify-around"><h3
                                className="flex items-center gap-2 font-semibold text-green-800">
                                <MapPin className="w-5 h-5 text-green-600"/>
                                Chi nhánh 1
                            </h3>
                                <p className="flex items-center gap-2 text-sm font-medium text-green-700">
                                    <Phone className="w-4 h-4"/>
                                    0346 6363 99
                                </p></div>

                            <p className="text-gray-700 text-sm text-center">
                                102 Đường 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ
                            </p>


                        </div>
                    </div>

                    {/* CHI NHÁNH 2 */}
                    <div
                        className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">

                        <div className="relative aspect-video">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.017779104675!2d105.75755757658596!3d10.01098499290353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089cab5465467%3A0x6aaa0134c21c28f2!2zNTU1IMSQxrDhu51uZyAzMC80LCBI4buvbmcgTOG7o2ksIE5pbmggS2nhu4F1LCBD4bqnbiBUaMah!5e0!3m2!1svi!2s!4v1732604600000"
                                className="w-full h-full border-0"
                                loading="lazy"
                            />

                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none"/>
                        </div>

                        <div className="p-6 space-y-3">
                            <div className="flex justify-around">
                                <h3 className="flex items-center gap-2 font-semibold text-green-800">
                                    <MapPin className="w-5 h-5 text-green-600"/>
                                    Chi nhánh 2
                                </h3>
                                <p className="flex items-center gap-2 text-sm font-medium text-green-700">
                                    <Phone className="w-4 h-4"/>
                                    0979 3939 55
                                </p>
                            </div>
                            <p className="text-gray-700 text-sm text-center">
                                555 Đường 30/4, Hưng Lợi, Ninh Kiều, Cần Thơ
                            </p>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default DiaChi;
