import React from 'react';
import { Phone, Clock, Award } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group overflow-hidden">
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {doctor.experience}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
        <p className="text-blue-600 font-semibold mb-3">{doctor.specialty}</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">{doctor.contact}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{doctor.availability}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Award className="h-4 w-4 mr-2 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Qualifications</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {doctor.qualifications.map((qual, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
              >
                {qual}
              </span>
            ))}
          </div>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Book Appointment
        </button>
      </div>
    </div>
  );
};