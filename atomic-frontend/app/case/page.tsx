import CaseLayout from '@/components/case/organism/CaseLayout/CaseLayout';
import FooterLayout from '@/shared/global/Footer/cells/FooterLayout';
import NavContent from '@/shared/global/Header/atom/NavContent';
import CustomBackPage from '@/shared/ui/custom/atom/CustomBackPage';

export const metadata = {
   title: 'Портфолио',
   description: "This is a portfolio page who's developing in our atomic teams",
};

export default function Case() {
   return (
      <div className="bg-white text-black">
         <NavContent isDarkLogo />
         <CustomBackPage />
         <CaseLayout />
         <FooterLayout />
      </div>
   );
}
