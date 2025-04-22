
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
      className="rounded-full p-2 transition-all duration-300 hover:bg-secondary/20"
      aria-label={theme === 'light' ? 'បិទរបៀបងងឹត' : 'បិទរបៀបភ្លឺ'}
    >
      {theme === 'light' ? (
        <Moon className="h-6 w-6 text-foreground" />
      ) : (
        <Sun className="h-6 w-6 text-foreground" />
      )}
    </Button>
  );
}
