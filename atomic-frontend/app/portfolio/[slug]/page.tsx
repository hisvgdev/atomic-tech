import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
   return {
      title: `${params.slug}`,
      description: '',
   };
}

export async function generateStaticParams() {
  return []
}

export default function Portfolioes({ params }: { params: { slug: string } }) {
   return (
      <div>
         <div>{params.slug}</div>
      </div>
   );
}
