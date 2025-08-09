import React from 'react';
import { Coach } from '../models/types';
import styles from './CoachCard.module.css';

interface CoachCardProps {
  coach: Coach;
}

const CoachCard: React.FC<CoachCardProps> = ({ coach }) => {
  return (
    <div className={styles.card}>
      <img src={coach.imageUrl} alt={coach.name} className={styles.image} />
      <h2>{coach.name}</h2>
      <p>{coach.bio}</p>
      <ul>
        {coach.expertise.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoachCard;