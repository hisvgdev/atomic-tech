import { inter } from '@/constants/fonts/inter/inter.constants';
import { handleGetArticle } from '@/service/api/articles.api';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import NavContent from '@/shared/global/Header/atom/NavContent';
import CustomBackPage from '@/shared/ui/custom/atom/CustomBackPage';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Metadata } from 'next';

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
   const getArticle = await handleGetArticle(params.slug);
   return (
      <>
         <NavContent />
         <Container pb="40">
            <CustomBackPage />
            <Flex direction={{ base: 'column', lg: 'row' }} align="center" justify="space-between">
               <Box maxW="md">
                  <Flex direction="column" gap="16">
                     <Heading
                        fontWeight="semibold"
                        fontSize="3rem"
                        fontStyle="italic"
                        className={`${inter.className}`}
                     >
                        Название статьи
                     </Heading>
                     <Text fontSize="1.125rem" fontWeight="light" className={`${inter.className}`}>
                        Идейные соображения высшего порядка, а также сложившаяся структура
                        организации требуют определения и уточнения систем массового участия.
                        Идейные соображения высшего порядка, а также сложившаяся структура
                        организации требуют определения и уточнения систем массового участия.
                        Идейные соображения высшего порядка, а также сложившаяся структура
                        организации требуют определения и уточнения систем массового участия.
                        Идейные соображения высшего порядка, а также сложившаяся структура
                        организации требуют определения и уточнения систем массового участия.Идейные
                        соображения высшего порядка, а также сложившаяся структура организации
                        требуют определения и уточнения систем массового участия. Идейные
                        соображения высшего порядка, а также сложившаяся структура организации
                        требуют определения и уточнения систем массового участия.
                     </Text>
                  </Flex>
               </Box>
               <Box bg="gray.400" w="560px" h="480px" rounded="md" />
            </Flex>
         </Container>
         <FooterLayout />
      </>
   );
}
