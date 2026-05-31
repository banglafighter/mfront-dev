import {Loader, ToastBox, type UIAdapterData} from "mfront-ui";
import {MAdapter, type UINode, useAppContext} from "mfront";
import {DefaultUIImplementation} from "mfront-default-ui";
import {LoaderPinwheel} from "lucide-react";
import type {HTTPClient} from "mfront-core";
import {AxiosHTTPClient} from "mfront-default-libs";

function CentralLoader() {
    const isLoading = useAppContext((context) => context.loadingCount > 0)
    if (!isLoading) {
        return null
    }
    return (
        <div className="fixed inset-0 z-[9999999] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30"/>
            <div className="relative">
                <Loader
                    size="md"
                    speed={3}
                    icon={LoaderPinwheel}
                />
            </div>
        </div>
    )
}

export default class AppAdapter extends MAdapter {
    setCentralUI(): UINode {
        return (
            <>
                <CentralLoader/>
                <ToastBox/>
            </>
        )
    }

    setSuspense(): UINode {
        return (
            <div className="flex min-h-screen w-full items-center justify-center">
                <Loader size="xl" speed={3} icon={LoaderPinwheel}/>
            </div>
        )
    }

    setUIAdapter(): UIAdapterData {
        return DefaultUIImplementation;
    }

    setHTTPClient(): HTTPClient {
        return AxiosHTTPClient;
    }

}