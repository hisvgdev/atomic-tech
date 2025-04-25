import Link from 'next/link';

export default function NotFound() {
   return (
      <main className="grid h-screen place-items-center bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
         <div className="text-center">
            <p className="text-base font-semibold text-gray-500">404</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
               Страница не найдена
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
               Упс! Мы не смогли найти страницу, которую вы искали.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
               <Link
                  href="/"
                  replace
                  className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-indigo-300 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
               >
                  На главную
               </Link>
            </div>
         </div>
      </main>
   );
}
