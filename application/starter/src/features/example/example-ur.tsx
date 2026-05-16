import {loadPage, MRoute} from "mfront";


const allPage = loadPage(() => import("./example-all-page"))
const gridExample = loadPage(() => import("./example-grid-page"))
const exampleInputAndFormPage = loadPage(() => import("./example-input-and-form-page"))
const exampleComponent = loadPage(() => import("./example-component"))
const sitePage = loadPage(() => import("./example-site-page"))
const siteTable = loadPage(() => import("./example-table-page"))
const calendar = loadPage(() => import("./example-calendar-page"))

const UI_BASE_URL = "/example"
export default class ExampleUr {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
        grid: `${UI_BASE_URL}/grid`,
        inputAndForm: `${UI_BASE_URL}/input-and-form`,
        component: `${UI_BASE_URL}/component`,
        sitePage: `${UI_BASE_URL}/site`,
        siteTable: `${UI_BASE_URL}/table`,
        calendar: `${UI_BASE_URL}/calendar`,
    }

    static registerRoute(route: MRoute): void {
        route.addPublicRoute({url: this.ui.index, component: allPage})
        route.addPublicRoute({url: this.ui.grid, component: gridExample})
        route.addPublicRoute({url: this.ui.inputAndForm, component: exampleInputAndFormPage})
        route.addPublicRoute({url: this.ui.component, component: exampleComponent})
        route.addPublicRoute({url: this.ui.sitePage, component: sitePage})
        route.addPublicRoute({url: this.ui.siteTable, component: siteTable})
        route.addPublicRoute({url: this.ui.calendar, component: calendar})
    }
}