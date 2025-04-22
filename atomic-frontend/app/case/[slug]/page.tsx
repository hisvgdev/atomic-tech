import { inter } from '@/constants/fonts/inter/inter.constants';
import { getWorkCase } from '@/service/api/handlers.api';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import NavContent from '@/shared/global/Header/atom/NavContent';
import CustomBackPage from '@/shared/ui/custom/atom/CustomBackPage';
import { CategoriesProps } from '@/types/frontend/categories.types';
import { WorkCaseProps } from '@/types/frontend/workCase.types';
import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({
   params,
}: {
   params: { slug: string };
}): Promise<Metadata> {
   const workCase: WorkCaseProps = await getWorkCase(params.slug);
   const categoryNames = workCase.Categories.map((cat: CategoriesProps) => cat.Name).join(', ');
   const tags = workCase.Tags || '';
   const keywords = [workCase.Title, ...tags.split(','), ...categoryNames.split(',')].join(', ');

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
            ? [{ url: workCase.Preview.URL, width: 800, height: 600, alt: workCase.Title }]
            : [],
      },
      twitter: {
         card: 'summary_large_image',
         title: workCase.Title,
         description: workCase.Description,
         images: workCase.Preview
            ? [{ url: workCase.Preview.URL, width: 800, height: 600, alt: workCase.Title }]
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

   return (
      <div className="bg-white text-black">
         <NavContent isDarkLogo />
         <CustomBackPage />
         <Container pb="40">
            <Flex direction="column" gap="14" justify="center" align="center">
               <Flex
                  direction={{ base: 'column', lg: 'row' }}
                  align="center"
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
                        {workCase.Title}
                     </Heading>

                     <Flex direction="column" gap="4">
                        <Text
                           className={`${inter.className} italic font-semibold text-lg max-w-2xl truncate`}
                           style={{
                              fontStyle: 'italic',
                           }}
                        >
                           Ниша: <span className="font-normal not-italic">{workCase.Niche}</span>
                        </Text>

                        <Text
                           className={`${inter.className} italic font-semibold text-lg max-w-2xl truncate`}
                           style={{
                              fontStyle: 'italic',
                           }}
                        >
                           Тип разработки:{' '}
                           <span className="font-normal not-italic">{workCase.DevelopType}</span>
                        </Text>

                        <Text
                           className={`${inter.className} italic font-semibold text-lg max-w-2xl truncate`}
                           style={{
                              fontStyle: 'italic',
                           }}
                        >
                           App: <span className="font-normal not-italic">{workCase.App}</span>
                        </Text>

                        <Text
                           className={`${inter.className} italic font-semibold text-lg max-w-2xl truncate`}
                           style={{
                              fontStyle: 'italic',
                           }}
                        >
                           Language:{' '}
                           <span className="font-normal not-italic">{workCase.Languages}</span>
                        </Text>

                        <Text
                           className={`${inter.className} italic font-semibold text-lg max-w-2xl truncate`}
                           style={{
                              fontStyle: 'italic',
                           }}
                        >
                           Result:{' '}
                           <span className="font-normal not-italic">{workCase.Description}</span>
                        </Text>
                     </Flex>
                  </Flex>
                  {workCase.Preview ? (
                     <Box w={{ base: '17.5rem', lg: '35rem' }} h={{ base: '15rem', lg: '30rem' }}>
                        <Image
                           src={workCase.Preview.URL}
                           width={560}
                           height={480}
                           alt={workCase.Title}
                           style={{
                              objectFit: 'cover',
                              width: '100%',
                              height: '100%',
                              borderRadius: '50px',
                           }}
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
                  <Flex align="center" justify="space-between" width="100%" gap="10" wrap="wrap">
                     {Array.isArray(workCase.Images) && workCase.Images.length > 0 ? (
                        workCase.Images.map((img: string, idx: number) => (
                           <Box
                              key={idx}
                              w={{ base: '17.5rem', lg: '35rem' }}
                              h={{ base: '18rem', lg: '35.5rem' }}
                           >
                              <Image
                                 src={img}
                                 width={560}
                                 height={566}
                                 alt={workCase.Title}
                                 style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50px',
                                 }}
                              />
                           </Box>
                        ))
                     ) : (
                        <Box
                           bg="gray.400"
                           w={{ base: '17.5rem', lg: '35rem' }}
                           h={{ base: '18rem', lg: '35.5rem' }}
                           rounded="md"
                        />
                     )}
                  </Flex>
               </Flex>
               <Text className={`${inter.className} italic font-light text-lg`}>
                  {workCase.Description}
               </Text>
            </Flex>
         </Container>
         <FooterLayout />
      </div>
   );
}
