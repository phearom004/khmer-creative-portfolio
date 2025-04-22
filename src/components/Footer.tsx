
import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-10 bg-card">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p>© 2025 ពុទ្ធីមាន ក្រាហ្វិក។ រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm transition-colors duration-300 hover:text-secondary"
            aria-label="Back to top"
          >
            ទៅខាងលើ
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
