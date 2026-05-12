import type {WebDropdownProps} from "mmcore-ui";
import {Button, DialogGenerator, Dropdown, useDialogEngine} from "mfront-ui";
import {CreditCardIcon, SettingsIcon, SquarePen, UserIcon} from "lucide-react";

const navigation: WebDropdownProps = {
    trigger: <Button variant="outline"><SquarePen/></Button>,
    items: [
        {nameContent: "Home", action: (data: any) => console.log("Home")},
        {nameContent: "About", separator: true},
        {
            nameContent: "Team",
            group: [
                {nameContent: "Members", action: (data: any) => console.log("Members")},
                {nameContent: "New Members", action: (data: any) => console.log("Members")},
                {nameContent: "Old Members", action: (data: any) => console.log("Members")},
            ],
            separator: true
        },
        {
            nameContent: "Settings",
            action: (data: any) => console.log("Settings"),
            nested: [
                {nameContent: "Profile", action: (data: any) => console.log("Profile"), shortcut: "⇧⌘P"},
                {nameContent: "Billing", action: (data: any) => console.log("Billing"), shortcut: "⌘B"},
                {nameContent: "Team", action: (data: any) => console.log("Team")},
                {nameContent: "Subscription", action: (data: any) => console.log("Subscription")},
                {nameContent: "Keyboard shortcuts", action: (data: any) => console.log("Keyboard shortcuts")},
                {nameContent: "Theme", action: (data: any) => console.log("Theme")},
                {nameContent: "Language", action: (data: any) => console.log("Language")},
                {nameContent: "Notifications", action: (data: any) => console.log("Notifications")},
                {nameContent: "Advanced", action: (data: any) => console.log("Advanced")},
            ],
            separator: true
        },
        {nameContent: (<><UserIcon/> Profile</>)},
        {nameContent: (<><CreditCardIcon/> Billing</>)},
        {nameContent: (<><SettingsIcon/> Settings</>)},
    ]
}

export default function ExampleComponent() {
    const dialog = useDialogEngine()

    const dialogContent = () => {
        return (
            <>Content</>
        )
    }

    return (
        <div className={"m-4 flex gap-3"}>
            <div className={"mt-4"}>
                <Button variant={"primary"} onClick={() =>
                    dialog.open({
                        title: "Title " + Math.floor(Math.random() * 1000),
                        slideFrom: "right",
                        subTitle: "SubTitle"
                    })
                }>
                    Open Dialog
                </Button>
                <DialogGenerator engine={dialog} body={dialogContent()} type={"drawer"}/>
            </div>
            <div className={"mt-4"}>
                <Dropdown {...navigation}/>
            </div>
        </div>
    )
}