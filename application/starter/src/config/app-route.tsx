import {MRoute, type LayoutComponent, type PageComponent} from "mfront";
import DefaultLayout from "../layout/default-layout";
import PrivateLayout from "../layout/private-layout";
import PublicLayout from "../layout/public-layout";
import NotFoundPage from "../common/not-found-page";


export default class AppRoute extends MRoute {

    setPublicLayout(): LayoutComponent {
        return PublicLayout
    }

    setPrivateLayout(): LayoutComponent {
        return PrivateLayout
    }

    setDefaultLayout(): LayoutComponent {
        return DefaultLayout
    }

    setNotFoundPage(): PageComponent {
        return NotFoundPage
    }

    registerRoute(mRoute: MRoute): void {
        throw new Error("Method not implemented.");
    }

}