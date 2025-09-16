'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isCollapsed?: boolean;
}

export function NavItem({ icon: Icon, label, href, isCollapsed = false }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link href={href}>
        <Button
          variant={isActive ? 'default' : 'outline'}
          className={cn(
            'w-full justify-start h-10 px-3 font-normal transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            isActive && 'bg-primary text-primary-foreground hover:bg-primary/90',
            isCollapsed && 'md:w-10 md:px-0 md:justify-center'
          )}
        >
          <Icon className="h-4 w-4 shrink-0" />
          <span className={cn(
            'ml-3 truncate transition-opacity duration-200',
            isCollapsed && 'md:hidden'
          )}>
            {label}
          </span>
        </Button>
      </Link>
    </li>
  );
}