import { MainSection } from '../../molecules/MainSection/MainSection';
import { getAllTeamMembers, getAllTechnologies } from '@/service/api/handlers.api';

export default async function MainLayout() {
   const technology = await getAllTechnologies();
   const team = await getAllTeamMembers();
   return <MainSection team={team} technology={technology} />;
}
