"use client";

import { useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeUpdater: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Remove previous theme classes
    document.body.classList.remove('light', 'dark');
    // Add current theme class
    document.body.classList.add(theme);
  }, [theme]);

  return null;
};

export default ThemeUpdater;
