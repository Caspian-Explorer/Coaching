export interface Coach {
  id: string;
  name: string;
  expertise: string[];
  bio: string;
  imageUrl: string;
}

export interface Coachee {
  id: string;
  name: string;
  goals: string[];
  bio: string;
  imageUrl: string;
}