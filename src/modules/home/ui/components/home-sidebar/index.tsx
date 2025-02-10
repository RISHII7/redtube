import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

import { MainSection } from "@/modules/home/ui/components/home-main-section";
import { PersonalSection } from "@/modules/home/ui/components/home-personal-section";

export const HomeSidebar = () => {
    return (
        <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
            <SidebarContent className="bg-background">
                <MainSection />
                <Separator />
                <PersonalSection />
            </SidebarContent>
        </Sidebar>
    );
};