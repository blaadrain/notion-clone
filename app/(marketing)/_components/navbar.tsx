'use client';

import { useScrollTop } from '@/hooks/useScrollTop';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { ModeToggle } from '@/components/mode-toggle';

export const Navbar = () => {
  const isScrolled = useScrollTop();

  return (
    <div
      className={cn(
        'z-50 bg-background fixed top-0 flex items-center w-full p-6',
        isScrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="md:ml-6 justify-end md:justify-start w-full flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};
