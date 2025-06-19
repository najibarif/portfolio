import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CheckCircle2, XCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setFormStatus('submitting');
    
    // This would normally send to a real API endpoint
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', data);
      setFormStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border-2 border-primary rounded-md p-6 bg-background-light relative">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-primary"></div>
        <div className="absolute top-0 right-0 w-3 h-3 bg-secondary"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-accent"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary"></div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-xs mb-2 text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              NAME<span className="text-primary">_</span>
            </label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full bg-background border-2 border-primary/50 focus:border-primary px-3 py-2 text-white outline-none transition-colors duration-300"
              placeholder="John Doe"
            />
            {errors.name && (
              <span className="text-error text-xs mt-1 block">
                {errors.name.message}
              </span>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-xs mb-2 text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              EMAIL<span className="text-secondary">_</span>
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full bg-background border-2 border-primary/50 focus:border-secondary px-3 py-2 text-white outline-none transition-colors duration-300"
              placeholder="john@example.com"
            />
            {errors.email && (
              <span className="text-error text-xs mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-xs mb-2 text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              MESSAGE<span className="text-accent">_</span>
            </label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              rows={4}
              className="w-full bg-background border-2 border-primary/50 focus:border-accent px-3 py-2 text-white outline-none transition-colors duration-300"
              placeholder="Your message here..."
            />
            {errors.message && (
              <span className="text-error text-xs mt-1 block">
                {errors.message.message}
              </span>
            )}
          </div>
          
          <motion.button
            type="submit"
            disabled={formStatus === 'submitting'}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cyber-button w-full text-sm py-3 flex justify-center items-center"
            style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
          >
            {formStatus === 'submitting' ? (
              <span className="inline-block animate-pulse">SENDING...</span>
            ) : (
              <span>SEND MESSAGE</span>
            )}
          </motion.button>
        </form>
        
        {/* Success/Error Messages */}
        {formStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 border border-success bg-success/10 text-success flex items-center"
          >
            <CheckCircle2 size={16} className="mr-2" />
            <span>Message sent successfully!</span>
          </motion.div>
        )}
        
        {formStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 border border-error bg-error/10 text-error flex items-center"
          >
            <XCircle size={16} className="mr-2" />
            <span>Failed to send message. Please try again.</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;