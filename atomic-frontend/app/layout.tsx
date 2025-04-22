import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Provider } from '@/shared/ui/chakra/provider';
import './globals.css';

const montserrat = Montserrat({
   weight: ['300', '400', '500', '600', '700'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-montserrat',
   fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
   title: {
      default: 'Atomic Code - Разработка программного обеспечения',
      template: '%s - Atomic Code',
   },
   description:
      'Создание инновационных решений и разработка программного обеспечения командой Atomic Code.',
   keywords:
      'Atomic Code, разработка программного обеспечения, технологии, инновации, софт, web-разработка, мобильные приложения',
   openGraph: {
      title: 'Atomic Code - Разработка программного обеспечения',
      description:
         'Создание инновационных решений и разработка программного обеспечения командой Atomic Code.',
      url: 'https://atomic-tech.ru',
      type: 'website',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/metadata/atomic-code-image.png',
            width: 1200,
            height: 630,
            alt: 'Atomic Code - Разработка программного обеспечения',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Atomic Code - Разработка программного обеспечения',
      description:
         'Создание инновационных решений и разработка программного обеспечения командой Atomic Code.',
      images: [
         {
            url: 'https://atomic-tech.ru/assets/images/metadata/atomic-code-image.png',
            width: 1200,
            height: 630,
            alt: 'Atomic Code - Разработка программного обеспечения',
         },
      ],
   },
   category: 'Технологии и Разработка',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning className={montserrat.variable}>
         <body className=" overflow-auto overscroll-none themed-scrollbar">
            <Provider>{children}</Provider>
         </body>
      </html>
   );
}
