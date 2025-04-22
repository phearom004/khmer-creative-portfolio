
import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'ទំព័រដើម', href: '#hero' },
    { name: 'អំពីខ្ញុំ', href: '#about' },
    { name: 'ស្នាដៃ', href: '#portfolio' },
    { name: 'សេវាកម្ម', href: '#services' },
    { name: 'ទាក់ទង', href: '#contact' },
  ];
  
  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          <span className="text-primary">ពុទ្ធីមាន</span>
          <span className="text-secondary">ក្រាហ្វិក</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-medium hover:text-secondary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label={mobileMenuOpen ? 'បិទម៉ឺនុយ' : 'បើកម៉ឺនុយ'}
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span 
                className={cn(
                  'block h-0.5 bg-foreground transition-all duration-300',
                  mobileMenuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'
                )}
              ></span>
              <span 
                className={cn(
                  'block h-0.5 bg-foreground transition-all duration-300',
                  mobileMenuOpen ? 'opacity-0' : 'w-4'
                )}
              ></span>
              <span 
                className={cn(
                  'block h-0.5 bg-foreground transition-all duration-300',
                  mobileMenuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-5'
                )}
              ></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden bg-background/95 backdrop-blur-md absolute w-full transition-all duration-300 overflow-hidden border-b border-border',
          mobileMenuOpen ? 'max-h-60 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        )}
      >
        <ul className="container-custom flex flex-col space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="block py-2 font-medium hover:text-secondary transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
