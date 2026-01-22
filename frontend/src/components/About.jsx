import React from 'react';
import { CheckCircle, Download } from 'lucide-react';
import { aboutMe, personalInfo } from '../data/mock';
import { Button } from './ui/button';

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#1a1c1b] relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#302f2c]/30" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative">
              {/* Background shapes */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#3f4816]/30 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#d9fb06]/20 rounded-2xl" />
              
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1b]/80 via-transparent to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute -right-4 top-1/4 bg-[#d9fb06] text-[#1a1c1b] p-6 rounded-2xl shadow-2xl">
                <div className="text-4xl font-black">{ personalInfo?.yoe}</div>
                <div className="text-sm font-semibold uppercase tracking-wider">Years Exp</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#3f4816]/50 rounded-full text-[#d9fb06] text-sm font-medium uppercase tracking-wider mb-6">
              About Me
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Passionate Developer
              <br />
              <span className="text-[#d9fb06]">Building the Future</span>
            </h2>

            <div className="space-y-4 text-[#888680] mb-8">
              {aboutMe.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {aboutMe.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d9fb06] mt-0.5 flex-shrink-0" />
                  <span className="text-white">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#d9fb06] text-[#1a1c1b] hover:bg-[#d9fb06]/90 rounded-full px-8 py-6 font-semibold uppercase text-sm tracking-wider transition-transform hover:scale-105"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="border-[#888680] text-[#888680] hover:border-[#d9fb06] hover:text-[#d9fb06] rounded-full px-8 py-6 font-semibold uppercase text-sm tracking-wider"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
