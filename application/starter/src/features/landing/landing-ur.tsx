import {loadPage, MRoute} from "mfront";


const welcomePage = loadPage(() => import("./welcome-page"))

const UI_BASE_URL = "/"
export default class LandingUr {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
    }

    static registerRoute(route: MRoute): void {
        route.addPublicRoute({url: this.ui.index, component: welcomePage})
    }
}