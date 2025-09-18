import { User, LoginCredentials } from '../types';
import { SignUpData } from '../types';

// Mock user database - In production, this would be in a real database
let users: User[] = [
  {
    id: '1',
    email: 'admin@synergymindz.com',
    password: 'admin123', // In production, this would be hashed
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    email: 'doctor@synergymindz.com',
    password: 'doctor123',
    name: 'Dr. John Doe',
    role: 'doctor',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    email: 'patient@synergymindz.com',
    password: 'patient123',
    name: 'Patient User',
    role: 'patient',
    createdAt: new Date().toISOString()
  }
];

export const authenticateUser = async (credentials: LoginCredentials): Promise<User | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = users.find(u => 
    u.email === credentials.email && u.password === credentials.password
  );
  
  return user || null;
};

export const registerUser = async (signUpData: SignUpData): Promise<User | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check if user already exists
  const existingUser = users.find(u => u.email === signUpData.email);
  if (existingUser) {
    throw new Error('User with this email already exists');
  }
  
  // Create new user
  const newUser: User = {
    id: (users.length + 1).toString(),
    email: signUpData.email,
    password: signUpData.password, // In production, this would be hashed
    name: signUpData.name,
    role: signUpData.role,
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  return newUser;
};

export const generateToken = (user: User): string => {
  // In production, use proper JWT
  return btoa(JSON.stringify({ id: user.id, email: user.email, role: user.role }));
};

export const validateToken = (token: string): User | null => {
  try {
    const decoded = JSON.parse(atob(token));
    const user = users.find(u => u.id === decoded.id);
    return user || null;
  } catch {
    return null;
  }
};

export const logout = (): void => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user_data');
};