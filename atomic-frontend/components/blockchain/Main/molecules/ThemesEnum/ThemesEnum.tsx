import { Box, Flex, List, Text } from '@chakra-ui/react';
import React from 'react';
import solanaProjectImage from '@/public/assets/images/blockchain/gameCardImage.png';
import mataverseProjectImage from '@/public/assets/images/blockchain/metaverseImage.png';
import dexCardImage from '@/public/assets/images/blockchain/dexCardImage.png';
import gatewayCardImage from '@/public/assets/images/blockchain/gatewayCardImage.png';
import rwaCardImage from '@/public/assets/images/blockchain/rwaImage.png';
import ThemesEnumCard from '../../atoms/ThemesEnumCard';
import { ThemesEnumHeading } from '../../atoms/ThemesEnumHeading/ThemesEnumHeading';
import { inter } from '@/constants/fonts/inter/inter.constants';
import Image from 'next/image';
import lamodaIcon from '@/public/assets/images/blockchain/lamodaIcon.svg';
import yxMarketIcon from '@/public/assets/images/blockchain/yxMarketIcon.svg';
import wbIcon from '@/public/assets/images/blockchain/wbIcon.svg';
import ozonIcon from '@/public/assets/images/blockchain/ozonIcon.svg';
import polygonIcon from '@/public/assets/images/blockchain/polygonIcon.svg';
import ethIcon from '@/public/assets/images/blockchain/ethIcon.svg';
import solanaIcon from '@/public/assets/images/blockchain/solanaIcon.svg';
import { Briefcase, Medal, Music2, RussianRuble, ShieldHalf } from 'lucide-react';
import InfoCard from '../../atoms/InfoCard';
import { useTheme } from 'next-themes';

