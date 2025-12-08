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
        openNotification("success", "Đã gửi thông tin ddingj giá thành công!");
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
    <div className="bg-white">
      <div className="p-10 max-w-6xl mx-auto    flex flex-col md:flex-row gap-10">
        {/* Nội dung bên trái */}
        <div className="md:w-1/2 space-y-6">
          <Title level={3} className="text-blue-600">
            Yêu cầu định giá sản phẩm
          </Title>
          <Paragraph className="text-gray-600">
            Điền thông tin bên phải để nhận định giá nhanh chóng và chính xác.
            Chúng tôi sẽ phản hồi trong 5-60 phút trong giờ làm việc.
          </Paragraph>

          {/* Grid hình ảnh minh họa */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/images/anh-dt.png", label: "Điện thoại" },
              { src: "/images/anh-laptop1.png", label: "Laptop" },
              { src: "/images/anh-xe-may.png", label: "Xe máy" },
              { src: "/images/anh-dh.png", label: "Apple Watch" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-3  rounded hover:shadow-xl "
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-40 h-40 object-cover mb-2"
                />
                <span className="font-medium text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>

         
        </div>

        {/* Form bên phải */}
        <div className="md:w-1/2 bg-white rounded p-10 shadow-md">
          <Form
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
            className="space-y-8 p-6 bg-white"
          >
            {/* Tên khách */}
            <Form.Item
              label="Tên khách"
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập tên khách" }]}
            >
              <Input
              size="large"
                placeholder="Ví dụ: Nguyễn Văn Anh"
                className="w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4 text-lg"
              />
            </Form.Item>

            {/* Số điện thoại */}
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
                placeholder="Ví dụ: 0901234567"
                className="w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4 text-lg"
              />
            </Form.Item>

            {/* Sản phẩm và mô tả */}
            <Form.Item
              label="Sản phẩm và mô tả"
              name="product"
              rules={[{ required: true, message: "Vui lòng mô tả sản phẩm" }]}
            >
              <TextArea
                placeholder="Ví dụ: Iphone 14 Plus 256GB màu xanh, Pin 80%, Mua ở thế giới dị động còn hạn bảo hành đến 30/12/2025,..."
                rows={6}
                className="w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 p-4 text-lg resize-none"
              />
            </Form.Item>

            {/* Nút gửi */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                loading={loading}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 rounded-xl shadow-md transition transform hover:scale-105"
              >
                {loading ? "Đang gửi..." : "Đăng ký định giá"}
              </Button>
            </Form.Item>
          </Form>
           {/* Hướng dẫn chi tiết */}
          <div className="space-y-2">
            <Paragraph>
              <InfoCircleOutlined className="text-blue-500 mr-2" />
              Mô tả sản phẩm rõ ràng, đầy đủ thông tin (tình trạng, màu sắc,
              ...).
            </Paragraph>

            <Paragraph>
              <CheckCircleOutlined className="text-green-500 mr-2" />
              Chúng tôi sẽ liên hệ lại để xác nhận thông tin và gửi báo giá.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}
