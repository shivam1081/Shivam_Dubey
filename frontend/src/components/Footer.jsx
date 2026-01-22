import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { personalInfo, navLinks } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
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

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: personalInfo.social.instagram, label: 'Instagram' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <footer className="bg-[#1a1c1b] border-t border-[#3f4816]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold text-white hover:text-[#d9fb06] transition-colors inline-block mb-4">
              {personalInfo.name.split(' ')[0]}
              <span className="text-[#d9fb06]">.</span>
            </a>
            <p className="text-[#888680] max-w-md mb-6">
              {personalInfo.summary}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#302f2c] rounded-lg text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816]/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-[#888680]">
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#3f4816]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#888680] text-sm flex items-center gap-1">
            © {currentYear} {personalInfo.name}. Made with
            <Heart size={14} className="text-[#d9fb06] fill-[#d9fb06]" />
            All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#888680] hover:text-[#d9fb06] transition-colors text-sm group"
          >
            Back to top
            <span className="p-2 bg-[#302f2c] rounded-lg group-hover:bg-[#3f4816]/50 transition-colors">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
