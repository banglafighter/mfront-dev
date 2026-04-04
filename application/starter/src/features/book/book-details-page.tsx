import {useAppContext, useRouteRequest} from "mfront";

export default function BookDetailsPage() {
    const {urlParams} = useRouteRequest()
    const config = useAppContext((state) => state.config);
    console.log(urlParams)
    return (
        <>
            Details Page <br/>
            Config from env: {config.apiBaseUrl}
        </>
    )
}