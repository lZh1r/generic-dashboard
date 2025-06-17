"use client";

import {BicepsFlexed, ChevronDown, Home, Inbox, Projector, Search, Settings} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarSeparator
} from "@/components/ui/sidebar";
import Link from "next/link";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import ProjectCreationDialog from "@/components/ProjectCreationDialog";

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "/mail",
        icon: Inbox,
    },
    {
        title: "Search",
        url: "/search",
        icon: Search,
    },
    {
        title: "Settings",
        url: "/profile/settings",
        icon: Settings,
    },
];

function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={'/'}>
                                <BicepsFlexed />
                                <span>John Pork Industries</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator/>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                items.map((i) => (
                                    <SidebarMenuItem key={i.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={i.url}>
                                                <i.icon/>
                                                <span>{i.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                        {
                                            i.title === "Inbox" &&
                                            <SidebarMenuBadge>99+</SidebarMenuBadge>
                                        }
                                    </SidebarMenuItem>))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <Collapsible className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger className="cursor-pointer">
                                Projects <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenuSub>
                                    <SidebarMenuItem>
                                        <ProjectCreationDialog/>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/projects">
                                                <Projector/>
                                                See All Projects
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenuSub>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

            </SidebarContent>
        </Sidebar>
    );
}

export default AppSidebar;