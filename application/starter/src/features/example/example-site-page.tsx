import {Button, Sidebar, SidebarContent, SidebarProvider, SidebarToggler} from "mfront-ui"
import {useState} from "mfront";
import {type SidebarMenuItemProps} from "mmcore-ui";
import {Cog, Component} from "lucide-react";

const menuItems: SidebarMenuItemProps[] = [
    {menuContent: "Overview"},
    {menuContent: "Installation"},
    {
        menuContent: <><Cog/> Modules</>,
        nested: [
            {menuContent: "mFront"},
            {menuContent: "mFront UI"},
            {menuContent: "mFront CLI"},
        ]
    },
    {
        menuContent: "User Interface",
        group: [
            {
                menuContent: (<><Component/> Components</>),
                nested: [
                    {menuContent: "Button"}
                ]
            }
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