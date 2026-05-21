import {PageSlot} from "mfront";
import {Separator, Sidebar, SidebarContent, SidebarProvider, SidebarToggler} from "mfront-ui";
import type {SidebarMenuItemProps} from "mmcore-ui";
import {
    BookOpen,
    Bot,
    ChartNoAxesCombined,
    Frame,
    LayoutDashboard, Map, MoreHorizontal, PieChart,
    Settings2,
    SquareTerminal
} from "lucide-react";

export const AppNavigation = {
    menuItems: () => {
        const menuItems: SidebarMenuItemProps[] = [
            {
                single: [
                    {menuContent: (<><LayoutDashboard/> Dashboard</>)},
                    {
                        menuContent: (<><ChartNoAxesCombined/> Reports</>),
                        collapsible: true,
                        nested: [
                            {menuContent: "Student"},
                            {menuContent: "Teacher"},
                            {menuContent: "Billing"},
                        ]
                    },
                ]
            },
            {
                grouped: {
                    labelContent: "Platform",
                    items: [
                        {
                            menuContent: (<><SquareTerminal/> Playground</>),
                            collapsible: true,
                            nested: [
                                {menuContent: "History", navUrl: "/example"},
                                {menuContent: "Starred"},
                                {menuContent: "Settings"},
                            ]
                        },
                        {
                            menuContent: (<><Bot/> Models</>),
                            collapsible: true,
                            nested: [
                                {menuContent: "Genesis"},
                                {menuContent: "Explorer"},
                                {menuContent: "Quantum"},
                            ]
                        },
                        {
                            menuContent: (<><BookOpen/> Documentation</>),
                            collapsible: true,
                            nested: [
                                {menuContent: "Introduction"},
                                {menuContent: "Get Started"},
                                {menuContent: "Tutorials"},
                                {menuContent: "Changelog"},
                            ]
                        },
                        {
                            menuContent: (<><Settings2/> Settings</>),
                            collapsible: true,
                            nested: [
                                {menuContent: "General"},
                                {menuContent: "Team"},
                                {menuContent: "Billing"},
                                {menuContent: "Limits"},
                            ]
                        }
                    ]
                }
            },
            {
                grouped: {
                    labelContent: "Projects",
                    items: [
                        {menuContent: (<><Frame/> Design Engineering</>)},
                        {menuContent: (<><PieChart/> Sales & Marketing</>)},
                        {menuContent: (<><Map/> Travel</>)},
                        {menuContent: (<><MoreHorizontal/> More</>)},
                    ]
                },
            }
        ]
        return menuItems
    }
}

export default function PublicLayout() {
    return (
        <SidebarProvider>
            <Sidebar menu={AppNavigation.menuItems()} collapsible="icon" variant={"sidebar"}/>
            <SidebarContent>
                <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarToggler className="-ml-1"/>
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        mFront Development
                    </div>
                </header>
                <Separator/>
                <div className="p-3">
                    <PageSlot/>
                </div>
            </SidebarContent>
        </SidebarProvider>
    )
}