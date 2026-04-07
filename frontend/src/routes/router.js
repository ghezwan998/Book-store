import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../components/About";
import allBooks from "../pages/books/allBooks";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {index: true, Component: Home},
            {path: "/about", Component: About},
            {path: "/books", Component: allBooks},
        ]
    }
])

export default router;