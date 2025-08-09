"use client";

import React, { useContext, useMemo } from 'react';
import { DataContext } from '../../context/DataContext';
import CoachCard from '../../components/CoachCard';
import CoacheeCard from '../../components/CoacheeCard';
import { useSearchParams } from 'next/navigation';

function normalize(str: string) {
  return str.toLowerCase();
}

export default function SearchPage() {
  const { coaches, coachees } = useContext(DataContext);
  const params = useSearchParams();
  const q = (params.get('q') ?? '').trim();

  const results = useMemo(() => {
    const term = normalize(q);
    if (!term) return { coaches: [], coachees: [] };
    return {
      coaches: coaches.filter((c) =>
        normalize(c.name).includes(term) ||
        normalize(c.bio).includes(term) ||
        c.expertise.some((s) => normalize(s).includes(term))
      ),
      coachees: coachees.filter((c) =>
        normalize(c.name).includes(term) ||
        normalize(c.bio).includes(term) ||
        c.goals.some((g) => normalize(g).includes(term))
      ),
    };
  }, [q, coaches, coachees]);

  const hasQuery = q.length > 0;

  return (
    <div className="search-page" style={{ padding: '1rem' }}>
      <h1>Search</h1>
      {!hasQuery && <p>Type in the search box above to find coaches and coachees.</p>}
      {hasQuery && (
        <>
          <h2 style={{ marginTop: '1rem' }}>Coaches</h2>
          {results.coaches.length === 0 ? (
            <p>No coaches found.</p>
          ) : (
            <div className="coaches-list">
              {results.coaches.map((coach) => (
                <CoachCard key={coach.id} coach={coach} />
              ))}
            </div>
          )}

          <h2 style={{ marginTop: '2rem' }}>Coachees</h2>
          {results.coachees.length === 0 ? (
            <p>No coachees found.</p>
          ) : (
            <div className="coachees-list">
              {results.coachees.map((coachee) => (
                <CoacheeCard key={coachee.id} coachee={coachee} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
