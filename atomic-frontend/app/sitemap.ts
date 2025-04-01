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
      url: `${baseUrl}/chat-bots`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/websites`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/mobile-apps`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blockchain`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
    },
  ]
}
