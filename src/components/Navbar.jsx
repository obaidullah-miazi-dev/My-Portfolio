// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import Container from './Container';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll function
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      const sections = navLinks.map(link => link.href.substring(1));

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl  border-b border-purple-500/20 shadow-lg">
      <Container>
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3">
            <img src={logo} alt="Obaidullah Miazi" className="w-20 rounded-lg" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-medium transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y space-y-4 border-t border-purple-500/20 pt-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block py-3 text-lg font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-purple-400'
                      : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;