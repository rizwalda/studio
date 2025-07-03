import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from "@/components/ui/sidebar";
import { data, type Category } from "@/lib/data";
import { AppSidebar } from "./sidebar";
import { MainContent } from "./main-content";

export default function Home() {
  const categories = data.map((cat: Category) => ({
    id: cat.id,
    name: cat.name,
    icon: cat.icon,
  }));

  return (
    <SidebarProvider>
      <AppSidebar categories={categories} />
      <SidebarInset>
        <MainContent initialData={data} />
      </SidebarInset>
    </SidebarProvider>
  );
}
