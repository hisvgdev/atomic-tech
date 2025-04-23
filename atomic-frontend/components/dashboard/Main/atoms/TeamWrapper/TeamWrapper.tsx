import { RootTeam } from '@/types/frontend/team.types';
import TeamSection from './TeamSection';

export default function TeamWrapper(props: { team: RootTeam[] }) {
   return <TeamSection team={props.team} />;
}
