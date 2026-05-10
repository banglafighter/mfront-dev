import {useAppContext, useRouteRequest} from "mfront";

export default function BookDetailsPage() {
    const {urlParams} = useRouteRequest()
    const config = useAppContext((context) => context.config);
    console.log(urlParams)
    return (
        <>
            Details Page <br/>
            Config from env: {config.apiBaseUrl}
        </>
    )
}