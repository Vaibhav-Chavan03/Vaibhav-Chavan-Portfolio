'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, buttonHover } from '@/lib/animations';
import { Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

// API endpoint - change this in production
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactFormWithAPI() {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  // Status: idle, loading, success, error
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  // Error messages
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState('');

  // Validate form data
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    setErrorMessage('');

    // Validate
    if (!validateForm()) {
      return;
    }

    // Set loading state
    setStatus('loading');

    try {
      // Send to backend API
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        // Success!
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset to idle after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        // API returned error
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      // Network or other error
      setStatus('error');
      setErrorMessage('Failed to send message. Please check your connection and try again.');
      console.error('Contact form error:', error);
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <motion.div variants={fadeInUp}>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal-900 mb-2">
            Your Name
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-500">
              <User size={20} strokeWidth={1.5} />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 rounded-soft border ${
                errors.name 
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-warmGray-500/20 focus:border-sage-500 focus:ring-sage-500/20'
              } focus:ring-2 outline-none transition-all bg-white`}
              placeholder="Dr. Sarah Chen"
              disabled={status === 'loading'}
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.name}
            </p>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div variants={fadeInUp}>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal-900 mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sage-500">
              <Mail size={20} strokeWidth={1.5} />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 rounded-soft border ${
                errors.email 
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-warmGray-500/20 focus:border-sage-500 focus:ring-sage-500/20'
              } focus:ring-2 outline-none transition-all bg-white`}
              placeholder="sarah@example.com"
              disabled={status === 'loading'}
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.email}
            </p>
          )}
        </motion.div>

        {/* Message Field */}
        <motion.div variants={fadeInUp}>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal-900 mb-2">
            Your Message
          </label>
          <div className="relative">
            <div className="absolute left-4 top-4 text-sage-500">
              <MessageSquare size={20} strokeWidth={1.5} />
            </div>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 rounded-soft border ${
                errors.message 
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-warmGray-500/20 focus:border-sage-500 focus:ring-sage-500/20'
              } focus:ring-2 outline-none transition-all resize-none bg-white`}
              placeholder="Tell us about your practice and what you're looking for in a website..."
              disabled={status === 'loading'}
            />
          </div>
          {errors.message && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.message}
            </p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={fadeInUp}>
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            variants={buttonHover}
            initial="rest"
            whileHover={status !== 'loading' ? 'hover' : 'rest'}
            whileTap={status !== 'loading' ? 'tap' : 'rest'}
            className={`w-full px-8 py-4 rounded-soft font-medium transition-all shadow-soft hover:shadow-calm
              ${status === 'loading' 
                ? 'bg-warmGray-500 cursor-not-allowed' 
                : 'bg-sage-500 hover:bg-sage-600'
              } text-white`}
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    fill="none"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending your message...
              </span>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.div>

        {/* Success Message */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-sage-500/10 border border-sage-500/20 rounded-soft"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sage-700 mb-1">
                  Thank you for reaching out!
                </p>
                <p className="text-sm text-sage-600">
                  We've received your message and will respond within 24 hours. 
                  Check your email for a confirmation.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-200 rounded-soft"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-red-700 mb-1">
                  Unable to send message
                </p>
                <p className="text-sm text-red-600">
                  {errorMessage}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Privacy Note */}
        <motion.div variants={fadeInUp} className="text-center">
          <p className="text-xs text-warmGray-500">
            We respect your privacy. Your information is used only to respond to your inquiry.
          </p>
        </motion.div>
      </form>
    </motion.div>
  );
}
