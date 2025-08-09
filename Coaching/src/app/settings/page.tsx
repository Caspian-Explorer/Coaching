"use client";

import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const SettingsPage: React.FC = () => {
  const { theme, toggleTheme, font, setFont, setTheme } = useContext(ThemeContext);

  // Local staged settings to require explicit Save
  const [draftTheme, setDraftTheme] = useState(theme);
  const [draftFont, setDraftFont] = useState(font);
  const [dirty, setDirty] = useState(false);

  // Sync drafts when context changes externally
  useEffect(() => { setDraftTheme(theme); }, [theme]);
  useEffect(() => { setDraftFont(font); }, [font]);
  useEffect(() => { setDirty(draftTheme !== theme || draftFont !== font); }, [draftTheme, draftFont, theme, font]);

  const onSave = () => {
    setTheme(draftTheme);
    setFont(draftFont);
  };

  const onCancel = () => {
    setDraftTheme(theme);
    setDraftFont(font);
  };

  return (
    <div className="settings-page">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="space-y-4">
        <div className="row" style={{ gap: 16, alignItems: 'center' }}>
          <label htmlFor="theme-select">Theme</label>
          <select id="theme-select" value={draftTheme} onChange={(e) => setDraftTheme(e.target.value as 'light' | 'dark')}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <button onClick={toggleTheme} className="px-3 py-2 border rounded">
            Toggle
          </button>
        </div>

        <div className="row" style={{ gap: 16, alignItems: 'center' }}>
          <label htmlFor="font-select">App font</label>
          <select
            id="font-select"
            value={draftFont}
            onChange={(e) => setDraftFont(e.target.value as any)}
          >
            <option value="font-system">System</option>
            <option value="font-geist-sans">Geist Sans</option>
            <option value="font-geist-mono">Geist Mono</option>
            <option value="font-inter">Inter (Google)</option>
            <option value="font-roboto">Roboto (Google)</option>
            <option value="font-open-sans">Open Sans (Google)</option>
            <option value="font-poppins">Poppins (Google)</option>
          </select>
        </div>

        <div className="row" style={{ gap: 12 }}>
          <button onClick={onSave} disabled={!dirty} className="px-4 py-2 border rounded disabled:opacity-50">Save</button>
          <button onClick={onCancel} disabled={!dirty} className="px-4 py-2 border rounded disabled:opacity-50">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
