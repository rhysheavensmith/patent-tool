'use client'

import { useState, FormEvent } from 'react';
import { FaQuoteLeft, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

interface ResultDisplayProps {
  response: string;
  // Add a prop for restarting if needed
  // onRestart?: () => void;
}

function ResultDisplay({ response }: ResultDisplayProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, result: response }), // Include the response text
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your request has been sent.');
      setFormData({ name: '', email: '', message: '' }); // Clear form

    } catch (error: unknown) {
      console.error(error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitStatus('idle');
  };

  return (
    <div className="bg-white shadow-lg p-10 rounded-xl max-w-[90%] relative">
      <div className="relative">
        <span className="absolute text-6xl text-primary-light font-serif opacity-20 -top-4 -left-4"><FaQuoteLeft /></span>
      </div>
      <p className="font-secondary text-slate-600 my-4 text-4xl max-sm:text-lg max-sm:leading-[1.5] leading-loose sm:max-w-[70%] relative z-10">
        {response}
      </p>

      <h2 className="font-semibold text-primary-light mb-4 max-sm:text-center">Speak to our Team:</h2> 

      {submitStatus === 'success' && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-green-100 text-green-700 px-6 py-4 rounded shadow-lg flex items-center gap-3 absolute bottom-10 left-10"
            onClick={(e) => e.stopPropagation()}
          >
            <FaCheckCircle className="text-green-700 text-xl" />
            <strong className="font-bold">Success! {submitMessage}</strong>
          </div>
        </div>
      )}
      {submitStatus === 'error' && (
         <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-red-100 text-red-700 px-6 py-4 rounded shadow-lg flex items-center gap-3 absolute bottom-10 left-10"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExclamationTriangle className="text-red-700 text-xl" />
            <strong className="font-bold">{submitMessage}</strong>
          </div>
        </div>
      )}

      
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-secondary font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="font-secondary w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-400"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-secondary font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="font-secondary w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-secondary font-medium text-gray-700 mb-1 ">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="font-secondary w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-400"
              placeholder="How can we help you?"></textarea>
          </div>
          <div className="flex justify-end max-sm:justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-secondary bg-secondary hover:bg-primary text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed max-sm:w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
     

      {/* Optional: Add a button to restart the questionnaire */}
      {/*
      {onRestart && (
        <div className="mt-6 text-center">
          <button
            onClick={onRestart}
            className="text-primary hover:underline"
          >
            Start Over
          </button>
        </div>
      )}
      */}
    </div>
  );
}

export default ResultDisplay; 