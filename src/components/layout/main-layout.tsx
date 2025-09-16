'use client';

import { useState } from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={handleMenuToggle} />
      
      <div className="flex h-[calc(100vh-3.5rem)] mt-14">
        <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} onToggle={handleMenuToggle} />
        
        <main 
          className={cn(
            'flex-1 overflow-auto transition-all duration-200 ease-in-out sidebar-transition',
            'md:ml-0',
            sidebarOpen ? 'md:ml-64' : 'md:ml-16'
          )}
        >
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}