import { MetadataRoute } from 'next'

export default async function sitemap(props: any): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://atomic-code.ru/'
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://atomic-code.ru/dashboard',
      lastModified: new Date(),
    },
    {
      url: 'https://atomic-code.ru/chat-bots',
      lastModified: new Date(),
    },
    {
      url: 'https://atomic-code.ru/websites',
      lastModified: new Date(),
    },
    {
      url: 'https://atomic-code.ru/mobile-apps',
      lastModified: new Date(),
    },
    {
      url: 'https://atomic-code.ru/blockchain-projects',
      lastModified: new Date(),
    },
  ]
}
