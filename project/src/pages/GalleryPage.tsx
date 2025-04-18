import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Palette, Search, Filter } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'abstract', name: 'Abstract' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'landscape', name: 'Landscapes' },
    { id: 'impressionist', name: 'Impressionist' },
    { id: 'modern', name: 'Modern' },
  ];

  const artworks = [
    {
      id: 1,
      title: 'Ethereal Dreams',
      category: 'abstract',
      year: 2023,
      dimensions: '36" x 48"',
      medium: 'Acrylic on Canvas',
      image: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Ocean Whispers',
      category: 'landscape',
      year: 2022,
      dimensions: '24" x 36"',
      medium: 'Oil on Canvas',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Crimson Sunset',
      category: 'impressionist',
      year: 2023,
      dimensions: '30" x 40"',
      medium: 'Mixed Media',
      image: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'Urban Rhythm',
      category: 'modern',
      year: 2021,
      dimensions: '48" x 60"',
      medium: 'Acrylic and Gold Leaf',
      image: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: 'Silent Gaze',
      category: 'portrait',
      year: 2022,
      dimensions: '20" x 24"',
      medium: 'Oil on Canvas',
      image: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      title: 'Floating Memories',
      category: 'abstract',
      year: 2020,
      dimensions: '36" x 36"',
      medium: 'Mixed Media',
      image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 7,
      title: 'Mountain Dream',
      category: 'landscape',
      year: 2023,
      dimensions: '30" x 48"',
      medium: 'Acrylic on Canvas',
      image: 'https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 8,
      title: 'Soul Window',
      category: 'portrait',
      year: 2021,
      dimensions: '24" x 30"',
      medium: 'Oil on Wood Panel',
      image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 9,
      title: 'Kaleidoscope',
      category: 'abstract',
      year: 2022,
      dimensions: '40" x 40"',
      medium: 'Acrylic and Resin',
      image: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = selectedCategory === 'all' || artwork.category === selectedCategory;
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         artwork.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.medium.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Artwork Gallery</h1>
            <p className="text-xl text-gray-700 mb-10">
              Explore my complete collection of original artworks, spanning various styles, techniques, and emotional landscapes.
            </p>
          </motion.div>

          {/* Filter and Search */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search artwork..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden flex items-center justify-center gap-2 bg-gray-100 py-3 px-4 rounded-lg"
              >
                <Filter size={18} />
                <span>Filter</span>
              </button>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Category Filter - Desktop */}
            <motion.div
              variants={itemVariants}
              className="w-full md:w-64 hidden md:block"
            >
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Palette size={18} className="mr-2 text-primary" />
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Category Filter - Mobile */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full md:hidden mb-6"
                >
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Palette size={18} className="mr-2 text-primary" />
                      Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setIsFilterOpen(false);
                          }}
                          className={`px-4 py-2 rounded-full text-sm transition-colors ${
                            selectedCategory === category.id
                              ? 'bg-primary text-white'
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Gallery Grid */}
            <motion.div variants={itemVariants} className="flex-1">
              {filteredArtworks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArtworks.map((artwork, index) => (
                    <motion.div
                      key={artwork.id}
                      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500"
                      whileHover={{ 
                        scale: 1.03, 
                        rotateZ: index % 2 === 0 ? 1 : -1,
                        transition: { duration: 0.3 }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <span className="text-white/80 text-sm uppercase tracking-wider mb-1">
                            {artwork.category}
                          </span>
                          <h3 className="text-white text-xl font-bold">{artwork.title}</h3>
                          <button className="mt-3 text-white inline-flex items-center">
                            <span>View Details</span>
                            <ArrowRight size={16} className="ml-1" />
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                        <p className="text-gray-500 text-sm mb-2">
                          {artwork.medium}, {artwork.year}
                        </p>
                        <p className="text-gray-700 text-sm">{artwork.dimensions}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-md p-10 text-center">
                  <p className="text-gray-600 text-lg">No artworks match your search criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 text-primary font-medium hover:underline"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commission CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto overflow-hidden relative"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
            
            <h2 className="text-3xl font-bold mb-4 relative z-10">Looking for Something Unique?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto relative z-10">
              Commission a custom piece tailored to your vision, space, and emotional resonance. Let's create something extraordinary together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-8 rounded-full hover:from-primary-dark hover:to-secondary-dark transition-all relative z-10"
            >
              Commission Artwork
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default GalleryPage;