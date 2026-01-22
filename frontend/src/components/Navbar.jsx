import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when user interacts outside it (touch/pointer) or scrolls with wheel
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsidePointer = (e) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleWheel = () => setIsOpen(false);

    document.addEventListener('pointerdown', handleOutsidePointer);
    document.addEventListener('touchstart', handleOutsidePointer);
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointer);
      document.removeEventListener('touchstart', handleOutsidePointer);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen]);

  // Prevent background scrolling when mobile nav is open
  useEffect(() => {
    const previous = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous || '';
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1a1c1b]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-bold text-white hover:text-[#d9fb06] transition-colors duration-300"
          >
            {personalInfo.name.split(' ')[0]}
            <span className="text-[#d9fb06]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              className="bg-[#d9fb06] text-[#1a1c1b] hover:bg-[#d9fb06]/90 rounded-full px-6 font-semibold uppercase text-sm tracking-wider"
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-[#d9fb06] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        ref={mobileNavRef}
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#1a1c1b]/98 backdrop-blur-md transition-all duration-300 overflow-hidden z-50 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 text-base font-medium uppercase tracking-wider py-2"
            >
              {link.name}
            </a>
          ))}
          <Button
            className="w-full bg-[#d9fb06] text-[#1a1c1b] hover:bg-[#d9fb06]/90 rounded-full px-6 font-semibold uppercase text-sm tracking-wider mt-4"
            onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
