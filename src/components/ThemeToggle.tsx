
import React from 'react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-xl p-2.5 transition-all duration-300 hover:bg-secondary/20 backdrop-blur-sm"
      aria-label={theme === 'light' ? 'បិទរបៀបងងឹត' : 'បិទរបៀបភ្លឺ'}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-primary" />
      ) : (
        <Sun className="h-5 w-5 text-secondary" />
      )}
    </Button>
  );
}
