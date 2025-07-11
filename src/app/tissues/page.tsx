'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function GoonMovementComingSoon() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground text-center p-4 overflow-hidden">
      <div 
        className={cn(
          "transition-all duration-1000 ease-out",
          isMounted ? "opacity-100" : "opacity-0 translate-y-5"
        )}
      >
        <h1 className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
          GOONMOVEMENT
        </h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Cumming Soon!
        </p>
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
