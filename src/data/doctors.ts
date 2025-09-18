import { Doctor } from '../types';

export const doctors: Doctor[] = [
  // Cardiology
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    specialty: 'Cardiology',
    experience: '15 years',
    contact: '+91-98765-43210',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MBBS', 'MD Cardiology', 'DM Interventional Cardiology'],
    availability: 'Mon-Fri: 9:00 AM - 5:00 PM'
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    specialty: 'Cardiology',
    experience: '12 years',
    contact: '+91-98765-43211',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MBBS', 'MD Cardiology', 'Fellowship in Echocardiography'],
    availability: 'Mon-Sat: 10:00 AM - 6:00 PM'
  },
  
  // Dentistry
  {
    id: '3',
    name: 'Dr. Amit Verma',
    specialty: 'Dentistry',
    experience: '10 years',
    contact: '+91-98765-43212',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['BDS', 'MDS Oral Surgery', 'Implantology Certification'],
    availability: 'Mon-Sat: 9:00 AM - 7:00 PM'
  },
  {
    id: '4',
    name: 'Dr. Sneha Gupta',
    specialty: 'Dentistry',
    experience: '8 years',
    contact: '+91-98765-43213',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['BDS', 'MDS Orthodontics', 'Invisalign Certified'],
    availability: 'Tue-Sun: 10:00 AM - 6:00 PM'
  },
  
  // Bones (Orthopedics)
  {
    id: '5',
    name: 'Dr. Vikash Singh',
    specialty: 'Orthopedics',
    experience: '18 years',
    contact: '+91-98765-43214',
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MBBS', 'MS Orthopedics', 'Fellowship in Joint Replacement'],
    availability: 'Mon-Fri: 8:00 AM - 4:00 PM'
  },
  {
    id: '6',
    name: 'Dr. Kavita Patel',
    specialty: 'Orthopedics',
    experience: '14 years',
    contact: '+91-98765-43215',
    image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MBBS', 'MS Orthopedics', 'Sports Medicine Certification'],
    availability: 'Mon-Sat: 9:00 AM - 5:00 PM'
  }
];