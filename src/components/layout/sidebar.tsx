'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Home, Settings, User, FileText, X, ChevronLeft } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: FileText, label: 'Documents', href: '/documents' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          'fixed left-0 top-14 z-50 h-[calc(100vh-3.5rem)] w-64 transform bg-background border-r border-border transition-transform duration-200 ease-in-out sidebar-transition',
          'md:relative md:top-0 md:h-[calc(100vh-3.5rem)] md:translate-x-0 md:z-0',
          isOpen ? 'translate-x-0' : '-translate-x-full md:w-16'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Close button for mobile */}
          <div className="flex items-center justify-between p-4 md:hidden">
            <span className="font-semibold">Menu</span>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="w-10 h-10 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Collapse button for desktop */}
          <div className="hidden md:flex items-center justify-end p-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className={cn(
                'w-10 h-10 p-0 transition-transform duration-200',
                !isOpen && 'rotate-180'
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full justify-start h-10 px-3 font-normal hover:bg-accent hover:text-accent-foreground',
                        !isOpen && 'md:w-10 md:px-0 md:justify-center'
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className={cn(
                        'ml-3 truncate transition-opacity duration-200',
                        !isOpen && 'md:hidden'
                      )}>
                        {item.label}
                      </span>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}