import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education, certifications } from '../data/mock';
import { Badge } from './ui/badge';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-[#1a1c1b] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#3f4816]/50 rounded-xl">
                <GraduationCap className="text-[#d9fb06]" size={24} />
              </div>
              <div>
                <span className="text-[#d9fb06] text-sm font-medium uppercase tracking-wider">
                  Education
                </span>
                <h2 className="text-2xl font-bold text-white">Academic Background</h2>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#3f4816]"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-2 h-2 bg-[#d9fb06] rounded-full transform -translate-x-[3px]" />
                  
                  <div className="bg-[#302f2c] rounded-xl p-6 hover:bg-[#3f4816]/30 transition-colors duration-300">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold text-white">
                        {edu.degree}
                      </h3>
                      <Badge variant="outline" className="border-[#d9fb06] text-[#d9fb06] whitespace-nowrap">
                        <Calendar size={12} className="mr-1" />
                        {edu.year}
                      </Badge>
                    </div>
                    <p className="text-[#d9fb06] font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-[#888680] text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#3f4816]/50 rounded-xl">
                <Award className="text-[#d9fb06]" size={24} />
              </div>
              <div>
                <span className="text-[#d9fb06] text-sm font-medium uppercase tracking-wider">
                  Achievements
                </span>
                <h2 className="text-2xl font-bold text-white">Certifications</h2>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#302f2c] rounded-xl p-6 hover:bg-[#3f4816]/30 transition-colors duration-300 group flex items-center gap-4"
                >
                  <div className="p-3 bg-[#3f4816]/50 rounded-lg group-hover:bg-[#d9fb06]/20 transition-colors">
                    <Award className="text-[#d9fb06]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold group-hover:text-[#d9fb06] transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-[#888680] text-sm">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Card */}
            <div className="mt-8 bg-[#d9fb06] rounded-xl p-6 text-[#1a1c1b]">
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-[#1a1c1b]/80 mb-4">
                I believe in staying current with the latest technologies and best practices. Always learning, always growing.
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="text-3xl font-black">15+</div>
                  <div className="text-sm font-medium">Courses Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-black">500+</div>
                  <div className="text-sm font-medium">Hours of Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
