"use client";

import React, { useContext } from 'react';
import CoachCard from '../../components/CoachCard';
import { DataContext } from '../../context/DataContext';
import Link from 'next/link';

const CoachesPage: React.FC = () => {
  const { coaches } = useContext(DataContext);

  return (
    <div>
      <h1>Coaches</h1>
      <p><Link href="/coaches/new">Add a Coach</Link></p>
      <div className="coaches-list">
        {coaches.map((coach) => (
          <CoachCard key={coach.id} coach={coach} />
        ))}
      </div>
    </div>
  );
};

export default CoachesPage;
