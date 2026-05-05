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
import {Eye, EyeOff} from "lucide-react";
import {type UINode, useRef} from "mfront";


export default function FieldGeneratorInputView() {
    const engine = useFieldEngine()
    const hidePassword = useRef(true)

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
        spec.endOrButtonItems = getPasswordIcon()
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
        spec.password({
            name: "password",
            label: "Password",
            required: true,
            colSpan: 4,
            errorText: "Please enter your password",
            endOrButtonItems: getPasswordIcon()
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