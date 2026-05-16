import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubTitle,
    CardTitle, CheckField, FieldGroup, FileField,
    Grid,
    Input,
    InputField,
    InputFrame, SelectField, Textarea, useFieldEngine
} from "mfront-ui";
import FieldGeneratorInputView from "./input/field-generator-input-view";
import {CopyIcon, Eye, FileCodeIcon} from "lucide-react";

export const countryOptions = [
    {label: "Bangladesh", value: "BD"},
    {label: "Pakistan", value: "PK"},
    {label: "India", value: "IN"},
    {label: "United States", value: "US"},
    {label: "United Kingdom", value: "GB"},
    {label: "Canada", value: "CA"},
    {label: "Australia", value: "AU"},
    {label: "Germany", value: "DE"},
    {label: "France", value: "FR"},
    {label: "Japan", value: "JP"},
    {label: "China", value: "CN"},
    {label: "South Korea", value: "KR"},
    {label: "Turkey", value: "TR"},
    {label: "Russia", value: "RU"},
    {label: "Saudi Arabia", value: "SA"},
    {label: "United Arab Emirates", value: "AE"},
];

export default function ExampleInputAndFormPage() {
    const engine = useFieldEngine()
    return (
        <div className={"m-4"}>

            <CheckField
                type={"checkbox"}
                label={"Accept terms and conditions"}
                hintsText={"By clicking this checkbox, you agree to the terms and conditions."}
                name={"profile"}
                className={"mt-4 mb-4"}
                required={true}
                isError={false}
            />

            <CheckField
                type={"switch"}
                label={"Accept terms and conditions"}
                hintsText={"By clicking this checkbox, you agree to the terms and conditions."}
                name={"profile"}
                className={"mt-4 mb-4"}
                required={true}
                isError={false}
            />


            <FileField
                label={"Profile"}
                name={"profile"}
                className={"mt-4 mb-4"}
                required={true}
                isError={false}
            />


            <FieldGeneratorInputView/>

            <div className={"mt-4"}>
                <SelectField
                    options={countryOptions}
                    labelKey={"label"}
                    valueKey={"value"}
                    name={"country"}
                    label={"Country"}
                    required={true}
                    multiple={true}
                    engine={engine}
                />
            </div>

            <FieldGroup
                className={"mt-4 mb-4"}
                groupType={"text"}
                name={"fieldGroup"}
                label={"URL"}
                startOrTopItems={
                    [{itemType: "text", content: "https://"}]
                }
            />

            <FieldGroup
                className={"mt-4 mb-4"}
                groupType={"text"}
                name={"password"}
                label={"Password"}
                endOrBottomItems={
                    [{itemType: "node", content: <Eye/>}]
                }
            />

            <FieldGroup
                className={"mt-4 mb-4"}
                groupType={"textarea"}
                name={"script"}
                label={"Script"}
                startOrTopItems={
                    [
                        {itemType: "node", content: <FileCodeIcon className="text-muted-foreground"/>},
                        {itemType: "text", content: "script.js"},
                        {itemType: "node", content: (<div className={"ml-auto flex gap-1"}><Button variant={"ghost"} size={"iconSm"}><CopyIcon/></Button></div>)}
                    ]
                }
            />


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

            <InputFrame
                label={"Address"}
                className={"mt-4"}
                required={true}
                errorText={"Please enter address"}
                element={(labelKey: string) => (
                    <Textarea id={labelKey} name={"address"}/>
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