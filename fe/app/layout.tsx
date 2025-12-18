import {Geist, Geist_Mono} from "next/font/google";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import type {Metadata, Viewport} from 'next';
import Script from 'next/script';

import "./globals.css";
import ClientWrapper from "./ClientWrapper";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: 'swap',
});

// ═══════════════════════════════════════════════════════
// VIEWPORT CONFIGURATION
// ═══════════════════════════════════════════════════════
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#10B981',
}

// ═══════════════════════════════════════════════════════
// METADATA NÂNG CẤP - TỐI ƯU CHO SEO LOCAL
// ═══════════════════════════════════════════════════════
export const metadata: Metadata = {
    metadataBase: new URL("https://camdocantho.net"),

    // TITLE - Tối ưu từ khóa chính
    title: {
        default: 'Cầm Đồ Nhựt Tân Cần Thơ - Lãi Suất 1%/Tháng | Uy Tín 20+ Năm',
        template: '%s | Cầm Đồ Nhựt Tân Cần Thơ'
    },

    // DESCRIPTION - Tối ưu 155 ký tự cho Google
    description: 'Cầm đồ uy tín #1 Cần Thơ ⭐ Lãi 1%/tháng ⚡ 5 phút có tiền 🔒 Không giữ xe. Cầm vàng, xe, điện thoại. 2 CN: Đ.3/2 & Đ.30/4 ☎️ 0919636399',

    // KEYWORDS - Thêm từ khóa mới
    keywords: [
        // Từ khóa chính - Local
        'cầm đồ Cần Thơ',
        'cầm đồ Ninh Kiều',
        'tiệm cầm đồ Cần Thơ',
        'cầm đồ uy tín Cần Thơ',
        'Cầm Đồ Nhựt Tân',

        // Từ khóa theo sản phẩm
        'cầm vàng Cần Thơ',
        'cầm xe máy Cần Thơ',
        'cầm điện thoại Cần Thơ',
        'cầm laptop Cần Thơ',
        'cầm ô tô Cần Thơ',

        // Long-tail keywords - Conversion cao
        'cầm đồ lãi suất thấp Cần Thơ',
        'cầm đồ giải ngân nhanh',
        'cầm xe không giữ xe Cần Thơ',
        'cầm đồ không cần CMND',
        'cầm đồ gần tôi',
        'cầm đồ 24/7 Cần Thơ',

        // Địa chỉ cụ thể
        'cầm đồ đường 3 tháng 2',
        'cầm đồ đường 30 tháng 4',
        'cầm đồ gần chợ Xuân Khánh',
        'cầm đồ gần Big C Cần Thơ',

        // Từ khóa sinh viên
        'cầm đồ sinh viên Cần Thơ',
        'vay tiền sinh viên Cần Thơ',
        'cầm đồ gần đại học Cần Thơ',

        // Từ khóa cạnh tranh
        'cầm đồ giá cao Cần Thơ',
        'cầm đồ online Cần Thơ',
        'vay tiền nhanh Cần Thơ',
    ],

    // AUTHORS & CREATOR
    authors: [
        {name: 'Cầm Đồ Nhựt Tân', url: 'https://camdocantho.net'}
    ],
    creator: 'Cầm Đồ Nhựt Tân',
    publisher: 'Cầm Đồ Nhựt Tân',

    // ROBOTS - Cho phép index đầy đủ
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // ICONS
    icons: {
        icon: [
            {url: "/logo-tab.png"},
            {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"},
            {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
        ],
        shortcut: "/logo-tab.png",
        apple: [
            {url: "/apple-touch-icon.png"},
            {url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png"},
        ],
    },

    // OPEN GRAPH - Facebook, Zalo (Tối ưu sharing)
    openGraph: {
        type: 'website',
        locale: 'vi_VN',
        url: 'https://camdocantho.net',
        siteName: 'Cầm Đồ Nhựt Tân Cần Thơ',
        title: 'Cầm Đồ Nhựt Tân - Lãi 1% | 5 Phút Có Tiền | Uy Tín 20+ Năm',
        description: '⭐ #1 Cần Thơ - Lãi suất chỉ 1%/tháng - Không giữ xe - Giải ngân 5 phút. Cầm vàng, xe máy, điện thoại, laptop. Hotline: 0919 636 399',
        images: [
            {
                url: 'https://camdocantho.net/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Cầm Đồ Nhựt Tân Cần Thơ - Dịch vụ cầm đồ uy tín lãi suất 1%',
            },
        ],
    },

    // TWITTER CARD
    twitter: {
        card: "summary_large_image",
        title: 'Cầm Đồ Nhựt Tân Cần Thơ - Lãi 1%',
        description: '⭐ Uy tín #1 - Lãi suất thấp nhất - Giải ngân 5 phút',
        images: ["https://camdocantho.net/twitter-image.jpg"],
        creator: '@CamDoNhatTan',
    },

    // VERIFICATION - Đã có Google
    verification: {
        // google: 'googleab364ec967c45f99.html',
        // Thêm sau khi có:
        // other: {
        //     'facebook-domain-verification': 'xxx',
        //     'msvalidate.01': 'xxx', // Bing
        // },
    },

    // ALTERNATES - Canonical & Languages
    alternates: {
        canonical: 'https://camdocantho.net',
        languages: {
            'vi-VN': 'https://camdocantho.net',
        },
    },

    // CATEGORY
    category: 'Tài chính',

    // FORMAT DETECTION
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
}

// ═══════════════════════════════════════════════════════
// SCHEMA MARKUP - JSON-LD (TỐI ƯU)
// ═══════════════════════════════════════════════════════

// 1. LOCAL BUSINESS SCHEMA - Quan trọng nhất cho Local SEO
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PawnShop",
    "@id": "https://camdocantho.net/#organization",
    "name": "Cầm Đồ Nhựt Tân",
    "alternateName": "Nhựt Tân Pawn Shop",
    "url": "https://camdocantho.net",
    "logo": "https://camdocantho.net/logo-removebg-small.png",
    "image": [
        "https://camdocantho.net/images/about5.png",
        "https://camdocantho.net/images/about2.jpg",
        "https://camdocantho.net/images/about3.png"
    ],
    "description": "Cầm đồ uy tín #1 Cần Thơ với 20+ năm kinh nghiệm. Lãi suất từ 1%/tháng, giải ngân nhanh trong 5 phút. Không giữ xe, thủ tục đơn giản.",

    // Địa chỉ chi nhánh - PHẢI KHỚP VỚI GOOGLE BUSINESS
    "address": [
        {
            "@type": "PostalAddress",
            "streetAddress": "102 Đường 3 Tháng 2, Phường Xuân Khánh",
            "addressLocality": "Ninh Kiều",
            "addressRegion": "Cần Thơ",
            "postalCode": "900000",
            "addressCountry": "VN"
        },
        {
            "@type": "PostalAddress",
            "streetAddress": "555 Đường 30/4, Phường Hưng Lợi",
            "addressLocality": "Ninh Kiều",
            "addressRegion": "Cần Thơ",
            "postalCode": "900000",
            "addressCountry": "VN"
        }
    ],

    // Liên hệ - PHẢI NHẤT QUÁN
    "telephone": "+84919636399",
    "email": "nhuttan060681@gmail.com",

    // Giờ mở cửa
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "20:00"
        }
    ],

    // Tọa độ GPS - Chính xác
    "geo": [
        {
            "@type": "GeoCoordinates",
            "latitude": "10.029764",
            "longitude": "105.760708"
        },
        {
            "@type": "GeoCoordinates",
            "latitude": "10.011945",
            "longitude": "105.755931"
        }
    ],

    // ⚠️ Đánh giá - CHỈ SỬ DỤNG KHI CÓ REVIEW THẬT TRÊN GOOGLE
    // Nếu chưa có đủ review, comment phần này lại
    // "aggregateRating": {
    //     "@type": "AggregateRating",
    //     "ratingValue": "4.9",
    //     "reviewCount": "450",
    //     "bestRating": "5",
    //     "worstRating": "1"
    // },

    // Giá
    "priceRange": "$$",

    // Phương thức thanh toán
    "paymentAccepted": ["Tiền mặt", "Chuyển khoản"],

    // Khu vực phục vụ
    "areaServed": {
        "@type": "City",
        "name": "Cần Thơ",
        "containedIn": {
            "@type": "Country",
            "name": "Việt Nam"
        }
    },

    // Social profiles - PHẢI LÀ URL THẬT
    "sameAs": [
        "https://www.facebook.com/camdouytincantho",
        "https://zalo.me/0919636399",
    ],

    // Dịch vụ chi tiết
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dịch vụ cầm đồ",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Cầm vàng",
                    "description": "Cầm vàng 24K, 18K, 14K, 10K lãi suất từ 1%/tháng, định giá cao theo giá thị trường"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Cầm xe máy",
                    "description": "Cầm xe máy có giữ xe hoặc không giữ xe, lãi suất từ 1.2%/tháng"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Cầm điện thoại",
                    "description": "Cầm iPhone, Samsung, Oppo, Vivo, Xiaomi và các dòng điện thoại cao cấp"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Cầm laptop",
                    "description": "Cầm laptop, Macbook, máy tính bảng các loại, lãi suất ưu đãi"
                }
            }
        ]
    }
};

