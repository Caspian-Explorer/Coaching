import CoachCard from '../components/CoachCard';
import CoacheeCard from '../components/CoacheeCard';
import { Coach, Coachee } from '../models/types';
import styles from './page.module.css';

const coaches: Coach[] = [
  {
    id: '1',
    name: 'John Doe',
    expertise: ['Life Coaching', 'Career Coaching'],
    bio: 'Experienced life and career coach.',
    imageUrl: '/user.svg',
  },
  // Add more coaches here
];

const coachees: Coachee[] = [
  {
    id: '1',
    name: 'Jane Smith',
    goals: ['Improve public speaking', 'Find a new job'],
    bio: 'Looking to grow my skills.',
    imageUrl: '/user.svg',
  },
  // Add more coachees here
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Coaching Platform</h1>
      
      <h2>Coaches</h2>
      <div className={styles.grid}>
        {coaches.map((coach) => (
          <CoachCard key={coach.id} coach={coach} />
        ))}
      </div>

      <h2>Coachees</h2>
      <div className={styles.grid}>
        {coachees.map((coachee) => (
          <CoacheeCard key={coachee.id} coachee={coachee} />
        ))}
      </div>
    </div>
  );
}