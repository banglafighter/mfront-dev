import {Button, Sidebar, SidebarContent, SidebarProvider, SidebarToggler} from "mfront-ui"
import {useState} from "mfront";

export default function ExampleSitePage() {
    const [isOpen, toggleOpen] = useState(true)
    return (
        <>
            <SidebarProvider >
                <Sidebar/>
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