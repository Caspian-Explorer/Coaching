"use client";

import React, { createContext, useState, ReactNode, useEffect } from 'react';

type Theme = 'light' | 'dark';
export type AppFont = 'font-system' | 'font-geist-sans' | 'font-geist-mono' | 'font-inter' | 'font-roboto' | 'font-open-sans' | 'font-poppins';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
  font: AppFont;
  setFont: (font: AppFont) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
  font: 'font-system',
  setFont: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

const THEME_KEY = 'theme';
const FONT_KEY = 'font';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');
  const [font, setFontState] = useState<AppFont>('font-system');

  // On mount, hydrate from localStorage or system preference
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
      const savedFont = localStorage.getItem(FONT_KEY) as AppFont | null;

      if (savedTheme) {
        setThemeState(savedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setThemeState(prefersDark ? 'dark' : 'light');
      }

      if (savedFont) {
        setFontState(savedFont);
      } else {
        setFontState('font-geist-sans');
      }
    } catch {}
  }, []);

  // Apply theme and font classes to <body> and persist
  useEffect(() => {
    const body = document.body;
    // Theme classes
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }, [theme]);

  useEffect(() => {
    const body = document.body;
    // Font classes
    body.classList.remove('font-system', 'font-geist-sans', 'font-geist-mono', 'font-inter', 'font-roboto', 'font-open-sans', 'font-poppins');
    body.classList.add(font);
    try { localStorage.setItem(FONT_KEY, font); } catch {}
  }, [font]);

  const toggleTheme = () => setThemeState((t) => (t === 'light' ? 'dark' : 'light'));
  const setTheme = (t: Theme) => setThemeState(t);
  const setFont = (f: AppFont) => setFontState(f);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, font, setFont }}>
      {children}
    </ThemeContext.Provider>
  );
};
