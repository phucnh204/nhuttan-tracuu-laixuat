import Image from "next/image";
import { Clock, TrendingUp, Star } from "lucide-react";


const relatedPosts = [
  {
    title: "iPhone Air 2 có thể ra mắt cùng iPhone 18",
    description: "Xem thêm các thông tin mới nhất về Apple và iPhone.",
    url: "https://dantri.com.vn/cong-nghe/ro-ri-thiet-ke-va-lo-trinh-ra-mat-iphone-18-cung-iphone-air-2-20260408082306451.htm",
  },
  {
    title: "Apple thử nghiệm Face ID dưới màn hình",
    description: "Công nghệ Face ID thế hệ mới đang được Apple phát triển.",
    url: "https://support.apple.com/vi-vn/102381",
  },
  {
    title: "Những nâng cấp đáng chú ý trên iPhone 18 Series",
    description: "Tổng hợp các thay đổi lớn trên dòng iPhone 18.",
    url: "https://www.xtmobile.vn/iphone-18-co-gi-moi",
  },
];
import about5 from "@/public/images/faceID.png";
import about2 from "@/public/images/about6.jpg";
import about3 from "@/public/images/Iland_nho.png";
import about4 from "@/public/images/Iland_nho_35.png";
import Link from "next/link";

function TinTuc() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative h-[350px] md:h-[500px] overflow-hidden">
        <Image
          src={about2}
          alt="iPhone 18 Pro"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 text-white">
            <span className="inline-block bg-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Công Nghệ
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
              iPhone 18 Pro lộ diện Dynamic Island siêu nhỏ,
              màn hình tiến gần thiết kế toàn vẹn
            </h1>

            <div className="flex items-center gap-4 mt-5 text-gray-200">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>25/06/2026</span>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp size={18} />
                <span>Tin nổi bật</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">



        {/* Article */}
        <article className="bg-white rounded-2xl shadow-md p-6 md:p-10">

          <p className="text-lg text-gray-700 leading-8">
            Sau nhiều đồn đoán xoay quanh thế hệ iPhone tiếp theo,
            những hình ảnh rò rỉ mới nhất về miếng dán màn hình được cho là
            của iPhone 18 Pro đang hé lộ thay đổi đáng chú ý trong thiết kế
            mặt trước. Tâm điểm lần này là Dynamic Island khi được thu gọn
            đáng kể so với các thế hệ trước.
          </p>

          <div className="my-8">
            <Image
              src={about3}
              alt="iPhone 18 Pro Dynamic Island"
              className="rounded-xl w-full"
            />

            <p className="text-center text-sm text-gray-500 mt-3">
              Hình ảnh rò rỉ cho thấy Dynamic Island nhỏ hơn đáng kể.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Dynamic Island thu nhỏ gần 35%
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            Theo các nguồn tin từ Weibo, phần cắt hình viên thuốc chứa
            camera TrueDepth và Face ID trên iPhone 18 Pro có chiều ngang
            khoảng 13.49 mm, giảm mạnh so với mức 20.76 mm trên dòng
            iPhone 17 Pro.
          </p>

          <p className="text-gray-700 leading-8">
            Đây được xem là bước tiến quan trọng trong hành trình tối ưu
            không gian hiển thị của Apple, mang lại trải nghiệm xem nội dung
            liền mạch hơn và tăng tính thẩm mỹ cho mặt trước thiết bị.
          </p>

          <div className="my-10">
            <Image
              src={about4}
              alt="So sánh iPhone 18 Pro"
              className="rounded-xl w-full"
            />

            <p className="text-center text-sm text-gray-500 mt-3">
              So sánh thiết kế màn hình iPhone 18 Pro và thế hệ trước.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Face ID có thể được đưa xuống dưới màn hình
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            Giới thạo tin cho rằng Apple đã thay đổi cách bố trí hệ thống
            Face ID bằng việc đưa một số thành phần như flood illuminator
            xuống dưới tấm nền màn hình.
          </p>

          <p className="text-gray-700 leading-8">
            Nếu thông tin này chính xác, đây sẽ là bước đệm quan trọng để
            Apple tiến tới chiếc iPhone với màn hình toàn vẹn thực sự trong
            tương lai.
          </p>

          <div className="my-10">
            <Image
              src={about5}
              alt="iPhone 18 Pro"
              className="rounded-xl w-full"
            />
          </div>

          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Không chỉ dành cho dòng Pro
          </h2>

          <p className="text-gray-700 leading-8">
            Một số nguồn tin cho biết Dynamic Island mới có thể xuất hiện
            trên toàn bộ dòng iPhone 18, bao gồm cả phiên bản tiêu chuẩn và
            iPhone Air thế hệ tiếp theo.
          </p>

          <div className="mt-10 p-6 bg-blue-50 border border-blue-100 rounded-xl">
            <h3 className="font-bold text-lg text-blue-800 mb-3">
              Nhận định
            </h3>

            <p className="text-gray-700 leading-7">
              Dù vẫn chỉ là các thông tin rò rỉ, nhưng những hình ảnh xuất hiện
              gần đây cho thấy Apple đang tập trung mạnh vào việc tối ưu không
              gian hiển thị. Nếu trở thành hiện thực, iPhone 18 sẽ đánh dấu một
              bước tiến đáng kể trong hành trình đưa smartphone đến thiết kế
              màn hình toàn vẹn.
            </p>
          </div>

        </article>

        {/* Related */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Tin liên quan
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-semibold text-slate-800 group-hover:text-blue-600">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {post.description}
                </p>

                <span className="inline-block mt-4 text-blue-600 font-medium">
                  Đọc bài →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}

export default TinTuc;