import React from 'react';
import { User, Calendar, FileText, Users, Activity, TrendingUp } from 'lucide-react';
import { User as UserType } from '../types';

interface DashboardProps {
  user: UserType;
}

export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const getDashboardContent = () => {
    switch (user.role) {
      case 'admin':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Total Patients</p>
                  <p className="text-2xl font-bold text-blue-900">1,247</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Appointments Today</p>
                  <p className="text-2xl font-bold text-green-900">42</p>
                </div>
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Prescriptions</p>
                  <p className="text-2xl font-bold text-purple-900">89</p>
                </div>
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 text-sm font-medium">Revenue</p>
                  <p className="text-2xl font-bold text-orange-900">₹2.4L</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>
        );
      
      case 'doctor':
        return (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Today's Appointments</p>
                  <p className="text-2xl font-bold text-blue-900">12</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Prescriptions Written</p>
                  <p className="text-2xl font-bold text-green-900">8</p>
                </div>
                <FileText className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Patient Reviews</p>
                  <p className="text-2xl font-bold text-purple-900">4.8/5</p>
                </div>
                <Activity className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>
        );
      
      case 'patient':
        return (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Upcoming Appointments</p>
                  <p className="text-2xl font-bold text-blue-900">2</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Active Prescriptions</p>
                  <p className="text-2xl font-bold text-green-900">3</p>
                </div>
                <FileText className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="text-gray-600 mt-2">Here's your {user.role} dashboard overview</p>
        </div>
        
        {getDashboardContent()}
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Appointment scheduled</p>
                <p className="text-sm text-gray-600">Dr. Rajesh Kumar - Cardiology</p>
              </div>
              <span className="text-sm text-gray-500 ml-auto">2 hours ago</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-green-100 p-2 rounded-full">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Prescription updated</p>
                <p className="text-sm text-gray-600">Medicine chart modified</p>
              </div>
              <span className="text-sm text-gray-500 ml-auto">5 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};