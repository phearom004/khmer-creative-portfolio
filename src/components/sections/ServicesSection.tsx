
import React from 'react';
import { services } from '@/data/portfolioData';
import { Briefcase, Pen, Code, Book, Camera, Image } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase': return <Briefcase className="h-8 w-8 text-secondary" />;
      case 'pen': return <Pen className="h-8 w-8 text-secondary" />;
      case 'code': return <Code className="h-8 w-8 text-secondary" />;
      case 'book': return <Book className="h-8 w-8 text-secondary" />;
      case 'camera': return <Camera className="h-8 w-8 text-secondary" />;
      case 'image': return <Image className="h-8 w-8 text-secondary" />;
      default: return <Briefcase className="h-8 w-8 text-secondary" />;
    }
  };
  
  return (
    <section id="services" className="section-spacing bg-card">
      <div className="container-custom">
        <h2 className="section-title">សេវាកម្ម</h2>
        <p className="text-lg max-w-2xl mx-auto text-center mb-12">
          ខ្ញុំផ្តល់ជូននូវសេវាកម្មរចនាដែលជួយអ្នកនិងក្រុមហ៊ុនរបស់អ្នកឱ្យលេចធ្លោក្នុងទីផ្សារដ៏ប្រកួតប្រជែង តាមរយៈការរចនាដែលមានកម្រិតខ្ពស់និងមានអត្តសញ្ញាណ
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={cn(
                "service-card group cursor-pointer hover:bg-secondary/5",
                "animate-fade-in",
                { "animate-delay-100": index % 3 === 1 },
                { "animate-delay-200": index % 3 === 2 }
              )}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-background rounded-lg shadow-md border border-border text-center">
          <h3 className="text-2xl font-semibold mb-4">តើអ្នកត្រៀមខ្លួនរួចរាល់ដើម្បីចាប់ផ្តើមគម្រោងរបស់អ្នកហើយឬនៅ?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            ប្រសិនបើអ្នកមានគម្រោងរចនាកំពុងរង់ចាំ ឬមានសំណួរអំពីរបៀបដែលខ្ញុំអាចជួយអ្នក សូមទាក់ទងមកខ្ញុំ។
          </p>
          <a href="#contact" className="btn-primary inline-block">
            ចាប់ផ្តើមគម្រោងថ្មី
          </a>
        </div>
      </div>
    </section>
  );
}
