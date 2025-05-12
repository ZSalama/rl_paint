import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/', '/animations/'],
            },
        ],
        sitemap: 'https://www.rlpaintingsolutions.com/sitemap.xml',
    }
}
