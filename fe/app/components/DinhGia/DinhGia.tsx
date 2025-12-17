"use client";

import { useState } from "react";
import { Input, Button, Typography, Form, notification } from "antd";
import {
    CheckCircleOutlined,
    InfoCircleOutlined,
    ClockCircleOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

export default function DinhGia() {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const openNotification = (type: "success" | "error", title: string) => {
        notification[type]({
            title,
            placement: "topRight",
            duration: 3,
        });
    };

    const handleSubmit = async (values: any) => {
        setLoading(true);

        try {
            const res = await fetch("/api/proxy", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(values),
            });

            if (res.ok) {
                openNotification("success", "Đã gửi thông tin định giá thành công!");
                form.resetFields();
            } else {
                openNotification("error", "Gửi thông tin thất bại, thử lại sau.");
            }
        } catch (err) {
            console.error(err);
            openNotification("error", "Có lỗi xảy ra, thử lại sau.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-50">
            <div className="p-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
                {/* LEFT CONTENT */}
                <div className="md:w-1/2 space-y-6">
                    <Title level={3} className="text-[#0F766E]">
                        Yêu cầu định giá sản phẩm
                    </Title>

                    <Paragraph className="text-gray-600 text-base">
                        Điền thông tin để nhận <b className="text-[#F59E0B]">định giá nhanh – chính xác</b>.
                        Chúng tôi phản hồi trong <b>5–60 phút</b> trong giờ làm việc.
                    </Paragraph>

                    {/* Highlight */}
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow border-l-4 border-[#F59E0B]">
                        <ClockCircleOutlined className="text-[#F59E0B] text-xl" />
                        <span className="font-semibold text-[#1F2937]">
              Giải ngân nhanh – thủ tục đơn giản – bảo mật thông tin
            </span>
                    </div>

                    {/* IMAGE GRID */}
                    <div className="grid grid-cols-2 gap-4 ">
                        {[
                            { src: "/images/anh-dt.png", label: "Điện thoại / iPad" },
                            { src: "/images/anh-laptop1.png", label: "Laptop" },
                            { src: "/images/anh-xe-may.png", label: "Xe máy / Ô tô" },
                            { src: "/images/anh-dh.png", label: "Apple Watch" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-32 h-32 object-contain mb-2"
                                />
                                <span className="font-semibold text-[#0F766E]">
                  {item.label}
                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="md:w-1/2 bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={handleSubmit}
                        className="space-y-6"
                    >
                        <Form.Item
                            label="Tên khách"
                            name="name"
                            rules={[{ required: true, message: "Vui lòng nhập tên khách" }]}
                        >
                            <Input
                                size="large"
                                placeholder="Ví dụ: Nguyễn Văn A"
                                className="rounded-xl border-gray-300 focus:border-[#0F766E] focus:ring focus:ring-[#0F766E]/20 p-4 text-base"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            rules={[
                                { required: true, message: "Vui lòng nhập số điện thoại" },
                                {
                                    pattern: /^[0-9]+$/,
                                    message: "Số điện thoại chỉ chứa chữ số",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="Ví dụ: 0901 xxx xxx"
                                className="rounded-xl border-gray-300 focus:border-[#0F766E] focus:ring focus:ring-[#0F766E]/20 p-4 text-base"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Sản phẩm & mô tả chi tiết"
                            name="product"
                            rules={[{ required: true, message: "Vui lòng mô tả sản phẩm" }]}
                        >
                            <TextArea
                                rows={5}
                                placeholder="Ví dụ: iPhone 14 Plus 256GB, pin 80%, còn hộp, mua TGDĐ, bảo hành đến 12/2025..."
                                className="rounded-xl border-gray-300 focus:border-[#0F766E] focus:ring focus:ring-[#0F766E]/20 p-4 text-base resize-none"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                htmlType="submit"
                                block
                                size="large"
                                loading={loading}
                                className="bg-[#F59E0B] hover:bg-[#EA580C] text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:scale-[1.03]"
                            >
                                {loading ? "Đang gửi..." : "NHẬN ĐỊNH GIÁ NGAY"}
                            </Button>
                        </Form.Item>
                    </Form>

                    {/* NOTE */}
                    <div className="space-y-2 mt-6">
                        <Paragraph>
                            <InfoCircleOutlined className="text-[#0F766E] mr-2" />
                            Mô tả càng chi tiết → định giá càng chính xác.
                        </Paragraph>

                        <Paragraph>
                            <CheckCircleOutlined className="text-[#F59E0B] mr-2" />
                            Nhân viên sẽ liên hệ xác nhận & báo giá nhanh chóng.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </div>
    );
}
