import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'general',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
        interest: 'general',
      });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-primary" />,
      title: 'Email',
      details: 'contact@luminaart.com',
      action: 'mailto:contact@luminaart.com',
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: 'Studio Location',
      details: 'Artistic Quarter, New York, NY',
      action: '#',
    },
    {
      icon: <Clock size={24} className="text-primary" />,
      title: 'Studio Hours',
      details: 'Tues-Sat: 10am - 6pm (By Appointment)',
      action: '#',
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-700">
              I'd love to hear from you, whether you're interested in acquiring artwork, commissioning a piece, or just want to connect about art and creativity.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="flex-1">
              <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full filter blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/5 rounded-full filter blur-2xl"></div>
                
                <h2 className="text-3xl font-bold mb-6 relative z-10">Send a Message</h2>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Send size={32} className="text-green-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                        I'm Interested In
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formState.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="purchase">Purchasing Artwork</option>
                        <option value="commission">Commission a Piece</option>
                        <option value="exhibition">Exhibition Opportunity</option>
                        <option value="collaboration">Collaboration</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Subject of your message"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tell me what you're looking for..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center transition-all ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:w-96">
              <div className="bg-gradient-to-b from-primary to-secondary text-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.action}
                      className="flex items-start hover:opacity-80 transition-opacity"
                    >
                      <div className="bg-white/10 p-3 rounded-lg mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-white/80">{item.details}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Connect on Social</h2>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="#"
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-all"
                  >
                    <Instagram size={24} />
                    <span className="mt-2 text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-all"
                  >
                    <Facebook size={24} />
                    <span className="mt-2 text-sm font-medium">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-all"
                  >
                    <Twitter size={24} />
                    <span className="mt-2 text-sm font-medium">Twitter</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about commissions, purchases, and working together.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">Do you accept commissions?</h3>
              <p className="text-gray-700">
                Yes, I regularly work on commissioned pieces. The process typically begins with a consultation where we discuss your vision, space, color preferences, and budget. I then create concept sketches before proceeding with the final artwork.
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">How long does a commission take?</h3>
              <p className="text-gray-700">
                The timeline varies depending on the size, complexity, and my current workload. Most commissions are completed within 4-8 weeks after approval of the concept. For large-scale or particularly complex works, the timeline may be longer.
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">Do you ship artwork internationally?</h3>
              <p className="text-gray-700">
                Yes, I work with professional art shipping services to deliver artwork safely worldwide. International shipping costs will be calculated based on size, destination, and insurance requirements.
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">Can I visit your studio?</h3>
              <p className="text-gray-700">
                Studio visits are available by appointment. These visits provide an opportunity to see works in progress, discuss potential commissions in person, and get a deeper understanding of my creative process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;