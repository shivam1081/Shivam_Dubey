import React from 'react';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo, stats } from '../data/mock';
import { Button } from './ui/button';

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
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

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
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
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-[#1a1c1b] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #d9fb06 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d9fb06]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#3f4816]/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fadeInUp">
              <span className="inline-block px-4 py-2 bg-[#3f4816]/50 rounded-full text-[#d9fb06] text-sm font-medium uppercase tracking-wider mb-6">
                Available for work
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.9] mb-6 animate-fadeInUp delay-100">
              {personalInfo.name.split(' ')[0]}
              <br />
              <span className="text-[#d9fb06]">{personalInfo.name.split(' ')[1]}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#888680] font-medium mb-4 animate-fadeInUp delay-200">
              {personalInfo.title}
            </p>

            <p className="text-lg text-[#888680]/80 max-w-lg mb-8 animate-fadeInUp delay-300">
              {personalInfo.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fadeInUp delay-400">
              <Button
                onClick={handleScrollToProjects}
                className="bg-[#d9fb06] text-[#1a1c1b] hover:bg-[#d9fb06]/90 rounded-full px-8 py-6 font-semibold uppercase text-sm tracking-wider transition-transform hover:scale-105"
              >
                View Projects
              </Button>
              <Button
                onClick={handleScrollToContact}
                variant="outline"
                className="border-[#d9fb06] text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] rounded-full px-8 py-6 font-semibold uppercase text-sm tracking-wider transition-transform hover:scale-105"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 animate-fadeInUp delay-500">
              <span className="text-[#888680] text-sm uppercase tracking-wider">Follow me</span>
              <div className="h-px w-12 bg-[#3f4816]" />
              <div className="flex gap-4">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fadeIn delay-200">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-[#3f4816] rounded-2xl transform rotate-3" />
              <div className="absolute -inset-4 border-2 border-[#d9fb06]/30 rounded-2xl transform -rotate-3" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1b]/60 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#d9fb06] text-[#1a1c1b] px-4 py-2 rounded-full font-bold text-sm">
                {stats[0].value} {stats[0].label}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-[#3f4816]/50">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fadeInUp"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-black text-[#d9fb06] mb-2">
                {stat.value}
              </div>
              <div className="text-[#888680] text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#d9fb06]" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
