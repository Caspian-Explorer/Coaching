"use client";

import React, { useState, useContext } from 'react';
import { DataContext } from '../../../context/DataContext';
import { useRouter } from 'next/navigation';

export default function NewCoacheePage() {
  const { addCoachee } = useContext(DataContext);
  const router = useRouter();

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [goals, setGoals] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const goalsList = goals.split(',').map(s => s.trim()).filter(Boolean);
    if (!name || goalsList.length === 0) return;
    addCoachee({ name, bio, imageUrl: imageUrl || '/public/next.svg', goals: goalsList });
    router.push('/coachees');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Add Coachee</h1>
      <form onSubmit={onSubmit} className="space-y-4" style={{ display: 'grid', gap: '0.75rem', maxWidth: 600 }}>
        <label>
          <div>Name</div>
          <input value={name} onChange={(e) => setName(e.target.value)} required className="border p-2 w-full" />
        </label>
        <label>
          <div>Bio</div>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="border p-2 w-full" />
        </label>
        <label>
          <div>Image URL</div>
          <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="border p-2 w-full" />
        </label>
        <label>
          <div>Goals (comma separated)</div>
          <input value={goals} onChange={(e) => setGoals(e.target.value)} required className="border p-2 w-full" />
        </label>
        <div>
          <button type="submit" className="border px-4 py-2">Save</button>
        </div>
      </form>
    </div>
  );
}
