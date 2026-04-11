import {Button, toast} from "mfront-ui";

export default function ExampleAllPage() {
    return (
        <>
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
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