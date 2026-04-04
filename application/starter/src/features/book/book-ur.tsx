import {loadPage, MRoute} from "mfront";


const tablePage = loadPage(() => import("./book-table-page"))
const detailsPage = loadPage(() => import("./book-details-page"))

const UI_BASE_URL = "/book"
export default class BookUr {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
        details: UI_BASE_URL + "/details/",
        detailsWithParam: UI_BASE_URL + "/details/:record-id",
    }

    static registerRoute(route: MRoute): void {
        route.addPublicRoute({url: this.ui.index, component: tablePage})
        route.addPublicRoute({url: this.ui.detailsWithParam, component: detailsPage})
    }
}