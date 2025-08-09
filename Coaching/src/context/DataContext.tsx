"use client";

import React, { createContext, useEffect, useMemo, useState } from "react";
import { Coach, Coachee } from "../models/types";
import { mockCoaches as seedCoaches, mockCoachees as seedCoachees } from "../data/mock";

export interface DataContextValue {
  coaches: Coach[];
  coachees: Coachee[];
  addCoach: (coach: Omit<Coach, "id">) => Coach;
  addCoachee: (coachee: Omit<Coachee, "id">) => Coachee;
}

export const DataContext = createContext<DataContextValue>({
  coaches: [],
  coachees: [],
  addCoach: () => {
    throw new Error("DataContext not initialized");
  },
  addCoachee: () => {
    throw new Error("DataContext not initialized");
  },
});

const LS_KEY = "coaching:data:v1";

interface PersistedData {
  coaches: Coach[];
  coachees: Coachee[];
}

export const DataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [coachees, setCoachees] = useState<Coachee[]>([]);

  // Load from localStorage once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as PersistedData;
        setCoaches(parsed.coaches ?? []);
        setCoachees(parsed.coachees ?? []);
      } else {
        // Seed initial data if none
        setCoaches(seedCoaches);
        setCoachees(seedCoachees);
      }
    } catch (e) {
      // Fallback to seeds on error
      setCoaches(seedCoaches);
      setCoachees(seedCoachees);
    }
  }, []);

  // Persist when data changes
  useEffect(() => {
    const data: PersistedData = { coaches, coachees };
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(data));
    } catch {}
  }, [coaches, coachees]);

  const addCoach: DataContextValue["addCoach"] = (coach) => {
    const newCoach: Coach = { id: String(Date.now()), ...coach };
    setCoaches((prev) => [newCoach, ...prev]);
    return newCoach;
  };

  const addCoachee: DataContextValue["addCoachee"] = (coachee) => {
    const newCoachee: Coachee = { id: String(Date.now()), ...coachee };
    setCoachees((prev) => [newCoachee, ...prev]);
    return newCoachee;
  };

  const value = useMemo<DataContextValue>(() => ({ coaches, coachees, addCoach, addCoachee }), [coaches, coachees]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
