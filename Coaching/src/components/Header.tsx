"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();
  const [q, setQ] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const term = q.trim();
    if (!term) return;
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <header className="header">
      <nav className="nav" style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
        <ul className="nav-list" style={{ display: 'flex', gap: '1rem', alignItems: 'center', margin: 0, padding: 0, listStyle: 'none' }}>
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/coaches">Coaches</Link>
          </li>
          <li className="nav-item">
            <Link href="/coachees">Coachees</Link>
          </li>
          <li className="nav-item">
            <Link href="/settings">Settings</Link>
          </li>
          <li className="nav-item">
            <Link href="/coaches/new">+ Coach</Link>
          </li>
          <li className="nav-item">
            <Link href="/coachees/new">+ Coachee</Link>
          </li>
        </ul>
        <form onSubmit={onSubmit} role="search" aria-label="Site search" style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search coaches & coachees"
            aria-label="Search"
            className="search-input"
            style={{ padding: '.4rem .6rem', minWidth: '16rem', border: '1px solid currentColor', borderRadius: 4, background: 'transparent' }}
          />
          <button type="submit" className="search-button" style={{ padding: '.4rem .8rem', border: '1px solid currentColor', borderRadius: 4, background: 'transparent', cursor: 'pointer' }}>
            Search
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
