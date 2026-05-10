import {Sidebar, SidebarContent, SidebarProvider, SidebarToggler} from "mfront-ui";

export default function ExampleSitePage() {
    return (
        <>
            <SidebarProvider>
                <Sidebar/>
                <SidebarContent>
                    <SidebarToggler/>

                    Site Content Listed Here

                </SidebarContent>
                Site Provider Working Now
            </SidebarProvider>
        </>
    )
}