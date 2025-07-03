'use client';

import React, { useState, useEffect, useRef } from 'react';
import { data } from '@/lib/data';
import { Star, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, data.length);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Add offset for better trigger point
      let currentSectionId = '';

      sectionRefs.current.forEach((sectionRef) => {
        if (sectionRef && scrollPosition >= sectionRef.offsetTop) {
          currentSectionId = sectionRef.id;
        }
      });
      
      if (activeSection !== currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8">
        <main className="w-full lg:w-3/4 py-12 lg:pr-16">
          <header className="mb-12">
            <h1 className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              GOONMOVEMENT
            </h1>
            <p className="text-lg text-muted-foreground mt-2">A curated list of resources.</p>
          </header>

          <div className="space-y-16">
            {data.map((category, index) => (
              <section
                key={category.id}
                id={category.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="scroll-mt-24"
              >
                <h2 className="text-3xl font-bold text-gray-200 border-b-2 border-primary/30 pb-3 mb-6">
                  {category.name}
                </h2>
                <div className="space-y-8">
                  {category.subcategories.map((sub) => (
                    <div key={sub.id}>
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
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>

        <aside className="hidden lg:block w-1/4 py-12">
          <div className="sticky top-24">
            <h4 className="font-semibold text-lg mb-4 text-foreground">Table of Contents</h4>
            <ul className="space-y-2 border-l border-border">
              {data.map((category) => (
                <li key={`${category.id}-toc`}>
                  <a
                    href={`#${category.id}`}
                    className={cn(
                      'block pl-4 py-1 text-sm border-l-2 transition-colors',
                      activeSection === category.id
                        ? 'text-primary border-primary'
                        : 'text-muted-foreground border-transparent hover:text-foreground hover:border-gray-500'
                    )}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
