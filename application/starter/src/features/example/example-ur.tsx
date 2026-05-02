import {loadPage, MRoute} from "mfront";


const allPage = loadPage(() => import("./example-all-page"))
const gridExample = loadPage(() => import("./example-grid-page"))
const exampleInputAndFormPage = loadPage(() => import("./example-input-and-form-page"))

const UI_BASE_URL = "/example"
export default class ExampleUr {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
        grid: `${UI_BASE_URL}/grid`,
        inputAndForm: `${UI_BASE_URL}/input-and-form`,
    }

    static registerRoute(route: MRoute): void {
        route.addPublicRoute({url: this.ui.index, component: allPage})
        route.addPublicRoute({url: this.ui.grid, component: gridExample})
        route.addPublicRoute({url: this.ui.inputAndForm, component: exampleInputAndFormPage})
    }
}