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
import {AtSign, Eye, EyeOff} from "lucide-react";
import {type UINode, useRef} from "mfront";


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

        spec.password({
            name: "systemPassword",
            label: "System Password",
            required: true,
            colSpan: 4,
            errorText: "Please enter your password",
        })

        spec.text({
            name: "website",
            label: "Website",
            colSpan: 4,
            startOrTopItems: [{itemType: "text", content: "https://www."}],
            endOrBottomItems: [{itemType: "text", content: ".com"}]
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