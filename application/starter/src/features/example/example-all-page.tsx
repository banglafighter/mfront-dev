import {toast} from "mfront-ui";

export default function ExampleAllPage() {
    return (
        <>
            <button onClick={() => {
                toast({
                    message: "Bismillah Message",
                    type: "error",
                    position: "bottomRight",
                    transition: "flip"
                })
            }}>Show tost
            </button>
        </>
    )
}