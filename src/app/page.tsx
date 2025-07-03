'use client';

import React, { useState, useEffect, useRef } from 'react';
import { data, Category } from '@/lib/data';
import { Star, ArrowUpRight, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<Category[]>(data);
  const [activeItemId, setActiveItemId] = useState<string>('');
  const itemRefs = useRef(new Map<string, HTMLElement | null>());

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
  }, [searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      const sortedRefs = Array.from(itemRefs.current.entries())
        .filter(([, ref]) => ref)
        .sort(([, a], [, b]) => a!.offsetTop - b!.offsetTop);
      
      if (sortedRefs.length === 0) return;

      const triggerPoint = window.innerHeight * 0.3;
      let closestId: string | null = null;
      let minDistance = Infinity;

      for (const [id, ref] of sortedRefs) {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // Consider sections that are within the viewport
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const distance = Math.abs(rect.top - triggerPoint);
            if (distance < minDistance) {
              minDistance = distance;
              closestId = id;
            }
          }
        }
      }

      if (closestId) {
        setActiveItemId(closestId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [filteredData]);


  const getParentId = (subId: string): string | null => {
    for (const category of data) {
      if (category.subcategories.some(s => s.id === subId)) {
        return category.id;
      }
    }
    return null;
  };

  const parentOfActive = getParentId(activeItemId);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-x-12 px-4 sm:px-6 lg:px-8">
        <aside className="hidden lg:block lg:col-span-3 py-12">
          <div className="sticky top-24">
            <h4
              className="font-semibold text-lg mb-4 text-foreground cursor-pointer hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Table of Contents
            </h4>
            <ul className="space-y-2">
              {filteredData.map((category) => (
                <li key={`${category.id}-toc`}>
                  <a
                    href={`#${category.id}`}
                    className={cn(
                      'block py-1 text-sm transition-colors',
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
                        sub.name && (
                          <li key={`${sub.id}-toc`}>
                            <a
                              href={`#${sub.id}`}
                              className={cn(
                                'block py-1 text-xs transition-colors',
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
          </div>
        </aside>
        
        <main className="lg:col-span-9 py-12">
          <header className="mb-8">
            <h1 className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              GOONMOVEMENT
            </h1>
            <p className="text-lg text-muted-foreground mt-2">A curated list of resources.</p>
          </header>

          <div className="relative mb-12">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search all resources..."
              className="w-full pl-12 h-12 text-lg bg-card border-2 border-border focus:border-primary/50 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-16">
            {filteredData.map((category) => (
              <section
                key={category.id}
                id={category.id}
                ref={(el) => itemRefs.current.set(category.id, el)}
                className="scroll-mt-24"
              >
                <h2 className="text-3xl font-bold text-gray-200 border-b-2 border-primary/30 pb-3 mb-6">
                  {category.name}
                </h2>
                <div className="space-y-8">
                  {category.subcategories.map((sub) => (
                     sub.links.length > 0 && (
                      <div 
                        key={sub.id} 
                        id={sub.id} 
                        ref={(el) => itemRefs.current.set(sub.id, el)}
                        className="scroll-mt-24"
                      >
                        {sub.name && <h3 className="text-xl font-semibold text-gray-400 mb-4">{sub.name}</h3>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {sub.links.map((link) => (
                            <a
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex justify-between items-start"
                            >
                              <div>
                                  <div className="flex items-center mb-1">
                                      {link.premium && <Star className="h-4 w-4 text-primary fill-primary mr-2" />}
                                      <p className="font-semibold text-foreground">{link.name}</p>
                                  </div>
                                  {link.description && <p className="text-sm text-muted-foreground">{link.description}</p>}
                              </div>
                              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-transform duration-300 transform group-hover:rotate-45" />
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
  );
}
