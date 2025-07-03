import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import type { LinkItem } from "@/lib/data";
import { CopyButton } from "./copy-button";
import { ArrowUpRight } from "lucide-react";

type LinkCardProps = {
  link: LinkItem;
};

export function LinkCard({ link }: LinkCardProps) {
  return (
    <Card className="group relative transition-all duration-300 hover:shadow-[0_0_15px_2px_hsl(var(--primary)/0.4)] bg-card/50 hover:bg-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-medium pr-8">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              {link.name}
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </CardTitle>
          <div className="absolute top-4 right-2">
             <CopyButton textToCopy={link.url} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription
          dangerouslySetInnerHTML={{ __html: link.description }}
        />
      </CardContent>
    </Card>
  );
}
