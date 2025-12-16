import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Cầm Đồ Nhựt Tân Cần Thơ',
        short_name: 'Nhựt Tân',
        description: 'Cầm đồ uy tín với lãi suất thấp nhất Cần Thơ',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#10B981',
        orientation: 'portrait',
        icons: [
            {
                src: '/logo-removebg-small.png',
                sizes: '192x192',
                type: 'image/png',
                // purpose: 'any maskable'
            },
            {
                src: '/logo-removebg-small.png',
                sizes: '512x512',
                type: 'image/png',
                // purpose: 'any maskable'
            }
        ],
        categories: ['finance', 'business'],
        lang: 'vi-VN',
    }
}