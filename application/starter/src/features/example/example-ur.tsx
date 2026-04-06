import {loadPage, MRoute} from "mfront";


const allPage = loadPage(() => import("./example-all-page"))

const UI_BASE_URL = "/example"
export default class ExampleUr {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
    }

    static registerRoute(route: MRoute): void {
        route.addPublicRoute({url: this.ui.index, component: allPage})
    }
}