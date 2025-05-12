import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.rlpaintingsolutions.com'

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/testimonials`,
            lastModified: new Date(),
        },
    ]
}
