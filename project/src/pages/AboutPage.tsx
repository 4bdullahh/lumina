import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Calendar, Brush, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const exhibitions = [
    { 
      year: '2023', 
      title: 'Chromatic Visions', 
      location: 'Modern Art Gallery, New York',
      description: 'Solo exhibition featuring a series of large-scale abstract works exploring the emotional resonance of color.'
    },
    { 
      year: '2022', 
      title: 'Impressions & Expressions', 
      location: 'Contemporary Art Center, Chicago',
      description: 'Group exhibition alongside five other emerging artists challenging traditional perspectives on contemporary painting.'
    },
    { 
      year: '2021', 
      title: 'Textural Landscapes', 
      location: 'International Art Fair, Miami',
      description: 'Featured artist showcasing innovative techniques in mixed media landscape painting.'
    },
    { 
      year: '2020', 
      title: 'New Perspectives', 
      location: 'Gallery 360, Los Angeles',
      description: 'Debut solo exhibition introducing my signature style to the West Coast art community.'
    },
  ];

  const awards = [
    { 
      year: '2023', 
      title: 'Excellence in Contemporary Art', 
      organization: 'National Arts Foundation',
    },
    { 
      year: '2022', 
      title: 'Rising Talent Award', 
      organization: 'International Painters Collective',
    },
    { 
      year: '2021', 
      title: 'Innovation in Mixed Media', 
      organization: 'Contemporary Art Society',
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
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="flex-1 order-2 md:order-1" variants={itemVariants}>
              <h1 className="text-5xl font-bold mb-6">About the Artist</h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                I'm a contemporary abstract artist dedicated to exploring the emotional landscapes that exist beyond the realm of literal representation. Through vibrant colors, dynamic textures, and intuitive brushwork, I create works that connect with viewers on a visceral level.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                My artistic journey began over 15 years ago, evolving from traditional landscapes to the expressive abstract style I'm known for today. Each painting is an exploration of the intersection between color theory, emotional psychology, and the physical properties of paint itself.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <Link
                  to="/gallery"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  <span>Explore My Work</span>
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-medium py-3 px-8 rounded-full transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1 order-1 md:order-2 mb-8 md:mb-0"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/20 filter blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-secondary/20 filter blur-xl"></div>
                <img
                  src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Artist Portrait"
                  className="w-full h-auto rounded-lg shadow-xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
            <h2 className="text-3xl font-bold mb-6">Artist Statement</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                My work explores the tension between control and surrender, structure and chaos, the planned and the spontaneous. I begin each piece with an emotional intention, but I remain open to the conversation that develops between myself and the canvas.
              </p>
              <p>
                Color is the primary language of my expression. I'm fascinated by how different hues interact with one another and how they can trigger distinct emotional responses. My palette tends toward the vibrant and bold, though recent work has investigated more subtle tonal relationships.
              </p>
              <p>
                Texture plays an equally important role in my process. I build layers of paint, medium, and occasionally mixed materials to create surfaces that invite both visual and tactile exploration. These textural elements serve as a metaphor for the complexity of human experience – the way our lives are composed of countless overlapping moments, memories, and emotions.
              </p>
              <p>
                Ultimately, I create art to forge connections. When a viewer resonates with one of my pieces, when they feel something authentic while engaging with my work, that's when I know I've succeeded. Art, at its most powerful, reminds us that we're not alone in our emotional experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exhibition History */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Exhibition History</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Selected exhibitions featuring my work from around the world.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="space-y-12">
              {exhibitions.map((exhibition, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col md:flex-row gap-6 relative pl-0 md:pl-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline for desktop */}
                  <div className="hidden md:block absolute left-0 top-0 h-full w-0.5 bg-gray-200">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <Calendar size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-32 flex items-start">
                    <div className="md:hidden mr-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Calendar size={16} className="text-white" />
                      </div>
                    </div>
                    <span className="text-lg font-bold text-primary md:text-right block">
                      {exhibition.year}
                    </span>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-lg shadow-md p-6 md:ml-6">
                    <h3 className="text-xl font-bold">{exhibition.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin size={16} className="mr-1" />
                      <span>{exhibition.location}</span>
                    </div>
                    <p className="text-gray-700">{exhibition.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards and Press */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Honors and acknowledgements from the art community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Award size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center">{award.title}</h3>
                <div className="text-center text-gray-600 mb-2">{award.organization}</div>
                <div className="text-center text-sm font-medium text-primary">{award.year}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education and Skills */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Education & Techniques</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My artistic background and specialized skills.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <ul className="space-y-6">
                <li className="border-l-2 border-primary pl-4">
                  <h4 className="font-bold text-lg">Master of Fine Arts</h4>
                  <p className="text-gray-600">Rhode Island School of Design, 2017</p>
                  <p className="text-gray-700 mt-2">Specialized in Experimental Painting Techniques</p>
                </li>
                <li className="border-l-2 border-gray-300 pl-4">
                  <h4 className="font-bold text-lg">Bachelor of Arts</h4>
                  <p className="text-gray-600">School of the Art Institute of Chicago, 2015</p>
                  <p className="text-gray-700 mt-2">Double major in Studio Art and Art History</p>
                </li>
                <li className="border-l-2 border-gray-300 pl-4">
                  <h4 className="font-bold text-lg">International Studies</h4>
                  <p className="text-gray-600">Florence Academy of Art, Italy, 2014</p>
                  <p className="text-gray-700 mt-2">Intensive study of Renaissance techniques and color theory</p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                  <Brush size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Techniques</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Mixed Media Layering</h4>
                  <p className="text-gray-700">
                    My signature approach involves building intricate layers of acrylic, oils, and various mediums to create depth and visual complexity.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Color Theory Applications</h4>
                  <p className="text-gray-700">
                    I employ advanced color theory principles to create emotional resonance and visual harmony in my compositions.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Textural Development</h4>
                  <p className="text-gray-700">
                    Using unconventional tools and techniques to create unique surface textures that invite tactile engagement.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Resin Finishing</h4>
                  <p className="text-gray-700">
                    Specialized application of art-grade resin to enhance color vibrancy and create dimensional effects.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl mb-10 opacity-90">
              Whether you're interested in acquiring artwork, commissioning a piece, or discussing potential exhibitions, I'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-accent hover:text-white font-medium py-3 px-10 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105"
            >
              <span>Contact Me</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;