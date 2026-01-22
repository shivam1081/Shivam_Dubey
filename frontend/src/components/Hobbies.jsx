import React from 'react';
import { Camera, Mountain, BookOpen, Gamepad2, Music, ChefHat } from 'lucide-react';
import { hobbies } from '../data/mock';

const iconMap = {
  Camera: Camera,
  Mountain: Mountain,
  BookOpen: BookOpen,
  Gamepad2: Gamepad2,
  Music: Music,
  ChefHat: ChefHat
};

const Hobbies = () => {
  return (
    <section className="section-padding bg-[#1a1c1b] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#3f4816]/50 rounded-full text-[#d9fb06] text-sm font-medium uppercase tracking-wider mb-6">
            Beyond Code
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Hobbies & <span className="text-[#d9fb06]">Interests</span>
          </h2>
          <p className="text-[#888680] max-w-2xl mx-auto">
            Life isn't all about code. Here's what I enjoy when I'm away from the keyboard.
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {hobbies.map((hobby, index) => {
            const IconComponent = iconMap[hobby.icon];
            return (
              <div
                key={hobby.id}
                className="group bg-[#302f2c] rounded-2xl p-6 text-center hover:bg-[#3f4816]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-default"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#1a1c1b] rounded-xl flex items-center justify-center group-hover:bg-[#d9fb06]/20 transition-colors duration-300">
                  {IconComponent && (
                    <IconComponent
                      size={28}
                      className="text-[#d9fb06]"
                    />
                  )}
                </div>
                <h3 className="text-white font-bold mb-2 group-hover:text-[#d9fb06] transition-colors">
                  {hobby.name}
                </h3>
                <p className="text-[#888680] text-sm hidden md:block">
                  {hobby.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
