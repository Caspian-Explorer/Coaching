"use client";

import React, { useContext } from 'react';
import CoacheeCard from '../../components/CoacheeCard';
import { DataContext } from '../../context/DataContext';
import Link from 'next/link';

const CoacheesPage: React.FC = () => {
  const { coachees } = useContext(DataContext);

  return (
    <div>
      <h1>Coachees</h1>
      <p><Link href="/coachees/new">Add a Coachee</Link></p>
      <div className="coachees-list">
        {coachees.map((coachee) => (
          <CoacheeCard key={coachee.id} coachee={coachee} />
        ))}
      </div>
    </div>
  );
};

export default CoacheesPage;
