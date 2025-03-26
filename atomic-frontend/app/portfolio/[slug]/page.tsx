export async function generateMetadata({ params }: { params: { slug: string } }) {
   return {
      title: `Portfolio - ${params.slug}`,
      description: '',
   };
}

export default function Portfolioes({ params }: { params: { slug: string } }) {
   return (
      <div>
         <div>{params.slug}</div>
      </div>
   );
}
