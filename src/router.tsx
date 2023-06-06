import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Page from "./pages/Page";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/page", element: <Page /> },
]);

export default router;
