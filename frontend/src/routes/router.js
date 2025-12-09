import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {index: true, Component: Home},
            {path: "/about", Component: About}
        ]
    }
])

export default router;