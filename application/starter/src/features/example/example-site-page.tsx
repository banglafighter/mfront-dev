import {Sidebar, SidebarContent, SidebarProvider, SidebarToggler} from "mfront-ui";

export default function ExampleSitePage() {
    return (
        <>
            <SidebarProvider>
                <Sidebar/>
                <SidebarContent>
                    <SidebarToggler/>
                </SidebarContent>
            </SidebarProvider>
            Example Site Page
        </>
    )
}