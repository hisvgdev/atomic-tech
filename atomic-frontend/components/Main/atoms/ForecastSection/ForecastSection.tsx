import React, { FC } from 'react';
import { ForecastSectionProps } from './ForecastSection.types';
import { LucideRussianRuble, Mountain } from 'lucide-react';

export const ForecastSection: FC<ForecastSectionProps> = (props) => {
   const {} = props;
   return (
      <div className="flex flex-col gap-24 items-start">
         <div className="flex flex-col gap-7 items-start">
            <div className="max-w-2xl">
               <h2 className="font-bold text-5xl text-white">
                  Узнайте прогноз окупаемости разработки
               </h2>
            </div>
            <div className="max-w-md">
               <p className="font-light text-base text-white">
                  Изучим ваш запрос, предложим разные варианты и{' '}
                  <span className="italic font-bold">объясним всё простым языком</span>
               </p>
            </div>
         </div>
         <div className="flex items-center gap-10 max-w-5xl">
            <div className="w-full h-[17rem] bg-gradient-to-b bg-[#FFFFFF1A] rounded-2xl p-6 flex flex-col gap-8 shadow-lg">
               <div className="w-16 h-16 bg-[#CECAFF] rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#5547FF] rounded-full flex items-center justify-center">
                     <LucideRussianRuble size={20} color="#CECAFF" />
                  </div>
               </div>
               <div className="flex flex-col gap-6">
                  <h3 className="text-white text-2xl font-semibold leading-7">
                     3 варианта стоимости
                  </h3>
                  <p className="text-white text-sm font-light">
                     Предложим три варианта разработки и расскажем о преимуществах каждого из них.
                  </p>
               </div>
            </div>
            <div className="w-full h-[17rem] bg-gradient-to-b bg-[#FFFFFF1A] rounded-2xl p-6 flex flex-col gap-8 shadow-lg">
               <div className="w-16 h-16 bg-[#CECAFF] rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#5547FF] rounded-full flex items-center justify-center">
                     <Mountain size={20} color="#CECAFF" />
                  </div>
               </div>
               <div className="flex flex-col gap-6">
                  <h3 className="text-white text-2xl font-semibold leading-7">
                     Возможные риски и подводные камни
                  </h3>
                  <p className="text-white text-sm font-light">
                     Расскажем все подробно и простым языком.
                  </p>
               </div>
            </div>
            <div className="w-full h-[17rem] bg-gradient-to-b bg-[#FFFFFF1A] rounded-2xl p-6 flex-col gap-8 shadow-lg">
               <div className="flex flex-col gap-5">
                  <h3 className="text-white text-2xl font-bold">
                     Окупаемость и реалистичный результат работы
                  </h3>
                  <p className="text-white text-sm font-light">
                     Вы будуте понимать заранее, какого результата ожидать.
                  </p>
               </div>
               <div className="w-16 h-16 bg-[#CECAFF] rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#5547FF] rounded-full flex items-center justify-center">
                     <LucideRussianRuble size={20} color="#CECAFF" />
                  </div>
               </div>
            </div>
         </div>
         <div></div>
      </div>
   );
};
