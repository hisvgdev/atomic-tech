import { inter } from '@/constants/fonts/inter/inter.constants';
import { MAX_LENGTH } from '@/constants/global.constants';
import { getArticle } from '@/service/api/handlers.api';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import NavContent from '@/shared/global/Header/atom/NavContent';
import CustomBackPage from '@/shared/ui/custom/atom/CustomBackPage';
import { CategoriesProps } from '@/types/frontend/categories.types';
import { Box, Collapsible, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Metadata } from 'next';

import dynamic from 'next/dynamic';
const ImageModal = dynamic(() => import('@/shared/global/ImageModal/ImageModal'), { ssr: false });

export async function generateMetadata({
   params,
}: {
   params: { slug: string };
}): Promise<Metadata> {
   const article = await getArticle(params.slug);

   const categoryNames = article.Categories
      ? article.Categories.map((cat: CategoriesProps) => cat.Name).join(', ')
      : '';
   const subCategoryNames = article.SubCategories
      ? article.SubCategories.map((sub: CategoriesProps) => sub.Name).join(', ')
      : '';
   const tags = article.Tags || '';

   const keywords = [
      article.Title || '',
      article.ShortTitle || '',
      ...tags.split(','),
      ...categoryNames.split(','),
      ...subCategoryNames.split(','),
   ]
      .map((k) => k?.trim())
      .filter(Boolean)
      .join(', ');

   return {
      title: article.Title || params.slug,
      description:
         article.ShortDescription?.slice(0, 160) ||
         article.Description?.slice(0, 160) ||
         'Статья от Atomic',
      keywords,
      openGraph: {
         title: article.Title,
         description: article.ShortDescription || article.Description,
         url: `https://atomic-tech.ru/articles/${params.slug}`,
         type: 'article',
         images: article.ShortImage
            ? [
                 {
                    url: article.ShortImage.URL || '',
                    width: 800,
                    height: 600,
                    alt: article.ShortImage.ObjectName || 'Article Image',
                 },
              ]
            : [],
      },
      twitter: {
         card: 'summary_large_image',
         title: article.Title,
         description: article.ShortDescription || article.Description,
         images: article.ShortImage ? [article.ShortImage.URL || ''] : [],
      },
      category: categoryNames,
   };
}

export async function generateStaticParams() {
   return [];
}

export default async function Articles({ params }: { params: { slug: string } }) {
   const article = await getArticle(params.slug);

   const description = article?.Description;

   const isLongText = typeof description === 'string' && description.length > MAX_LENGTH;

   if (!article) {
      return (
         <div className="bg-white text-center">
            <NavContent isDarkLogo />
            <CustomBackPage />
            <Container pb="40">
               <Text>Статья не найдена</Text>
            </Container>
            <FooterLayout />
         </div>
      );
   }

   return (
      <div className="bg-white text-center">
         <NavContent isDarkLogo />
         <CustomBackPage />
         <Container pb="40">
            <Flex
               direction={{ base: 'column', lg: 'row' }}
               align="start"
               justify={{ base: 'center', lg: 'space-between' }}
               gap={{ base: '10', lg: '0' }}
            >
               <Box maxW="md">
                  <Flex direction="column" gap="8">
                     <Heading
                        fontWeight="semibold"
                        fontStyle="italic"
                        className={`${inter.className} text-5xl`}
                        color="black"
                        textAlign="left"
                     >
                        {article.Title || '-'}
                     </Heading>
                     {isLongText ? (
                        <Collapsible.Root unmountOnExit>
                           <Collapsible.Trigger>
                              <Text
                                 fontSize="1.125rem"
                                 fontWeight="light"
                                 className={`${inter.className} max-w-md text-start`}
                                 color="black"
                              >
                                 {description.slice(0, MAX_LENGTH)}...
                              </Text>
                           </Collapsible.Trigger>
                           <Collapsible.Content>
                              <Text
                                 fontSize="1.125rem"
                                 fontWeight="light"
                                 className={`${inter.className} max-w-md text-start`}
                                 color="black"
                              >
                                 {description.slice(MAX_LENGTH)}
                              </Text>
                           </Collapsible.Content>
                        </Collapsible.Root>
                     ) : (
                        <Text
                           fontSize="1.125rem"
                           fontWeight="light"
                           className={`${inter.className} max-w-md text-start`}
                           color="black"
                        >
                           {description || '-'}
                        </Text>
                     )}
                  </Flex>
               </Box>
               {article.ShortImage ? (
                  <Box w={{ base: '17.5rem', lg: '35rem' }} h={{ base: '15rem', lg: '30rem' }}>
                     <ImageModal
                        imageUrl={article.ShortImage.URL || ''}
                        alt={article.ShortImage.ObjectName || 'Article Image'}
                     />
                  </Box>
               ) : (
                  <Box bg="gray.400" w="35rem" h="30rem" rounded="md" />
               )}
            </Flex>
         </Container>
         <FooterLayout />
      </div>
   );
}
