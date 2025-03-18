import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import { CustomSplittedTextProps } from './CustomSplittedText.types';
import { inter } from '@/constants/fonts/inter/inter.constants';

export const CustomSplittedText: FC<CustomSplittedTextProps> = (props) => {
   const { text, lines, weight = 'bold', size = '2xl', lineHeight = '2.5rem' } = props;
   const words = text.split(' ');
   const chunkSize = Math.ceil(words.length / lines);
   const chunks = Array.from({ length: lines }, (_, i) =>
      words.slice(i * chunkSize, (i + 1) * chunkSize).join(' '),
   );

   return (
      <>
         {chunks.map((chunk, index) => (
            <Text
               key={index}
               fontSize={size}
               fontWeight={weight}
               lineHeight={lineHeight}
               className={`${inter.className}`}
            >
               {chunk}
            </Text>
         ))}
      </>
   );
};
