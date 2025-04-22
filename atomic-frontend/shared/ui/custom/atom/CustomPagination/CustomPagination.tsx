import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { CustomPaginationProps } from './CustomPagination.types';

export const CustomPagination: React.FC<CustomPaginationProps> = (props) => {
   const { currentPage, totalPages, onPageChange } = props;
   const getPageNumbers = () => {
      const pages = [];
      if (totalPages <= 3) {
         for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
         }
      } else {
         if (currentPage <= 2) {
            pages.push(1, 2, '...', totalPages);
         } else if (currentPage >= totalPages - 1) {
            pages.push(1, '...', totalPages - 1, totalPages);
         } else {
            pages.push(1, '...', currentPage, currentPage + 1, '...', totalPages);
         }
      }
      return pages;
   };

   return (
      <Flex gap={2} justifyContent="center" mt={4}>
         {getPageNumbers().map((page, idx) => (
            <Button
               key={idx}
               onClick={() => typeof page === 'number' && onPageChange(page)}
               bg={page === currentPage ? '#5547FF' : undefined}
               color={page === currentPage ? 'white' : 'black'}
               border={page === currentPage ? undefined : '1px solid black'}
               transition="all"
               fontSize="lg"
               rounded="lg"
            >
               {page}
            </Button>
         ))}
      </Flex>
   );
};
