
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { NewCaseModal } from "@/components/cases/NewCaseModal";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="flex items-center justify-between border-b px-4 h-14">
            <div className="lg:hidden">
              <SidebarTrigger />
            </div>
            <div className="flex-1" />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="default" size="sm" className="gap-2">
                  <PlusCircle className="w-4 h-4" />
                  New Case
                </Button>
              </SheetTrigger>
              <NewCaseModal />
            </Sheet>
          </div>
          <div className="container mx-auto p-6 max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
