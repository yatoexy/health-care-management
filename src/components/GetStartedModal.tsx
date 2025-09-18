import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Users, FileText, Calendar, Shield } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUp: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose, onSignUp }) => {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'professional' | 'enterprise'>('professional');

  if (!isOpen) return null;

  const plans = {
    basic: {
      name: 'Basic Plan',
      price: '₹2,999',
      period: '/month',
      description: 'Perfect for small clinics and individual practitioners',
      features: [
        'Up to 100 patients',
        'Digital prescriptions',
        'Basic appointment scheduling',
        'Medicine chart management',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    professional: {
      name: 'Professional Plan',
      price: '₹5,999',
      period: '/month',
      description: 'Ideal for growing practices and multi-doctor clinics',
      features: [
        'Up to 500 patients',
        'Advanced prescription management',
        'Daily checkup scheduling',
        'Patient monitoring dashboard',
        'Drug interaction alerts',
        'Priority phone support',
        'Custom reporting',
        'Multi-user access'
      ],
      popular: true
    },
    enterprise: {
      name: 'Enterprise Plan',
      price: '₹12,999',
      period: '/month',
      description: 'Comprehensive solution for hospitals and large practices',
      features: [
        'Unlimited patients',
        'Full platform access',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 priority support',
        'Training & onboarding',
        'Custom branding'
      ],
      popular: false
    }
  };

  const handleGetStarted = () => {
    onClose();
    onSignUp();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Get Started with Synergymindz</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Introduction */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Healthcare Management Plan</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your medical practice with our comprehensive digital solutions. Select the plan that best fits your needs and start your journey towards efficient healthcare management.
            </p>
          </div>

          {/* Pricing Plans */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {Object.entries(plans).map(([key, plan]) => (
              <div
                key={key}
                className={`relative bg-white border-2 rounded-xl p-6 cursor-pointer transition-all ${
                  selectedPlan === key
                    ? 'border-blue-500 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                } ${plan.popular ? 'ring-2 ring-blue-500 ring-opacity-20' : ''}`}
                onClick={() => setSelectedPlan(key as any)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <div className={`w-4 h-4 rounded-full border-2 mx-auto ${
                    selectedPlan === key
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedPlan === key && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Overview */}
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">What You'll Get</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h5 className="font-semibold text-gray-900 mb-1">Digital Prescriptions</h5>
                <p className="text-xs text-gray-600">Create and manage prescriptions digitally</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h5 className="font-semibold text-gray-900 mb-1">Appointment Management</h5>
                <p className="text-xs text-gray-600">Schedule and track patient visits</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h5 className="font-semibold text-gray-900 mb-1">Patient Monitoring</h5>
                <p className="text-xs text-gray-600">Track patient health progress</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 p-3 rounded-lg w-fit mx-auto mb-3">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h5 className="font-semibold text-gray-900 mb-1">Secure & Compliant</h5>
                <p className="text-xs text-gray-600">HIPAA compliant data protection</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="text-sm text-gray-600 mt-3">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};