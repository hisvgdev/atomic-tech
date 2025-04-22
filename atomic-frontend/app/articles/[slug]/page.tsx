import { inter } from '@/constants/fonts/inter/inter.constants';
import { getArticle } from '@/service/api/handlers.api';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import NavContent from '@/shared/global/Header/atom/NavContent';
import CustomBackPage from '@/shared/ui/custom/atom/CustomBackPage';
import { CategoriesProps } from '@/types/frontend/categories.types';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Metadata } from 'next';
import Image from 'next/image';

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
               align="center"
               justify={{ base: 'center', lg: 'space-between' }}
               gap={{ base: '10', lg: '0' }}
            >
               <Box maxW="md">
                  <Flex direction="column" gap="16">
                     <Heading
                        fontWeight="semibold"
                        fontSize="3rem"
                        fontStyle="italic"
                        className={`${inter.className}`}
                        color="black"
                     >
                        {article.Title || '-'}
                     </Heading>
                     <Text
                        fontSize="1.125rem"
                        fontWeight="light"
                        className={`${inter.className} max-w-md text-start`}
                        color="black"
                     >
                        {article.Description || '-'}
                     </Text>
                  </Flex>
               </Box>
               {article.ShortImage ? (
                  <Box w={{ base: '17.5rem', lg: '35rem' }} h={{ base: '15rem', lg: '30rem' }}>
                     <Image
                        src={article.ShortImage.URL || ''}
                        width={560}
                        height={480}
                        alt={article.ShortImage.ObjectName || 'Article Image'}
                        style={{
                           objectFit: 'cover',
                           width: '100%',
                           height: '100%',
                           borderRadius: '3.125rem',
                        }}
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
