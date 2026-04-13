import {
    Button,
    ButtonGroup,
    Card,
    CardAction, CardBody, CardFooter,
    CardHeader,
    CardSubTitle,
    CardTitle,
    Loader,
    Separator,
    toast
} from "mfront-ui";
import {ArrowUpIcon, Loader as LoaderIcon, CircleFadingArrowUpIcon, LoaderPinwheel, Move, RefreshCcw} from "lucide-react";
import GridSystemRawView from "./grid-system-raw-view";

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
    return (
        <div className={"m-4"}>

            <GridSystemRawView/>

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
                        transition: "flip"
                    })
                }}>
                    Show tost
                </Button>
            </div>
        </div>
    )
}