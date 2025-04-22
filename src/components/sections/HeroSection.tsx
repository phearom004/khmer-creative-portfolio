
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
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary mb-6 animate-slide-up">
              ស្វាគមន៍មកកាន់ពិភពនៃការរចនា
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              សួស្តី! ខ្ញុំជាអ្នករចនា<br/>
              ក្រាហ្វិកដែលបង្កើត<br/>
              ភាពស្រស់ស្អាត
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
              រចនាម៉ាកយីហោ និងរូបភាពដែលនិទានរឿង បង្កើតបទពិសោធន៍ទាក់ទាញសម្រាប់ក្រុមហ៊ុននិងអតិថិជនដែលប្រកបដោយភាពច្នៃប្រឌិត
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a href="#portfolio" className="btn-primary inline-block">
                មើលស្នាដៃរបស់ខ្ញុំ
              </a>
              <a href="#contact" className="btn-secondary inline-block">
                ទាក់ទងខ្ញុំ
              </a>
            </div>
          </div>
          
          <div className={cn(
            "relative hidden lg:block",
            "animate-slide-up delay-300"
          )}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop" 
                alt="ការងាររចនាក្រាហ្វិក" 
                className="w-full h-auto filter contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-primary/30 rounded-full blur-2xl"></div>
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
