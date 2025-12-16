'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function Analytics() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        // Google Analytics pageview
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
                page_path: pathname + (searchParams?.toString() ? `?${searchParams}` : ''),
            })
        }

        // Facebook Pixel pageview (nếu có)
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'PageView')
        }
    }, [pathname, searchParams])

    return null
}