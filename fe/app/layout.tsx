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

    // DESCRIPTION - Hấp dẫn, có CTA và từ khóa
    description: 'Cầm đồ uy tín #1 Cần Thơ ⭐ Lãi suất chỉ 1%/tháng ⚡ Giải ngân 5 phút 🔒 Bảo mật tuyệt đối. Cầm vàng, xe máy, điện thoại, laptop. 2 chi nhánh: 102 Đ.3/2 & 555 Đ.30/4. Hotline: 0919 636 399',

    // KEYWORDS - Local SEO
    keywords: [
        // Từ khóa chính - Local
        'cầm đồ Cần Thơ',
        'cầm đồ Ninh Kiều',
        'tiệm cầm đồ Cần Thơ',
        'cầm đồ uy tín Cần Thơ',
        'camdocantho.net',

        // Từ khóa theo sản phẩm
        // 'cầm vàng Cần Thơ',
        'cầm xe máy Cần Thơ',
        'cầm điện thoại Cần Thơ',
        'cầm laptop Cần Thơ',
        // 'cầm trang sức Cần Thơ',
        'cầm đồng hồ Cần Thơ',

        // Long-tail keywords
        'cầm đồ lãi suất thấp Cần Thơ',
        'cầm đồ giải ngân nhanh',
        'cầm đồ không cần thế chấp',
        'Cầm Đồ Nhựt Tân',
        'cầm đồ đường 3 tháng 2',
        'cầm đồ đường 30 tháng 4',

        // Từ khóa sinh viên
        'cầm đồ sinh viên Cần Thơ',
        // 'vay tiền sinh viên Cần Thơ',

        // Từ khóa cạnh tranh
        'cầm đồ giá cao Cần Thơ',
        // 'thu mua vàng Cần Thơ',
        // 'đáo hạn ngân hàng Cần Thơ',
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

    // OPEN GRAPH - Facebook, Zalo
    openGraph: {
        type: 'website',
        locale: 'vi_VN',
        url: 'https://camdocantho.net',
        siteName: 'Cầm Đồ Nhựt Tân Cần Thơ',
        title: 'Cầm Đồ Nhựt Tân - Lãi Suất 1% | Giải Ngân 5 Phút | Uy Tín 20+ Năm',
        description: 'Cầm đồ uy tín #1 Cần Thơ với lãi suất chỉ 1%/tháng. Cầm vàng, xe máy, điện thoại, laptop. Giải ngân nhanh trong 5 phút. Hotline: 0919 636 399',
        images: [
            {
                url: 'https://camdocantho.net/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Cầm Đồ Nhựt Tân Cần Thơ - Dịch vụ cầm đồ uy tín',
            },
        ],
    },

    // TWITTER CARD
    twitter: {
        card: "summary_large_image",
        title: 'Cầm Đồ Nhựt Tân Cần Thơ - Lãi Suất 1%',
        description: 'Cầm đồ uy tín, lãi suất thấp nhất thị trường. Giải ngân 5 phút.',
        images: ["https://camdocantho.net/twitter-image.jpg"],
        creator: '@CamDoNhatTan',
    },

    // VERIFICATION - Thêm mã xác minh
    // verification: {
    //     google: 'your-google-site-verification-code', // Thay bằng mã thực
    //     yandex: 'your-yandex-verification-code',
    //     other: {
    //         'facebook-domain-verification': 'your-facebook-verification-code',
    //     },
    // },

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

    // APP LINKS (nếu có app mobile)
    // appLinks: {
    //   ios: {
    //     url: 'camdocantho://app',
    //     app_store_id: 'your-app-id',
    //   },
    //   android: {
    //     package: 'com.camdocantho.app',
    //     app_name: 'Cầm Đồ Nhựt Tân',
    //   },
    // },
}

// ═══════════════════════════════════════════════════════
// SCHEMA MARKUP - JSON-LD
// ═══════════════════════════════════════════════════════
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
    "description": "Cầm đồ uy tín Cần Thơ với 20+ năm kinh nghiệm. Lãi suất từ 1%/tháng, giải ngân nhanh trong 5 phút.",

    // Địa chỉ chi nhánh
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

    // Liên hệ
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

    // Tọa độ GPS
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

    // Đánh giá
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "450",
        "bestRating": "5",
        "worstRating": "1"
    },

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

    // Social profiles
    "sameAs": [
        "https://www.facebook.com/camdouytincantho",
        "https://zalo.me/0919636399",
        // "https://www.youtube.com/@camdoNhatTan"
    ],

    // Dịch vụ
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dịch vụ cầm đồ",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Cầm vàng",
                    "description": "Cầm vàng lãi suất từ 1%/tháng"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Cầm xe máy",
                    "description": "Cầm xe máy giữ xe hoặc không giữ"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Cầm điện thoại",
                    "description": "Cầm điện thoại, laptop, máy tính bảng"
                }
            }
        ]
    }
};

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
        "availableLanguage": "Vietnamese"
    },
    "sameAs": [
        "https://www.facebook.com/camdouytincantho",
        "https://zalo.me/0919636399"
    ]
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://camdocantho.net/#website",
    "url": "https://camdocantho.net",
    "name": "Cầm Đồ Nhựt Tân Cần Thơ",
    "description": "Website chính thức của Cầm Đồ Nhựt Tân",
    "publisher": {
        "@id": "https://camdocantho.net/#organization"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://camdocantho.net/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
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
            {/* Preconnect to important domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://www.google-analytics.com"/>

            {/* DNS Prefetch */}
            <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com"/>

            {/* Schema Markup - JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />

            {/* Google Analytics - Thay YOUR-GA4-ID bằng mã thật */}
            {/*<Script*/}
            {/*    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"*/}
            {/*    strategy="afterInteractive"*/}
            {/*/>*/}
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
            </Script>

            {/* Facebook Pixel - Optional */}
            <Script id="facebook-pixel" strategy="afterInteractive">
                {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR-PIXEL-ID');
            fbq('track', 'PageView');
          `}
            </Script>

            {/* Zalo Chat Widget - Optional */}
            <Script
                src="https://sp.zalo.me/plugins/sdk.js"
                strategy="lazyOnload"
            />
        </head>

        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            suppressHydrationWarning
        >
        {/* Noscript fallback for Facebook Pixel */}
        <noscript>
            <img
                height="1"
                width="1"
                style={{display: 'none'}}
                src="https://www.facebook.com/tr?id=YOUR-PIXEL-ID&ev=PageView&noscript=1"
                alt=""
            />
        </noscript>

        <ClientWrapper>
            <Header/>
            <main id="main-content">
                {children}
            </main>
            <Footer/>
        </ClientWrapper>

        {/* Zalo Chat Button */}
        <div
            className="zalo-chat-widget"
            data-oaid="YOUR-ZALO-OA-ID"
            data-welcome-message="Xin chào! Cầm Đồ Nhựt Tân có thể giúp gì cho bạn?"
            data-autopopup="0"
            data-width="350"
            data-height="420"
        />
        </body>
        </html>
    );
}