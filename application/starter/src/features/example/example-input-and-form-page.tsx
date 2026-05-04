import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubTitle,
    CardTitle,
    Grid,
    Input,
    InputField,
    InputFrame, useFieldEngine
} from "mfront-ui";

export default function ExampleInputAndFormPage() {
    const engine = useFieldEngine()
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
                labelNext={"Forgot Password?"}
                element={(labelKey: string) => (
                    <Input id={labelKey} type={"text"} name={"firstName"}/>
                )}
            />

            <InputField
                name={"lastName"}
                label={"Last Name"}
                className={"mt-4"}
                required={true}
                errorText={"Please enter your last name"}
                placeholder={"Last Name"}
                type={"text"}
            />


            <Card className={"mt-4"}>
                <CardHeader>
                    <CardTitle>This Example Form</CardTitle>
                    <CardSubTitle>Please fill information to help us</CardSubTitle>
                </CardHeader>
                <CardBody>
                    <Grid cols={12} gap={3}>
                        <InputField name={"firstName"} type={"text"} label={"First Name"} colSpan={6} required={true} engine={engine}/>
                        <InputField name={"lastName"} type={"text"} label={"Last Name"} colSpan={6} engine={engine}/>
                        <InputField name={"email"} type={"text"} label={"Email"} colSpan={6} required={true} engine={engine}/>
                        <InputField name={"password"} type={"text"} label={"Password"} colSpan={6} required={true} engine={engine}/>
                    </Grid>
                </CardBody>
                <CardFooter className={"flex justify-end gap-2"}>
                    <Button variant={"outline"}>Cancel</Button>
                    <Button variant={"primary"} onClick={()=>{console.log(engine.getFieldValues())}}>Submit</Button>
                </CardFooter>
            </Card>



        </div>
    )
}