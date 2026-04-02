import {MRoute, type LayoutComponent, type PageComponent} from "mfront";


export default class AppRoute extends MRoute {

    setPublicLayout(): LayoutComponent {
        throw new Error("Method not implemented.");
    }

    setPrivateLayout(): LayoutComponent {
        throw new Error("Method not implemented.");
    }

    setDefaultLayout(): LayoutComponent {
        throw new Error("Method not implemented.");
    }

    setNotFoundPage(): PageComponent {
        throw new Error("Method not implemented.");
    }

    registerRoute(mRoute: MRoute): void {
        throw new Error("Method not implemented.");
    }

}