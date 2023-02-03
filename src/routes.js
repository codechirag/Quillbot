import Discover from "./pages/Discover/Discover";

const routes = [
    {
        path: '/',
        component: <Discover />,
        authenticate: false,
        exact: true
    }
]

export default routes;