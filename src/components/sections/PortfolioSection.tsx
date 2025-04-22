
import React, { useState } from 'react';
import { portfolioItems, categories, PortfolioItem } from '@/data/portfolioData';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("ទាំងអស់");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  const filteredItems = selectedCategory === "ទាំងអស់" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);
  
  return (
    <section id="portfolio" className="section-spacing">
      <div className="container-custom">
        <h2 className="section-title">ស្នាដៃរបស់ខ្ញុំ</h2>
        
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-card hover:bg-primary/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={cn(
                "portfolio-card group",
                "animate-fade-in",
                { "animate-delay-100": index % 3 === 1 },
                { "animate-delay-200": index % 3 === 2 }
              )}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="portfolio-card-img"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="secondary" 
                        size="lg" 
                        className="scale-95 hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedItem(item)}
                      >
                        <Eye className="mr-2 h-5 w-5" />
                        មើលលម្អិត
                      </Button>
                    </DialogTrigger>
                    
                    {selectedItem && (
                      <DialogContent className="max-w-3xl w-[90vw] max-h-[85vh] overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <img 
                              src={selectedItem.imageUrl} 
                              alt={selectedItem.title} 
                              className="w-full h-auto rounded-lg shadow-md"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-3">{selectedItem.title}</h3>
                            <p className="mb-4">{selectedItem.description}</p>
                            <div className="mb-4">
                              <h4 className="font-medium text-lg mb-1">ឧបករណ៍ប្រើប្រាស់៖</h4>
                              <p className="text-sm text-muted-foreground">{selectedItem.tools}</p>
                            </div>
                            <div className="mb-4">
                              <h4 className="font-medium text-lg mb-1">ប្រភេទ៖</h4>
                              <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                                {selectedItem.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    )}
                  </Dialog>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-1">
                  <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
