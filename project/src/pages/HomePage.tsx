import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const galleryItems = [
    {
      id: 1,
      title: 'Ethereal Dreams',
      category: 'Abstract',
      image: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Ocean Whispers',
      category: 'Landscape',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Crimson Sunset',
      category: 'Impressionist',
      image: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "The vibrant energy and emotion in every brushstroke is simply captivating. This artist's work has transformed my living space completely.",
      author: "Emma Richardson",
      role: "Art Collector",
    },
    {
      id: 2,
      text: "I commissioned a piece for our corporate headquarters and the result exceeded all expectations. Truly a masterpiece that inspires our team daily.",
      author: "Michael Chen",
      role: "CEO, Innovate Design",
    },
    {
      id: 3,
      text: "As a gallery curator, I've worked with many artists, but few possess this level of technical skill combined with raw emotional expression.",
      author: "Sophia Martinez",
      role: "Gallery Director",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32 z-10">
          <motion.div
            className="max-w-3xl"
            variants={itemVariants}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text leading-tight">
              Where Color Meets Emotion
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-2xl">
              Discover the vibrant world of abstract expressionism through an immersive journey of color, texture, and emotional depth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/gallery"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-medium py-3 px-8 rounded-full inline-flex items-center group transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore Gallery</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
              >
                About the Artist
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated Paint Element */}
        <div className="absolute top-0 right-0 bottom-0 w-full md:w-1/2 opacity-20 md:opacity-30 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <div className="absolute top-[10%] left-[60%] w-[40vw] h-[40vw] rounded-full bg-primary-light opacity-30 filter blur-[80px]"></div>
            <div className="absolute top-[40%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-secondary-light opacity-30 filter blur-[60px]"></div>
            <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-accent-light opacity-20 filter blur-[70px]"></div>
          </motion.div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Featured Artworks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A curated selection of my most celebrated pieces that showcase my unique style and artistic vision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 gallery-item"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  rotateZ: index % 2 === 0 ? 1 : -1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                    <p className="text-white/80 mb-4">{item.category}</p>
                    <Link
                      to="/gallery"
                      className="inline-flex items-center text-white font-medium"
                    >
                      <span>View Artwork</span>
                      <ExternalLink size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <Link
              to="/gallery"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              <span>View All Artworks</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="flex-1 order-2 md:order-1"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold mb-6">My Artistic Vision</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I believe that art is a powerful medium for emotional expression and connection. Each canvas becomes a window into the soul, a visual poetry that speaks without words but resonates deeply with the viewer.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My work explores the intersection of color, movement, and emotional depth. Through layers of vibrant pigments and intuitive brushwork, I seek to create immersive experiences that transcend the physical constraints of the canvas.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                <span>Read Full Artist Statement</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex-1 order-1 md:order-2"
              variants={itemVariants}
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.8 }
              }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Artist in Studio" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#F59E0B" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium">Featured in 12 exhibitions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/70">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear what collectors, galleries, and art enthusiasts have to say about my work.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="inline-block text-accent" fill="#F59E0B" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-10 opacity-90">
              Whether you're looking to purchase an existing piece or commission a custom artwork, I'd love to collaborate with you.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-accent hover:text-white font-medium py-3 px-10 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105"
            >
              <span>Get in Touch</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;