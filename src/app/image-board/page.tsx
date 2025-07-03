import Link from 'next/link';
import { Construction, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ImageBoardComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground text-center p-4">
      <Construction className="w-16 h-16 mb-6 text-primary" />
      <h1 className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
        Image Board
      </h1>
      <p className="text-2xl text-muted-foreground mb-8">
        Coming Soon!
      </p>
      <p className="max-w-md text-muted-foreground mb-12">
        We're working hard to bring you a new space for sharing and discovering images. Stay tuned!
      </p>
      <Button asChild>
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Go Back Home
        </Link>
      </Button>
    </div>
  );
}
