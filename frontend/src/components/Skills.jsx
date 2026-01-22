import React, { useState } from 'react';
import { skills } from '../data/mock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillCategories = [
    { id: 'programminglang', label: 'Programming Languages', data: skills.programminglang },
    { id: 'frontend', label: 'Frontend', data: skills.frontend },
    { id: 'backend', label: 'Backend', data: skills.backend },
    { id: 'tools', label: 'Tools & DevOps', data: skills.tools }
  ];

  return (
    <section id="skills" className="section-padding bg-[#1a1c1b] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#3f4816]/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#3f4816]/50 rounded-full text-[#d9fb06] text-sm font-medium uppercase tracking-wider mb-6">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Skills & <span className="text-[#d9fb06]">Technologies</span>
          </h2>
          <p className="text-[#888680] max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I've mastered throughout my career.
          </p>
        </div>

        {/* Skills Tabs */}
        <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={`px-6 py-3 rounded-full font-semibold uppercase text-sm tracking-wider transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-[#d9fb06] text-[#1a1c1b]'
                    : 'bg-[#302f2c] text-[#888680] hover:text-white'
                }`}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.data.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-[#302f2c] rounded-xl p-6 hover:bg-[#3f4816]/30 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#d9fb06] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[#d9fb06] font-bold">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-[#1a1c1b]"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* All Skills Tags */}
        <div className="mt-16 pt-12 border-t border-[#3f4816]/50">
          <h3 className="text-center text-[#888680] uppercase tracking-wider text-sm mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[...skills?.programminglang,...skills.frontend, ...skills.backend, ...skills.tools].map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 bg-[#302f2c] text-white rounded-full text-sm font-medium hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300 cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
