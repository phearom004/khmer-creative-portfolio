
import React, { useState, useEffect } from 'react';
import { testimonials } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container-custom">
        <h2 className="section-title mb-12 text-center mx-auto">អ្វីដែលអតិថិជននិយាយ</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-lg p-8 shadow-md">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.imageUrl} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                    <blockquote className="text-lg italic relative">
                      <span className="absolute -top-4 -left-2 text-5xl text-secondary/20">"</span>
                      {testimonial.quote}
                      <span className="absolute -bottom-6 -right-2 text-5xl text-secondary/20">"</span>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-secondary w-6" : "bg-secondary/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
