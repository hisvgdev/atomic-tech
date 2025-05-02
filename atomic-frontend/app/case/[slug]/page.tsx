import { inter } from '@/constants/fonts/inter/inter.constants';
import { MAX_LENGTH } from '@/constants/global.constants';
import { getWorkCase } from '@/service/api/handlers.api';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import NavContent from '@/shared/global/Header/atom/NavContent';
import CustomBackPage from '@/shared/ui/custom/atom/CustomBackPage';
import { CategoriesProps } from '@/types/frontend/categories.types';
import { WorkCaseProps } from '@/types/frontend/workCase.types';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Metadata } from 'next';

import dynamic from 'next/dynamic';
import Link from 'next/link';
const ImageModal = dynamic(() => import('@/shared/global/ImageModal/ImageModal'), { ssr: false });

export async function generateMetadata({
   params,
}: {
   params: { slug: string };
}): Promise<Metadata> {
   const workCase: WorkCaseProps = await getWorkCase(params.slug);

   const categoryNames =
      workCase.Categories && Array.isArray(workCase.Categories)
         ? workCase.Categories.map((cat: CategoriesProps) => cat.Name).join(', ')
         : '';
   const tags = workCase.Tags || '';
   const keywords = [workCase.Title, ...tags.split(','), ...categoryNames.split(',')]
      .map((k) => k.trim())
      .filter(Boolean)
      .join(', ');

   return {
      title: `${workCase.Title}`,
      description: workCase.Description?.slice(0, 160) ?? 'Проект от Atomic',
      keywords,
      openGraph: {
         title: workCase.Title,
         description: workCase.Description,
         url: `https://atomic-tech.ru/case/${params.slug}`,
         type: 'article',
         images: workCase.Preview
            ? [
                 {
                    url: workCase.Preview.URL || '',
                    width: 800,
                    height: 600,
                    alt: workCase.Title || 'Work Case',
                 },
              ]
            : [],
      },
      twitter: {
         card: 'summary_large_image',
         title: workCase.Title,
         description: workCase.Description,
         images: workCase.Preview
            ? [
                 {
                    url: workCase.Preview.URL || '',
                    width: 800,
                    height: 600,
                    alt: workCase.Title || 'Work Case',
                 },
              ]
            : [],
      },
      category: categoryNames,
   };
}

export async function generateStaticParams() {
   return [];
}

export default async function Portfolio({ params }: { params: { slug: string } }) {
   const workCase: WorkCaseProps = await getWorkCase(params.slug);

   const description = workCase?.Description;

   const isLongText = typeof description === 'string' && description.length > MAX_LENGTH;

   if (!workCase) {
      return (
         <div className="bg-white text-center">
            <NavContent isDarkLogo />
            <CustomBackPage />
            <Container pb="40">
               <Text>Проект не найден</Text>
            </Container>
            <FooterLayout />
         </div>
      );
   }

   return (
      <div className="bg-white text-black">
         <NavContent isDarkLogo />
         <CustomBackPage />
         <Container pb="40">
            <Flex direction="column" gap="14" justify="center" align="center">
               <Flex
                  direction={{ base: 'column', lg: 'row' }}
                  align="start"
                  justify={{ base: 'center', lg: 'space-between' }}
                  width="100%"
                  gap={{ base: '10', lg: '0' }}
               >
                  <Flex direction="column" gap="12">
                     <Heading
                        className={`${inter.className} font-semibold text-5xl`}
                        style={{
                           fontStyle: 'italic',
                        }}
                     >
                        {workCase.Title || '-'}
                     </Heading>

                     <Flex direction="column" gap="4">
                        <Text
                           className={`${inter.className} italic font-semibold text-lg max-w-2xl truncate`}
                           style={{
                              fontStyle: 'italic',
                           }}
                        >
                           Ниша:{' '}
                           <span className="font-normal not-italic">{workCase.Niche || '-'}</span>
                        </Text>

                        <Text
                           className={`${inter.className} italic font-semibold text-lg max-w-2xl truncate`}
                           style={{
                              fontStyle: 'italic',
                           }}
                        >
                           Тип разработки:{' '}
                           <span className="font-normal not-italic">
                              {workCase.DevelopType || '-'}
                           </span>
                        </Text>

                        <Text
                           className={`${inter.className} italic font-semibold text-lg max-w-2xl truncate`}
                           style={{
                              fontStyle: 'italic',
                           }}
                        >
                           Ссылка:{' '}
                           <Link
                              href={workCase.App || '/'}
                              className="font-normal not-italic underline"
                           >
                              {workCase.App || '-'}
                           </Link>
                        </Text>

                        <Text
                           className={`${inter.className} italic font-semibold text-lg max-w-2xl truncate`}
                           style={{
                              fontStyle: 'italic',
                           }}
                        >
                           Язык:{' '}
                           <span className="font-normal not-italic">
                              {workCase.Languages || '-'}
                           </span>
                        </Text>

                        <Text
                           className={`${inter.className} font-semibold text-lg max-w-2xl`}
                           style={{
                              fontStyle: 'italic',
                           }}
                        >
                           Описание:{' '}
                           <span className="font-normal not-italic text-left max-w-2xl">
                              {description}
                           </span>
                        </Text>
                     </Flex>
                  </Flex>
                  {workCase.Preview ? (
                     <Box w={{ base: '17.5rem', lg: '35rem' }} h={{ base: '15rem', lg: '30rem' }}>
                        <ImageModal
                           imageUrl={workCase.Preview.URL || ''}
                           alt={workCase.Title || 'Preview Image'}
                        />
                     </Box>
                  ) : (
                     <Box
                        bg="gray.400"
                        w={{ base: '17.5rem', lg: '35rem' }}
                        h={{ base: '15rem', lg: '30rem' }}
                        rounded="md"
                     />
                  )}
               </Flex>
               <Flex direction="column" gap="10">
                  <Flex align="center" justify="center" width="100%" gap="10" wrap="wrap">
                     {Array.isArray(workCase.Images) &&
                        workCase.Images.length > 0 &&
                        workCase.Images.map((img, idx) => {
                           return (
                              <Box
                                 key={img.ID}
                                 w={{ base: '17.5rem', lg: '35rem' }}
                                 h={{ base: '18rem', lg: '35.5rem' }}
                              >
                                 <ImageModal
                                    imageUrl={img.URL || ''}
                                    alt={img.ObjectName || `Image ${idx + 1}`}
                                 />
                              </Box>
                           );
                        })}
                  </Flex>
               </Flex>
               <Text className={`${inter.className} italic font-light text-lg`}>
                  {workCase.Description || '-'}
               </Text>
            </Flex>
         </Container>
         <FooterLayout />
      </div>
   );
}
