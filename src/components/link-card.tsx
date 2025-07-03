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
import { BackgroundGradient } from "@/components/ui/background-gradient";

type LinkCardProps = {
  link: LinkItem;
};

export function LinkCard({ link }: LinkCardProps) {
  return (
    <BackgroundGradient
      className="rounded-[22px] p-4 sm:p-5 bg-card"
      containerClassName="h-full"
    >
      <Card className="group relative transition-all duration-300 bg-transparent border-none shadow-none h-full flex flex-col">
        <CardHeader className="p-0">
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
            <div className="absolute top-0 right-0">
              <CopyButton textToCopy={link.url} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 pt-2 flex-grow">
          <CardDescription
            dangerouslySetInnerHTML={{ __html: link.description }}
          />
        </CardContent>
      </Card>
    </BackgroundGradient>
  );
}
