'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { data, Category } from '@/lib/data';
import { Star, ArrowUpRight, Search, ArrowUp, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';

// Reusable Table of Contents Component
const TableOfContents = ({
  data,
  activeItemId,
  parentOfActive,
  onLinkClick,
  onTitleClick,
}: {
  data: Category[];
  activeItemId: string;
  parentOfActive: string | null;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  onTitleClick: () => void;
}) => {
  return (
    <>
      <h4
        className="font-semibold text-2xl mb-4 text-foreground cursor-pointer hover:text-primary transition-colors"
        onClick={onTitleClick}
      >
        Table of Contents
      </h4>
      <ul className="space-y-3">
        {data.map((category) => (
          <li key={`${category.id}-toc`}>
            <a
              href={`#${category.id}`}
              onClick={(e) => onLinkClick(e, category.id)}
              className={cn(
                'block py-1.5 text-lg transition-all duration-300',
                activeItemId === category.id || parentOfActive === category.id
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {category.name}
            </a>
            {category.subcategories.length > 0 && (
              <ul className="pl-4 mt-2 space-y-2 border-l border-border ml-3">
                {category.subcategories.map(sub => (
                  sub.name && sub.links.length > 0 && (
                    <li key={`${sub.id}-toc`}>
                      <a
                        href={`#${sub.id}`}
                        onClick={(e) => onLinkClick(e, sub.id)}
                        className={cn(
                          'block py-1.5 text-base transition-all duration-300',
                          activeItemId === sub.id
                            ? 'text-accent font-medium'
                            : 'text-muted-foreground/80 hover:text-foreground'
                        )}
                      >
                        {sub.name}
                      </a>
                    </li>
                  )
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<Category[]>(data);
  const [activeItemId, setActiveItemId] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  const itemRefs = useRef(new Map<string, HTMLElement | null>());
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const activeItemIdRef = useRef(activeItemId);
  activeItemIdRef.current = activeItemId;
  
  useEffect(() => {
    setIsMounted(true);
    
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString());
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    const trackedItemIds = data.flatMap(category => [
      category.id,
      ...category.subcategories
        .filter(sub => sub.links.length > 0 && sub.name)
        .map(sub => sub.id)
    ]);
    if (trackedItemIds.length > 0) {
      setActiveItemId(trackedItemIds[0]);
    }
    
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    if (!lowercasedFilter) {
      setFilteredData(data);
      return;
    }

    const filtered = data.map(category => {
      const filteredSubcategories = category.subcategories.map(subcategory => {
        const filteredLinks = subcategory.links.filter(link =>
          link.name.toLowerCase().includes(lowercasedFilter) ||
          (link.description && link.description.toLowerCase().includes(lowercasedFilter))
        );
        return { ...subcategory, links: filteredLinks };
      }).filter(subcategory => subcategory.links.length > 0);
      
      if(filteredSubcategories.length > 0) {
        return { ...category, subcategories: filteredSubcategories };
      }
      return null;
    }).filter((category): category is Category => category !== null);

    setFilteredData(filtered);
    if (filtered.length > 0) {
        const firstCategoryId = filtered[0].id;
        const firstSubcategoryId = filtered[0].subcategories.find(s => s.links.length > 0)?.id;
        setActiveItemId(firstSubcategoryId || firstCategoryId);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (!isMounted) return;

    const trackedItemIds = filteredData.flatMap(category => [
      category.id,
      ...category.subcategories
        .filter(sub => sub.links.length > 0 && sub.name)
        .map(sub => sub.id)
    ]);

    if (trackedItemIds.length === 0) return;

    if (window.scrollY < 100) {
      setActiveItemId(trackedItemIds[0]);
    }

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      let currentActiveId = activeItemIdRef.current;
      
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10) {
        currentActiveId = trackedItemIds[trackedItemIds.length - 1];
      } else {
        const fromTop = window.innerHeight * 0.3;
        
        let bestCandidate = '';
        for (const id of trackedItemIds) {
          const element = itemRefs.current.get(id);
          if (element && element.getBoundingClientRect().top < fromTop) {
            bestCandidate = id;
          } else {
            break; 
          }
        }
        if (bestCandidate) {
          currentActiveId = bestCandidate;
        }
      }
      
      if (window.scrollY < 100 && trackedItemIds.length > 0) {
          currentActiveId = trackedItemIds[0];
      }

      if (currentActiveId && activeItemIdRef.current !== currentActiveId) {
        setActiveItemId(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const initialCheckTimeout = setTimeout(() => {
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      clearTimeout(initialCheckTimeout);
    };
  }, [filteredData, isMounted]);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveItemId(id);
    setIsMenuOpen(false);
    
    isClickScrolling.current = true;
    
    if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
    }
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
    }

    scrollTimeout.current = setTimeout(() => {
        isClickScrolling.current = false;
    }, 1000);
  };

  const getParentId = (subId: string): string | null => {
    for (const category of data) {
      if (category.subcategories.some(s => s.id === subId)) {
        return category.id;
      }
    }
    return null;
  };

  const parentOfActive = getParentId(activeItemId);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <header className="lg:hidden sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border h-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex justify-between items-center h-full gap-4">
              <button onClick={scrollToTop} className="focus:outline-none focus:ring-2 focus:ring-ring rounded-sm min-w-0">
                <h1 className="truncate text-2xl sm:text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Tissue Papers, Please!
                </h1>
              </button>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="flex-shrink-0">
                          <Menu className="h-6 w-6" />
                          <span className="sr-only">Open Menu</span>
                      </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-full max-w-xs p-6 bg-card border-r-border overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                        <SheetDescription className="sr-only">
                          Table of contents for the page.
                        </SheetDescription>
                      </SheetHeader>
                      <TableOfContents 
                        data={filteredData} 
                        activeItemId={activeItemId} 
                        parentOfActive={parentOfActive} 
                        onLinkClick={handleTocClick}
                        onTitleClick={() => {
                          scrollToTop();
                          setIsMenuOpen(false);
                        }}
                      />
                      <Button asChild className="w-full mt-6" onClick={() => setIsMenuOpen(false)}>
                        <Link href="/tissues">
                          goonmovement
                        </Link>
                      </Button>
                  </SheetContent>
              </Sheet>
          </div>
      </header>

      <div className="flex-grow">
        <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-x-12 px-4 sm:px-6 lg:px-8">
          <aside className="hidden lg:block lg:col-span-3 py-12">
            <div className="sticky top-24">
              <TableOfContents 
                data={filteredData} 
                activeItemId={activeItemId} 
                parentOfActive={parentOfActive} 
                onLinkClick={handleTocClick}
                onTitleClick={scrollToTop}
              />
            </div>
          </aside>
          
          <main className={cn(
            "lg:col-span-9 pt-8 pb-12 lg:py-12 transition-all duration-500 ease-out",
            isMounted ? 'opacity-100' : 'opacity-0 translate-y-4'
          )}>
            <header className="mb-8 hidden lg:block">
              <h1 className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Tissue Papers, Please!
              </h1>
              <p className="text-lg text-muted-foreground mt-2">Hitchhiker’s Guide to Gooning.</p>
            </header>

            <div className="flex items-center gap-4 mb-8 lg:mb-12">
              <div className="relative flex-grow">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search all resources..."
                  className="w-full pl-12 h-11 text-md md:text-lg bg-card border-2 border-border focus:border-primary/50 transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button asChild variant="outline" size="lg" className="hidden lg:inline-flex">
                <Link href="/tissues">
                  goonmovement
                </Link>
              </Button>
            </div>

            <div className="space-y-12 md:space-y-16">
              {filteredData.map((category) => (
                <section
                  key={category.id}
                  id={category.id}
                  ref={(el) => itemRefs.current.set(category.id, el)}
                  className="scroll-mt-20"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-200 border-b-2 border-primary/30 pb-3 mb-6">
                    {category.name}
                  </h2>
                  <div className="space-y-8">
                    {category.subcategories.map((sub) => (
                       sub.links.length > 0 && (
                        <div 
                          key={sub.id} 
                          id={sub.id} 
                          ref={(el) => itemRefs.current.set(sub.id, el)}
                          className="scroll-mt-20"
                        >
                          {sub.name && <h3 className="text-lg md:text-xl font-semibold text-gray-400 mb-4">{sub.name}</h3>}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {sub.links.map((link) => (
                              <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex justify-between items-start"
                              >
                                <div className="min-w-0 mr-4">
                                    <div className="flex items-center mb-1">
                                        {link.premium && <Star className="h-4 w-4 text-primary fill-primary mr-2 flex-shrink-0" />}
                                        <p className="font-semibold text-foreground truncate">{link.name}</p>
                                    </div>
                                    {link.description && <p className="text-sm text-muted-foreground truncate">{link.description}</p>}
                                </div>
                                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-transform duration-300 transform group-hover:rotate-45 flex-shrink-0" />
                              </a>
                            ))}
                          </div>
                        </div>
                       )
                    ))}
                  </div>
                </section>
              ))}
              {filteredData.length === 0 && (
                  <div className="text-center py-16">
                      <p className="text-muted-foreground text-lg">No results found for "{searchTerm}".</p>
                  </div>
              )}
            </div>
          </main>
        </div>
      </div>
       <footer className={cn(
        "mt-12 lg:mt-24 border-t border-border/20 transition-all duration-500 ease-out",
        isMounted ? 'opacity-100' : 'opacity-0 translate-y-4'
       )}>
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm text-muted-foreground">
          <p>{currentDate && currentTime ? `${currentDate}, ${currentTime}` : ''}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 hover:text-foreground transition-colors"
            aria-label="Scroll to top"
          >
            <span className="hidden sm:inline">Back to top</span>
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
