export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  contact: string;
  image: string;
  qualifications: string[];
  availability: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'patient' | 'doctor' | 'admin';
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'patient' | 'doctor';
  phone?: string;
  specialty?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}