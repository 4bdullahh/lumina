import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer 
      className="bg-gradient-to-r from-primary-dark to-primary bg-opacity-90 text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
              <Palette size={24} />
              <span>Lumina Art</span>
            </Link>
            <p className="text-white/80 max-w-xs">
              Creating vibrant and emotionally resonant works that transcend the canvas and speak to the soul.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/80 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="text-white/80">
              Interested in commissioning a piece or have questions about my work?
            </p>
            <a 
              href="mailto:contact@luminaart.com" 
              className="inline-flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-md hover:bg-accent hover:text-white transition-colors"
            >
              <Mail size={18} />
              <span>Email Me</span>
            </a>
            <p className="text-white/80 pt-4">
              Studio visits available by appointment only.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Lumina Art. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;