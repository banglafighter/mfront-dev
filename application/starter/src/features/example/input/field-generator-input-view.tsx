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
import {WebFieldSpec} from "mmcore-ui";


export default function FieldGeneratorInputView() {
    const engine = useFieldEngine()
    engine.registerFields((spec: WebFieldSpec) => {
        spec.text({name: "name", label: "Name", required: true, colSpan: 4, errorText: "Please enter your name"})
        spec.text({name: "fatherName", label: "Father name", colSpan: 4})
        spec.text({name: "motherName", label: "Mother name", required: true, colSpan: 4, errorText: "Please enter your mother name"})
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