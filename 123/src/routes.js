import Admin from "./pages/Admin";
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: < Admin />
    }

]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },
    {
        path: HOME_ROUTE,
        element: <Home />
    }
]