// 2. ORGANIZATION SCHEMA
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://camdocantho.net/#organization",
    "name": "Cầm Đồ Nhựt Tân",
    "url": "https://camdocantho.net",
    "logo": "https://camdocantho.net/logo-removebg-small.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+84919636399",
        "contactType": "customer service",
        "areaServed": "VN",
        "availableLanguage": ["Vietnamese"]
    },
    "sameAs": [
        "https://www.facebook.com/camdouytincantho",
        "https://zalo.me/0919636399"
    ]
};

// 3. WEBSITE SCHEMA
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://camdocantho.net/#website",
    "url": "https://camdocantho.net",
    "name": "Cầm Đồ Nhựt Tân Cần Thơ",
    "description": "Website chính thức của Cầm Đồ Nhựt Tân - Dịch vụ cầm đồ uy tín tại Cần Thơ",
    "publisher": {
        // "@id": "https://camdocantho.net/#organization"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://camdocantho.net/tra-cuu?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    },
    "inLanguage": "vi-VN"
};

// 4. FAQ SCHEMA - Giúp xuất hiện Rich Snippets
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Lãi suất cầm đồ tại Nhựt Tân là bao nhiêu?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lãi suất cầm đồ tại Nhựt Tân chỉ từ 1%/tháng, đây là mức lãi suất cạnh tranh nhất tại Cần Thơ. Lãi suất cụ thể: cầm vàng 1%, cầm xe máy (có giữ xe) 1.2%, cầm xe không giữ xe 1.5%, cầm điện thoại/laptop 1.5%. Không có phí ẩn hay phụ phí."
            }
        },
        {
            "@type": "Question",
            "name": "Thủ tục cầm đồ mất bao lâu?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Thủ tục cầm đồ tại Nhựt Tân chỉ mất 5-10 phút. Quy trình: (1) Mang tài sản đến chi nhánh, (2) Nhân viên thẩm định và định giá, (3) Thoả thuận số tiền cần vay, (4) Ký hợp đồng và nhận tiền ngay. Không cần chờ đợi, không cần giấy tờ phức tạp."
            }
        },
        {
            "@type": "Question",
            "name": "Cần giấy tờ gì để cầm đồ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bạn chỉ cần: (1) CMND/CCCD bản gốc, (2) Tài sản cần cầm. Đối với xe máy cần thêm giấy tờ xe (cavet gốc). Sinh viên có thể dùng thẻ sinh viên kèm CCCD. Thủ tục đơn giản, không cần người bảo lãnh, không cần chứng minh thu nhập."
            }
        },
        {
            "@type": "Question",
            "name": "Cầm xe máy có cần giữ xe không?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nhựt Tân có 2 hình thức linh hoạt: (1) Cầm có giữ xe - lãi suất thấp hơn 1-1.2%/tháng, xe được bảo quản an toàn tại cửa hàng. (2) Cầm không giữ xe - bạn vẫn sử dụng xe bình thường, chỉ cần giữ lại giấy tờ xe, lãi suất 1.5%/tháng. Tùy nhu cầu mà chọn phương án phù hợp."
            }
        },
        {
            "@type": "Question",
            "name": "Có cầm điện thoại, laptop không?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. Nhựt Tân nhận cầm tất cả các loại: điện thoại (iPhone, Samsung, Oppo, Vivo, Xiaomi...), laptop (Macbook, Dell, HP, Asus...), máy tính bảng iPad, đồng hồ cao cấp, vàng trang sức, xe máy, ô tô. Tất cả đều được thẩm định kỹ và định giá cao 80-95% giá trị thị trường."
            }
        },
        {
            "@type": "Question",
            "name": "Sinh viên có được cầm đồ không?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. Sinh viên chỉ cần thẻ sinh viên + CMND/CCCD là cầm được. Nhựt Tân có chương trình ưu đãi đặc biệt: lãi suất chỉ 0.8%/tháng cho sinh viên. Phù hợp khi cần tiền gấp để đóng học phí, mua sách vở hay chi phí sinh hoạt. Cầm điện thoại, laptop rất nhanh."
            }
        },
        {
            "@type": "Question",
            "name": "Có chi nhánh nào ở Cần Thơ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nhựt Tân có 2 chi nhánh thuận tiện tại Cần Thơ: (1) Chi nhánh 1: 102 Đường 3 Tháng 2, Phường Xuân Khánh, Quận Ninh Kiều (gần chợ Xuân Khánh, dễ tìm). (2) Chi nhánh 2: 555 Đường 30/4, Phường Hưng Lợi, Quận Ninh Kiều (gần siêu thị Big C). Mở cửa từ 8h-20h hàng ngày kể cả Chủ nhật."
            }
        },
        {
            "@type": "Question",
            "name": "Tôi có thể cầm đồ online được không?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bạn có thể gọi trước số 0919 636 399 để được tư vấn giá, lãi suất và chuẩn bị giấy tờ cần thiết. Tuy nhiên, để thẩm định tài sản chính xác và nhận tiền, bạn vẫn cần đến trực tiếp chi nhánh. Chúng tôi không hỗ trợ cầm đồ online hoàn toàn để đảm bảo an toàn cho cả hai bên."
            }
        }
    ]
};

