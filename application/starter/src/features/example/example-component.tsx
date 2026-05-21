import {type WebDropdownProps, type WebTabProps} from "mmcore-ui";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardSubTitle,
    CardTitle,
    DialogGenerator,
    Dropdown, Tab,
    useDialogEngine,
    Image, Popover
} from "mfront-ui";
import {CreditCardIcon, OctagonAlert, SettingsIcon, SquarePen, UserIcon} from "lucide-react";
import ProductDefault from "./assets/images/product-default.png"
import Wallpaper from "./assets/images/wallpaper.jpg"
import {_t, activeLanguage, changeLanguage, loadTranslation, useI18n} from "mfront";

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

const tabData: WebTabProps = {
    items: [
        {labelContent: "Overview", tabId: "overview", component: <Overview/>},
        {labelContent: "Analytics", tabId: "analytics", component: <Analytics/>},
        {labelContent: "Reports", tabId: "reports", component: <Reports/>},
    ]
}

export const BANGLA = {
    "name" : "নাম",
}

export const ENGLISH = {
    "name" : "Name",
};


export default function ExampleComponent() {
    const drawerEngine = useDialogEngine()
    const dialog = useDialogEngine()

    const dialogContent = () => {
        return (
            <>Content</>
        )
    }

    loadTranslation("en", ENGLISH)
    loadTranslation("bn", BANGLA)

    let changeToLanguage: string = "en"
    if (activeLanguage() === "en") {
        changeToLanguage = "bn"
    }

    return (
        <>
            <div className={"m-4 flex gap-3"}>
                <div className={"font-large"}>Active Language {_t(activeLanguage())}</div>
                <div className={"font-large"}>Change Language {_t("name")}</div>
                <Button variant={"outline"} onClick={() =>{changeLanguage(changeToLanguage)}}>
                    {_t("Change Language")}
                </Button>
            </div>
            <div className={"m-4 flex gap-3"}>
                <Popover
                    trigger={<Button variant="primary"><SquarePen/></Button>}
                    title={"Popover Title"}
                    subTitle={"Popover Sub Title here will be specified"}
                    body={<>Body</>}
                />
            </div>
            <div className={"m-4 flex gap-3"}>
                <Image avatar={"default"} fallback={"TM"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
                <Image avatar={"large"} fallback={"TM"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
                <Image avatar={"large"} fallback={"TM"} alt={"Profile"} shape={"circle"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
                <Image
                    thumb={"product"}
                    fallback={"P"}
                    alt={"Product"}
                    shape={"circle"}
                    src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
                <Image
                    thumb={"product"}
                    fallback={"P"}
                    alt={"Product"}
                    shape={"circle"}
                    src={"https://wrong-url.com/image.jpg"}/>

                <Image
                    thumb={"product"}
                    fallback={"P"}
                    fallbackSrc={ProductDefault}
                    alt={"Product"}
                    shape={"square"}
                    src={"https://wrong-url.com/image.jpg"}/>

                <Image
                    className={"w-64 h-24"}
                    fallback={"P"}
                    fallbackSrc={ProductDefault}
                    alt={"Product"}
                    shape={"square"}
                    src={Wallpaper}/>

            </div>

            <div className={"m-4 flex gap-3"}>
                <Image
                    className={"w-64"}
                    ratio={"9/12"}
                    fallback={"P"}
                    fallbackSrc={ProductDefault}
                    alt={"Product"}
                    shape={"square"}
                    src={Wallpaper}/>
            </div>

            <Tab {...tabData} defaultTabId={"reports"} orientation={"horizontal"} selectType={"line"} className={"mb-4"}/>
            <Tab {...tabData} defaultTabId={"reports"} orientation={"horizontal"} selectType={"default"} className={"mb-4"}/>
            <Tab {...tabData} defaultTabId={"overview"} orientation={"vertical"} selectType={"line"} className={"mb-4"}/>
            <Tab {...tabData} defaultTabId={"overview"} orientation={"vertical"} selectType={"default"} className={"mb-4"}/>



            <div className={"m-4 flex gap-3"}>
                <DialogGenerator engine={drawerEngine} body={dialogContent()} type={"drawer"}/>
                <DialogGenerator engine={dialog} body={dialogContent()} type={"dialog"}/>

                <Button variant={"primary"} onClick={() =>
                    dialog.open({
                        title: "Title " + Math.floor(Math.random() * 1000),
                        slideFrom: "top",
                        type: "dialog",
                        dialogSize: "large",
                        disableBlockClose: true,
                    })
                }>
                    Open Dialog
                </Button>

                <Button variant={"primary"} onClick={() =>
                    drawerEngine.open({
                        title: "Title " + Math.floor(Math.random() * 1000),
                        slideFrom: "right",
                    })
                }>
                    Open Drawer
                </Button>

                <Button variant={"outline"} onClick={() =>
                    dialog.confirm({
                        body: "Are you sure want to delete this?",
                        confirmButtonLabel: "Yes",
                        confirmButtonAction: (data: unknown) => {
                            alert("Confirmed")
                        }
                    })
                }>
                    Open Confirm
                </Button>

                <Button variant={"secondary"} onClick={() =>
                    dialog.confirm({
                        dialogSize: "small",
                        body: (
                            <div className={"mt-3 mb-3 flex"}>
                                <OctagonAlert className={"mr-3"}/>
                                Are you sure want to delete this?
                            </div>),
                        confirmButtonLabel: "Yes",
                        confirmButtonAction: (data: unknown) => {
                            alert("Confirmed")
                        },
                        footerActionButtons: [
                            {
                                label: "Delete all",
                                variant: "danger",
                                onClick: (data: unknown) => {
                                }
                            }
                        ]
                    })
                }>
                    Open Advanced Confirm
                </Button>

                <Dropdown {...navigation}/>
            </div>
        </>
    )
}


function Overview() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardSubTitle>
                    View your key metrics and recent project activity. Track progress
                    across all your active projects.
                </CardSubTitle>
            </CardHeader>
            <CardBody className="text-sm text-muted-foreground">
                You have 12 active projects and 3 pending tasks.
            </CardBody>
        </Card>
    )
}

function Analytics() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardSubTitle>
                    Track performance and user engagement metrics. Monitor trends and
                    identify growth opportunities.
                </CardSubTitle>
            </CardHeader>
            <CardBody className="text-sm text-muted-foreground">
                Page views are up 25% compared to last month.
            </CardBody>
        </Card>
    )
}

function Reports() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardSubTitle>
                    Generate and download your detailed reports. Export data in
                    multiple formats for analysis.
                </CardSubTitle>
            </CardHeader>
            <CardBody className="text-sm text-muted-foreground">
                You have 5 reports ready and available to export.
            </CardBody>
        </Card>
    )
}