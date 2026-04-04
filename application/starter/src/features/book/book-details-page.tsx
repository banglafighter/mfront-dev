import {useRouteRequest} from "mfront";

export default function BookDetailsPage() {
    const {urlParams} = useRouteRequest()
    console.log(urlParams)
    return (
        <>
            Details Page
        </>
    )
}