// 5. BREADCRUMB SCHEMA
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": "https://camdocantho.net"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Giới thiệu",
            "item": "https://camdocantho.net/gioi-thieu"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Quy trình cầm đồ",
            "item": "https://camdocantho.net/quy-trinh"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Địa chỉ chi nhánh",
            "item": "https://camdocantho.net/dia-chi"
        },
        {
            "@type": "ListItem",
            "position": 5,
            "name": "Chương trình ưu đãi",
            "item": "https://camdocantho.net/chuong-trinh"
        }
    ]
};

// ═══════════════════════════════════════════════════════
// LAYOUT COMPONENT
// ═══════════════════════════════════════════════════════
export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="vi">
        <head>
            {/* Preconnect to important domains - Tăng tốc load */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://www.google-analytics.com"/>
            <link rel="preconnect" href="https://www.facebook.com"/>

            {/* DNS Prefetch */}
            <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com"/>
            <link rel="dns-prefetch" href="https://zalo.me"/>

            {/* ═══ SCHEMA MARKUP - JSON-LD (QUAN TRỌNG CHO SEO) ═══ */}

            {/* 1. Local Business - Quan trọng nhất */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema)
                }}
            />

            {/* 2. Organization */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />

            {/* 3. Website */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />

            {/* 4. FAQ - Giúp xuất hiện Rich Snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema)
                }}
            />

            {/* 5. Breadcrumb - Hiển thị đường dẫn trên Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />



        </head>

        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            suppressHydrationWarning
        >
        <ClientWrapper>
            <Header/>
            <main id="main-content" role="main">
                {children}
            </main>
            <Footer/>
        </ClientWrapper>

        {/* Zalo Chat Button - Thêm sau khi load xong */}
        <div
            className="zalo-chat-widget"
            data-oaid="YOUR-ZALO-OA-ID"
            data-welcome-message="Xin chào! Nhựt Tân có thể giúp gì cho bạn?"
            data-autopopup="0"
            data-width="350"
            data-height="420"
        ></div>
        </body>
        </html>
    );
}

