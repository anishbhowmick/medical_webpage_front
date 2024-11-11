export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix: string;
}

export type UserRole = 'doctor' | 'patient';

export interface AuthFormData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  role: UserRole;
}