import {Input, InputField, InputFrame} from "mfront-ui";

export default function ExampleInputAndFormPage() {
    return (
        <div className={"m-4"}>
            <InputFrame
                label={"Input with label"}
                 labelNext={"Forgot Password?"}
                required={true}
                element={(labelKey: string) => ("All Input Here, some other text, long text")}
            />

            <InputFrame
                label={"First Name"}
                className={"mt-4"}
                required={true}
                hintsText={"Please enter your first name"}
                element={(labelKey: string) => (
                    <Input id={labelKey} type={"text"}/>
                )}
            />

            <InputField
                label={"Last Name"}
                className={"mt-4"}
                required={true}
                errorText={"Please enter your last name"}
                placeholder={"Last Name"}
                type={"text"}
            />


        </div>
    )
}