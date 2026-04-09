import {Button, toast} from "mfront-ui";

export default function ExampleAllPage() {
    return (
        <>
            <Button type={"button"}>
                Button
            </Button>
            <button onClick={() => {
                toast({
                    message: "Bismillah Message",
                    type: "error",
                    transition: "flip"
                })
            }}>Show tost
            </button>
        </>
    )
}