"use client";

import React from "react";
import {
    CheckCircle,
    ShieldCheck,
    Clock3,
    BadgeCheck,
    PhoneCall,
} from "lucide-react";

export default function HoatDongNhatTan() {

    const images = [
        {
            src: "/images/mat-tien.jpg",
            title: "Mặt tiền cửa hàng",
            desc: "Không gian giao dịch thuận tiện"
        },
        {
            src: "/images/about5.png",
            title: "Khu vực tư vấn",
            desc: "Riêng tư - chuyên nghiệp"
        },
        {
            src: "/images/khong-gian.png",
            title: "Đội ngũ Nhựt Tân",
            desc: "Hỗ trợ tận tâm"
        },
    ];


    const services = [
        "Cầm xe máy, ô tô, điện thoại, laptop, đồng hồ cao cấp",
        "Định giá minh bạch, giải ngân nhanh chỉ từ 5–10 phút",
        "Tài sản được bảo quản an toàn với camera giám sát 24/7",
    ];


    return (
        <section className="
            relative overflow-hidden
            bg-gradient-to-b
            from-emerald-50
            via-white
            to-white
            py-24
        ">

            {/* Background blur */}
            <div className="
                absolute top-0 left-1/2
                -translate-x-1/2
                w-[500px] h-[500px]
                bg-green-200/30
                rounded-full
                blur-3xl
            "/>


            <div className="
                relative
                max-w-6xl
                mx-auto
                px-6
            ">


                {/* HEADER */}

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <div className="
                        inline-flex items-center gap-2
                        px-5 py-2
                        rounded-full
                        bg-green-100
                        text-green-700
                        font-semibold
                        mb-5
                    ">
                        <BadgeCheck size={20}/>
                        Uy tín - Minh bạch - Nhanh chóng
                    </div>


                    <h2 className="
                        text-4xl md:text-5xl
                        font-extrabold
                        text-green-700
                        leading-tight
                    ">
                        Hoạt động tại
                        <span className="text-yellow-500">
                            {" "}Cầm Đồ Nhựt Tân
                        </span>
                    </h2>


                    <p className="
                        mt-5
                        text-gray-600
                        text-lg
                        leading-relaxed
                    ">
                        Đồng hành cùng khách hàng tại Cần Thơ với dịch vụ
                        cầm cố tài sản nhanh chóng, an toàn và chuyên nghiệp.
                    </p>


                    <div className="
                        mt-6
                        w-28 h-1
                        bg-gradient-to-r
                        from-green-500
                        to-yellow-400
                        mx-auto
                        rounded-full
                    "/>

                </div>



                {/* STATS */}

                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-3
                    gap-5
                    mb-16
                ">

                    {[
                        {
                            icon:<Clock3/>,
                            number:"5-10 phút",
                            text:"Giải ngân nhanh"
                        },
                        {
                            icon:<ShieldCheck/>,
                            number:"24/7",
                            text:"Bảo quản tài sản"
                        },
                        {
                            icon:<BadgeCheck/>,
                            number:"100%",
                            text:"Minh bạch chi phí"
                        },

                    ].map((item,index)=>(
                        <div
                            key={index}
                            className="
                            group
                            bg-white
                            border
                            border-gray-100
                            rounded-3xl
                            p-6
                            shadow-lg
                            hover:-translate-y-2
                            transition-all
                            duration-300
                            "
                        >

                            <div className="
                                w-12 h-12
                                rounded-2xl
                                bg-gradient-to-br
                                from-green-500
                                to-yellow-400
                                flex items-center justify-center
                                text-white
                                mb-4
                            ">
                                {item.icon}
                            </div>


                            <h3 className="
                                text-2xl
                                font-bold
                                text-green-700
                            ">
                                {item.number}
                            </h3>


                            <p className="text-gray-600">
                                {item.text}
                            </p>

                        </div>
                    ))}

                </div>





                {/* IMAGE GRID */}

                <div className="
                    grid
                    md:grid-cols-3
                    gap-6
                    mb-20
                ">

                    {
                        images.map((img,index)=>(

                            <div
                                key={index}
                                className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                shadow-xl
                                "
                            >

                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="
                                    h-72
                                    w-full
                                    object-cover
                                    transition
                                    duration-700
                                    group-hover:scale-110
                                    "
                                />


                                <div className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/70
                                    via-transparent
                                    opacity-80
                                "/>


                                <div className="
                                    absolute
                                    bottom-5
                                    left-5
                                    text-white
                                ">
                                    <h4 className="
                                        text-xl
                                        font-bold
                                    ">
                                        {img.title}
                                    </h4>

                                    <p className="
                                        text-sm
                                        text-gray-200
                                    ">
                                        {img.desc}
                                    </p>
                                </div>

                            </div>

                        ))
                    }

                </div>






                {/* CONTENT */}


                <div className="
                    grid
                    md:grid-cols-2
                    gap-14
                    items-center
                ">


                    <div>


                        <h3 className="
                            text-3xl
                            font-extrabold
                            text-green-700
                            mb-5
                        ">
                            Quy trình làm việc rõ ràng
                            <br/>
                            <span className="text-yellow-500">
                                Không phát sinh chi phí
                            </span>
                        </h3>


                        <p className="
                            text-gray-600
                            leading-relaxed
                            mb-8
                        ">
                            Nhựt Tân luôn đặt sự an tâm của khách hàng lên hàng đầu.
                            Mọi tài sản đều được kiểm tra, định giá công khai,
                            tư vấn rõ ràng trước khi thực hiện giao dịch.
                        </p>


                        <div className="space-y-5">

                            {
                                services.map((text,index)=>(

                                    <div
                                        key={index}
                                        className="
                                        flex gap-4
                                        items-start
                                        "
                                    >

                                        <div className="
                                            shrink-0
                                            w-10 h-10
                                            rounded-full
                                            bg-gradient-to-br
                                            from-green-500
                                            to-yellow-400
                                            flex
                                            items-center
                                            justify-center
                                            text-white
                                        ">
                                            <CheckCircle size={22}/>
                                        </div>


                                        <p className="
                                            text-gray-700
                                            leading-relaxed
                                        ">
                                            {text}
                                        </p>


                                    </div>

                                ))
                            }

                        </div>


                        <button className="
                            mt-10
                            flex
                            items-center
                            gap-3
                            px-8
                            py-4
                            rounded-full
                            bg-green-600
                            text-white
                            font-bold
                            shadow-xl
                            hover:bg-green-700
                            transition
                        ">
                            <PhoneCall size={20}/>
                            Liên hệ ngay
                        </button>


                    </div>




                    <div className="
                        relative
                    ">

                        <img
                            src="/images/nhan-vien.jpg"
                            alt="Nhân viên Nhựt Tân"
                            className="
                            rounded-[40px]
                            shadow-2xl
                            w-full
                            object-cover
                            "
                        />


                        <div className="
                            absolute
                            -bottom-6
                            -left-6
                            bg-white
                            rounded-3xl
                            shadow-xl
                            px-6
                            py-5
                        ">

                            <p className="
                                text-green-700
                                font-bold
                                text-lg
                            ">
                                ⭐ Dịch vụ uy tín
                            </p>

                            <span className="
                                text-gray-500
                            ">
                                Hỗ trợ khách hàng tận tâm
                            </span>

                        </div>


                    </div>


                </div>


            </div>

        </section>
    );
}