import {Button, toast} from "mfront-ui";

export default function ExampleAllPage() {
    return (
        <>
            <div className="flex flex-wrap items-center gap-2 md:flex-row">

                <Button variant="primary">Primary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="success">Success</Button>
                <Button variant="link">Link</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="info">Info</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="secondary">Secondary</Button>

                <Button type={"button"} variant={"danger"}>
                    Button
                </Button>

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
        </>
    )
}