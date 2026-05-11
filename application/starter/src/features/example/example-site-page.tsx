import {Button, Sidebar, SidebarContent, SidebarProvider, SidebarToggler} from "mfront-ui"
import {useState} from "mfront";
import {type SidebarMenuItemProps} from "mmcore-ui";
import {BookOpen, Bot, Map, Component, Frame, PieChart, Settings2, SquareTerminal, MoreHorizontal} from "lucide-react";

const menuItems: SidebarMenuItemProps[] = [
    {
        menuContent: "Platform",
        group: [
            {
                menuContent: (<><SquareTerminal/> Playground</>),
                nested: [
                    {menuContent: "History"},
                    {menuContent: "Starred"},
                    {menuContent: "Settings"},
                ]
            },
            {
                menuContent: (<><Bot/> Models</>),
                nested: [
                    {menuContent: "Genesis"},
                    {menuContent: "Explorer"},
                    {menuContent: "Quantum"},
                ]
            },
            {
                menuContent: (<><BookOpen/> Documentation</>),
                nested: [
                    {menuContent: "Introduction"},
                    {menuContent: "Get Started"},
                    {menuContent: "Tutorials"},
                    {menuContent: "Changelog"},
                ]
            },
            {
                menuContent: (<><Settings2/> Settings</>),
                nested: [
                    {menuContent: "General"},
                    {menuContent: "Team"},
                    {menuContent: "Billing"},
                    {menuContent: "Limits"},
                ]
            }
        ],
    },
    {
        menuContent: "Projects",
        group: [
            {menuContent: (<><Frame/> Design Engineering</>)},
            {menuContent: (<><PieChart/> Sales & Marketing</>)},
            {menuContent: (<><Map/> Travel</>)},
            {menuContent: (<><MoreHorizontal/> More</>)},
        ]
    }
]

export default function ExampleSitePage() {
    const [isOpen, toggleOpen] = useState(true)
    return (
        <>
            <SidebarProvider >
                <Sidebar menu={menuItems} collapsible="offcanvas" variant={"inset"}/>
                <SidebarContent>
                    <SidebarToggler/>

                    Site Content Listed Here

                </SidebarContent>
                <SidebarToggler/>

                <Button onClick={() => toggleOpen(!isOpen)}>Toggle</Button>
            </SidebarProvider>
        </>
    )
}