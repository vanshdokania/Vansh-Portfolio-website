import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-800/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold gradient-text cursor-pointer" onClick={() => scrollToSection('home')}>
            Vansh Dokania
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('dsa')}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
            >
              DSA
            </button>
            <button 
              onClick={() => scrollToSection('ml')}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
            >
              ML
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('hobbies')}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
            >
              Hobbies
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 