import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <section className="section-padding bg-[#302f2c]/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#d9fb06]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3f4816]/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#3f4816]/50 rounded-full text-[#d9fb06] text-sm font-medium uppercase tracking-wider mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            What People <span className="text-[#d9fb06]">Say</span>
          </h2>
          <p className="text-[#888680] max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure of working with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-[#1a1c1b] rounded-2xl p-8 relative group hover:bg-[#302f2c] transition-colors duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#3f4816] group-hover:text-[#d9fb06]/30 transition-colors">
                <Quote size={40} />
              </div>

              {/* Content */}
              <p className="text-[#888680] mb-6 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-[#d9fb06] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
