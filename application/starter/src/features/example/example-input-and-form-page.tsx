import {InputFrame} from "mfront-ui";

export default function ExampleInputAndFormPage() {
    return (
        <div className={"m-4"}>
            <InputFrame
                label={"Input with label"}
                required={true}
                element={(labelKey: string) => ("All Input Here")}
            />
        </div>
    )
}