import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://camdocantho.net";
    const currentDate = new Date();

    // Trang tĩnh
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/gioi-thieu`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/uu-dai-sinh-vien`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/khuyen-mai`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/lien-he`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    // 👇 KHAI BÁO services (QUAN TRỌNG)
    const services = [
        "cam-do-dien-thoai",
        "cam-do-laptop",
        "cam-do-xe-may",
        // "cam-do-vang",
    ];

    const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/dich-vu/${service}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...routes, ...serviceRoutes];
}
