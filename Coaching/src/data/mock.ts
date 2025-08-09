import { Coach, Coachee } from "../models/types";

export const mockCoaches: Coach[] = [
  {
    id: '1',
    name: 'John Doe',
    expertise: ['Leadership', 'Communication'],
    bio: 'Experienced coach specializing in leadership and communication.',
    imageUrl: '/file.svg',
  },
  {
    id: '2',
    name: 'Jane Smith',
    expertise: ['Time Management', 'Productivity'],
    bio: 'Helping individuals achieve their goals through effective time management.',
    imageUrl: '/globe.svg',
  },
];

export const mockCoachees: Coachee[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    goals: ['Improve communication skills', 'Build confidence'],
    bio: 'Aspiring leader looking to enhance communication and confidence.',
    imageUrl: '/next.svg',
  },
  {
    id: '2',
    name: 'Bob Brown',
    goals: ['Increase productivity', 'Learn time management'],
    bio: 'Focused on achieving personal and professional growth.',
    imageUrl: '/vercel.svg',
  },
];
