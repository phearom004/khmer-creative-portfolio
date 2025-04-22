
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
      className="rounded-xl p-2.5 transition-all duration-300 hover:bg-white/20 bg-white/10 backdrop-blur-md border border-white/20"
      aria-label={theme === 'light' ? 'បិទរបៀបងងឹត' : 'បិទរបៀបភ្លឺ'}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-foreground" />
      ) : (
        <Sun className="h-5 w-5 text-foreground" />
      )}
    </Button>
  );
}
