import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubTitle,
    CardTitle, FieldGenerator,
    useFieldEngine
} from "mfront-ui";
import {type WebFieldGroupProps, WebFieldSpec} from "mmcore-ui";
import {AtSign, Eye, EyeOff, Phone, Search} from "lucide-react";
import {type UINode, useRef} from "mfront";

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


export default function FieldGeneratorInputView() {
    const engine = useFieldEngine()
    const hidePassword = useRef(false)

    const togglePassword = () => {
        let spec = engine.getSpec<WebFieldGroupProps>("password")
        if (!spec) {
            return
        }

        if (hidePassword.current) {
            spec.type = "text"
            hidePassword.current = false
        } else {
            spec.type = "password"
            hidePassword.current = true
        }
        spec.endOrBottomItems = getPasswordIcon()
        engine.updateInputFieldSpec(spec, true)
    }

    const getPasswordIcon = () => {
        let passwordIcon: UINode =  <Eye/>
        if (hidePassword.current) {
            passwordIcon =  <EyeOff/>
        }
        return [{itemType: "node", content: (<Button onClick={togglePassword} variant={"ghost"} size={"iconSm"}>{passwordIcon}</Button>)}]
    }

    engine.registerFields((spec: WebFieldSpec) => {
        spec.text({name: "name", label: "Name", required: true, colSpan: 4, errorText: "Please enter your name"})
        spec.text({name: "fatherName", label: "Father name", colSpan: 4})
        spec.text({
            name: "motherName",
            label: "Mother name",
            required: true,
            colSpan: 4,
            errorText: "Please enter your mother name",
        })

        spec.text({
            name: "password",
            label: "Custom Password",
            required: true,
            colSpan: 4,
            errorText: "Please enter your password",
            endOrBottomItems: getPasswordIcon()
        })

        spec.password({
            name: "systemPassword",
            label: "System Password",
            required: true,
            colSpan: 4,
            errorText: "Please enter your password",
        })

        spec.email({
            name: "email",
            label: "Email Address",
            required: true,
            colSpan: 4,
            errorText: "Please enter your email",
            startOrTopItems: [
                {itemType: "node", content: <AtSign/>},
            ]
        })

        spec.text({
            name: "phone",
            label: "Phone Number",
            colSpan: 4,
            startOrTopItems: [
                {itemType: "node", content: <Phone/>},
            ]
        })

        spec.text({
            name: "search",
            label: "Search",
            colSpan: 4,
            startOrTopItems: [
                {itemType: "node", content:  <Search />},
            ]
        })


        spec.text({
            name: "website",
            label: "Website",
            colSpan: 4,
            startOrTopItems: [{itemType: "text", content: "https://www."}],
            endOrBottomItems: [{itemType: "text", content: ".com"}]
        })

        spec.select({
            placeholder: "Select country",
            label: "Select country",
            name: "country",
            options: countryOptions,
            labelKey: "label",
            valueKey: "value",
            colSpan: 4,
            required: true,
            errorText: "Please select country",
        })

        spec.textarea({name: "address", label: "Address", colSpan: 12})
        return spec
    })

    return (
        <>
            <Card className={"mt-4 mb-4"}>
                <CardHeader>
                    <CardTitle>Field Generator Example</CardTitle>
                    <CardSubTitle>Fields are generated from definition</CardSubTitle>
                </CardHeader>
                <CardBody>
                    <FieldGenerator engine={engine} cols={12} gap={3}/>
                </CardBody>
                <CardFooter className={"flex justify-end gap-2"}>
                    <Button variant={"outline"}>Cancel</Button>
                    <Button variant={"primary"} onClick={() => {
                        console.log(engine.validateRegisterFields())
                    }}>Submit</Button>
                </CardFooter>
            </Card>
        </>
    )
}