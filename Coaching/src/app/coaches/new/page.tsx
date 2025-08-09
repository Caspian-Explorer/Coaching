"use client";

import React, { useState, useContext } from 'react';
import { DataContext } from '../../../context/DataContext';
import { useRouter } from 'next/navigation';

export default function NewCoachPage() {
  const { addCoach } = useContext(DataContext);
  const router = useRouter();

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [expertise, setExpertise] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const skills = expertise.split(',').map(s => s.trim()).filter(Boolean);
    if (!name || skills.length === 0) return;
    addCoach({ name, bio, imageUrl: imageUrl || '/public/file.svg', expertise: skills });
    router.push('/coaches');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Add Coach</h1>
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
          <div>Expertise (comma separated)</div>
          <input value={expertise} onChange={(e) => setExpertise(e.target.value)} required className="border p-2 w-full" />
        </label>
        <div>
          <button type="submit" className="border px-4 py-2">Save</button>
        </div>
      </form>
    </div>
  );
}
