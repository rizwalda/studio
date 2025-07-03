"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LinkCard } from "./link-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Category } from "@/lib/data";

type ContentDisplayProps = {
  data: Category[];
  isLoading?: boolean;
};

export function ContentDisplay({ data, isLoading = false }: ContentDisplayProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2 rounded-lg border p-4">
            <Skeleton className="h-6 w-1/3" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center text-center h-64 rounded-lg border border-dashed">
            <h2 className="text-xl font-semibold">No results found</h2>
            <p className="text-muted-foreground mt-2">Try adjusting your search terms.</p>
        </div>
    )
  }

  return (
    <Accordion type="multiple" className="w-full space-y-4">
      {data.map((category) => (
        <AccordionItem
          value={category.id}
          key={category.id}
          id={category.id}
          className="rounded-lg border bg-card/30 px-4"
        >
          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
            <div className="flex items-center gap-3">
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            <Accordion type="multiple" className="w-full space-y-2">
              {category.subcategories.map((subcategory) => (
                <AccordionItem
                  value={subcategory.id}
                  key={subcategory.id}
                  className="border-none"
                >
                  <AccordionTrigger className="py-2 text-base text-muted-foreground hover:no-underline hover:text-foreground">
                    {subcategory.name}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {subcategory.links.map((link) => (
                        <LinkCard key={link.url} link={link} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
