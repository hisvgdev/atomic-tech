import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://atomic-tech.ru/'
    return {
        rules: {
            userAgent: '*',
            allow: '/public/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