export const ThemesEnum = () => {
   const { theme } = useTheme();
   return (
      <Flex direction="column" gap="28">
         <Box maxW={{ base: 'full', lg: '6xl' }}>
            <Flex direction="column" gap={{ base: '10', lg: '20' }}>
               <ThemesEnumHeading
                  title="1. Игровые и виртуальные миры"
                  desc="Блокчейны для интерактивного развлечения, создания виртуальных миров и социальных экосистем."
               />
               <Flex direction={{ base: 'column', lg: 'row' }} align="center" gap="10">
                  <ThemesEnumCard
                     title="Игры"
                     desc="Блокчейны для игр представляют собой использование технологии распределённого
                     реестра в игровой индустрии, что позволяет игрокам и разработчикам внедрять
                     децентрализованные элементы в игровые процессы."
                     image={solanaProjectImage.src}
                  />
                  <ThemesEnumCard
                     title="Метавселенные"
                     desc="Блокчейны для игр представляют собой использование технологии
                                 распределённого реестра в игровой индустрии, что позволяет игрокам
                                 и разработчикам внедрять децентрализованные элементы в игровые
                                 процессы."
                     image={mataverseProjectImage.src}
                  />
               </Flex>
               <Flex direction="column" gap="20">
                  <ThemesEnumHeading
                     title="2. Электронная коммерция и децентрализованные рынки"
                     desc="Платформы, использующие блокчейн для децентрализованной торговли и обмена между участниками."
                  />
                  <Flex
                     direction={{ base: 'column', lg: 'row' }}
                     align="center"
                     gap={{ base: '6', lg: '10' }}
                  >
                     <Box
                        w={{ base: 'fit', lg: 'xl' }}
                        h="sm"
                        bg="{colors.thirtaryDark}"
                        rounded="3xl"
                        p="6"
                        overflow="auto"
                     >
                        <Flex direction="column" gap="6">
                           <Flex direction="column" gap="3">
                              <Text fontWeight="semibold" fontSize="2.5rem" color="white">
                                 Р2Р площадки
                              </Text>
                              <Flex
                                 flexWrap="wrap"
                                 w="full"
                                 gap="2.5"
                                 display={{ base: 'none', lg: 'flex' }}
                              >
                                 {[
                                    'Управление идентификацией',
                                    'Децентрализация',
                                    'Управление репутацией',
                                    'высокая степень приватности',
                                    'Криптовалютные расчёты',
                                 ].map((item, idx) => {
                                    return (
                                       <Box
                                          bgColor="#A0CDFD"
                                          rounded="3.75rem"
                                          p="1"
                                          key={`${item}-${idx}`}
                                       >
                                          <Text
                                             fontSize="sm"
                                             fontWeight="normal"
                                             className={`${inter.className}`}
                                             color="white"
                                          >
                                             {item}
                                          </Text>
                                       </Box>
                                    );
                                 })}
                              </Flex>
                           </Flex>
                           <Box w="full" overflow="hidden">
                              <Text
                                 fontSize="sm"
                                 className={`${inter.className}`}
                                 fontWeight="light"
                                 color="white"
                              >
                                 Представляют собой использование технологии распределённого реестра
                                 для создания децентрализованных платформ, где пользователи могут
                                 напрямую взаимодействовать друг с другом без посредников. Такие
                                 решения становятся основой для честных и безопасных сделок между
                                 участниками.
                              </Text>
                           </Box>
                        </Flex>
                     </Box>
                     <Box
                        w={{ base: 'fit', lg: 'xl' }}
                        h="sm"
                        bg="{colors.thirtaryDark}"
                        rounded="3xl"
                        p="6"
                        overflow="hidden"
                        position="relative"
                     >
                        <Flex direction="column" gap="6">
                           <Flex direction="column" gap="6">
                              <Text fontWeight="semibold" fontSize="2.5rem" color="white">
                                 Маркетплейсы
                              </Text>
                              <Box pl="4" maxW="96">
                                 <List.Root spaceY="2" listStyle="disc" color="white">
                                    <List.Item className={`${inter.className}`} fontWeight="light">
                                       Технология позволяет автоматизировать процессы
                                    </List.Item>
                                    <List.Item className={`${inter.className}`} fontWeight="light">
                                       Минимизировать риски мошенничества
                                    </List.Item>
                                    <List.Item className={`${inter.className}`} fontWeight="light">
                                       Снизить затраты на посредников.
                                    </List.Item>
                                 </List.Root>
                              </Box>
                           </Flex>
                           <Box>
                              <Box position="absolute" top="35%" right="5%">
                                 <Image src={lamodaIcon} width={40} height={40} alt="lamoda-icon" />
                              </Box>
                              <Box position="absolute" top="50%" right="10%">
                                 <Image
                                    src={yxMarketIcon}
                                    width={85}
                                    height={85}
                                    alt="yx-market-icon"
                                 />
                              </Box>
                              <Box position="absolute" bottom="10%" right="5%">
                                 <Image src={ozonIcon} width={50} height={50} alt="ozon-icon" />
                              </Box>
                              <Box position="absolute" bottom="10%" right="30%">
                                 <Image src={wbIcon} width={62} height={62} alt="wb-icon" />
                              </Box>
                           </Box>
                        </Flex>
                     </Box>
                  </Flex>
               </Flex>
               <Flex direction="column" gap={{ base: '10', lg: '20' }}>
                  <ThemesEnumHeading
                     title="3. Децентрализованные финансы (DeFi)"
                     desc="Решения для управления финансами, обмена криптовалютами и упрощения транзакций без посредников."
                  />
                  <Flex direction={{ base: 'column', lg: 'row' }} align="center" gap="10">
                     <ThemesEnumCard
                        title="Децентрализованные обменники (DEX)"
                        desc="обеспечивают работу платформ, где пользователи могут напрямую обмениваться криптовалютами без участия посредников. Технология блокчейна лежит в основе таких платформ, предоставляя прозрачность, безопасность и децентрализацию."
                        image={dexCardImage.src}
                     />
                     <ThemesEnumCard
                        title="Платежные шлюзы"
                        desc="— это использование технологии распределённого реестра для обработки финансовых транзакций. Такие решения позволяют осуществлять быстрые, безопасные и дешёвые платежи как в криптовалютах, так и в фиатных валютах, создавая новые возможности для бизнеса и пользователей."
                        image={gatewayCardImage.src}
                     />
                  </Flex>
               </Flex>
               <Flex direction="column" gap={{ base: '10', lg: '20' }}>
                  <ThemesEnumHeading
                     title="4. Токенизация и цифровизация активов"
                     desc="Платформы для преобразования физических активов в цифровую форму и создания криптовалют."
                  />
                  <Flex direction={{ base: 'column', lg: 'row' }} align="center" gap="10">
                     <ThemesEnumCard
                        title="Токенизация реальных активов (RWA)"
                        desc="это процесс перевода физических или финансовых активов в цифровую форму (токены), используя технологию блокчейна. Это делает управление, передачу и разделение собственности на активы проще, безопаснее и доступнее."
                        image={rwaCardImage.src}
                     />
                     <Box
                        w={{ base: 'fit', lg: 'xl' }}
                        h="sm"
                        bg="{colors.thirtaryDark}"
                        rounded="3xl"
                        p="6"
                        position="relative"
                     >
                        <Flex direction="column" gap="6">
                           <Flex direction="column" gap="6">
                              <Text fontWeight="semibold" fontSize="md" color="white">
                                 Создание монет (токенов)
                              </Text>
                              <Box maxW="80" overflow="hidden">
                                 <Text
                                    fontWeight="light"
                                    color="white"
                                    className={`${inter.className}`}
                                 >
                                    <Text as="span" fontWeight="bold" fontStyle="italic">
                                       Выпуск цифровых активов
                                    </Text>
                                    , которые используются в экосистемах блокчейна. Монеты могут
                                    быть как платежным средством, так и инструментом управления или
                                    программ лояльности.
                                 </Text>
                              </Box>
                           </Flex>
                           <Box>
                              <Box
                                 position="absolute"
                                 top={{ base: '50%', lg: '20%' }}
                                 right={{ base: '40%', lg: '5%' }}
                              >
                                 <Image
                                    src={polygonIcon}
                                    width={140}
                                    height={140}
                                    alt="polygon-icon"
                                 />
                              </Box>
                              <Box position="absolute" top="50%" right="0%">
                                 <Image src={ethIcon} width={120} height={120} alt="eth-icon" />
                              </Box>
                              <Box position="absolute" bottom="-20%" right="10%">
                                 <Image
                                    src={solanaIcon}
                                    width={250}
                                    height={180}
                                    alt="solana-icon"
                                 />
                              </Box>
                           </Box>
                        </Flex>
                     </Box>
                  </Flex>
               </Flex>
               <Flex direction="column" gap="20">
                  <ThemesEnumHeading
                     title="5. Управление цепочками поставок и учет"
                     desc="Инфраструктурные решения для управления логистикой и хранения данных в распределённом реестре."
                  />
                  <Flex
                     direction={{ base: 'column', lg: 'row' }}
                     align="center"
                     justify={{ base: 'center', lg: 'space-around' }}
                     gap={{ base: '10', lg: undefined }}
                  >
                     <Box
                        w={{ base: 'fit', lg: 'md' }}
                        h="sm"
                        bg="#F4F4F4"
                        rounded="3xl"
                        p="6"
                        position="relative"
                        overflow="auto"
                     >
                        <Flex direction="column" gap="8">
                           <Flex
                              bgColor="#5547FF"
                              w="4.75rem"
                              h="4.75rem"
                              rounded="full"
                              justify="center"
                              align="center"
                           >
                              <Box bgColor="white" rounded="full" p="2">
                                 <RussianRuble color="#5547FF" />
                              </Box>
                           </Flex>
                           <Flex direction="column" gap="6">
                              <Box maxW="96">
                                 <Text
                                    color="black"
                                    fontWeight="bold"
                                    fontSize="lg"
                                    className={`${inter.className} leading-6`}
                                 >
                                    Платформы для отслеживания цепочек поставок с
                                    блокчейн-бухгалтерией
                                 </Text>
                              </Box>
                              <Box>
                                 <Text
                                    color="black"
                                    fontWeight="light"
                                    className={`${inter.className}`}
                                 >
                                    Предоставляют инструменты для управления логистикой,
                                    прозрачности и учета товаров на всех этапах их жизненного цикла.
                                    Это направление помогает улучшить доверие между участниками
                                    цепочек поставок, минимизировать ошибки и предотвратить
                                    мошенничество.
                                 </Text>
                              </Box>
                           </Flex>
                        </Flex>
                     </Box>
                     <Box
                        w={{ base: 'fit', lg: 'md' }}
                        h="sm"
                        bg="#F4F4F4"
                        rounded="3xl"
                        p="6"
                        position="relative"
                     >
                        <Flex direction="column" gap="6">
                           <Box maxW="96">
                              <Text
                                 color="black"
                                 fontWeight="bold"
                                 fontSize="lg"
                                 className={`${inter.className} leading-6`}
                              >
                                 Блокчейны
                              </Text>
                           </Box>
                           <Box>
                              <Text
                                 color="black"
                                 fontWeight="light"
                                 className={`${inter.className}`}
                              >
                                 Блокчейны как технология представляют собой распределённые реестры,
                                 которые фиксируют информацию в неизменяемой форме. Их
                                 универсальность делает их применимыми в самых разных отраслях,
                                 включая финансы, логистику, здравоохранение, управление
                                 идентичностью и многое другое.
                              </Text>
                           </Box>
                        </Flex>
                     </Box>
                  </Flex>
               </Flex>
               <Flex direction="column" gap={{ base: '10', lg: '20' }}>
                  <ThemesEnumHeading
                     title="6. Интеллектуальная собственность и авторские права"
                     desc="Решения для защиты и управления правами на интеллектуальную собственность с использованием блокчейна."
                  />
                  <Flex
                     align="center"
                     gap="10"
                     wrap={{ base: 'wrap', lg: 'nowrap' }}
                     justify="center"
                  >
                     <InfoCard
                        title="Регистрация прав на ИС"
                        description="Доказательство авторства на произведения искусства, музыку, литературу, программный код и другие цифровые активы."
                        bgColor="#2D2D2D"
                        iconBgColor="#2D2D2D"
                        icon={<Music2 color={theme === 'light' ? 'white' : '#232323'} />}
                     />
                     <InfoCard
                        title="Управление лицензиями"
                        description="Автоматическое распределение доходов между правообладателями через смарт-контракты."
                        bgColor="#C9C9C9"
                        iconBgColor="#C9C9C9"
                        textColor="black"
                        icon={<Medal color={theme === 'light' ? 'black' : 'white'} />}
                     />
                     <InfoCard
                        title="Монетизация"
                        description="Создание NFT, токенизирующих уникальные права на произведения."
                        bgColor="#5547FF"
                        iconBgColor="#5547FF"
                        icon={<Briefcase color="white" />}
                     />
                     <InfoCard
                        title="Прозрачность и защита"
                        description="Предотвращение споров об авторстве за счёт наличия неизменяемых записей в блокчейне."
                        bgColor="#A199FF"
                        iconBgColor="#A199FF"
                        icon={<ShieldHalf color="white" />}
                     />
                  </Flex>
               </Flex>
            </Flex>
         </Box>
      </Flex>
   );
};
