import { inter } from '@/constants/fonts/inter/inter.constants';
import { getArticle } from '@/service/api/handlers.api';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import NavContent from '@/shared/global/Header/atom/NavContent';
import CustomBackPage from '@/shared/ui/custom/atom/CustomBackPage';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({
   params,
}: {
   params: { slug: string };
}): Promise<Metadata> {
   return {
      title: `${params.slug}`,
      description: '',
   };
}

export async function generateStaticParams() {
   return [];
}

export default async function Articles({ params }: { params: { slug: string } }) {
   const article = await getArticle(params.slug);
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
                        className={`${inter.className}`}
                        color="black"
                     >
                        {article.Description || '-'}
                     </Text>
                  </Flex>
               </Box>
               {article.ShortImage ? (
                  <Box w={{ base: '280px', lg: '560px' }} h={{ base: '240px', lg: '480px' }}>
                     <Image
                        src={article.ShortImage.URL}
                        width={560}
                        height={480}
                        alt={article.ShortImage.ObjectName}
                        style={{
                           objectFit: 'cover',
                           width: '100%',
                           height: '100%',
                           borderRadius: '50px',
                        }}
                     />
                  </Box>
               ) : (
                  <Box bg="gray.400" w="560px" h="480px" rounded="md" />
               )}
            </Flex>
         </Container>
         <FooterLayout />
      </div>
   );
}
