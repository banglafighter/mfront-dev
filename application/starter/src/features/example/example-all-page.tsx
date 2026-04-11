import {Button, Separator, toast} from "mfront-ui";
import {ArrowUpIcon, CircleFadingArrowUpIcon} from "lucide-react";

export default function ExampleAllPage() {
    return (
        <div className={"m-4"}>
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

                {/*<Button variant="outline">*/}
                {/*    <Spinner data-icon="inline-start"/>*/}
                {/*    Generating*/}
                {/*</Button>*/}


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