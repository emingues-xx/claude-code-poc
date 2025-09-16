'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/providers/theme-provider';
import { Menu, Sun, Moon, Monitor } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log('🎨 Theme button clicked! Current theme:', theme);
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    console.log('🔄 Changing theme from', theme, 'to', nextTheme);
    setTheme(nextTheme);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'system':
        return <Monitor className="h-4 w-4" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4">
        <Button
          variant="outline"
          size="sm"
          onClick={onMenuToggle}
          className="mr-4 md:hidden"
        >
          <Menu className="h-4 w-4" />
        </Button>
        
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">L</span>
          </div>
          <span className="font-semibold text-lg hidden sm:block">My App</span>
        </div>

        <div className="ml-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="w-10 h-10 p-0"
          >
            {getThemeIcon()}
          </Button>
        </div>
      </div>
    </header>
  );
}