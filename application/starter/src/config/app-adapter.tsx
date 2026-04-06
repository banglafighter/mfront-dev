import {ToastBox, type UIAdapterData} from "mfront-ui";
import {MAdapter, type UINode} from "mfront";
import {DefaultUIImplementation} from "mfront-default-ui";

export default class AppAdapter extends MAdapter {
    setCentralUI(): UINode {
        return (
            <>
                <ToastBox/>
            </>
        )
    }
    setSuspense(): UINode {
        return (<div>Loading page...</div>)
    }

    setUIAdapter(): UIAdapterData {
        return DefaultUIImplementation;
    }

}