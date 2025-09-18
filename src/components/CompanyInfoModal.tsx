import React from 'react';
import { X, Building, MapPin, Phone, FileText, Users, Award, Target, Heart } from 'lucide-react';

interface CompanyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyInfoModal: React.FC<CompanyInfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">About Synergymindz Ed-Tech</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Company Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Company Overview</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Synergymindz Ed-Tech Private Limited is a pioneering healthcare technology company established in 2023, 
              dedicated to revolutionizing medical practice management through innovative digital solutions. We specialize 
              in creating comprehensive platforms for healthcare professionals to manage prescriptions, conduct daily checkups, 
              and maintain systematic medicine charts.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900">Company Registration</h4>
                <p className="text-sm text-gray-600">CIN: U85500UP2023PTC185570</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <MapPin className="h-6 w-6 text-green-600 mb-2" />
                <h4 className="font-semibold text-gray-900">Headquarters</h4>
                <p className="text-sm text-gray-600">Nirala Nagar, Khojanpur<br />Faizabad Ayodhya, UP</p>
              </div>
            </div>
          </div>

          {/* Our Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To transform healthcare delivery in India by providing cutting-edge digital solutions that enhance 
                patient care, streamline medical workflows, and ensure accurate medication management for healthcare 
                professionals across all specialties.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become India's leading healthcare technology platform, empowering medical professionals with 
                intelligent tools that improve patient outcomes, reduce administrative burden, and create a more 
                efficient healthcare ecosystem.
              </p>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <FileText className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Digital Prescriptions</h4>
                <p className="text-sm text-gray-600">
                  Advanced prescription management system with drug interaction alerts, dosage calculations, 
                  and direct pharmacy integration for seamless medication dispensing.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Users className="h-8 w-8 text-green-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Daily Checkup Management</h4>
                <p className="text-sm text-gray-600">
                  Comprehensive patient monitoring system with automated scheduling, vital signs tracking, 
                  and progress reporting for continuous healthcare management.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Award className="h-8 w-8 text-purple-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Medicine Chart Systems</h4>
                <p className="text-sm text-gray-600">
                  Intelligent medication charting with automated dosage calculations, timing reminders, 
                  and compliance monitoring for optimal patient care.
                </p>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🔒 Security & Privacy</h4>
                <p className="text-sm text-gray-600 mb-4">
                  We prioritize patient data security with end-to-end encryption and HIPAA-compliant systems.
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-2">🚀 Innovation</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Continuously developing cutting-edge solutions to address evolving healthcare challenges.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🤝 Reliability</h4>
                <p className="text-sm text-gray-600 mb-4">
                  99.9% uptime guarantee with 24/7 technical support for uninterrupted healthcare services.
                </p>
                
                <h4 className="font-semibold text-gray-900 mb-2">💡 User-Centric Design</h4>
                <p className="text-sm text-gray-600">
                  Intuitive interfaces designed specifically for healthcare professionals and patients.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Contact Number</p>
                  <p className="text-sm text-gray-600">+91-99-18466669</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-sm text-gray-600">Nirala Nagar, Khojanpur<br />Faizabad Ayodhya, UP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};