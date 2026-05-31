import {
    Button,
    ButtonGroup,
    Card,
    CardAction, CardBody, CardFooter,
    CardHeader,
    CardSubTitle,
    CardTitle,
    Loader, SelectField,
    Separator,
    toast
} from "mfront-ui";
import {
    ArrowUpIcon,
    Loader as LoaderIcon,
    CircleFadingArrowUpIcon,
    LoaderPinwheel,
    Move,
    RefreshCcw,
    ArrowBigLeft, ArrowBigRight, Ellipsis
} from "lucide-react";
import {countryOptions} from "./example-input-and-form-page";
import {mcRouterUseNavigate, mcRouterUseNavigation} from "mfront-core";
import ExampleUr from "./example-ur";
import {useAppContext, useRouteNav} from "mfront";

function BasicCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardSubTitle>Card Sub Title</CardSubTitle>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardBody>
                <p>Card Body</p>
            </CardBody>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}

export default function ExampleAllPage() {
    const {navigate} = useRouteNav()
    const startLoading = useAppContext((state) => state.startLoading)
    const stopLoading = useAppContext((state) => state.stopLoading)

    const handleLoading = async () => {
        startLoading()
        await new Promise((resolve) => setTimeout(resolve, 5000))
        stopLoading()
    }

    return (
        <div className={"m-4"}>


            <Button onClick={handleLoading}>
                Show Loader
            </Button>


            <Button onClick={() => {navigate(ExampleUr.ui.sitePage)}}>
                Navigate
            </Button>

            <BasicCard/>
            <Separator className={"mt-5 mb-5"}/>
            <div className="flex flex-wrap items-center gap-2 md:flex-row">

                <Button variant="primary">Primary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="success">Success</Button>
                <Button variant="link">Link</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="info">Info</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="secondary">Secondary</Button>

                <Button variant="outline" size="icon"> <ArrowUpIcon/> </Button>
                <Button variant="primary" size="icon"> <ArrowUpIcon/> </Button>
                <Button variant="danger" size="icon"> <ArrowUpIcon/> </Button>

                <Button variant="primary">Size primary</Button>
                <Button variant="primary" size={"lg"}>Size lg</Button>
                <Button variant="primary" size={"sm"}>Size sm</Button>
                <Button variant="primary" size={"xs"}>Size xs</Button>

                <Button variant="outline" size="iconXs"> <CircleFadingArrowUpIcon/> </Button>
                <Button variant="outline" size="iconSm"> <CircleFadingArrowUpIcon/> </Button>
                <Button variant="outline" size="iconLg"> <CircleFadingArrowUpIcon/> </Button>

                <Button variant="outline" size="sm">
                    <CircleFadingArrowUpIcon/> New Branch
                </Button>

                <Button variant="danger" size="icon" className="rounded-full">
                    <ArrowUpIcon/>
                </Button>

                <Separator/>

                <ButtonGroup>
                    <Button variant="outline">Archive</Button>
                    <Button variant="outline">Report</Button>
                </ButtonGroup>

                <ButtonGroup orientation={"vertical"}>
                    <Button variant="outline">Archive</Button>
                    <Button variant="outline">Report</Button>
                </ButtonGroup>

                <ButtonGroup orientation={"vertical"}>
                    <Button variant="danger">Danger</Button>
                    <Button variant="success">Success</Button>
                </ButtonGroup>

                <ButtonGroup orientation={"horizontal"}>
                    <Button variant="danger">Danger</Button>
                    <Button variant="success">Success</Button>
                </ButtonGroup>

                <Button variant="outline">
                    <Loader size={"default"} />
                    Generating
                </Button>



                <Loader size={"xs"} speed={.5} icon={Move}/>
                <Loader size={"sm"} speed={1} icon={LoaderIcon}/>
                <Loader size={"default"} speed={2} icon={LoaderPinwheel}/>
                <Loader size={"md"} speed={3} icon={RefreshCcw} direction={"alternate"}/>
                <Loader size={"lg"} speed={4} icon={LoaderPinwheel} direction={"reverse"}/>
                <Loader size={"xl"} speed={5} icon={LoaderPinwheel}/>
                <Loader size={"xxl"} speed={5} icon={LoaderIcon} direction={"reverse"}/>


                <Button onClick={() => {
                    toast({
                        message: "Bismillah Message",
                        type: "error",
                        transition: "flip",
                        position: "bottom"
                    })
                }}>
                    Show tost
                </Button>


            </div>
            <div className={"flex items-end gap-2 mt-4"}>
                <SelectField
                    options={[{"label": 10, value: 10}, {"label": 20, value: 20}, {"label": 50, value: 50}, {"label": 100, value: 100}]}
                    labelKey={"label"}
                    valueKey={"value"}
                    name={"country"}
                    className={"w-15"}
                    showClear={false}
                />
                <ButtonGroup orientation={"horizontal"} className={"h-8"}>
                    <Button variant="outline" className={"h-8"}><ArrowBigLeft/></Button>
                    <Button variant="outline" className={"h-8"}>1</Button>
                    <Button variant="primary" disabled={true} className={"h-8"}>2</Button>
                    <Button variant="outline" className={"h-8"}>3</Button>
                    <Button variant="outline" className={"h-8"}><Ellipsis/></Button>
                    <Button variant="outline" className={"h-8"}>45</Button>
                    <Button variant="outline" className={"h-8"}>48</Button>
                    <Button variant="outline" className={"h-8"}>50</Button>
                    <Button variant="outline" className={"h-8"}><ArrowBigRight/></Button>
                </ButtonGroup>
            </div>

        </div>
    )
}