'use client';

import { useConvexAuth } from 'convex/react';
import { Footer } from './_components/footer';
import { Navbar } from './_components/navbar';
import { redirect } from 'next/navigation';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useConvexAuth();

  if (isAuthenticated) {
    return redirect('/documents');
  }

  return (
    <div className="min-h-[100vh] flex flex-col">
      <Navbar />
      <main className="h-full pt-40 flex-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
