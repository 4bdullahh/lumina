import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Search, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = [
    'Techniques', 'Inspiration', 'Studio Life', 'Exhibitions', 
    'Art History', 'Behind the Canvas', 'Color Theory'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Emotional Language of Color',
      excerpt: 'How different colors evoke distinct emotional responses and how I harness this in my work.',
      date: 'June 15, 2023',
      author: 'Artist Name',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Color Theory', 'Techniques', 'Inspiration'],
    },
    {
      id: 2,
      title: 'My Process: From Blank Canvas to Finished Work',
      excerpt: 'A deep dive into my creative process, from initial concept to final brushstroke.',
      date: 'May 28, 2023',
      author: 'Artist Name',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Behind the Canvas', 'Techniques', 'Studio Life'],
    },
    {
      id: 3,
      title: 'Finding Inspiration in Unexpected Places',
      excerpt: 'The surprising sources of creative inspiration that have shaped my recent work.',
      date: 'April 12, 2023',
      author: 'Artist Name',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Inspiration', 'Studio Life'],
    },
    {
      id: 4,
      title: 'The Evolution of Abstract Expressionism',
      excerpt: 'Tracing the history and impact of the abstract expressionist movement on contemporary art.',
      date: 'March 3, 2023',
      author: 'Artist Name',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Art History', 'Inspiration'],
    },
    {
      id: 5,
      title: 'Texture as a Narrative Element',
      excerpt: 'How I use textural elements to add depth and storytelling to my compositions.',
      date: 'February 17, 2023',
      author: 'Artist Name',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1061778/pexels-photo-1061778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Techniques', 'Behind the Canvas'],
    },
    {
      id: 6,
      title: 'Reflections on My Latest Exhibition',
      excerpt: 'Thoughts and insights from my recent gallery show and the reception to new works.',
      date: 'January 29, 2023',
      author: 'Artist Name',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Exhibitions', 'Studio Life'],
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
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
      transition: { type: 'spring', stiffness: 100 }
    },
  };

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
            <h1 className="text-5xl font-bold mb-6">Artist Blog</h1>
            <p className="text-xl text-gray-700">
              Insights, inspiration, and behind-the-scenes looks at my creative process and the world of art.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedTag === null
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                All
              </button>
              {tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedTag === tag
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-primary bg-opacity-80 text-white text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3">
                      <a href="#" className="hover:text-primary transition-colors">
                        {post.title}
                      </a>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white mr-2">
                          <User size={14} />
                        </div>
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <a
                        href="#"
                        className="text-primary hover:text-primary-dark font-medium inline-flex items-center text-sm transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-10 text-center max-w-xl mx-auto"
            >
              <p className="text-gray-600 text-lg mb-4">No articles match your search criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag(null);
                }}
                className="text-primary font-medium hover:underline"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto overflow-hidden relative"
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
            
            <h2 className="text-3xl font-bold mb-4 relative z-10">Stay Updated</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto relative z-10">
              Subscribe to my newsletter to receive updates on new artwork, exhibition announcements, and exclusive behind-the-scenes content.
            </p>
            
            <form className="max-w-md mx-auto relative z-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white font-medium py-3 px-6 rounded-lg transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                I respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;