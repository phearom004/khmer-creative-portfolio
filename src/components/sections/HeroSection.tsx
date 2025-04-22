
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-gradient"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ lineHeight: 1.1 }}>
              សួស្តី! ខ្ញុំជាអ្នករចនា<span className="text-secondary">ក្រាហ្វិក</span>
              <span className="block mt-2">ដែលបង្កើតភាពស្រស់ស្អាត</span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
              រចនាម៉ាកយីហោ និងរូបភាពដែលនិទានរឿង បង្កើតបទពិសោធន៍ទាក់ទាញសម្រាប់ក្រុមហ៊ុននិងអតិថិជនដែលប្រកបដោយភាពច្នៃប្រឌិត
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="btn-primary inline-block">
                មើលស្នាដៃរបស់ខ្ញុំ
              </a>
              <a href="#contact" className="btn-secondary inline-block">
                ទាក់ទងខ្ញុំ
              </a>
            </div>
          </div>
          
          <div className={cn(
            "relative hidden lg:block w-full max-w-md mx-auto lg:ml-auto",
            "animate-slide-up delay-300"
          )}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop" 
                alt="ការងាររចនាក្រាហ្វិក" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-2xl z-[-1]"></div>
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-secondary/30 rounded-full blur-xl z-[-1]"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <span className="text-sm mb-2">ស្វែងយល់បន្ថែម</span>
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-foreground rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
