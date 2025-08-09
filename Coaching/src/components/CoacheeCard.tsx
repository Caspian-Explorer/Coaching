import React from 'react';
import { Coachee } from '../models/types';
import styles from './CoacheeCard.module.css';

interface CoacheeCardProps {
  coachee: Coachee;
}

const CoacheeCard: React.FC<CoacheeCardProps> = ({ coachee }) => {
  return (
    <div className={styles.card}>
      <img src={coachee.imageUrl} alt={coachee.name} className={styles.image} />
      <h2>{coachee.name}</h2>
      <p>{coachee.bio}</p>
      <ul>
        {coachee.goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoacheeCard;
