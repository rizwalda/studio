"use client";

import { useState, useEffect, useTransition, useMemo } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ContentDisplay } from "@/components/content-display";
import { searchEnhancement } from "@/ai/flows/search-enhancement";
import type { Category, LinkItem } from "@/lib/data";
import { LoaderCircle } from "lucide-react";
import { Logo } from "@/components/logo";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

type MainContentProps = {
  initialData: Category[];
};

type EnrichedLinkItem = LinkItem & { category: string; subcategory: string };

export function MainContent({ initialData }: MainContentProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Category[]>(initialData);
  const [isSearching, startSearchTransition] = useTransition();

  const allLinksFlat = useMemo(
    () =>
      initialData.flatMap((cat) =>
        cat.subcategories.flatMap((sub) =>
          sub.links.map((link) => ({
            ...link,
            category: cat.name,
            subcategory: sub.name,
          }))
        )
      ),
    [initialData]
  );
  
  const dataSourceString = useMemo(() => JSON.stringify(allLinksFlat), [allLinksFlat]);

  const placeholders = [
    "Search for React frameworks...",
    "Find backend hosting services...",
    "What are some good AI models?",
    "Looking for design inspiration...",
    "I need a color palette generator.",
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    triggerSearch(query);
  };

  const triggerSearch = (currentQuery: string) => {
    if (currentQuery.trim() === "") {
      setResults(initialData);
      return;
    }

    startSearchTransition(async () => {
      try {
        const searchResult = await searchEnhancement({
          query: currentQuery,
          dataSource: dataSourceString,
        });
        const parsedLinks = JSON.parse(
          searchResult.relevantEntries
        ) as EnrichedLinkItem[];

        const groupedResults = parsedLinks.reduce<Category[]>((acc, link) => {
          let category = acc.find((c) => c.name === link.category);
          if (!category) {
            const originalCategory = initialData.find(
              (c) => c.name === link.category
            );
            if (originalCategory) {
              category = { ...originalCategory, subcategories: [] };
              acc.push(category);
            } else {
              return acc;
            }
          }

          let subcategory = category.subcategories.find(
            (s) => s.name === link.subcategory
          );
          if (!subcategory) {
            const originalSubcategory = initialData
              .find((c) => c.name === link.category)
              ?.subcategories.find((s) => s.name === link.subcategory);
            if (originalSubcategory) {
              subcategory = { ...originalSubcategory, links: [] };
              category.subcategories.push(subcategory);
            } else {
              return acc;
            }
          }

          const {
            category: _catName,
            subcategory: _subCatName,
            ...linkData
          } = link;
          subcategory.links.push(linkData);

          return acc;
        }, []);

        setResults(groupedResults);
      } catch (error) {
        console.error("Failed to perform search:", error);
        setResults([]);
      }
    });
  }

  useEffect(() => {
    const handler = setTimeout(() => {
        triggerSearch(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query, initialData, dataSourceString]);

  return (
    <div className="flex flex-col h-full">
      <header className="sticky top-0 z-10 flex h-20 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
        <SidebarTrigger className="md:hidden" />
        <div className="hidden md:block">
            <Logo />
        </div>
        <div className="flex-1 flex justify-center">
            <PlaceholdersAndVanishInput 
                placeholders={placeholders}
                onChange={handleSearchChange}
                onSubmit={handleSearchSubmit}
            />
        </div>
        {isSearching && (
            <LoaderCircle className="h-5 w-5 text-muted-foreground animate-spin" />
        )}
      </header>
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <ContentDisplay data={results} isLoading={isSearching} />
      </main>
    </div>
  );
}
