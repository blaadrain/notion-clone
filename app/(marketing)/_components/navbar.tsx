'use client';

import { useScrollTop } from '@/hooks/useScrollTop';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { ModeToggle } from '@/components/mode-toggle';
import { useConvexAuth } from 'convex/react';
import { SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';
import Link from 'next/link';

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const isScrolled = useScrollTop();

  return (
    <div
      className={cn(
        'z-50 bg-background fixed top-0 flex items-center w-full p-6',
        isScrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="md:ml-6 justify-end w-full flex items-center gap-x-2">
        <ModeToggle />
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="outline">Log in</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Get Jotion free</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button
              variant="ghost"
              asChild
            >
              <Link href="/documents">Enter Jotion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </div>
  );
};
